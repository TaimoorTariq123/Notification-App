import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { Dashboard } from '../pages/dashboard/dashboard';
import { AddTodo } from '../pages/addTodo/addTodo';
import { MenuPage } from "../pages/menu/menu"
import { ProfilePage } from "../pages/profile/profile";
import { CreatePostPage } from "../pages/create-post/create-post"

export const firebaseConfig = {
  apiKey: "AIzaSyCpy3zin1OWfPyFNL_dUwDFwxuMCumUKqw",
  authDomain: "helloworld-797b6.firebaseapp.com",
  databaseURL: "https://helloworld-797b6.firebaseio.com",
  storageBucket: "helloworld-797b6.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,

  
}
const myFirebaseFacebookConfig = {


}

@NgModule({
  declarations: [
    MyApp,
    AddTodo,
    Dashboard,
    LoginPage,
    SignupPage,
    MenuPage,
    ProfilePage,
    CreatePostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddTodo,
    Dashboard,
    LoginPage,
    SignupPage,
    MenuPage,
    ProfilePage,
    CreatePostPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
