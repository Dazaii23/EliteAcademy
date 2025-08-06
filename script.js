
   
    let x = 5;
    if (x > 3) {
        console.log("Broj je veći od 3.");
    }

    
    for (let i = 0; i < 5; i++) {
        console.log("Vrednost i je: " + i);
    }

    
    let niz = [1, 2, 3, 4, 5];


    function saberi(a, b) {
        return a + b;
    }

    function pomnozi(a, b) {
        return a * b;
    }

    
    document.getElementById("myButton").addEventListener("click", function() {
        console.log("Dugme je kliknuto.");
    });

    document.getElementById("myInput").addEventListener("change", function() {
        console.log("Vrednost input polja je promenjena.");
    });

  
    document.getElementById("myElement").style.color = "red";

    
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        console.log("Ime: " + name + ", Email: " + email);
        <!-- Google tag (gtag.js) -->

</script>

    });

