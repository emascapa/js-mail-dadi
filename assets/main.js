
// array mail valide
const validMails = [
    'pippo@baudo.com',
    'will@smith.com',
    'pik@chu.com'
];


//variabile bottone submit
const mailChecker = document.getElementById('mail_checker');

const rowReturn = document.getElementById('row_message');

//funzione bottone submit al click
mailChecker.addEventListener('click', function () {
    //salvo valore inserito in input
    const userMail = document.getElementById('mail_form').value;

    //controllo se la mail corrisponde a una delle mail presenti
    for (let i = 0; i <= validMails.length; i++) {
        console.log(`siamo all'iterazione ${i}`);
        if (i < validMails.length) {
            //se la mail coincide con una delle mie mail faccio apparire un messaggio di avvenuto riconoscimento
            if (userMail === validMails[i]) {

                const successMessage = `
                <div >
                <span class="text-success ms-3">Mail Valida!</span>
                </div>
                `;

                rowReturn.insertAdjacentHTML('beforeend', successMessage);
                
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

            rowReturn.insertAdjacentHTML('beforeend', successMessage);

        }

    }
})




/* 
    //controllo se la mail corrisponde a una delle mail presenti
    for (let i = 0; i < validMails.length; i++) {
        //se la mail coincide con una delle mie mail faccio apparire un messaggio di avvenuto riconoscimento
        if (userMail === validMails[i]) {

            const successMessage = `
            <div >
            <span class="text-success ms-3">Mail Valida!</span>
            </div>
            `;

            rowReturn.insertAdjacentHTML('beforeend', successMessage);
            break
        } else {

        

        //se siamo all'ultima iterazione e la mail inserita non coincide faccio apparire un messaggio di non avvenuto riconoscimento
        if (i === validMails.length && userMail !== validMails[i]) {
            const successMessage = `
                <div >
                <span class="text-danger ms-3">Mail non presente in database!</span>
                </div>
                `;

            rowReturn.insertAdjacentHTML('beforeend', successMessage);

        }
    }
    }
})
 */

/* else {

            const successMessage = `
            <div >
            <span class="text-danger ms-3">Mail non presente in database!</span>
            </div>
            `;

            rowReturn.insertAdjacentHTML('beforeend', successMessage);
        } */