import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }

  sendEmail(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer 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");
    headers = headers.set("Content-Type", "application/json");
    return this._http.post("https://api.sendgrid.com/v3/mail/send", data, { headers });
  }
}
