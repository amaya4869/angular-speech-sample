import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeechViewComponent } from './speech-view/speech-view.component';
import { SpeechGeneratorService } from './speech-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    SpeechViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SpeechGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
