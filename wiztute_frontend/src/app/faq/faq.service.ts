import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()

export class FAQService {
    public url;
    constructor(private _http: Http) {
        this.url = 'http://192.168.0.104:8000/faq/list';
    }


    getFaqs() {
        return this._http.get(this.url)
            .map((response) => {
                console.log(response.json());
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

}