#### PENSIERO ####

tempo_stanza = random(60,10000); 

tempo_att_perm = //il tempo che la stanza è stata attiva;
tempo_att_perm = "secondi che passano dall'inizio dell'attivazione"

nome_stanze = ["stanza1", "stanza2", "stanza3", "stanza4"]
numero_stanze = len(nome_stanze[])

stanza_destinazione = random(numero_stanze) //tempo perm nella stanza //

var residuo





function setup() {

size()
canvas()




}





function draw() {

	////// BLOCCO SISTEMA /////



/// Se il tempo di perm è minore del tempo stanza, allora continua a stare nella stanza
	if (tempo_stanza > tempo_att_perm){
	
	/// La funzione della stanza che devi attivare è il nome della stanza_destinazione
		switch(stanza_destinazione) {
	  		case //stanza1:
	  		stanza1()
	    	// code block
	    	break;
	  		case //stanza2:
	  		stanza2()
	    	// code block
	    	break;
	    	case //stanza3:
	    	stanza3()
	    	// code block
	    	break;
	    	case //stanza4:
	    	stanza4()
	    	// code block
	    	break;
	 		 default:
	    // code block
		}	
	}

/// se il tempo di perm è maggiore, allora:
/// cambi stanza 


	// la variabile residuo viene caturata all'uscita della stanza //
	residuo = stanza_destinazione() // return var residuo

	stanza_destinazione = random(numero_stanze)

	tempo_stanza = random(60,10000); // è un numero che va da 60 a 10000

	// esempio : tempo_stanza = 2000

	tempo_att_perm = 0


}





/// VIZ NAVIGAZIONE ////

/// icona dello spostamento tra una stz all'altra




////STANZA 1 ////

function stanza1(residuo){

// la var residuo modifichera parametri x della stanza //

//// azione della stanza ////

// la var residuo verrà restituita (return) con un valore diversa da quello d'entrata = newresiduo///

	return new_residuo
}

////STANZA 2 ////

function stanza2(residuo){}

////STANZA 3 ////

function stanza3(residuo){}

////STANZA 4 ////

function stanza4(residuo,){}




//// Sistema di accumulo, transizione, 






