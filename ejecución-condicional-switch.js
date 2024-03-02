// switch(expresion) {
//     case valor1:
//         //codigo a ejecutar
//         break;
//     case valor2:
//         //codigo a ejecutar
//         break;
//     case valor3:
//         //codigo a ejecutar
//         break;
//     case valor4:
//         //codigo a ejecutar
//         break;
//     default;
//         // código
// }

let expr="Papayas";
switch(expr){ // ===
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo");
    break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo");
        break;
    case "Plátanos":
        console.log("El plátano esta en $30 el kilo");
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $ 25 pesos el kilo");
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`);
    }
        console.log("¿Hay algo más que desees?")
