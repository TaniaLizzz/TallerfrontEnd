export class UsuarioModel {
    constructor(
      public id: number,
      public nombres: string,
      public usuario: string,
      public password: string,
      public rol: string,
      public telefono?: string,
      public edad?: number
    ) {}
  }
  