//// VIZ MECCANISMO NAVIGAZIONE ////

let NUM = 3;

var dmr = 400;
var w_point = 25

var w_index_point = 15
var add_wPoint = 12

var ang = 0

var random_speed

var nav_viz 
var tviz_nav
var state_nav_viz = false
var tviz_NAV = 110


var movement = 2

path_stz = []



var stanza 
var speed = 0.5;

var individuo = 2
var velocità
var prospettiva

/// VARIABILI ///

var var_ind = 0
var var_prosp = 0
var var_vel = 0

var delta_var_ind = 0
var delta_var_prosp = 0
var delta_var_vel = 0

var min_var = -0.06
var max_var = 0.07




var change_var = false

var num_var = 2





//////////COLORI//////////////

var list_color = ["#282923", "#74705d", "#a6e22c", "#67d8ef", "#f92472", "#f8f8f2", "#ac80ff", "#fd9621", "#e7db74"]

// GRIGIO SCURO = #282923
// GRIGIO CHIARO = #74705d
// VERDE ACIDO = #a6e22c
// CELESTE = #67d8ef
// FUXIA = #f92472
// BIANCO SPORCO = #f8f8f2
// VIOLA = #ac80ff
// ARANCIO = #fd9621
// GIALLO CANARINO = #e7db74


///NAVIGAZIONE///

var color_navStzPoint = "#f8f8f2"
var color_navIndexPoint = "#f92472"
var color_navBackground = "f8f8f2"


///STZ 1 - VOORONOI///

var color_vorPoint  = "#fd9621"
var color_vorSpace = "#282923"
var color_vorBack = "#282923"


///STZ 2 - MOLLA///

var color_molSph = "#ac80ff"
var color_molBack = "#282923"


///STZ 3 - ZOO///

var color_zooElement = "#a6e22c"
var color_zooBack = "#282923"


///STZ 4 - RIFF///

var color_riffList
var color_riffBack
var font_riffText
var size_riffText



/////////////////////////////


function setup() {

	
	var w = window.innerWidth;
	var h = window.innerHeight;
	

	setup_Vornoi();
	setup_molla();
	setup_zoo();

	createCanvas(w,h);

	
}


function draw() {


	rand_nav_viz = int(random(0,900))
	nav_viz = int(random(0,900))

	if(stanza == 1){
		// console.log("stanza1_draw")
		draw_Vornoi()
	}else if(stanza == 2
		){
		draw_molla()
	}else if(stanza == 3){
		// console.log("stanza2_draw")
		draw_zoo()
	}else if (stanza == 4){
		draw_mindRiff()
		// console.log("stanza4_draw")

	}


	setStanze()

	
	directionPoint()
	stateStz()
	// status_var()
	viz_Nav()

	
	tviz_nav = tviz_nav +1

	ang = ang + speed
	if (ang > 359){
		ang = 0
	}



}


function viz_Nav(){

	if (nav_viz == rand_nav_viz){
		state_nav_viz = true
		tviz_nav = 0
	}

	if (state_nav_viz == true){

		background(color_navBackground)
		drawNav()

		if (tviz_nav == tviz_NAV){
		state_nav_viz = false
		}
		

	}
}




function setStanze(){

	var w = window.innerWidth;
	var h = window.innerHeight;



	P0 = [w/2,h/2]


	p_s1 = [parseInt(P0[0])     , parseInt(P0[1]-dmr/2)]
	p_s2 = [parseInt(P0[0]+dmr/2), parseInt(P0[1])    ] 
	p_s3 = [parseInt(P0[0])     , parseInt(P0[1]+dmr/2)]
	p_s4 = [parseInt(P0[0]-dmr/2) , parseInt(P0[1])    ]

	



	fill(color_navStzPoint)

	strokeWeight(0)
	stroke(0)
	
	// ellipse(P0[0],P0[1],w_point,w_point);

	
	

}



function drawNav(){

	ellipse(p_s1[0],p_s1[1],w_point,w_point);
	ellipse(p_s2[0],p_s2[1],w_point,w_point);
	ellipse(p_s3[0],p_s3[1],w_point,w_point);
	ellipse(p_s4[0],p_s4[1],w_point,w_point);

	fill(color_navIndexPoint)
	ellipse(pn[0],pn[1],w_index_point,w_index_point)

	textSize(13);
	fill("#74705d");
	text("var_ind:" + var_ind, 30, 800);
	text("var_prsop: " + var_prosp, 30,780);
	text("var_vel: " + var_vel, 30, 760);

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
		status_var()
		setup_Vornoi()
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
		setup_molla()
		status_var()
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
		setup_zoo();
		status_var()

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
		setup_mindRiff()
		status_var()
	}



	append_residuivariabili()
	rang_variabile(min_var,max_var)
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




function append_residuivariabili(){

	if(stanza == 1){
	var_ind = var_ind + delta_var_ind
	}else if(stanza == 2){
	var_prosp = var_prosp + delta_var_prosp
	}else if(stanza == 3){
	var_vel = var_vel + delta_var_vel
	}

}


function status_var(){
	console.log("var_ind - " + var_ind)
	console.log("var_prsop - " + var_prosp)
	console.log("var_vel - " +var_vel)
}

function rang_variabile(min_var,max_var){

	delta_var_vel = random(min_var,max_var)
	delta_var_ind = random(min_var,max_var)
	delta_var_prosp = random(min_var,max_var)
}



