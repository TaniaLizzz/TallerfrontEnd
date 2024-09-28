import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { CrearMascotasComponent } from './crear-mascotas/crear-mascotas.component';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { DetalleMascotaComponent } from './detalle-mascota/detalle-mascota.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarSolicitudComponent } from './editar-solicitud/editar-solicitud.component';
import { DetalleSolicitudComponent } from './detalle-solicitud/detalle-solicitud.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'; // Asegúrate de importar el componente Home

const routes: Routes = [
    // Ruta de INICIO
    { path: '', component: HomeComponent, pathMatch: 'full' },

    // Rutas de MASCOTAS
    { path: 'mascotas', component: ListaMascotasComponent },
    { path: 'mascotas/crear', component: CrearMascotasComponent },
    { path: 'mascotas/detalle/:id', component: DetalleMascotaComponent },
    { path: 'mascotas/editar/:id', component: EditarMascotasComponent },

    // Rutas de USUARIOS
    { path: 'usuarios', component: ListaUsuariosComponent },
    { path: 'usuarios/crear', component: CrearUsuarioComponent },
    { path: 'usuarios/detalle/:id', component: DetalleUsuarioComponent },
    { path: 'usuarios/editar/:id', component: EditarUsuarioComponent },

    // Rutas de SOLICITUDES
    { path: 'solicitudes', component: ListaSolicitudesComponent },
    { path: 'solicitudes/crear', component: CrearSolicitudComponent },
    { path: 'solicitudes/detalle/:id', component: DetalleSolicitudComponent },
    { path: 'solicitudes/editar/:id', component: EditarSolicitudComponent },

    // Ruta para "Acerca de Nosotros"
    { path: 'about', component: AboutComponent },

    // Ruta no encontrada
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirigir cualquier ruta no encontrada a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
