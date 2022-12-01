import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraCarro
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoCarro =
  getFirestore().
    collection("Carro");
/** @type {HTMLFormElement} */
const forma = document["forma"];
getAuth().onAuthStateChanged(
  protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    forma.addEventListener(
      "submit", guarda);
  }
}

/** @param {Event} evt */
async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma);
    const matricula = getString(
        formData, "matricula").trim();  
    const nombrep = getString(formData, "nombre").trim();
    const telefono = getString(formData, "telefono").trim();
    const marca = getString(formData, "marca").trim();
    const fecha = getString(formData, "fecha").trim();
    /**
     * @type {
        import("./tipos.js").
                Alumno} */
    const modelo = {
      matricula,
      nombre,
      telefono,
      marca,
      fecha 
    };
    await daoCarro.
      add(modelo);
    muestraCarro();
  } catch (e) {
    muestraError(e);
  }
}

