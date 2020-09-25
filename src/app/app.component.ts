import { Subscription } from "rxjs";
import { delay, tap, take } from "rxjs/operators";
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
    private loadingScreenService: LoadingScreenService
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
              if (!error.status || error.status === 404) {
                this.loadingScreenService.isLoading = true;
              } else if (this.loadingScreenService.isLoading) {
                this.loadingScreenService.isLoading = false;
                this.reloadComponent();
              }
            }),
            delay(5000)
          )
        )
      )
      .subscribe((a) => {});
  }

  reloadComponent() {
    window.location.reload();
  }
}
