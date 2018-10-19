import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

export interface RSVP {
    email: string;
    full_name: string;
    phone: string;
    attending: string;
    remarks?: string;
}
@Injectable()
export class RsvpService {
    constructor(private http: HttpClient) { }

    rsvp(info: RSVP): Promise<boolean> {
        const formData = new HttpParams()
            .set('email', info.email)
            .set('full_name', info.full_name)
            .set('phone', info.phone)
            .set('attending', info.attending)
            .set('remarks', info.remarks);

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        return (
            this.http.post<boolean>('/rsvps',
                formData.toString(),
                { headers: headers }
            ).toPromise()
                .then(() => true)
                .catch(() => false)
        );
    }
}
