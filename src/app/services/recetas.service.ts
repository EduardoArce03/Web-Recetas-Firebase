import { Injectable } from "@angular/core";
import { Receta } from "../domain/receta";
@Injectable({
    providedIn: 'root'
})

export class RecetasService {
    recetas : Receta [] = []

    constructor(){}

    addReceta(receta: Receta){
        this.recetas.push(receta);
    }

    getRecetas(){
        return this.recetas;
    }
}
