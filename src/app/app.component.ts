import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RsvpService, RSVP } from './rsvp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rsvp-client';

  constructor(private rsvpSvc: RsvpService) { }

  rsvp(rsvpForm: NgForm) {
    console.log('>>>values:', rsvpForm.value);
    this.rsvpSvc.rsvp(rsvpForm.value as RSVP)
      .then(result => {
        console.log('result:', result);
        rsvpForm.resetForm();
      });
  }
}
