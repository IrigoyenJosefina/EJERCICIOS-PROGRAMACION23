"use strict";
exports.__esModule = true;
exports.Libros = void 0;
var Libros = /** @class */ (function () {
    function Libros(Ptitulo, Pcodigo, Pgenero, Pcantdepag, Pautor, Pdisponible) {
        this.titulo = Ptitulo;
        this.codigo = Pcodigo;
        this.genero = Pgenero;
        this.cantidadDePaginas = Pcantdepag;
        this.autor = Pautor;
        this.disponible = Pdisponible;
    }
    return Libros;
}());
exports.Libros = Libros;
