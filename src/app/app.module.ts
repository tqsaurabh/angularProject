import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AddpizzaComponent } from './addpizza/addpizza.component';
import { ViewpizzaComponent } from './viewpizza/viewpizza.component';
import { UserviewComponent } from './userview/userview.component';
import { CardComponent } from './card/card.component';
import { UpdatepizzaComponent } from './updatepizza/updatepizza.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LogoutComponent } from './logout/logout.component';


const approutes:Routes=[
    //{path:'login',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'addpizza',component:AddpizzaComponent},
  {path:'view',component:ViewpizzaComponent},
  {path:'uview',component:UserviewComponent},
  {path:'cart',component:CardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'update/:i',component:UpdatepizzaComponent},
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**' ,component:PagenotfoundComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddpizzaComponent,
    ViewpizzaComponent,
    UserviewComponent,
    CardComponent,
    UpdatepizzaComponent,
    PagenotfoundComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
  FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(approutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


