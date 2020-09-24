import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { ApiService } from "./core/services/api.service";
import { LoadingScreenService } from "./core/services/loading-screen.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { retryWhen } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private $sendRequestToApi: Subscription;

  constructor(
    private apiService: ApiService,
    private loadingScreenService: LoadingScreenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.makeSureHerokuIsOn();
  }

  ngOnDestroy() {
    if (this.$sendRequestToApi) {
      this.$sendRequestToApi.unsubscribe();
    }
  }

  makeSureHerokuIsOn() {
    this.$sendRequestToApi = this.apiService
      .sendRequestToApi()
      .pipe(
        retryWhen((errors) =>
          errors.pipe(
            tap((error) => {
              if (error?.status === 0) {
                this.loadingScreenService.isLoading = true;
              }
            }),
            delay(3000)
          )
        )
      )
      .subscribe((a) => {
        if (this.loadingScreenService.isLoading) {
          this.loadingScreenService.isLoading = false;
          this.reloadComponent();
        }
      });
  }

  reloadComponent() {
    window.location.reload();
  }
}
