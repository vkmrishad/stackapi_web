import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SearchService {
	constructor(private _http: HttpClient) {}

	getSearchDetails(params?: any): Observable<any> {
		return this._http.get('http://127.0.0.1:8000/api/v1/search', {params: params});
    }
}