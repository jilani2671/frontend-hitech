import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
// import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { MainComponent } from './modules/components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { SubCatComponent } from './modules/components/sub-cat/sub-cat.component';
import { AboutComponent } from './modules/components/about/about.component';
import { ContactusComponent } from './modules/components/contactus/contactus.component';
import { GetquoteComponent } from './modules/components/getquote/getquote.component';
import { FloatingMessageComponent } from './modules/components/floating-message/floating-message.component';
// import { ReviewComponent } from './modules/components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    // NavbarComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    SubCatComponent,
    AboutComponent,
    ContactusComponent,
    GetquoteComponent,
    FloatingMessageComponent,
    // ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
