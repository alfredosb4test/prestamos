import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevoUsuarioComponent } from 'src/app/components/nuevo-usuario/nuevo-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  textoBuscar = '';
  buscando = false;

  constructor( private modalCtrl: ModalController ) {}

  buscar( event ){
    this.buscando = true;
    const valor = event.detail.value;

    if( valor.length === 0){
      this.buscando = false;

      return;
    }
    console.log( valor );
    
  }

  async nuevoUsuario(){

    const modal = await this.modalCtrl.create({
      component: NuevoUsuarioComponent      
    });

    modal.present();
  }

}
