import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  mascotas: Observable<MascotaModel[]> | undefined;

  constructor(private mascotaService: MascotaService) { }

  ngOnInit() {
    this.cargarMascotas();
  }

  cargarMascotas() {
    this.mascotas = this.mascotaService.obtenerMascotas();
    this.mascotas.subscribe(data => {
      console.log(data); // Para verificar los datos obtenidos
    });
  }

  borrarMascota(idMascota: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta mascota?')) {
      this.mascotaService.borrarMascota(idMascota).subscribe({
        next: () => {
          console.log('Mascota eliminada');
          this.cargarMascotas();
        },
        error: (err) => {
          console.error('Error al eliminar la mascota', err);
        }
      });
    }
  }
}
