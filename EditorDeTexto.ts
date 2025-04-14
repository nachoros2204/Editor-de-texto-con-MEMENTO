import { EditorMemento } from "./Memento";
import { Historial } from "./Historial";

export class Editor {
    private contenido: string = "";
    private historial: Historial;

    constructor(historial: Historial) {
        this.historial = historial;
    }

    escribir (texto: string): void {
        this.historial.guardar(this.guardar());
        this.contenido += texto;
    }

    obtenerContenido (): string {
        return this.contenido;
    }

    guardar(): EditorMemento {
        return new EditorMemento(this.contenido);
    }

    restaurar(editorMemento: EditorMemento) {
        this.contenido = editorMemento.getContenido();
    }
}