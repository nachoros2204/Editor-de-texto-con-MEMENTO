import { strict as assert } from "assert";
import { Editor } from "../EditorDeTexto";
import { Historial } from "../Historial";

const historial = new Historial();
const editor = new Editor(historial);

//Cada vez que escribimos, se guarda automaticamente el estado anterior
editor.escribir("Hola");
editor.escribir(" mundo");
editor.escribir("!!!");

assert.equal(editor.obtenerContenido(), "Hola mundo!!!");

//Deshacer una vez
const estado1 = historial.deshacer();
if (estado1) editor.restaurar(estado1);
assert.equal(editor.obtenerContenido(), "Hola mundo");

//Deshacer otra vez
const estado2 = historial.deshacer();
if (estado2) editor.restaurar(estado2);
assert.equal(editor.obtenerContenido(), "Hola");

console.log("Test del patron MEMENTO pasado correctamente.");
