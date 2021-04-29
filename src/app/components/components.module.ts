import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';



@NgModule({
  declarations: [
    NuevoUsuarioComponent
  ],
  exports:[
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
