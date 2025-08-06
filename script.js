
    // 1. Dodavanje kontrolne strukture (if ili if-else)
    let x = 5;
    if (x > 3) {
        console.log("Broj je veći od 3.");
    }

    // 2. Dodavanje petlje (for, while ili do-while)
    for (let i = 0; i < 5; i++) {
        console.log("Vrednost i je: " + i);
    }

    // 3. Kreiranje niza
    let niz = [1, 2, 3, 4, 5];

    // 4. Implementacija minimum dve funkcije sa ulaznim parametrima i povratnim vrednostima
    function saberi(a, b) {
        return a + b;
    }

    function pomnozi(a, b) {
        return a * b;
    }

    // 5. Dodavanje minimum dva događaja
    document.getElementById("myButton").addEventListener("click", function() {
        console.log("Dugme je kliknuto.");
    });

    document.getElementById("myInput").addEventListener("change", function() {
        console.log("Vrednost input polja je promenjena.");
    });

    // 6. Promena stila elemenata
    document.getElementById("myElement").style.color = "red";

    // 7. Preuzimanje podataka iz forme
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        console.log("Ime: " + name + ", Email: " + email);
    });