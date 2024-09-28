import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {
  solicitud: SolicitudModel = new SolicitudModel('', '', '', 'Disponible'); // Inicializar con un estado predeterminado

  constructor(private solicitudService: SolicitudService, private router: Router) {}

  onSubmit() {
    this.solicitudService.agregarSolicitud(this.solicitud).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/solicitudes']);
      },
      error: (err) => {
        console.error('Error al crear la solicitud', err);
      }
    });
  }
}
