import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/domain/receta';
import { ContactosFirebase } from 'src/app/services/contactos-firebase';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent {
  recetas : Receta [] = []
  url : any
  urlInput: string = '';
  

  constructor(private recetaService : RecetasService,
    private router: Router, private contactosFirebase : ContactosFirebase){
      this.recetas = recetaService.getRecetas()
  }

  goLista(){
    //this.router.navigate(['paginas/recetas'])
  }

  onImg(img:any){
    alert('OnImg Funcional')
    this.url = img[0].name
  }
}
