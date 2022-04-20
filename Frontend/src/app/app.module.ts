import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourtesyService } from './courtesy/services/courtesy.service';
import { CourtesyListComponent } from './courtesy/courtesy-list/courtesy-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourtesyDetailComponent } from './courtesy/courtesy-detail/courtesy-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CourtesyListComponent,
    NavbarComponent,
    CourtesyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [CourtesyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
