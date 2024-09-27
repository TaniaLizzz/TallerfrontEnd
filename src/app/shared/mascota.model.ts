export class MascotaModel {
  constructor(
    public id: string,
    public nombre: string,
    public especie: string,
    public raza?: string,
    public edad?: number,
    public estado_adopcion?: string,
    public foto?: string,
    public descripcion?: string
  ) { }
}
