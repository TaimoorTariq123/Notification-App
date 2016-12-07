import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AddTodo} from '../addTodo/addTodo';
import {FirebaseListObservable, AngularFire} from 'angularfire2';
import { MenuPage } from "../menu/menu";

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.html'

})

export class Dashboard {
    items:any;
    uid: any;
    testCheckboxOpen: any;
    testCheckboxResult: any;
    userName : string;


    list: any[] = [];
    value: any[] = [];
    temp: any[] = [];
    key1: any[] = [];

    constructor(public navCtrl: NavController, public af: AngularFire, public alertCtrl: AlertController) {
        // this.af.auth.subscribe((auth) => { this.authUid = auth.uid });
        // this.list = this.af.database.list('TodoAppDatabase/users/' + this.authUid);
        this.uid = localStorage.getItem("key");
        var callData = this.af.database.object('users/'+ this.uid, {preserveSnapshot:true});
        callData.subscribe(snapshot =>{
        this.userName = snapshot.val().name;
        });
        console.log("pehle");
        console.log(this.list);
        this.load();
    }

    load() {
        this.items = [];
        console.log("ye dekho");
        console.log(this.list);
        console.log("complete");
        this.items = this.af.database.list('user-status', { preserveSnapshot: true });
        this.items.subscribe(snapshots => {
            console.log("Chal gya");
                snapshots.forEach(snapshot => {
                    this.list.push(snapshot.val());
                });
            })
    }

    addNewTodo() {

        this.navCtrl.push(MenuPage);

    }

    showCheckbox(index: number) {

        this.temp = [];
        this.key1 = [];
        for (var keys in this.value[index]) {
            var value = this.value[index][keys];
            this.temp.push(value.mytodo);
            this.key1.push(keys);
            console.log(this.key1);
        }

        let alert = this.alertCtrl.create();
        alert.setTitle('please select your completed todos');

        for (var i = 0; i < this.temp.length; ++i) {
            alert.addInput({
                type: 'checkbox',
                label: this.temp[i],
                value: this.key1[i],
                checked: false
            });
        }

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
                console.log(this.testCheckboxResult);
                this.delete(this.testCheckboxResult, index);
            }
        });
        alert.present();
    }

    delete(data, index) {
        for (var i = 0; i < data.length; ++i) {
            // this.items = this.af.database.list('TodoAppDatabase/users/' + this.uid + '/' + this.key[index]);
            // this.items.remove(data[i]);
        }
    }
}