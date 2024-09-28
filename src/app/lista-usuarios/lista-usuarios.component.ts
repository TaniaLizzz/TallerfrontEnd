// src/app/lista-usuarios/lista-usuarios.component.ts

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];
  error: string = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(
      (data: UsuarioModel[]) => {
        this.usuarios = data;
      },
      (err) => {
        this.error = 'No se pudieron cargar los usuarios.';
        console.error(err);
      }
    );
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.borrarUsuario(id).subscribe(
        (response) => {
          alert(response.mensaje);
          this.cargarUsuarios();
        },
        (err) => {
          this.error = 'No se pudo eliminar el usuario.';
          console.error(err);
        }
      );
    }
  }

}
