import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SetUppageComponent } from './set-uppage/set-uppage.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'signingpage', component:SigninPageComponent},
  {path:'setuppage', component:SetUppageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
