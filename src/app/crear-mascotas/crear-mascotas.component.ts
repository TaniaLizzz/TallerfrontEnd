import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-crear-mascotas',
  templateUrl: './crear-mascotas.component.html',
  styleUrls: ['./crear-mascotas.component.css']
})
export class CrearMascotasComponent {
  // Inicializa mascota con todas las propiedades que tu modelo requiere
  mascota: MascotaModel = new MascotaModel('', '', '');

  constructor(private mascotaService: MascotaService, private router: Router) {}

  onSubmit() {
    this.mascotaService.agregarMascota(this.mascota).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/mascotas']);
      },
      error: (err) => {
        console.error('Error al crear la mascota', err);
      }
    });
  }
}
