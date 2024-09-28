import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { CrearMascotasComponent } from './crear-mascotas/crear-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { DetalleMascotaComponent } from './detalle-mascota/detalle-mascota.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { DetalleSolicitudComponent } from './detalle-solicitud/detalle-solicitud.component';
import { provideHttpClient } from '@angular/common/http';
import { MascotaService } from './shared/mascota.service';
import { FormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMascotasComponent,
    CrearMascotasComponent,
    EditarMascotasComponent,
    DetalleMascotaComponent,
    ListaSolicitudesComponent,
    CrearSolicitudComponent,
    EditarSolicitudComponent,
    DetalleSolicitudComponent,
    ListaUsuariosComponent,
    CrearUsuarioComponent,
    DetalleUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule
  ],
  providers: [
    MascotaService,
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
