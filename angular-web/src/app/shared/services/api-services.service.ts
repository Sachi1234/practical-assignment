import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

/**
 * import services
 */
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  // Setting Headers for API Request
  private static setHeaders(headerList: any[]): HttpHeaders {
    let headersConfig: HttpHeaders = new HttpHeaders();
    headersConfig = headersConfig.append('Accept', 'application/json');
    headersConfig = headersConfig.append('Content-Type', 'application/json');
    // headersConfig = headersConfig.append('Access-Control-Allow-Origin', '*');
    if (headerList !== undefined) {
        headerList.forEach(header => {
            headersConfig = headersConfig.append(header.code, header.name);
        });
    }

    return headersConfig;
}

get(path: string, headers: any[]) {
  return this.http.get(`${path}`, {headers: ApiServicesService.setHeaders(headers)}).pipe(
      catchError(error => {
          throw error;
          console.log('error');
      }),
      map((res: Response) => res)
  );
}
}
