/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov, eje) {// "eje" como direccion vertical u horizontal
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.eje = eje;
}

/* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function () {
  if (this.eje == 'V') {
    if ((this.y >= this.rangoMov.desdeY) && (this.y <= this.rangoMov.hastaY)) {
      this.y += this.velocidad;
    } else {
    this.velocidad *= -1;
      this.y += this.velocidad;
    }
  }
  if (this.eje == 'H') {
    if ((this.x >= this.rangoMov.desdeX) && (this.x <= this.rangoMov.hastaX)) {
      this.x += this.velocidad;
    } else {
    this.velocidad *= -1;
      this.x += this.velocidad;
    }
  };
};


/* metodos para el movimiento y el ataque */
ZombieConductor.prototype.atacar = function (jugador) {
  jugador.perderVidas(5);
}