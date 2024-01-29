import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { LoginComponent } from "./forms/login/login.component";

const routes: Routes = [
  { path: "*", redirectTo: "" },
  { path: "", component: IndexComponent },
  { path: "login", component: LoginComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: []
})

export class AppRoutingModule {}
