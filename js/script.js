window.addEventListener("load", function () {
    const ecrans = document.querySelectorAll('[id^="ecran"]');
    const boutonsOk = [];
    const boutonsRetour = [];

    ecrans.forEach((ecran, index) => {
        if (index !== 0) {
            ecran.style.display = "none";
            const boutonRetour = document.getElementById(`btRetour${index + 1}`);
            boutonRetour.addEventListener("click", function () {
                ecran.style.display = "none";
                ecrans[index - 1].style.display = "block";
            });
            boutonsRetour.push(boutonRetour);
        }

        const boutonOk = document.getElementById(`btEcran${index + 1}`);
        boutonOk.addEventListener("click", function () {
            if (index === 1) {
                const nombreAnnonces = parseInt(document.getElementById('inputNb').value);
                if (nombreAnnonces > 0) {
                    ecrans[index + 1].style.display = "block";
                    ecran.style.display = "none";
                } else {
                    alert("Veuillez sélectionner au moins une annonce.");
                }
            } else {
                ecrans[index + 1].style.display = "block";
                ecran.style.display = "none";
            }
            const forfaits = document.querySelectorAll('.card');
            const boutonsOk = document.getElementById('btEcran1');
            let forfaitPrecedant= null;
        
            forfaits.forEach(forfait => {
                forfait.addEventListener("click", function () {
                    if (forfaitPrecedant!== null && forfaitPrecedant!== forfait) {
                        forfaitPrecedant.style.backgroundColor = "white";
                    }
                    if (forfait.style.backgroundColor === "red") {
                        forfait.style.backgroundColor = "white";
                        boutonsOk.disabled = true;
                        forfaitPrecedant= null;
                    } else {
                        forfait.style.backgroundColor = "red";
                        boutonsOk.disabled = false;
                        forfaitPrecedant= forfait;
                    }
                });
            });
        
        });
        boutonsOk.push(boutonOk);
    });

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener("click", function () {
            options.forEach(opt => {
                opt.style.backgroundColor = ""; // Réinitialiser toutes les options à leur couleur de fond par défaut
            });
            option.style.backgroundColor = "red"; // Mettre en surbrillance l'option sélectionnée en rouge
        });
    });
});
