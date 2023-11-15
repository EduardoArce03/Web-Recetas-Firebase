import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from 'src/app/domain/receta';
import { EnvioComponent } from '../envio/envio.component';
import { ContactosFirebase } from 'src/app/services/contactos-firebase';

@Component({
  selector: 'app-view-receta',
  templateUrl: './view-receta.component.html',
  styleUrls: ['./view-receta.component.scss']
})
export class ViewRecetaComponent {
    receta: Receta = new Receta();

    constructor(private router: Router, private route: ActivatedRoute, envioComponent : EnvioComponent, private contactosFirebase: ContactosFirebase){
      this.route.params.subscribe(params => {
        console.log(params)
        if(params['id']){
          
        }
      })

    }

    loadPersona(uid: string){
      this.contactosFirebase.getReceta(uid).subscribe(data =>{
        console.log(data)
        this.receta = <any> data
      })
    }

}
