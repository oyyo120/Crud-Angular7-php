// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { patient } from  './patient';
// import { Observable } from  'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class ApiService {
//   PHP_API_SERVER = "http://127.0.0.1:8080";

//   constructor(private httpClient: HttpClient) {}

//   readPatient(): Observable<patient[]>{
//     return this.httpClient.get<patient[]>(`${this.PHP_API_SERVER}/api/read.php`);
//   }

//   createPatient(patient: patient): Observable<patient>{
//     return this.httpClient.post<patient>(`${this.PHP_API_SERVER}/api/create.php`, patient);
//   }

//   updatePatient(patient: patient){
//     return this.httpClient.put<patient>(`${this.PHP_API_SERVER}/api/update.php`, patient);
//   }

//   deletePatient(id: number){
//     return this.httpClient.delete<patient>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
//   }


// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8080";

  constructor(private httpClient: HttpClient) {

  }
  readPatient(): Observable<patient[]>{
    return this.httpClient.get<patient[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  createPatient(patient: patient): Observable<patient>{
    return this.httpClient.post<patient>(`${this.PHP_API_SERVER}/api/create.php`, patient);
  }
  updatePatient(patient: patient){
    return this.httpClient.put<patient>(`${this.PHP_API_SERVER}/api/update.php`, patient);
  }
  deletePatient(id: number){
    return this.httpClient.delete<patient>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }


}
