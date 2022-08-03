//travaux.html
const boutons = document.querySelectorAll('div.boutons p');

for (let bouton of boutons) {
    bouton.addEventListener("click", selectionner);
}

function selectionner(e){
    // changement du visuel du bouton
    if (e.target.classList.contains("actif")) {
        e.target.classList.remove("actif");
    }
    else {
        e.target.classList.add("actif");
    }
    // disparition des div.travail
    const divTravail = document.querySelectorAll('div.travail');
    for (let div of divTravail) {
        div.style.display = 'none';
    }
    // affichage des div.travail correpondantes aux boutons .actif
    const enseignementsActifs = document.querySelectorAll('div#enseignement div.boutons p.actif');
    const promotionsActifs = document.querySelectorAll('div#promotion div.boutons p.actif');
    const boutonsActifs = document.querySelectorAll('div.boutons p.actif');
    // si aucun bouton n'est actif
    if (enseignementsActifs.length + promotionsActifs.length == 0) {
        // réaffichage de toutes les div
        for (let div of divTravail) {
            div.style.display = 'flex';
        }
    }
    // sinon : au moins un bouton est actif
    else {
        // pour chacune des div
        for (let div of divTravail) {
            const infos = div.querySelectorAll('div.haut p');
            const enseignement = infos[0].innerHTML;
            const promotion = infos[1].innerHTML;
            // si le filtre porte sur l'enseignement et la promotion
            if (enseignementsActifs.length >= 1 && promotionsActifs.length >= 1){
                let bonEnseignement = false;
                let bonnePromotion = false;
                for (let enseignementActif of enseignementsActifs){
                    if (enseignementActif.innerHTML == enseignement){
                        bonEnseignement = true;
                    }
                }
                for (let promotionActif of promotionsActifs){
                    if (promotionActif.innerHTML == promotion){
                        bonnePromotion = true;
                    }
                }
                if (bonEnseignement == true && bonnePromotion == true){
                    div.style.display = 'flex';
                }
            }
            // si le filtre porte sur l'enseignement ou la promotion
            else{
                for (let boutonActif of boutonsActifs) {
                    if (boutonActif.innerHTML == enseignement || boutonActif.innerHTML == promotion) {
                        div.style.display = 'flex';
                    }
                }
            }
        }
    }
}

/************************************************************************************entretiens.html*/
// au clic sur une div. entretien affichage de la div.detail correspondante

const entretiens = document.querySelectorAll('div.entretien');
for (let entretien of entretiens) {
    entretien.addEventListener("click", afficherDetailEntretien);
}

function afficherDetailEntretien(e) {
    const classe = e.currentTarget.classList[1];
    const divDetail = document.querySelector('div.detail.'+ classe);
    divDetail.style.display = 'flex';
}

// au clic sur une div.detail cacher la div.detail cliquée

const details = document.querySelectorAll('div.detail');
for (let detail of details) {
    detail.addEventListener("click", cacherDetailEntretien);
}

// au clic sur une croix cacher les div.detail

const fermetures = document.querySelectorAll('p.fermer');
for (let fermeture of fermetures) {
    fermeture.addEventListener("click", cacherDetailEntretien);
}

function cacherDetailEntretien(e) {
    // e.target.style.display = 'none'; permettait de cacher la div cliquée
    const divDetail = document.querySelectorAll('div.detail');
    for (let div of divDetail) {
        div.style.display = 'none';
    }
}