console.log("ciao")

var dmr_molla = 800;
var dimSera = 10;
var w_point = 1;
var ang_molla = 0;
var speed_molla = 0.1;
var spost = 0;


var inc = 1

var w = window.innerWidth;
var h = window.innerHeight;
P0 = [w/2,h/2]

let graphics;

function setup_molla(){	

	graphics = createGraphics(w,h,WEBGL);	
	graphics.background(255)



}

function draw_molla(){


	// fill(0)
	rectMode(CENTER)
	rotClock(ang_molla)

	graphics.camera(400, 200, 200, 1, 0, 0, 1, 0, 0);

	pn = [(P0[0]+Pi_x),(P0[1]+Pi_y)]
	graphics.stroke(0)
	graphics.translate(P0[0]-pn[0], P0[1]-pn[1], -spost)
	graphics.strokeWeight(0.5)
	graphics.sphere(dimSera)
	// ellipse(pn[0],pn[1],w_point,)

	ang_molla = ang_molla + speed_molla

	spost = spost + 0.01


	image(graphics, 0, 0)

}


function rotClock(ang_molla){

	Pi_x = (dmr_molla/2 * cos(radians(ang_molla)))
	Pi_y = (dmr_molla/2 * sin(radians(ang_molla)))

}