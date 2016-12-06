import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


import {SignupPage} from '../signup/signup';
import {Dashboard} from '../dashboard/dashboard';
import {MenuPage  } from "../menu/menu"




@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  userName: string;
  password: string;
  tempFirebaseData: any;


  constructor(public navCtrl: NavController, public af: AngularFire, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.userName = "", this.password = "";
  }

  goToSignUpPage() {
    this.navCtrl.push(SignupPage);
  }

  loginFirebase() {

    this.tempFirebaseData = this.af.auth.login({ 
      email: this.userName, 
      password: this.password }
     ,
      { provider: AuthProviders.Password, method: AuthMethods.Password })
       .then((success)=>{
       console.log("login success : ", success);
       localStorage.setItem("key",success.uid);     
      })
      .catch((err)=>{
      console.log("login err", err)
      })

    return new Promise((resolve, reject) => resolve(this.tempFirebaseData));

  }

  loader() {
    if(!this.userName || !this.password){
        return;
    }
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loading.present();
// <<<<<<< HEAD
    // this.loginFirebase().then((res) => { loading.dismiss(); this.navCtrl.push(MenuPage);}, (err) => { console.log(err)})
// =======
    
    this.loginFirebase().then((res) => {
      console.log(res);
        loading.dismiss();
        this.navCtrl.push(MenuPage);
    },

      (err) => {
          loading.dismiss();
          console.log("Error " + err);
      let toast = this.toastCtrl.create({
          message: err,
          duration: 3000,
          position: 'top'
        })

        toast.present().then((done) => {
              
        })

      })
// >>>>>>> 578a3f833ea01ff565d1a01dad3deea57c154c90
  }

}
