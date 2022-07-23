import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  emailFrom!: FormGroup;
  isformSubmited = false;

  constructor(private _emailService: EmailService) { }

  ngOnInit(): void {
    this.emailFrom = new FormGroup({
      email: new FormControl("shalini.ichha@gmail.com", [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required]),
      name: new FormControl("Testing", [Validators.required, Validators.pattern(/^([a-zA-Z])*$/)]),
      subject: new FormControl("Test message", [Validators.required]),
    })
  }

  emailAPIFormatter() {
    return {
      "personalizations": [
        {
          "to": [
            {
              "email": this.emailFrom.value.email
            }
          ]
        }
      ],
      "from": {
        "email": "kchawla1995@gmail.com"
      },
      "subject": "Your query has been submitted",
      "content": [
        {
          "type": "text/plain",
          "value": "Thanks for contacting Kartik Chawla \nWe will be replying you soon."
        }
      ]
    }
  }
  emailCallbackAPIFormatter() {
    return {
      "personalizations": [
        {
          "to": [
            {
              "email": "kchawla1995@gmail.com"
            }
          ]
        }
      ],
      "from": {
        "email": "kchawla1995@gmail.com"
      },
      "subject": this.emailFrom.value.subject,
      "content": [
        {
          "type": "text/plain",
          "value": `${this.emailFrom.value.email} Wrote \n ${this.emailFrom.value.message}`
        }
      ]
    }
  }
  sendEmail() {
    this.isformSubmited = true
    if (this.emailFrom.valid) {
      console.log(this.emailAPIFormatter());

      this._emailService.sendEmail(this.emailAPIFormatter()).pipe().subscribe(res => {
        this._emailService.sendEmail(this.emailCallbackAPIFormatter()).pipe().subscribe()

      })
    }

  }

}
