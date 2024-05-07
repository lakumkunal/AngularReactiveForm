import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { Cityclass } from './cityclass';
import { reguserdata } from './reguserdata';
import { loginclass } from './loginclass';
import { catchError, tap } from 'rxjs/operators';
import { forgotmodel } from './forgot/forgotmodel';
import { JwtHelperService } from '@auth0/angular-jwt';




@Injectable({
  providedIn: 'root'
})
export class CityserviceService {
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
   storeToken(token: string) {
    localStorage.setItem('token', token);
   
  }


  // refreshToken():string | null{
  //   return localStorage.getItem('newToken');
  // }

  
  
  getCityById(intcityId: number): Observable<Cityclass> {
    const url = `${this.apiUrl}/${intcityId}`;
    return this.http.get<Cityclass>(url);
  }

  private apiUrl = 'https://localhost:7289/api/CityMaster';
  constructor(private http: HttpClient) { }

  getCity(): Observable<Cityclass[]> {
    return this.http.get<Cityclass[]>('https://localhost:7289/api/CityMaster/city');  
  }

  postCity(city: Cityclass): Observable<any> {
    return this.http.post<any>('https://localhost:7289/api/CityMaster/city', city);  
  }

  DeleteCity(intcityID: number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}/${intcityID}`); 
  }  

  UpdateCity(intCityID: number, updatedCityData: Cityclass): Observable<Cityclass> {
    const updateUrl = `${this.apiUrl}/${intCityID}`; 
    return this.http.put<Cityclass>(updateUrl, updatedCityData);  
  }

  registerUser(data:reguserdata):Observable<reguserdata>{
    return this.http.post<reguserdata>('https://localhost:7289/api/CityMaster/user',data);
  }

  // loginuser(data : loginclass):Observable<loginclass>
  // {
  //   debugger
  //   return this.http.post<loginclass>('https://localhost:7289/api/CityMaster/userLogin',data).pipe(tap((response: any) =>{
  //     debugger
  //     if(response && response.token)
  //     localStorage.setItem('jwttoken', response.token);
  //   })
  //   );
  // }

  // loginuser(data : loginclass): Observable<any> {
  //   debugger
  //   // var apiurl = this.url + "/login";

    
  //    var data1 = this.http.post<loginclass>('https://localhost:7289/api/CityMaster/userLogin',data).pipe().subscribe(
  //       tap((response: any) => {
  //         debugger
  //         if (response && response.token && response.refToken) {
  //           localStorage.setItem('token', response.token);
  //           localStorage.setItem('reftoken',response.refToken);
  //           // this.storetoken(response.token);
  //         }
  //       })
  //     );
  //     return data1;//.done( data1 ).fail( data1 );
  // }

  getcountrybystateid(id:number):Observable<any>{
    return this.http.get<any>('https://localhost:7289/api/CityMaster/getcountrybystate'+id);
  }

  getstate():Observable<any>{
    return this.http.get<any>('https://localhost:7289/api/CityMaster/state');
  }

  loginuser(data : loginclass):Observable<loginclass>
 {
   
 return this.http.post<loginclass>('https://localhost:7289/api/CityMaster/userLogin',data);
 }
 logout(): void {
  localStorage.removeItem('token'); 
 }
 forgot(data : forgotmodel):Observable<any>{
   return this.http.put<any>('https://localhost:7289/api/Forgot',data);
 }
//  getCountryByName(name:string): Observable<any>{
//    return this.http.get<Cityclass[]>('https://localhost:7289/api/CityMaster/CityByName?StrCityName=Ahmedabad'+name);
//  }
}

