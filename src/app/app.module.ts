import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CinemaComponent} from "./cinema/cinema.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

//let AppRoutingModule;

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  bootstrap: [AppComponent],
  declarations: [],
  imports: [
    BrowserModule,

    AppComponent,
    CinemaComponent,
   // AppRoutingModule,
    HttpClientModule
  ],
  providers: []
})
export class AppModule {}
