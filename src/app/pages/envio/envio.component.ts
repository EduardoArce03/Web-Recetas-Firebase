import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/domain/receta';
import { RecetasService } from 'src/app/services/recetas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactosFirebase } from 'src/app/services/contactos-firebase';
import { ViewRecetaComponent } from '../view-receta/view-receta.component';



@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent {
  
  receta : Receta = new Receta();
  showError = false;
  

  constructor(private router: Router, private recetaService: RecetasService, private formBuilder : FormBuilder, private contactoFirebase : ContactosFirebase, private viewReceta: ViewRecetaComponent){
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.receta = params['envio']
    }
    
    

  }
  selectedImage: any;

  

  saveReceta(){
    
    console.log('hola mundo')
    this.recetaService.addReceta(this.receta);
    this.contactoFirebase.save(this.receta)
    this.receta = new Receta();
    
    console.log(this.recetaService.getRecetas());
    
    if(this.camposVacios()){
      alert('correcto')
      this.showError = true;
    }else{
      this.showError = false;
      alert('error')
      
    }
    
  }

  onSubmit() {
    
  }

  goReceta(){
    this.router.navigate(['paginas/recetas'])
  }

  camposVacios(): boolean {
    return !this.receta.id || !this.receta.nombre || !this.receta.ingredientes || !this.receta.pasos;
  }

  irReceta(uid: string){
    //this.viewReceta.loadPersona(uid)
  }


 
}
