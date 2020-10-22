class Dado{
    lanzarDado(){
    return Math.ceil(Math.random()*6);
    }
}
class Jugador{  
    constructor(nombre){
        this.nombre=nombre;
        this.posicion=0;
    }
    avanzar(num){
        this.posicion+=num;
    }
}
class Tablero{
    verCasilla(casilla){
        switch (casilla){
            case 5: //escalera 1
                return 34;
            case 7: //escalera 2
                return 36;
            case 9: //escalera 3
                return 31;
            case 13: //escalera 4
                return 52;
            case 20: //escalera 5
                return 23;
            case 33: //serpiente 1
                return 10;
            case 40: //serpiente 2
                return 17;
            case 43: //escalera 6
                return 87;
            case 60: //serpiente 3
                return 3;
            case 60: //serpiente 4
                return 3;
            case 63: //serpiente 5
                return 25;
            case 68: //escalera 7
                return 97;
            case 70: //escalera 8
                return 89;
            case 74: //escalera 9
                return 92;
            case 79: //serpiente 6
                return 41;
            case 80: //escalera 10
                return 98;
            case 93: //serpiente 7
                return 50;
            case 95: //serpiente 8
                return 47;
            case 99: //serpiente 9
                return 77;
            default:
                return casilla;
        }
    }
}
let tablero = new Tablero;
let dado = new Dado;
let jugador1 = new Jugador('Karla');
let jugador2 = new Jugador('Loki');
for (let i=0;jugador1.posicion<100&&jugador2.posicion<100;i++){
        jugador1.avanzar(dado.lanzarDado());
        jugador1.posicion=tablero.verCasilla(jugador1.posicion);
        jugador2.avanzar(dado.lanzarDado());
        jugador2.posicion=tablero.verCasilla(jugador2.posicion);
        console.log(`${jugador1.nombre} esta en la casilla ${jugador1.posicion}, ${jugador2.nombre} esta en la casilla ${jugador2.posicion}`);
        console.log('--------------------------------------------------------');
}
if (jugador1.posicion>=100){
    console.log(`${jugador1.nombre} es la ganadora`);
} else if (jugador2.posicion>=100){
    console.log(`${jugador2.nombre} es el ganador`);
} 