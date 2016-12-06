import { Component } from '@angular/core';
import { NavController ,  LoadingController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

import {Dashboard} from '../dashboard/dashboard';
/*
  Generated class for the CreatePost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html'
})
export class CreatePostPage {
content:string;
uid:any;
  constructor(public navCtrl: NavController, public af: AngularFire, public loadingCtrl: LoadingController) {
    this.uid = localStorage.getItem("key")
  }

savePost(){
if(!this.content){
  return;
}
const items = this.af.database.list("user-status");
items.push({
  text : this.content,
  author : this.uid
})
this.content = "";
this.navCtrl.push(Dashboard);
}

  ionViewDidLoad() {
    console.log('Hello CreatePostPage Page');
  }

}
