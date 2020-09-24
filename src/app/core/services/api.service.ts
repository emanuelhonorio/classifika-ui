import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = environment.classifikaUrl;

  constructor(private http: HttpClient) {}

  sendRequestToApi() {
    return this.http.get(this.apiUrl);
  }
}
