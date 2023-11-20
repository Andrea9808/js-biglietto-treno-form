//calcolo biglietto treno

//prezzo del biglietto



//il programma decide se è minorenne o over 65

let buttonGen = document.getElementById("buttongen");
buttonGen.addEventListener(`click`,

    function(){

        // età passeggero
        const userAge = document.getElementById("age");
        let age = userAge.value;
        console.log(age);

        // nome e cognome passeggero
        const userName = document.querySelector(".name");
        let name = userName.value;
        console.log(name);

        // numero di chilometri
        const userKm = document.querySelector(".km");
        let km = parseInt(userKm.value);
        console.log(km);

        // prezzo
        let price = 0.21 * km;
        console.log(price);


        // sconto

        if(age === "min") {
            let discount = (price * 20)/ 100;
            total = price - discount;
            offerta = "Biglietto scontato del 20%"
            console.log ("Con Sconto: " + total + "€");
           
        }else if (age === "over"){
            let discount = (price * 40)/ 100;
            total = price - discount;
            offerta = "Biglietto scontato del 40%"
            console.log ("Con Sconto: " + total + "€");
        
        }else{
            total = price;
            offerta = "Biglietto Standard"
            console.log ("Senza sconto: " + total + "€");
        };

        let carrozza = Math.floor(Math.random() * 10) +1;
        let cp = Math.floor(Math.random() * 10000) +1;

        document.getElementById(`passenger`).innerHTML = name;
        document.getElementById('offerta').innerHTML = offerta;
        document.getElementById('carrozza').innerHTML = carrozza;
        document.getElementById('codice_cp').innerHTML = cp;
        document.getElementById('costo_biglietto').innerHTML = total.toFixed(2) + "€";
        document.getElementById('city').innerHTML = "Grottaglie (TA)";



        let boardingPass = document.getElementById('boarding-pass');
        boardingPass.classList.remove('d-none');
        

    }

);


let buttonNull = document.getElementById("buttonnull");
buttonNull.addEventListener(`click`,

    function () {
        
        document.getElementById(`passenger`).innerHTML = "";
        document.getElementById('offerta').innerHTML = "";
        document.getElementById('carrozza').innerHTML = "";
        document.getElementById('codice_cp').innerHTML = "";
        document.getElementById('costo_biglietto').innerHTML = "";
        document.getElementById('city').innerHTML = "";

       
        
        let boardingPass = document.getElementById('boarding-pass');
        boardingPass.classList.add('d-none');
    }

);



