// imports
import {Patientes} from "./patientes.js"
import {Doctor,chat} from "./doctor.js"
import {Pharmacie, cimetiere} from "./pharmacie.js"

//  instances patientes
let patiente1 = new Patientes ("Marca","Mal indenté", 100, [], "malade", "");
let patiente2 = new Patientes ("Optimae","unsave", 200, [] , "malade", "");
let patiente3 = new Patientes ("Sangoka", "404", 80, [], "malade", "");
let patiente4 = new Patientes ("DarthVother", "azmatique", 110, [], "malade","");
let patiente5 = new Patientes ("Semicolon", "synthaxError", 60, [], "malade","");

// instance Doctor
let doctor = new Doctor ("Docteur Debuggeuse", 0, [chat],[])

// instance pharmacie
 export let pharma = new Pharmacie ("PharmaThéo",[], 0)




// aller chez le docteur
patiente1.goTo(doctor)
patiente2.goTo(doctor)
patiente3.goTo(doctor)
patiente4.goTo(doctor)
patiente5.goTo(doctor)
console.log(`Il y a ${doctor.lieu.length} patientes qui attendent dans la salle d'attente du docteur`);

// // rentrer dans le cabinet du docteur 
// // avoir un traitement
// // faire sortir la patiente du cabinet

for (let i = 0; i<doctor.lieu.length; i++){

    doctor.patienTIn(Patientes[i-1])
    doctor.diagnostic(patiente1)
    doctor.patientOut(Patientes[i-1])
    
}
// le chat miaule toutes les 2 secondes
chat.miauler()
// les patientes vont une par une à la pharmacie
patiente1.goTo(pharma)
patiente2.goTo(pharma)
patiente3.goTo(pharma)
patiente4.goTo(pharma)
patiente5.goTo(pharma)


// payer le traitement à la pharmacie et avoir le traitement dans sa poche ou mourrir au cimetière.

patiente1.paye("ctrl+maj+f", 60)
patiente2.paye("saveOnFocusChange", 100)
patiente3.paye("CheckLinkRelation", 35)
patiente4.paye("Ventoline", 40)
patiente5.paye("f12+doc", 20)

// guérrison (prendre les médicaments si on avait l'argent pour l'acheter )
patiente1.takeCare()
patiente2.takeCare()
patiente3.takeCare()
patiente4.takeCare()
patiente5.takeCare()
 