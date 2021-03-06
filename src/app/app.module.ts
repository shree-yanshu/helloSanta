import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SetUppageComponent } from './set-uppage/set-uppage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AccordionComponent } from './accordion/accordion.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductFullCardComponent } from './components/product-full-card/product-full-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { WideProductCardComponent } from './components/wide-product-card/wide-product-card.component';
import { SmallProductCardComponent } from './components/small-product-card/small-product-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginpageComponent,
    SigninPageComponent,
    SetUppageComponent,
    ProfilepageComponent,
    FeedbackpageComponent,
    WishlistpageComponent,
    YourorderspageComponent,
    DigitalartworkspageComponent,
    HandmadeartworkspageComponent,
    TrackorderspageComponent,
    YourcartpageComponent,
    HelppageComponent,
    CheckoutpageComponent,
    DisclaimerpageComponent,
    PrivacypolicypageComponent,
    TermsandconditionspageComponent,
    RefundandreturnpageComponent,
    BloghomepageComponent,
    BlogsingalpageComponent,
    BuyagainpageComponent,
    AccordionComponent,
    AccountpageComponent,
    SidenavComponent,
    ProductpageComponent,
    ProductFullCardComponent,
    CategoryCardComponent,
    WideProductCardComponent,
    SmallProductCardComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
