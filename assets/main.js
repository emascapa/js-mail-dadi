
// array mail valide
const validMails = [
    'pippo@baudo.com',
    'will@smith.com',
    'pik@chu.com'
];


//variabile bottone submit
const mailChecker = document.getElementById('mail_checker');

//variabile div in cui andrò a far comparire il messaggio
const rowReturn = document.getElementById('row_message');

//funzione bottone submit al click
mailChecker.addEventListener('click', function () {
    //salvo valore inserito in input
    const userMail = document.getElementById('mail_form').value;

    //controllo se la mail corrisponde a una delle mail presenti
    for (let i = 0; i <= validMails.length; i++) {
        
        if (i < validMails.length) {
            //se la mail coincide con una delle mie mail faccio apparire un messaggio di avvenuto riconoscimento
            if (userMail === validMails[i]) {

                const successMessage = `
                <div >
                <span class="text-success ms-3">Mail Valida!</span>
                </div>
                `;

                rowReturn.innerHTML = successMessage;

                console.log(`trovata mail corrispondente all'iterazione ${i}`);


                //quindi interrompo il ciclo 
                break;
            }
        }
        //se siamo all'ultima iterazione significa che la mail inserita non corrisponde a nessuna delle presenti, quindi faccio comparire il messaggio di errore
        else {
            const successMessage = `
                <div >
                <span class="text-danger ms-3">Mail non presente in database!</span>
                </div>
                `;

            rowReturn.innerHTML = successMessage;
            console.log(`siamo all'ultima iterazione e la mail non corrisponde a nessuna di quelle presenti nel database`);
        }

    }
})


//pulsante dadi in variabile
const diceGenerator = document.getElementById('dice_generator');

//div finestra gioco dadi
const diceWindow = document.getElementById('dice_div');

//div in cui andrò a visualizzare i dadi
const userDice = document.getElementById('user_dice');
const pcDice = document.getElementById('pc_dice');

const gameResult = document.getElementById('game_result');

//azione al click del bottone
diceGenerator.addEventListener('click', function () {
    //cancello i vecchi colori dell'ultima partita
    gameResult.classList.remove('bg-warning');
    gameResult.classList.remove('bg-success');
    gameResult.classList.remove('bg-danger');

    //rendo la finestra del gioco visibile
    diceWindow.classList.add('d-block');

    //numero casuale utente
    const randomUserNumber = Math.floor((Math.random() * 6) + 1);
    console.log(`Numero utente: ${randomUserNumber}`);

    if (randomUserNumber === 1) {
        userDice.innerHTML = `<i class="fa-solid fa-dice-one"></i>`;
    } else if (randomUserNumber === 2) {
        userDice.innerHTML = `<i class="fa-solid fa-dice-two"></i>`;
    } else if (randomUserNumber === 3) {
        userDice.innerHTML = `<i class="fa-solid fa-dice-three"></i>`;
    } else if (randomUserNumber === 4) {
        userDice.innerHTML = `<i class="fa-solid fa-dice-four"></i>`;
    } else if (randomUserNumber === 5) {
        userDice.innerHTML = `<i class="fa-solid fa-dice-five"></i>`;
    } else {
        userDice.innerHTML = `<i class="fa-solid fa-dice-six"></i>`;
    }

    //numero casuale pc
    const randomPcNumber = Math.floor((Math.random() * 6) + 1);
    console.log(`Numero pc: ${randomPcNumber}`);


    if (randomPcNumber === 1) {
        pcDice.innerHTML = `<i class="fa-solid fa-dice-one"></i>`;
    } else if (randomPcNumber === 2) {
        pcDice.innerHTML = `<i class="fa-solid fa-dice-two"></i>`;
    } else if (randomPcNumber === 3) {
        pcDice.innerHTML = `<i class="fa-solid fa-dice-three"></i>`;
    } else if (randomPcNumber === 4) {
        pcDice.innerHTML = `<i class="fa-solid fa-dice-four"></i>`;
    } else if (randomPcNumber === 5) {
        pcDice.innerHTML = `<i class="fa-solid fa-dice-five"></i>`;
    } else {
        pcDice.innerHTML = `<i class="fa-solid fa-dice-six"></i>`;
    }


    //risultato del gioco
    if (randomUserNumber === randomPcNumber) {
        gameResult.innerHTML = `<h4 class="text-center py-3">Pareggione!</h4>`;
        gameResult.classList.add('bg-warning');
    } else if (randomUserNumber > randomPcNumber) {
        gameResult.innerHTML = `<h4 class="text-center py-3">Hai vinto tu!</h4>`;
        gameResult.classList.add('bg-success');
    } else {
        gameResult.innerHTML = `<h4 class="text-center py-3">Ha vinto il pc sry</h4>`;
        gameResult.classList.add('bg-danger');
    }


})



