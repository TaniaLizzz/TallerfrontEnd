import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudModel } from '../shared/solicitud.model';  // Asegúrate de que la ruta sea correcta
import { SolicitudService } from '../shared/solicitud.service';  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-detalle-solicitud',
  templateUrl: './detalle-solicitud.component.html',
  styleUrls: ['./detalle-solicitud.component.css']
})
export class DetalleSolicitudComponent implements OnInit {
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
}
