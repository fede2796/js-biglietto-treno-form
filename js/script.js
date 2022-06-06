 const generatebutton = document.getElementById('generate-ticket');

 generatebutton.addEventListener('click',
    function(){
        //Inserisco nome//
        const username = document.getElementById('user-name').value;

        //Inserisco Km//
        const userkm = parseInt(document.getElementById('user-km').value);

        //Leggo l'età//
        const userage = document.getElementById('user-age').value;

        //Offerta//
        const useroffert = document.getElementById ('ticket-offerts').value;

        //Numero Carrozza//
        const usercarrozza = Math.floor(Math.random() * 10);

        //Codice CP//
        const codicecp = Math.floor(Math.random() * 10000);

        //Prezzo Biglietto//
        const price = userkm * 0.21;
        let discount = 0 ;

        //calcola prezzo//
        if(userage === 'minorenne'){
            discount = price * 20 / 100;
        }
        else if (userage === 'over'){
            discount = price * 40 / 100;
        }

        //Offerta//
        if(userage === 'minorenne'){
            const useroffert = document.getElementById ('ticket-offerts').value = 'Standard Minorenne';
        }
        else if(userage === 'over'){
            const useroffert = document.getElementById ('ticket-offerts').value = 'Standar Over';
        }
        else{
            const useroffert = document.getElementById ('ticket-offerts').value = 'Standard';
        }
        //Prezzo Finale//
        const finalprice = price - discount;

        document.getElementById('ticket-name').innerHTML = username;
        document.getElementById('ticket-price').innerHTML = finalprice.toFixed(2);
        document.getElementById('ticket-offerts').innerHTML = useroffert;
        document.getElementById('ticket-carrozza').innerHTML = usercarrozza;
        document.getElementById('ticket-codicecp').innerHTML = codicecp;
        document.getElementById('ticket').classList.add('active');
      
    }
    );

     const cancelticket = document.getElementById ('annulla');

     cancelticket.addEventListener('click',
        function(){
            document.getElementById('user-name').value = '' ;
            document.getElementById('user-km').value = '' ;
            document.getElementById('user-age').value = 'maggiorenne' ;

            document.getElementById('ticket').classList.add('disactive');
        }
     )