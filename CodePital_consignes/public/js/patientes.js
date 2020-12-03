import {pharma} from "./main.js"
import {cimetiere } from "./pharmacie.js";

export class Patientes{
    constructor (nom, maladie,argent, poche, etat, traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat = etat;
        this.traitement = traitement;
    }

    // aller chez le docteur et à la pharmacie
    goTo (a){
        a.lieu.push(this)
        console.log(`${this.nom} va chez ${a.nom}`);
    }

    // payer le docteur et le médicament
    paye(a,b){
        switch (a){
            case "ctrl+maj+f":
                if(this.argent<b){
                    console.log("Vous n'avez pas d'argent et pas d'assurance maladie");
                    //l'envoyer au cimetière
                    cimetiere.lieu.push(this)
                    this.etat = "mort"
                    console.log("En raison de la non prise de vos médicaments, vous êtes morte et enterrée.");
                }
                else{
                    this.argent -= b
                    pharma.caisse += b
                    console.log(`Vous avez plus que ${this.argent} euros`);
                    this.poche.push(this.traitement)
                }
                break
            case "saveOnFocusChange":
                if(this.argent<b){
                    console.log("Vous n'avez pas d'argent et pas d'assurance maladie");
                    // l'envoyer au cimetière
                    cimetiere.lieu.push(this)
                    this.etat = "mort"
                    console.log("En raison de la non prise de vos médicaments, vous êtes morte et enterrée.");
                }else{
                    this.argent -= b
                    pharma.caisse += b
                    console.log(`Vous avez plus que ${this.argent} euros`);
                    this.poche.push(this.traitement)
                }
                break
                case "CheckLinkRelation":
                    if(this.argent<b){
                        console.log("Vous n'avez pas d'argent et pas d'assurance maladie");
                        // l'envoyer au cimetière
                        cimetiere.lieu.push(this)
                    this.etat = "mort"
                    console.log("En raison de la non prise de vos médicaments, vous êtes morte et enterrée.");
                }else{
                    this.argent -= b
                    pharma.caisse += b
                    console.log(`Vous avez plus que ${this.argent} euros`);
                }
                this.poche.push(this.traitement)
                break
            case "Ventoline":
                if(this.argent<b){
                    console.log("Vous n'avez pas d'argent");
                // l'envoyer au cimetière
                    cimetiere.lieu.push(this)
                    this.etat = "mort"
                    console.log("En raison de la non prise de vos médicaments, vous êtes morte et enterrée.");
                }else{
                    this.argent -= b
                    pharma.caisse += b
                    console.log(`Vous avez plus que ${this.argent} euros`);
                    this.poche.push(this.traitement)
                }
                break
            case "f12+doc":
                if(this.argent<b){
                    console.log("Vous n'avez pas d'argent et pas d'assurance maladie.");
                    // l'envoyer au cimetière
                    cimetiere.lieu.push(this)
                    this.etat = "mort"
                    console.log("En raison de la non prise de vos médicaments, vous êtes morte et enterrée.");
                }else{
                    this.argent -= b
                    pharma.caisse += b
                    console.log(`Vous avez plus que ${this.argent} euros`);
                    this.poche.push(this.traitement)
                }
                break
            default:
                console.log("oups!");
        }

    }


    takeCare (){
        if (this.etat == "malade"){
            this.etat = "guéri"
            console.log(`${this.nom}, vous êtes guéri`);
        }else{
            console.log(`${this.nom}Paix à votre âme`);
        }

    }

}
