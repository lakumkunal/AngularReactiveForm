import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitymasterComponent } from './citymaster/citymaster.component';
import { CityserviceService } from './cityservice.service';
import { UpdateCompComponent } from './update-comp/update-comp.component';
import { RegisterComponent } from './register/register.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { TokenInterceptor } from './TokenInterceptor ';
import { ForgotComponent } from './forgot/forgot.component';
import {GridModule} from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    AppComponent,
    CitymasterComponent,
    UpdateCompComponent,
    RegisterComponent,
    LoginUserComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridModule,
    InputsModule,
    ButtonsModule
  
  ],
  providers: [CityserviceService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }], // Provide CityserviceService here
  bootstrap: [AppComponent]
})
export class AppModule { }
