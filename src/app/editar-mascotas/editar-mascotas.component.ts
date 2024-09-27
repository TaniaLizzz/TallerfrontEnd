import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.css']
})
export class EditarMascotasComponent implements OnInit {
  mascota: MascotaModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mascotaService.obtenerMascota(id).subscribe({
        next: (data) => {
          this.mascota = data;
        },
        error: (err) => {
          console.error('Error al obtener la mascota', err);
          this.router.navigate(['/mascotas']);
        }
      });
    } else {
      this.router.navigate(['/mascotas']);
    }
  }

  onSubmit() {
    if (this.mascota) {
      this.mascotaService.actualizarMascota(this.mascota).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/mascotas']);
        },
        error: (err) => {
          console.error('Error al actualizar la mascota', err);
        }
      });
    }
  }
}
