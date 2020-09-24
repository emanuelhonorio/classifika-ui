import { LoadingScreenComponent } from "./components/loading-screen/loading-screen.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./interceptors/auth.interceptor";

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoadingScreenComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, LoadingScreenComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
