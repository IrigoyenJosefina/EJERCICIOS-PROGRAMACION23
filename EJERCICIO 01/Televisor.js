var Televisor = /** @class */ (function () {
    //Constructor//
    function Televisor(encendido, volumenActual, canalActual) {
        this.encendido = encendido;
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }
    //Funciones del televisor//
    Televisor.prototype.PrenderApagar = function () {
        if (this.encendido == true) {
            this.encendido = false;
        }
        else {
            this.encendido = true;
        }
        return this.encendido;
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.volumenActual >= 0) {
            this.volumenActual++;
        }
        return this.volumenActual;
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.volumenActual <= 80) {
            this.volumenActual--;
        }
        return this.volumenActual;
    };
    Televisor.prototype.subirCanal = function () {
        if (this.canalActual >= 2) {
            this.canalActual++;
        }
        return this.canalActual;
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.canalActual <= 90) {
            this.canalActual--;
        }
        return this.canalActual;
    };
    return Televisor;
}());
var televisor001 = new Televisor(true, 15, 24);
var canalMas = televisor001.subirCanal();
console.log(canalMas);
console.log(televisor001);
