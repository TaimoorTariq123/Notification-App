import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AngularFire } from 'angularfire2';
import { LoginPage } from '../pages/login/login';
import { Dashboard } from "../pages/dashboard/dashboard";
import { MenuPage } from "../pages/menu/menu";

@Component({
  template: `<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`
})
export class MyApp {
  rootPage : any;

  constructor(platform: Platform,af: AngularFire) {
    platform.ready().then(() => {
      
      if(localStorage.getItem("key")){

        this.rootPage = MenuPage;
      }
      else {
 
        this.rootPage = LoginPage;
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
