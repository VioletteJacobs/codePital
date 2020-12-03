export class Doctor{
    constructor (nom, argent, cabinet, lieu){
        this.nom = nom;
        this.argent = argent;
        this.cabinet= cabinet ;
        this.lieu = lieu;
    }
    // la patiente passe de la salle d'attente lieu au cabinet de consultation
    patienTIn (){
        // tant qu'il y a des patientes dans lieu 
        // for (let i = 0; i < this.lieu.length; i++){
            // le doctor prend une petiente une par une
            if (this.cabinet.length<=1){
                // une patiente peut rentrer
                console.log(`Bonjour ${this.lieu[0].nom}, merci d'avoir patienter.Vous pouvez rentrer dans le cabinet de ${this.nom}`);
                this.cabinet.push(this.lieu[0])
                this.lieu.shift()
            }else{
                console.log("Attendez, il y a déjà une patiente dans le cabinet.");
            }

        // }

    }
    // méthode permettant l'obtention d'un traitement.
    diagnostic (){
        // si la maladie est... alors le traitement est ...
        switch (this.cabinet[1].maladie){
            case "Mal indenté":
                // diagnostiquer
                console.log(`Malheureusement ${this.cabinet[1].nom}, vous êtes "${this.cabinet[1].maladie}"`)
                // payer le docteur
                console.log("Si vous voulez guérrir, ça fera 50 euros");
                this.cabinet[1].argent -= 50
                this.argent += 50
                console.log(`Il vous reste ${this.cabinet[1].argent} euros`);
                // donner le traitement
                this.cabinet[1].traitement = "ctrl+maj+f"
                console.log(`Vous devez prendre "${this.cabinet[1].traitement}" pour vous soigner`);
                break;

            // maladie2
            case "unsave":
                // diagnostiquer
                console.log(`Malheureusement ${this.cabinet[1].nom}, vous êtes "${this.lieu[1].maladie}"`)
                // payer le docteur
                console.log("Si vous voulez guérrir, ça fera 50 euros");
                this.cabinet[1].argent -= 50
                console.log(`Il vous reste ${this.cabinet[1].argent} euros`);
                // donner le traitement
                this.cabinet[1].traitement = "saveOnFocusChange"
                console.log(`vous devez prendre ${this.cabinet[1].traitement} pour vous soigner`);
                break;
            // maladie3
            case "404":
                // diagnostiquer
                console.log(`Malheureusement ${this.cabinet[1].nom}, vous êtes "${this.cabinet[1].maladie}"`)
                // payer le docteur
                console.log("Si vous voulez guérrir, ça fera 50 euros");
                this.cabinet[1].argent -= 50
                console.log(`Il vous reste ${this.cabinet[1].argent} euros`);
                // donner le traitement
                this.cabinet[1].traitement = "checkLinkRelation"
                console.log(`vous devez prendre ${this.cabinet[1].traitement} pour vous soigner`);
                break;
            // maladie4
            case "azmatique":
                // diagnostiquer
                console.log(`Malheureusement ${this.cabinet[1].nom}, vous êtes "${this.cabinet[1].maladie}"`)
                // payer le docteur
                console.log("Si vous voulez guérrir, ça fera 50 euros");
                this.cabinet[1].argent -= 50
                console.log(`Il vous reste ${this.cabinet[1].argent} euros`);
                // donner le traitement
                this.cabinet[1].traitement = "Ventoline"
                console.log(`vous devez prendre ${this.cabinet[1].traitement} pour vous soigner`);
                break;
            // maladie5
            case "syntaxError":
                // diagnostiquer
                console.log(`Malheureusement ${this.cabinet[1].nom}, vous êtes "${this.cabinet[1].maladie}"`)
                // payer le docteur
                console.log("Si vous voulez guérrir, ça fera 50 euros");
                this.cabinet[1].argent -= 50
                console.log(`Il vous reste ${this.cabinet[1].argent} euros`);
                // donner le traitement
                this.cabinet[1].traitement = "f12+doc"
                console.log(`vous devez prendre ${this.cabinet[1].traitement} pour vous soigner`);
                break;
            default:
                console.log("oups, maladie inconnue");
        }

    }
    // on passe de cabinet à lieu (salle d'attente)
    patientOut (){
        this.lieu.push(this.cabinet[1])
        this.cabinet.splice(this.lieu[1],1);
        console.log("Allez à la pharmacie maintenant pour avoir votre traitement. Aurevoir, j'ai d'autres patientes.");
    }
}
// création du chat pour pouvoir le faire miauler dans le cabinet toutes les deux secondes.
 export let chat = {
    race: "sphynx",
    miauler (){
        setInterval (()=>{
            console.log("Miaaaouw");
        },2000)

    },
}
