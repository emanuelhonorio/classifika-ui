import { LoadingScreenService } from "./../../services/loading-screen.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loading-screen",
  templateUrl: "./loading-screen.component.html",
  styleUrls: ["./loading-screen.component.scss"],
})
export class LoadingScreenComponent implements OnInit {
  constructor(public loadingScreenService: LoadingScreenService) {}

  ngOnInit() {}
}
