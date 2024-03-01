
/* const readline = require('readline-sync')


const numeroRandom = parseInt(Math.random()*100);
let valor = Number(readline.question(`¿Qué número crees que es?: `));
console.log(`${numeroRandom}`);
let numberValidation = false;
let numeroIntentos = 3;

function isNumber (valor) {
    while (numberValidation === false || valor > 100) {
        if (Number.isInteger(valor) && valor <= 100) {
            console.log(`Valor numérico`)
            numberValidation = true
        } else if (valor > 100) {
            console.log(`El valor ingresado es superior a 100, por favor ingresa un número más pequeño`);
            valor = parseInt(readline.question(`¿Qué número crees que es?: `));
        } else {
            console.log(`El valor ingresado no es un número entero, por favor ingresa un entero`);
            valor = parseInt(readline.question(`¿Qué número crees que es?: `));
        }
    }
}

function adivinaElNumero() {
    while (numeroRandom != valor && numeroIntentos > 1) {
        numeroIntentos--;
        console.log(`Te quedan ${numeroIntentos} intentos`)
        if (valor > numeroRandom) {
            console.log(`Te pasaste, prueba un número más pequeño`)
            valor = Number(readline.question(`¿Qué número crees que es?: `));
            isNumber(valor)
        } else {
            console.log(`Te fuiste muy bajito, prueba un número más grande`)
            valor = Number(readline.question(`¿Qué número crees que es?: `));
            isNumber(valor)
        }
    }

    function validarAcierto () {
        if (numeroRandom === valor) {
            console.log(`Acertaste el número era ${numeroRandom} 🎉`);
        } else {
            console.log (`Se te acabaron las oportunidades`);
        }
    }

    validarAcierto(); 
}

isNumber(valor);
adivinaElNumero(); */
//******************** */
/* const readline = require('readline');

const generateRandomNumber = () => (Math.random() * 10).toFixed();
const numbers = new Set();

// Generar números únicos
while (numbers.size < 10) {
    numbers.add(generateRandomNumber());
}
const winnerNumber = Array.from(numbers)[Math.floor(Math.random() * 10)];
let lives = 3;

const sleep = () => new Promise(resolve => setTimeout(resolve, 1500));

const printGameState = () => {
    console.clear();
    console.log(`Adivina el número 👉 ${Array.from(numbers).join(' ')}    ❤️  ${lives}`);
};

const handleIncorrectGuess = async (input, rl) => {
    console.log(`${input} es incorrecto 💀`);
    await sleep();
    lives--;
    rl.close();

    return main();
};

const handleCorrectGuess = (input) => {
    console.log(`Felicitaciones, el número ${input} es el ganador! 🥳🥳🥳`);
};

const main = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    printGameState();

    if (lives <= 0) {
        console.log('Tienes 0 vidas, más suerte para la próxima');
        process.exit(0);
    }

    rl.question('Ingrese número: ', async (input) => {
        console.log();

        if (!numbers.has(input)) {
            console.log(`No existe el número ${input} 🫤`);
            await sleep();
            lives--;
            rl.close();

            return main();
        } else if (input !== winnerNumber) {
            await handleIncorrectGuess(input, rl);
        } else {
            handleCorrectGuess(input);
        }

        await sleep();
        rl.close();
    });
};

main(); */

const { prompt } = require("readline-sync");


const numeroSecreto = Math.floor(Math.random() * 10+1);
console.log(`${numeroSecreto}`)
console.log("Adivina el número secreto entre el 1 al 10")
const numeroJugador = parseInt(
  prompt("Adivina el número secreto entre el 1 al 10")
  
);


console.log(`Este es el número con el que juegas ${numeroJugador}`);
if (numeroJugador === numeroSecreto) {
  console.log("¡Felicidades, adivinaste el número secreto!");
} else if (numeroJugador < numeroSecreto) {
  console.log("El número es demasiado bajo, intenta de nuevo");
} else {
  console.log("El número es muy alto, intenta de nuevo");
}