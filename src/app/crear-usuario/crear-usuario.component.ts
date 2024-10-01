// src/app/crear-usuario/crear-usuario.component.ts

import { Component } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { UsuarioModel } from '../shared/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  usuario: UsuarioModel = new UsuarioModel(0, '', '', '', '', '', 0);

  error: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  crearUsuario(): void {
    // Validar datos antes de enviar
    if (!this.usuario.nombres || !this.usuario.usuario || !this.usuario.password || !this.usuario.rol) {
      this.error = 'Por favor, completa todos los campos obligatorios.';
      return;
    }

    this.usuarioService.agregarUsuario(this.usuario).subscribe(
      (response) => {
        alert(response.mensaje);
        this.router.navigate(['/lista-usuarios']);
      },
      (err) => {
        this.error = 'No se pudo crear el usuario.';
        console.error(err);
      }
    );
  }

}
