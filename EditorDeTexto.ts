import { EditorMemento } from "./Memento";

export class Editor {
    private contenido: string = "";

    escribir (texto: string) {
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