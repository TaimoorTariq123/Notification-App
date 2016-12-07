import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from "angularfire2";

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  userName : string;
  password : string;

  constructor(public navCtrl: NavController,public af :AngularFire) {
    this.af.database.list('/users')
  }

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

}
