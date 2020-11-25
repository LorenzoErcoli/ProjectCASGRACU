//// VIZ MECCANISMO NAVIGAZIONE ////



var dmr = 400;
var w_point = 40

var w_index_point = 30
var add_wPoint = 12

var ang = 0

var random_speed


var movement = 2

path_stz = []

var stanza 
vornoi = false
var speed = 0.01;



var individuo = 2
var velocità
var prospettiva




function setup() {
	
	var w = window.innerWidth;
	var h = window.innerHeight;


	setup_Vornoi();
	setup_molla();

	createCanvas(w,h);

	
}




function draw() {

	if(stanza == 1){
		console.log("stanza1_draw")
		draw_Vornoi()
	}else if(stanza == 2){
		console.log("stanza3_draw")
		draw_molla()
	}else{
		background(0)
	}
	drawStanze()

	
	directionPoint()
	stateStz()
	indexPoint()


	ang = ang + speed
	if (ang > 359){
		ang = 0
	}

}






function drawStanze(){

	var w = window.innerWidth;
	var h = window.innerHeight;



	P0 = [w/2,h/2]


	p_s1 = [parseInt(P0[0])     , parseInt(P0[1]-dmr/2)]
	p_s2 = [parseInt(P0[0]+dmr/2), parseInt(P0[1])    ] 
	p_s3 = [parseInt(P0[0])     , parseInt(P0[1]+dmr/2)]
	p_s4 = [parseInt(P0[0]-dmr/2) , parseInt(P0[1])    ]

	


	if (stanza == 2){
		fill(255);

	}else{
		fill(255)
	}
	strokeWeight(2)
	stroke(0)
	
	// ellipse(P0[0],P0[1],w_point,w_point);

	
	ellipse(p_s1[0],p_s1[1],w_point,w_point);
	ellipse(p_s2[0],p_s2[1],w_point,w_point);
	ellipse(p_s3[0],p_s3[1],w_point,w_point);
	ellipse(p_s4[0],p_s4[1],w_point,w_point);

}



function directionPoint(){

	switch (movement) {
		case 1:
		  rotClock(ang)
		  break;
		case 2:
		  rotAnClock(ang);
		  break;
		case 3:
		  lineMove();
		}

	pn = [parseInt(P0[0]+Pi_x),parseInt(P0[1]+Pi_y)]

}





function stateStz(){
		///STANZA 1///

	if (pn[1] == p_s1[1]){
		// console.log("p_s1")
		// console.log(ang)
		movement = Math.floor(Math.random() * 3) + 1
		if(movement == 1){
			ang = 270
		}
		if(movement == 2){
			ang = 90
		}

		stanza = 1
		form_stz = "stz1"
		path_stz.push(form_stz);
		random_speed = Math.floor(Math.random() * 100)*0.05
	}

	///STANZA 2///

	if (pn[0] == p_s2[0]){
		// console.log("p_s2")
		// console.log(ang)
		movement = Math.floor(Math.random() * 3) + 1
		ang = 0

		stanza = 2
		form_stz = "stz2"
		path_stz.push("stz2");
		random_speed = Math.floor(Math.random() * 100)*0.05
	}

	///STANZA 3///

	if (pn[1] == p_s3[1]){
		// console.log("p_s3")
		// console.log(ang)
		movement = Math.floor(Math.random() * 3) + 1
		if(movement == 1){
			ang = 90
		}if(movement == 2){
			ang = 270
		}

		stanza = 3
		form_stz = "stz3"
		path_stz.push(form_stz);
		random_speed = Math.floor(Math.random() * 100)*0.05
	}

	///STANZA 4///

	if (pn[0] == p_s4[0]){
		// console.log("p_s4")
		// console.log(ang)
		movement = Math.floor(Math.random() * 3) + 1
		ang = 180

		stanza = 4
		form_stz = "stz4"
		path_stz.push(form_stz);
		random_speed = Math.floor(Math.random() * 100)*0.05
	}
}




function rotClock(ang){

	Pi_x = parseInt(dmr/2 * cos(radians(ang)))
	Pi_y = parseInt(dmr/2 * sin(radians(ang)))
}



function rotAnClock(ang){
	ang = ang + 90
	Pi_x = parseInt(dmr/2 * sin(radians(ang)))
	Pi_y = parseInt(dmr/2 * cos(radians(ang)))
}



function lineMove(){

	if(form_stz == "stz2"){
		Pi_x = Pi_x - speed*2
		Pi_y = 0
	}if(form_stz == "stz4"){
		Pi_x = Pi_x + speed*2
		Pi_y = 0
	}if(form_stz == "stz1"){
		Pi_x = 0
		Pi_y = Pi_y + speed*2
	}if(form_stz == "stz3"){
		Pi_x = 0
		Pi_y = Pi_y - speed*2
	}
}




function indexPoint(){


fill(255,0,0)
ellipse(pn[0],pn[1],w_index_point,w_index_point)

}




function residui(){

	n_pathStz = path_stz.length

	for(i=0; i <n_pathStz; i++){
		w_total_index_point = w_index_point + add_wPoint*n_pathStz;
		w_print_index_point = w_total_index_point - add_wPoint*i

		strokeWeight(5)

		if(path_stz[i] == "stz1"){
			stroke(255, 204, 0)
		}else if(path_stz[i] == "stz2"){
			stroke(255,0,0)
		}else if(path_stz[i] == "stz3"){
			stroke(255,255,0)
		}else{
			stroke(255,0,255)
		}
		ellipse(pn[0],pn[1],w_print_index_point,w_print_index_point)
}
}


function residui_variabili(){


}


