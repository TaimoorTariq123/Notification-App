import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from "angularfire2";
import { MenuPage } from "../pages/menu/menu";

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {
   tempFirebaseData: any;
   value : boolean;

 constructor(public http: Http, public af: AngularFire ,public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    console.log('Hello DataService Provider');


  }

SignupData(userName, userEmail, password,gender){
   let loading = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loading.present();

    this.af.auth.createUser({ email: userEmail, password: password}).then((data) => {
      loading.dismiss();
      this.af.database.object('/users/'+ data.auth.uid).set({
        name : userName,
        pswd : password,
        email : userEmail,
        gender : gender
      })
      
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000,
        position: 'top'
      });

      toast.present().then((done) => {
        // this.navCtrl.pop();
      });
      console.log("data", data);

    })
      .catch((err) => {
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: 'User not added successfully',
          duration: 3000,
          position: 'top'
        });

        toast.present();

        console.log("error", err)
      });
}



  loginFirebase(userName,password) {
      console.log("here is data")
    this.tempFirebaseData = this.af.auth.login({ 
      email: userName, 
      password: password }
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


loginData(userName,password){

    let loading = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loading.present();
// <<<<<<< HEAD
    // this.loginFirebase().then((res) => { loading.dismiss(); this.navCtrl.push(MenuPage);}, (err) => { console.log(err)})
// =======
    
    this.loginFirebase(userName,password).then((res) => {
      console.log(res);
        loading.dismiss();
        
        // this.navCtrl.push(MenuPage);
  this.value = true;  
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
this.value = false;
      })
       return new Promise((resolve, reject) => resolve(this.value));

}

}
