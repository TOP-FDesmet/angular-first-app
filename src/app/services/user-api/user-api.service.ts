import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import any = jasmine.any;

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
    private apiUrl: string = 'url'

    constructor(private http: HttpClient) {}

    getUsers() : Observable<any>[] {
        return this.http.get<any[]>{this.apiUrl}
    }
}
