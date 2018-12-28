import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// Service
import { AuthService } from './services/auth.service';
// Guard
import { AuthGuard } from './guards/auth.guard';
// Routes
export const router: Routes = [
 { path: '', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'signup', component: SignupComponent },
 { path: 'profile', component: ProfileComponent }
]
// Config Firebase
export const firebaseConfig = {
 apiKey: "AIzaSyA3LCgyETuSdRIqokIX7vf0XB8DAMn0qxg",
 authDomain: "dnasoccer-7afaf.firebaseapp.com",
 databaseURL: "https://dnasoccer-7afaf.firebaseio.com",
 projectId: "dnasoccer-7afaf",
 storageBucket: "dnasoccer-7afaf.appspot.com",
 messagingSenderId: "77234107748"
};
@NgModule({
 declarations: [
 AppComponent,
 HomeComponent,
 LoginComponent,
 NavbarComponent,
 ProfileComponent,
 SignupComponent
 ],
 imports: [
 BrowserModule,
 FormsModule,
 ReactiveFormsModule,
 HttpModule,
 RouterModule.forRoot(router),
 AngularFireAuthModule,
 AngularFireModule.initializeApp(firebaseConfig)
 ],
 providers: [AngularFireDatabase],
 bootstrap: [AppComponent]
})
export class AppModule { }