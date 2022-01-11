import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ACCOUNTS_URLS } from "../configuration/url.mocks";


@Injectable({
  providedIn: 'root'
})

export class HttpAccountsService {
    constructor (private http: HttpClient){}

    public getAccountsList(){
        return this.http.get(ACCOUNTS_URLS.ACCOUNTS_LIST);
    }


}