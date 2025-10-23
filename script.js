alert("vamos a jugar piedra, papel o tijera 🪨📄✂️")
let jugador=prompt("Jugador 1 cual elijes")
let jugador2=prompt("Jugador 2 cual elijes")


if(jugador === "🪨" ||jugador === "📄" ||jugador === "✂️"){

    if((jugador === "🪨" && jugador2 ==="✂️")||
       (jugador === "📄" && jugador2 ==="🪨")||
       (jugador === "✂️" && jugador2 ==="📄")
    
     )alert ("Gane")

}else{
    alert ("Escogiste una opcion invalida 👨‍🦽")
}




