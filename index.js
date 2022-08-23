const writeCards = (array = ["Guadalupe", "Ollie", "Aki"])=>{
    const cardArray = [];for (const a of array){
        cardArray.push(`Thank you, ${a}, for the wonderful surprise gift!`);
}
    return cardArray;
}
function countDown(){
    let countdown = 10;
    while (countdown > 0){
        console.log(countdown--);
    }
    console.log(countdown);
}
