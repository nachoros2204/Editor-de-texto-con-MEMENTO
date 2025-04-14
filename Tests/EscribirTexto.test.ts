import { Editor } from "../EditorDeTexto";
import { Historial } from "../Historial";

describe("Editor con patrón Memento", () => {
    let editor: Editor;
    let historial: Historial;
  
    beforeEach(() => {
      historial = new Historial();
      editor = new Editor(historial);
    });
    
    test("Escribir texto y deshacer cambios", () => {
        //Cada vez que escribimos, se guarda automaticamente el estado anterior
        editor.escribir("Hola");
        editor.escribir(" mundo");
        editor.escribir("!!!");
        
        
        expect(editor.obtenerContenido()).toBe ("Hola mundo!!!");

//Deshacer una vez
const estado1 = historial.deshacer();
if (estado1) editor.restaurar(estado1);
expect(editor.obtenerContenido()).toBe("Hola mundo");

//Deshacer otra vez
const estado2 = historial.deshacer();
    if (estado2) editor.restaurar(estado2);
    expect(editor.obtenerContenido()).toBe("Hola");
  });
});