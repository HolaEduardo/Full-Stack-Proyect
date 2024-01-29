import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import { IndexComponent } from "./index/index.component";
import { RegisterpageComponent } from "./registerpage/registerpage.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { AiadinComponent } from "../forms/aiadin/aiadin.component";
import { ArtisComponent } from "../forms/artis/artis.component";
import { AudioStreamComponent } from "../audio/audio-stream/audio-stream.component";
import { KolaboratorsComponent } from "../kolaborators/kolaborators.component";
import { KolaboratyModelComponent } from "../kolaboraty-model/kolaboraty-model.component";
import { SuiteComponent } from "../suite/suite.component";
import { RegisterComponent } from "../forms/register/register.component";
import { LoginComponent } from "../forms/login/login.component";
import { ContactFormComponent } from "../forms/contact-form/contact-form.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    IndexComponent,
    RegisterpageComponent,
    HeaderComponent,
    FooterComponent,
    AiadinComponent,
    ArtisComponent,
    AudioStreamComponent,
    KolaboratorsComponent,
    KolaboratyModelComponent,
    SuiteComponent,
    RegisterComponent,
    LoginComponent,
    ContactFormComponent,
  ],
  exports: [
    IndexComponent,
  ],
  providers: []
})
export class PagesModule {}
