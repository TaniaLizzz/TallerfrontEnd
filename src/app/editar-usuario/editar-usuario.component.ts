// src/app/editar-usuario/editar-usuario.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel(0, '', '', '', '', '', 0);
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.usuarioService.obtenerUsuario(id).subscribe(
        (data: UsuarioModel) => {
          this.usuario = data;
        },
        (err) => {
          this.error = 'No se pudo cargar el usuario.';
          console.error(err);
        }
      );
    } else {
      this.error = 'ID de usuario inválido.';
    }
  }

  actualizarUsuario(): void {
    // Validar datos antes de enviar
    if (!this.usuario.nombres || !this.usuario.usuario || !this.usuario.password || !this.usuario.rol) {
      this.error = 'Por favor, completa todos los campos obligatorios.';
      return;
    }

    this.usuarioService.actualizarUsuario(this.usuario).subscribe(
      (response) => {
        alert(response.mensaje);
        this.router.navigate(['/lista-usuarios']);
      },
      (err) => {
        this.error = 'No se pudo actualizar el usuario.';
        console.error(err);
      }
    );
  }

}
