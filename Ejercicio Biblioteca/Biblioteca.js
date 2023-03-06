"use strict";
exports.__esModule = true;
var Libros_1 = require("./Libros");
var Biblioteca = /** @class */ (function () {
    //Constructor//
    function Biblioteca(Pnombre, Pdireccion, Ptelefono, Plocalidad, Plibro) {
        this.nombre = Pnombre;
        this.direccion = Pdireccion;
        this.telefono = Ptelefono;
        this.localidad = Plocalidad;
        this.libro = Plibro;
    }
    //Get y set//
    Biblioteca.prototype.setNombreBiblioteca = function (n) {
        this.nombre = n;
    };
    Biblioteca.prototype.getNombreBiblioteca = function () {
        return this.nombre;
    };
    Biblioteca.prototype.setDireccionBiblioteca = function (d) {
        this.direccion = d;
    };
    Biblioteca.prototype.getDireccionBiblioteca = function () {
        return this.direccion;
    };
    Biblioteca.prototype.setTelefonoBiblioteca = function (t) {
        this.telefono = t;
    };
    Biblioteca.prototype.getTelefonoBiblioteca = function () {
        return this.telefono;
    };
    Biblioteca.prototype.setLocalidadBiblioteca = function (l) {
        this.localidad = l;
    };
    Biblioteca.prototype.getLocalidadBiblioteca = function () {
        return this.localidad;
    };
    Biblioteca.prototype.setLibroDescripcion = function (l) {
        this.libro = l;
    };
    Biblioteca.prototype.getLibroDescripcion = function () {
        return this.libro;
    };
    //Metodos//
    Biblioteca.prototype.nombreBiblioteca = function () {
        return this.nombre;
    };
    Biblioteca.prototype.direccionBiblioteca = function () {
        return this.direccion;
    };
    Biblioteca.prototype.telefonoBiblioteca = function () {
        return this.telefono;
    };
    Biblioteca.prototype.localidadBiblioteca = function () {
        return this.localidad;
    };
    Biblioteca.prototype.libroDescripcion = function () {
        return this.libro;
    };
    return Biblioteca;
}());
var Libro001 = new Libros_1.Libros("El principito", 111, "Novela", 120, "Antoine de Saint-Exupéry", true, "Planeta de Libros");
var Libro002 = new Libros_1.Libros("Orgullo y prejuicio", 165, "Novela", 360, "Jane Austen", false, "Planeta de Libros");
var Biblioteca001 = new Biblioteca("25 de mayo", "Rivadavia 665", 2244423560, "Las flores", Libro001);
var cambioDireccion = Biblioteca001.setDireccionBiblioteca("Pte. Peron");
console.log(cambioDireccion);
var infoLibro = Biblioteca001.getLibroDescripcion();
console.log(infoLibro);
