import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SearchService {
	constructor(private _http: HttpClient) {}

	getSearchDetails(params?: any): Observable<any> {
		return this._http.get('https://stackapi-server.herokuapp.com/api/v1/search', {params: params});
    }
}
