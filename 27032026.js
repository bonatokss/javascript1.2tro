//  criar Array

const fila = [1,2,3,4,5,6,];

const filaStringAmigos = ["Renan Cabeçudo, Luiz Bigode, Luis Beiçudo, Pedro tcham, Rafa du Graul, Bob Zovudo"]

function lerAmigos(filaStringAmigos){
    console.log(`Voce tem ${filaStringAmigos.lenght} amigos`)
    for(let i = 0; i < filaStringAmigos.length;i++){
     console.log(filaStringAmigos[i])
     if(filaStringAmigos[i] === "Bob Zovudo"){
        console.log(`Index do seu melhor amigo`)

     }
}    