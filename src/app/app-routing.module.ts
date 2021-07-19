import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SetUppageComponent } from './set-uppage/set-uppage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'signinpage', component:SigninPageComponent},
  {path:'setuppage', component:SetUppageComponent},
  {path:'profilepage', component:ProfilepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
