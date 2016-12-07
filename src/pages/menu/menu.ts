import { Component,ViewChild } from '@angular/core';
import { NavController,MenuController,App,Nav } from 'ionic-angular';
import { AngularFire } from "angularfire2";


import { Dashboard } from "../dashboard/dashboard";
import { ProfilePage } from "../profile/profile";
import { LoginPage } from "../login/login";
import { CreatePostPage } from "../create-post/create-post"


/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  rootPage: any  = Dashboard;
  @ViewChild(Nav) nav: Nav;
  userData : any;
  uid : any;

  pages : Array<{title : string, component: any}>
  constructor(public af: AngularFire,public navCtrl: NavController,app: App,public menu: MenuController) {

 this.pages = [
   {title : 'Share Something..', component: CreatePostPage},
   {title : 'Profile' , component: ProfilePage},
   {title : 'Logout', component: ""}
   ]
  }


 openPage(page){
if(page.title == 'Logout'){
  localStorage.removeItem('key');
   this.af.auth.logout();
   this.navCtrl.setRoot(LoginPage)
  }
  else if(page.title== 'Share Something..'){
    console.log("sahe hai")
    this.navCtrl.push(CreatePostPage);
  }
else { 
  this.navCtrl.push(page.component)
}
this.menu.close()
 }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }
// logout(){


// }
}
