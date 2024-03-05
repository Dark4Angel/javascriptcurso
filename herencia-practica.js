class Animal{
    constructor(nombre,tipo) {
        this.nombre = nombre;
        this.tipo=tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido");
    }
}
class Perro extends Animal {
    constructor(nombre,tipo,raza) {
        super(nombre,tipo);
        this.raza = raza;
    
}

    emitirSonido(){
        console.log("El perro ladra");
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perro1=new Perro("Bobby","Perro","Pug");
const perro2=new Perro("Merlino","Perro","Boxer");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

console.log(perro2);
perro2.correr();
perro2.emitirSonido();


perro1.nuevoMetodo=function(){
    console.log("Este es un metodo");
};


Perro.prototype.segundoMetodo = function() {
    console.log("Es otro nuevo metodo");
};


Animal.prototype.tercerMetodo = function() {
    console.log("Un metodo más");
};



