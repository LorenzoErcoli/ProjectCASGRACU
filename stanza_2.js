var dmr_molla = 400;
var dimSera_molla = 10;
var w_point_molla = 1;
var ang_molla = 0;
var speed_molla = 0.5;
var spost_molla = 0;
var run = true

var inc = 1

pn_molla_start = [0,0] 
pn_molla = pn_molla_start

var w = window.innerWidth;
var h = window.innerHeight;
P0_molla = [w/2,h/2]

let graphics;

function setup_molla(){	

	graphics = createGraphics(w,h,WEBGL);	
	graphics.background(255)
	rotClock(ang_molla)
	prosp = random(-500, 500)


}

function draw_molla(){	





	// fill(0)
	rectMode(CENTER)
	console.log(ang_molla)
	rotClock_molla(ang_molla)

	pn_molla = [(P0_molla[0]+Pi_x_molla),(P0_molla[1]+Pi_y_molla)]
	
	

	graphics.camera(prosp, 0, prosp, 0, 1, 0, 0, 1, 0);

	
	graphics.stroke(0)
	graphics.translate(P0_molla[0]-pn_molla[0], P0_molla[1]-pn_molla[1], -spost_molla)
	graphics.strokeWeight(0.5)
	graphics.sphere(dimSera_molla)
	// ellipse(pn_molla[0],pn_molla[1],w_point_molla,)

	ang_molla = ang_molla + speed_molla

	spost_molla = spost_molla + 0.05


	image(graphics, 0, 0)

}


function rotClock_molla(ang_m){

	Pi_x_molla = (dmr_molla/2 * cos(radians(ang_m)))
	Pi_y_molla = (dmr_molla/2 * sin(radians(ang_m)))

}