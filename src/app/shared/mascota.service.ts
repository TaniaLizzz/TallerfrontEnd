import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MascotaModel } from './mascota.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  // Base URL de las rutas del backend para las mascotas
  BASE_URL = 'http://localhost:4000/mascotas';

  constructor(private http: HttpClient) { }

  // Lista completa de Mascotas
  obtenerMascotas(): Observable<MascotaModel[]> {
    return this.http.get<MascotaModel[]>(`${this.BASE_URL}`);
  }

  // Buscar una mascota por ID
  obtenerMascota(idMascota: string): Observable<MascotaModel> {
    return this.http.get<MascotaModel>(`${this.BASE_URL}/buscar/${idMascota}`);
  }

  // Crear una Mascota
  agregarMascota(mascota: MascotaModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/crear`, mascota);
  }

  // Actualizar una Mascota
  actualizarMascota(mascota: MascotaModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/actualizar/${mascota.id}`, mascota);
  }

  // Eliminar una Mascota
  borrarMascota(idMascota: string): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/eliminar/${idMascota}`);
  }

}
