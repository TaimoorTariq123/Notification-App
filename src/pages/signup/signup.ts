import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { DataService } from "../../providers/data-service"
@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {

  userEmail: string;
  userName : string;
  password: string;
  gender : string;

  constructor(public navCtrl: NavController, public af: AngularFire,public service: DataService ,public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.af.auth.subscribe(auth => console.log(auth));
    console.log('service : ' , this.service)
  }


  signup() {
   this.service.SignupData(this.userName,this.userEmail,this.password,this.gender)
// this.service.doLog()
  }
}
