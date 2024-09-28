import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudModel } from './solicitud.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  // Base URL de las rutas del backend para las solicitudes
  BASE_URL = 'http://localhost:4000/solicitudes';

  constructor(private http: HttpClient) { }

  // Lista completa de Solicitudes
  obtenerSolicitudes(): Observable<SolicitudModel[]> {
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}`);
  }

  // Buscar una solicitud por ID
  obtenerSolicitud(idSolicitud: string): Observable<SolicitudModel> {
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/buscar/${idSolicitud}`);
  }

  // Crear una Solicitud
  agregarSolicitud(solicitud: SolicitudModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/crear`, solicitud);
  }

  // Actualizar una Solicitud
  actualizarSolicitud(solicitud: SolicitudModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/actualizar/${solicitud.id}`, solicitud);
  }

  // Eliminar una Solicitud
  borrarSolicitud(idSolicitud: string): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/eliminar/${idSolicitud}`);
  }
}
