// src/app/shared/usuario.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from './usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // URL base de las rutas del backend para los usuarios
  private BASE_URL = 'http://localhost:4000/usuarios';

  constructor(private http: HttpClient) { }

  /**
   * Obtener la lista completa de usuarios
   */
  obtenerUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}`);
  }

  /**
   * Buscar un usuario por su ID
   * @param idUsuario ID del usuario a buscar
   */
  obtenerUsuario(idUsuario: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.BASE_URL}/buscar/${idUsuario}`);
  }

  /**
   * Buscar un usuario por su nombre de usuario
   * @param usuario Nombre de usuario a buscar
   */
  buscarUsuarioPorNombre(usuario: string): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.BASE_URL}/buscar/nombre/${usuario}`);
  }

  /**
   * Crear un nuevo usuario
   * @param usuario Objeto UsuarioModel a crear
   */
  agregarUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/crear`, usuario);
  }

  /**
   * Actualizar un usuario existente
   * @param usuario Objeto UsuarioModel con los datos actualizados
   */
  actualizarUsuario(usuario: UsuarioModel): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/actualizar/${usuario.id}`, usuario);
  }

  /**
   * Eliminar un usuario por su ID
   * @param idUsuario ID del usuario a eliminar
   */
  borrarUsuario(idUsuario: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/eliminar/${idUsuario}`);
  }

}
