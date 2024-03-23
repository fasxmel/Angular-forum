import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
import { ErrorComponent } from './error/error.component';
import { appInterceptorProviders } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    UserModule,
    ThemeModule,
    AppRoutingModule,
  ],
  providers: [appInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
