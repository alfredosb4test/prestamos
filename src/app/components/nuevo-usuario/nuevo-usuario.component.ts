import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss'],
})
export class NuevoUsuarioComponent {

  constructor( private modalCtrl: ModalController ) { }

   


  regresar(){
    this.modalCtrl.dismiss();
  }

}
