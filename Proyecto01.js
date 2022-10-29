let free = false;
const validarCliente=(time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if(edad >= 18){
        if(time >= 2 &&  time < 7 && free == false){
            alert("Puedes pasar gratis, por que eres la primera persona despues de las 2 am");
            free = true;
        }else{
            alert(`Son las ${time}:00 Hs ,puedes pasar pero debes pagar la entrada`);
        }

    }else{
        alert("Eres menor de edad no puedes pasar, MAQUINOLA!");
    }

}

validarCliente(3);


