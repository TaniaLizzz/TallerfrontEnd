import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {
  solicitud: SolicitudModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private solicitudService: SolicitudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.solicitudService.obtenerSolicitud(id).subscribe({
        next: (data) => {
          this.solicitud = data;
        },
        error: (err) => {
          console.error('Error al obtener la solicitud', err);
          this.router.navigate(['/solicitudes']);
        }
      });
    } else {
      this.router.navigate(['/solicitudes']);
    }
  }

  onSubmit() {
    if (this.solicitud) {
      this.solicitudService.actualizarSolicitud(this.solicitud).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/solicitudes']);
        },
        error: (err) => {
          console.error('Error al actualizar la solicitud', err);
        }
      });
    }
  }
}
