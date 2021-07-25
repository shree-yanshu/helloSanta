import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SetUppageComponent } from './set-uppage/set-uppage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { FeedbackpageComponent } from './feedbackpage/feedbackpage.component';
import { WishlistpageComponent } from './wishlistpage/wishlistpage.component';
import { YourorderspageComponent } from './yourorderspage/yourorderspage.component';
import { DigitalartworkspageComponent } from './digitalartworkspage/digitalartworkspage.component';
import { HandmadeartworkspageComponent } from './handmadeartworkspage/handmadeartworkspage.component';
import { TrackorderspageComponent } from './trackorderspage/trackorderspage.component';
import { YourcartpageComponent } from './yourcartpage/yourcartpage.component';
import { HelppageComponent } from './helppage/helppage.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { DisclaimerpageComponent } from './disclaimerpage/disclaimerpage.component';
import { PrivacypolicypageComponent } from './privacypolicypage/privacypolicypage.component';
import { TermsandconditionspageComponent } from './termsandconditionspage/termsandconditionspage.component';
import { RefundandreturnpageComponent } from './refundandreturnpage/refundandreturnpage.component';
import { BloghomepageComponent } from './bloghomepage/bloghomepage.component';
import { BlogsingalpageComponent } from './blogsingalpage/blogsingalpage.component';
import { BuyagainpageComponent } from './buyagainpage/buyagainpage.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'signinpage', component:SigninPageComponent},
  {path:'setuppage', component:SetUppageComponent},
  {path:'profilepage', component:ProfilepageComponent},
  {path:'feedbackpage', component: FeedbackpageComponent},
  {path:'wishlistpage', component:WishlistpageComponent},
  {path:'yourorderspage', component:YourorderspageComponent},
  {path:'digitalartpage', component:DigitalartworkspageComponent},
  {path:'handmadeartpage', component:HandmadeartworkspageComponent},
  {path:'trackorderpage', component:TrackorderspageComponent},
  {path:'cartpage', component:YourcartpageComponent},
  {path:'helppage', component:HelppageComponent},
  {path:'checkoutpage', component:CheckoutpageComponent},
  {path:'disclaimerpage', component:DisclaimerpageComponent},
  {path:'privacypolicypage', component:PrivacypolicypageComponent},
  {path:'termsandconditionspage', component:TermsandconditionspageComponent},
  {path:'refundpage', component:RefundandreturnpageComponent},
  {path:'bloghomepage', component:BloghomepageComponent},
  {path:'blogpage', component:BlogsingalpageComponent},
  {path:'buyagainpage', component:BuyagainpageComponent},
  {path:'accountpage', component:AccountpageComponent},
  {path:'productpage', component:ProductpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
