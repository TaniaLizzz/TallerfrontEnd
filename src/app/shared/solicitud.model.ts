export class SolicitudModel {
nombre: any;
usuarioId: any;
estado: any;
    constructor(
      public id: string,
      public mascotaId: string,
      public adoptanteId: string,
      public estado_adopcion: 'Disponible' | 'Adoptado' | 'En proceso' | '', // Permitir vacío
      public fechaCreacion?: Date,
      public fechaFin?: Date | null
    ) { }
  }
  