//calcolo biglietto treno










//prezzo del biglietto



//il programma decide se è minorenne o over 65

let buttonGen = document.getElementById("buttongen");
buttonGen.addEventListener(`click`,

    function(){

        // nome e cognome passeggero
        const userAge = document.getElementById("age");
        let age = userAge.value;
        console.log(age);

        // età passeggero
        const userName = document.querySelector(".name");
        let name = userName.value;
        console.log(userName);

        // numero di chilometri
        const userKm = document.querySelector(".km");
        let km = parseInt(userKm.value);
        console.log(km);

        let price = 0.21 * km;
        console.log(price);


        // sconto

        if(age == "min") {
            let discountTwenty = (price * 20)/ 100;
            total = price - discountTwenty;
            console.log ("Con Sconto: " + total + "€");
        
        }else if (age == "over"){
            let discountForty = (price * 40)/ 100;
            total = price - discountForty;
            console.log ("Con Sconto: " + total + "€");
        
        }else{
            total = price;
            console.log ("Senza sconto: " + total + "€");
        };


    }

)



// output con sole due cifre

// document.getElementById('title').innerHTML = 'Il costo del tuo biglietto è di: ' + parseFloat(total).toFixed(2) + '€';
