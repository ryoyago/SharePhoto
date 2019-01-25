import { Component } from '@angular/core';
import { NavController,AlertController} from 'ionic-angular';
//import { PickerPage } from '../../pages/picker/picker';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;
 
  readonly APP_USERNAME: string = 'me';
  readonly APP_PASSWORD: string = 'secret';
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
 
  }
  login (){
    let alert = this.alertCtrl.create({
      title: 'Login erroneo',
      subTitle: 'El nombre de usuario o la contrasña son incorrectos.',
      buttons: ['OK']
    });

    if (this.username == this.APP_USERNAME && this.password == this.APP_PASSWORD) {
      this.navCtrl.push(PickerPage);
    } else {
      alert.present();
    }
    this.username = '';
    this.password = '';
  }
  }

}
