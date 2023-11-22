import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { EnvioComponent } from './pages/envio/envio.component';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroment } from 'src/enviroment/enviroment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    RecetasComponent,
    MenuComponent,
    SobreComponent,
    EnvioComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(enviroment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
    
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: enviroment.firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
