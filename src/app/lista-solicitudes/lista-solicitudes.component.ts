import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {
  solicitudes: Observable<SolicitudModel[]> | undefined;

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit() {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudes = this.solicitudService.obtenerSolicitudes();
    this.solicitudes.subscribe(data => {
      console.log(data); // Para verificar los datos obtenidos
    });
  }

  borrarSolicitud(idSolicitud: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta solicitud?')) {
      this.solicitudService.borrarSolicitud(idSolicitud).subscribe({
        next: () => {
          console.log('Solicitud eliminada');
          this.cargarSolicitudes();
        },
        error: (err) => {
          console.error('Error al eliminar la solicitud', err);
        }
      });
    }
  }
}
