import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


import {SignupPage} from '../signup/signup';
import {Dashboard} from '../dashboard/dashboard';
import {MenuPage  } from "../menu/menu"
import { DataService } from "../../providers/data-service";



@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  userEmail: string;
  password: string;
 


  constructor(public service : DataService,public navCtrl: NavController, public af: AngularFire, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.userEmail = "", this.password = "";
  }

  goToSignUpPage() {
    this.navCtrl.push(SignupPage);
  }

  // loginFirebase() {

  //   this.tempFirebaseData = this.af.auth.login({ 
  //     email: this.userName, 
  //     password: this.password }
  //    ,
  //     { provider: AuthProviders.Password, method: AuthMethods.Password })
  //      .then((success)=>{
  //      console.log("login success : ", success);
  //      localStorage.setItem("key",success.uid);     
  //     })
  //     .catch((err)=>{
  //     console.log("login err", err)
  //     })

  //   return new Promise((resolve, reject) => resolve(this.tempFirebaseData));

  // }

  loader() {
    if(!this.userEmail || !this.password){
        return;
    }
  this.service.loginData(this.userEmail,this.password)
  .then((success)=>{
    this.navCtrl.push(MenuPage)
  })
  .catch((err)=>{
  console.log('err')
  })

  }

}
