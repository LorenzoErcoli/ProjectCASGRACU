var dmr_molla = 400;
var dimSera_molla = 10;
var w_point_molla = 1;
var ang_molla = 0;
var speed_molla_start = 0.25;
var spost_molla = 0;
var delta_spost_molla = speed_molla_start/10
var run = true

var point_list_molla = []

var inc = 1

pn_molla_start = [0,0] 
pn_molla = pn_molla_start

var draw_save_molla = false

///
start_prosp_x = Math.floor(Math.random() * 1000) 
start_prosp_y = Math.floor(Math.random() * 500)
start_prosp_z = Math.floor(Math.random() * 600) 


///SETTAGGIO CANVAS

var w = window.innerWidth;
var h = window.innerHeight;

P0_molla = [w/2,h/2]

/// SET-IMGGRAPHICS
let graphics;





function setup_molla(){	

	graphics = createGraphics(w,h,WEBGL);	
	graphics.background(color_molBack)

	rotClock(ang_molla)

	speed_molla = speed_molla_start + (int(var_ind)/100);

	prosp_x = start_prosp_x + int(var_prosp)*10
	prosp_y = start_prosp_y 
	prosp_z = start_prosp_z + int(var_prosp)*10

	if (point_list_molla.length > 0){
		draw_save_molla = true
	}

}

function draw_molla(){	




	// fill(0)
	rectMode(CENTER)
	rotClock_molla(ang_molla)

	
	

	graphics.camera(prosp_x, prosp_y, prosp_z, 0, 1, 0, 0, 1, 0);	
	graphics.stroke(color_molSph)

	if (draw_save_molla == true){
		printSaveMolla()
	} else{
		pn_molla = [(P0_molla[0]+Pi_x_molla),(P0_molla[1]+Pi_y_molla),(spost_molla)]
		push();
		graphics.translate(P0_molla[0]-pn_molla[0], P0_molla[1]-pn_molla[1], -pn_molla[2])
		graphics.strokeWeight(0.5)
		graphics.sphere(dimSera_molla)
		pop();
		saveMolla()	
	}



	// ellipse(pn_molla[0],pn_molla[1],w_point_molla,)


	ang_molla = ang_molla + speed_molla
	spost_molla = spost_molla + delta_spost_molla


	image(graphics, 0, 0)

}


function rotClock_molla(ang_m){

	Pi_x_molla = (dmr_molla/2 * cos(radians(ang_m)))
	Pi_y_molla = (dmr_molla/2 * sin(radians(ang_m)))

}



function saveMolla(){

	s_px_molla = P0_molla[0]-pn_molla[0]
	s_py_molla = P0_molla[1]-pn_molla[1]
	s_pz_molla = -pn_molla[2]
	s_ang = ang_molla

	sing_points = [s_px_molla,s_py_molla,s_pz_molla,s_ang]
	append(point_list_molla, sing_points)


}


function printSaveMolla(){
 
	len_molla = point_list_molla.length

	for (point_sm = 0; point_sm< len_molla; point_sm ++){
		set_points_select = point_list_molla[point_sm]
		pn_sel_molla = [(set_points_select[0]),(set_points_select[1]),(set_points_select[2])]
		push();
		graphics.translate(pn_sel_molla[0], pn_sel_molla[1], pn_sel_molla[2])
		graphics.sphere(dimSera_molla)
		graphics.translate(-pn_sel_molla[0], -pn_sel_molla[1], -pn_sel_molla[2])
		pop();


	}




	draw_save_molla = false



}