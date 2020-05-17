import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { ListingsPageOneComponent } from './listings-page-one/listings-page-one.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlateContainerOneComponent } from './_elements/plate-container-one/plate-container-one.component';
import { LogoComponent } from './_elements/logo/logo.component';
import { AboveHeaderMessageComponent } from './_elements/above-header-message/above-header-message.component';
import { HeaderMenuComponent } from './_elements/header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    ListingsPageOneComponent,
    PlateContainerOneComponent,
    LogoComponent,
    AboveHeaderMessageComponent,
    HeaderMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'apnaplates'),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
