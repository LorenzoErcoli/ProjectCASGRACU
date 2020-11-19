//// VIZ MECCANISMO NAVIGAZIONE ////

var d = 400;
var w_point = 40

var w_index_point = 10
var w_sing_index_point 
var add_wPoint = 2
var ang = 0

var speed = 1
let videoElement;

var movement = 2

path_stz = []

function setup() {

	
	var w = window.innerWidth;
	var h = window.innerHeight;
	



	P0 = [w/2,h/2]


	p1 = [P0[0],P0[1]+d/2]
	p2 = [P0[0]+d/2,P0[1]] 
	p3 = [P0[0],P0[1]-d/2]
	p4 = [P0[0]-d/2,P0[1]]

	createCanvas(w,h);

	fill(0)
	// rect(0,0,w,h)
}

function draw() {

	let sc = second();
	// console.log(sc)
	
	var w = window.innerWidth;
	var h = window.innerHeight;
	



	P0 = [w/2,h/2]


	p1 = [parseInt(P0[0])     , parseInt(P0[1]-d/2)]
	p2 = [parseInt(P0[0]+d/2), parseInt(P0[1])    ] 
	p3 = [parseInt(P0[0])     , parseInt(P0[1]+d/2)]
	p4 = [parseInt(P0[0]-d/2) , parseInt(P0[1])    ]

	createCanvas(w,h);



	background(0)
	fill(0,255,0);
	noStroke()
	// ellipse(P0[0],P0[1],w_point,w_point);

	
	ellipse(p1[0],p1[1],w_point,w_point);
	ellipse(p2[0],p2[1],w_point,w_point);
	ellipse(p3[0],p3[1],w_point,w_point);
	ellipse(p4[0],p4[1],w_point,w_point);

	fill(0,0,255)
	directionPoint()
	stateStz()
	indexPoint()


	ang = ang + speed
	if (ang > 359){
		ang = 0
	}
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

	if (pn[1] == p1[1]){
		// console.log("p1")
		// console.log(ang)
		movement = Math.floor(Math.random() * 3) + 1
		if(movement == 1){
			ang = 270
		}
		if(movement == 2){
			ang = 90
		}

		form_stz = "stz1"
		path_stz.push(form_stz);
	}

	///STANZA 2///

	if (pn[0] == p2[0]){
		// console.log("p2")
		// console.log(ang)
		movement = Math.floor(Math.random() * 3) + 1
		ang = 0


		form_stz = "stz2"
		path_stz.push("stz2");
	}

	///STANZA 3///

	if (pn[1] == p3[1]){
		// console.log("p3")
		// console.log(ang)
		movement = Math.floor(Math.random() * 3) + 1
		if(movement == 1){
			ang = 90
		}if(movement == 2){
			ang = 270
		}

		form_stz = "stz3"
		path_stz.push(form_stz);
	}

	///STANZA 4///

	if (pn[0] == p4[0]){
		// console.log("p4")
		// console.log(ang)
		movement = Math.floor(Math.random() * 3) + 1
		ang = 180

		form_stz = "stz4"
		path_stz.push(form_stz);
	}
}




function rotClock(ang){

	Pi_x = parseInt(d/2 * cos(radians(ang)))
	Pi_y = parseInt(d/2 * sin(radians(ang)))
}



function rotAnClock(ang){
	ang = ang + 90
	Pi_x = parseInt(d/2 * sin(radians(ang)))
	Pi_y = parseInt(d/2 * cos(radians(ang)))
}



function lineMove(){

	if(form_stz == "stz2"){
		Pi_x = Pi_x - speed
		Pi_y = 0
	}if(form_stz == "stz4"){
		Pi_x = Pi_x + speed;
		Pi_y = 0
	}if(form_stz == "stz1"){
		Pi_x = 0
		Pi_y = Pi_y + speed
	}if(form_stz == "stz3"){
		Pi_x = 0
		Pi_y = Pi_y - speed
	}
}




function indexPoint(){

	n_pathStz = path_stz.length

	for(i=0; i <n_pathStz; i++){
		w_sing_index_point = w_index_point + add_wPoint*i
		fill(0,0,255)
		ellipse(pn[0],pn[1],w_sing_index_point,w_sing_index_point);
	}
}






