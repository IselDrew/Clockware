import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { appRoutes } from './routes';

import { StartingPageComponent } from './starting-page/starting-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    StartingPageComponent,
    ClientSignupComponent,
    ReservationFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}