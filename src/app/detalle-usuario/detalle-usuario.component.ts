// src/app/detalle-usuario/detalle-usuario.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario: UsuarioModel | null = null;
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

  regresar(): void {
    this.router.navigate(['/lista-usuarios']);
  }

}
