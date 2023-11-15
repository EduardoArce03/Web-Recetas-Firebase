import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { EnvioComponent } from './pages/envio/envio.component';
import { ViewRecetaComponent } from './pages/view-receta/view-receta.component';

const routes: Routes = [
  {path: "paginas/inicio", component: InicioComponent},
  {path: "paginas/recetas", component: RecetasComponent},
  {path: "paginas/sobre", component: SobreComponent},
  {path: "paginas/envio", component: EnvioComponent},
  {path: "paginas/view", component: ViewRecetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
