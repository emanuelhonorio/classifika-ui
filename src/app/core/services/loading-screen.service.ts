import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoadingScreenService {
  public isLoading = false;

  constructor() {}
}
