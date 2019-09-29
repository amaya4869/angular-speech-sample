import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SpeechGeneratorService } from '../speech-generator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-speech-view',
  templateUrl: './speech-view.component.html',
  styleUrls: ['./speech-view.component.scss']
})
export class SpeechViewComponent implements OnInit, OnDestroy {

  public speechList: string[] = [];
  public stateText = 'Stopping';

  private subject: Subscription;

  constructor(
    @Inject(SpeechGeneratorService) private speechRecognitionService = new SpeechGeneratorService()
  ) { }

  ngOnInit() {
    this.subject = this.speechRecognitionService.onSpeechRecognition.subscribe((str: string) => {
      this.speechList.push(str);
      console.log(this.speechList);
    });
  }

  ngOnDestroy() {
    this.subject.unsubscribe();
  }

  onClickStartButton() {
    this.speechRecognitionService.start();
    this.stateText = 'Starting';
  }

  onClickStopButton() {
    this.speechRecognitionService.stop();
    this.stateText = 'Stopping';
  }
}
