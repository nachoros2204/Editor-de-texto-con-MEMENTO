export class EditorMemento {
    constructor(private readonly contenido: string) {}
  
    getContenido(): string {
      return this.contenido;
    }
  }
  