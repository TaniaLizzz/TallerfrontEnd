export class SolicitudModel {
  nombre: any;
  usuarioId: any;
  estado: any;
  constructor(
    public id: string,
    public mascotaId: string,
    public adoptanteId: string,
    public estado_adopcion: string = 'Disponible', // Estado predeterminado
    public fechaCreacion?: Date,
    public fechaFin?: Date 
  ) {}
}
