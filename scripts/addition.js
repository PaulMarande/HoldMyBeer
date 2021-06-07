function ajouter() {
    var myForm = document.forms.TheForm;
    var prenom = myForm["user_prenom"].value;
    var nom = myForm["user_nom"].value;
    var boissons = myForm['user_boissons'].selectedIndex;

    if (prenom != "" && nom != "" && boissons != 0) {
        let date1 = new Date();

        let dateLocale = date1.toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });

        document.querySelector('.date').innerHTML = dateLocale;

        if (boissons == 1) {
            var type_boissons = "Cocktail sans alcool";
            var prix = 2.5;
        }
        else if (boissons == 2) {
            var type_boissons = "Cocktail avec alcool";
            var prix = 3.5;
        }
        else if (boissons == 3) {
            var type_boissons = "Vin rouge";
            var prix = 3;
        }
        else if (boissons == 4) {
            var type_boissons = "Vin rosé";
            var prix = 2.5;
        }
        else if (boissons == 5) {
            var type_boissons = "Vin blanc";
            var prix = 3.0;
        }
        else if (boissons == 6) {
            var type_boissons = "Pinte de bière";
            var prix = 4.0;
        }
        else if (boissons == 7) {
            var type_boissons = "Demi-pinte de bière";
            var prix = 2.5;
        }
        else {
            var type_boissons = "Shot";
            var prix = 3.0;
        }
        var ticket = document.querySelector('.ticket');

        var buveur = ticket.querySelectorAll(".buveur");
        var identification = ticket.querySelectorAll(".identification");

        var temp = 0;
        var temp2 = 0;

        for (let i = 0; i < identification.length; i++) {
            if (identification[i].innerHTML == prenom + " " + nom) {
                let boissons_diff = buveur[i].querySelectorAll(".boisson");
                let boissons = buveur[i].querySelector(".boissons");
                for (let j = 0; j < boissons_diff.length; j++) {
                    let typeBoisson = boissons_diff[j].querySelector(".type_boisson");
                    let quantite = boissons_diff[j].querySelector(".chiffre");
                    if (type_boissons == typeBoisson.innerHTML) {
                        temp2 = 1
                        quantite.innerHTML = +(quantite.innerHTML) + 1;
                        prixBoisson = boissons_diff[j].querySelector(".chiffre2");

                        let ancien_prix = +(prixBoisson.innerHTML);
                        prixBoisson.innerHTML = "";
                        prixBoisson.insertAdjacentHTML("beforeend", ancien_prix + prix);
                    }

                }
                if (temp2 == 0) {
                    boissons.insertAdjacentHTML("beforeend", '<div class="boisson"><div class="quantite"><p class="chiffre">1</p>x</div><div class="type_boisson">' + type_boissons + '</div><div class="prix"><p class="chiffre2">' + prix + '</p>€</div></div>');
                }
                sousTotal = buveur[i].querySelector(".sous_total");
                ChsousTotal = sousTotal.querySelector(".chiffre3");
                let tmp = +(ChsousTotal.innerHTML);
                console.log(ChsousTotal);
                ChsousTotal.innerHTML = "";

                ChsousTotal.insertAdjacentHTML("beforeend", tmp + prix);
                temp = 1;
            }
        }
        if (temp == 0) {
            let ajout = ticket.querySelector(".ajouts");
            ajout.insertAdjacentHTML("beforeend", '<div class="buveur"><div class="identification">' + prenom + ' ' + nom + '</div><div class="boissons"><div class="boisson"><div class="quantite"><p class="chiffre">1</p>x</div><div class="type_boisson">' + type_boissons + '</div><div class="prix"><p class="chiffre2">' + prix + '</p>€</div></div></div><div class="ligne"></div><div class="sous_total"><span class="texte">Sous-total TTC : </span><span class="chiffre3">' + prix + '</span><span class="texte">€</span></div></div>');
        }

        var total = document.querySelector('.totalTTC');
        var tmp = total.querySelector('.chiffre');
        tmp.innerHTML = +(tmp.innerHTML) + (prix);
        var tva = document.querySelector('.tva');
        var tmp2 = tva.querySelector('.chiffre');
        tmp2.innerHTML = ((+(tmp.innerHTML) / 110) * 10).toFixed(2);
    }
}


function supprimer() {
    var ajout = document.querySelector(".ajouts");
    ajout.innerHTML = "";
}

var dot = document.querySelector(".point");
var body = document.querySelector("body")
dot.addEventListener('click', e => {
    body.classList.toggle('easterEgg');
})

var partage = document.querySelector(".partageons");
var shuffle = document.querySelector(".ticket")
partage.addEventListener('click', e => {
    shuffle.classList.toggle('easterEgg');
})
/*
partage.addEventListener('click', e => {
    aleatoire = Math.random() * (720 - 360 + 1) + 360;
    console.log(aleatoire);
    shuffle.setAttribute("style","transform : rotate("+aleatoire+"deg);");
})
*/

