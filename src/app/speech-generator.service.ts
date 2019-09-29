import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

@Injectable({
  providedIn: 'root'
})
export class SpeechGeneratorService {

  private speechRecognition: SpeechRecognition;

  private speechRecognitionEvent: Subject<string> = new Subject();
  public onSpeechRecognition = this.speechRecognitionEvent.asObservable();

  constructor() {
    this.initialize();
  }

  private initialize() {
    const {webkitSpeechRecognition} : IWindow = <IWindow>window;
    // this.speechRecognition = new SpeechRecognition();
    this.speechRecognition = typeof this.speechRecognition === "undefined" ? new webkitSpeechRecognition() : new SpeechRecognition;
    this.speechRecognition.continuous = true;
    this.speechRecognition.lang = 'ja-JP';
    this.speechRecognition.interimResults = true;

    this.speechRecognition.onresult = this.onResultSpeechRecognition;
    this.speechRecognition.onend = ((e) => this.start);
  }

  private onResultSpeechRecognition(event: SpeechRecognitionEvent) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        const str = event.results[i][0].transcript;
        this.speechRecognitionEvent.next(str);
      }
    }
  }

  public start() {
    this.speechRecognition.start();
  }

  public stop() {
    this.speechRecognition.stop();
  }
}
