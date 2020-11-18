//// VIZ MECCANISMO NAVIGAZIONE ////

var d = 400;
var w_point = 40

var ang = 0

var speed =1.5
let videoElement;

function setup() {

	
	var w = window.innerWidth;
	var h = window.innerHeight;
	



	P0 = [w/2,h/2]


	p1 = [P0[0],P0[1]-d/2]
	p2 = [P0[0]+d/2,P0[1]] 
	p3 = [P0[0],P0[1]+d/2]
	p4 = [P0[0]-d/2,P0[1]]

	createCanvas(w,h);

	fill(0)
	// rect(0,0,w,h)
}

function draw() {

	let sc = second();
	console.log(sc)
	
	var w = window.innerWidth;
	var h = window.innerHeight;
	



	P0 = [w/2,h/2]


	p1 = [P0[0],P0[1]-d/2]
	p2 = [P0[0]+d/2,P0[1]] 
	p3 = [P0[0],P0[1]+d/2]
	p4 = [P0[0]-d/2,P0[1]]

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
	ovalrotate(ang)

	ang = ang + speed
}


function directionPoint(enter_stz,exit_stz){

	//from-to//
	///p1-p2///
	///p2-p3///
	///p3-p4///
	///p4-p1///
	///p1-p3///
	///p3-p1///
	///p2-p4///
	///p4-p2///
	///p1-p4///
	///p4-p3///
	///p3-p2///
	///p2-p1///

}

function ovalrotate(ang){

	Pi_x = d/2 * cos(radians(ang))
	Pi_y = d/2 * sin(radians(ang))

	ellipse(P0[0]+Pi_x,P0[1]+Pi_y,w_point,w_point);
}

function onVideoLoad() {
  // The media will not play untill some explicitly triggered.
  videoElement.autoplay(false);
  videoElement.volume(0);
  videoElement.size(100, 100);
}

function mouseClicked() {
  videoElement.play();
}