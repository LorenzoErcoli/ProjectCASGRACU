var dmr_molla = 800;
var dimSera_molla = 30;
var w_point_molla = 1;
var ang_molla = 0;
var speed_molla_start = 0.2;
var spost_molla = 0;
var run = true



var raggio_bin_molla = 1300
var ang_bin_molla_start = Math.random() * 360

var point_list_molla = []

var inc = 1

pn_molla_start = [0,0] 
pn_molla = pn_molla_start

var draw_save_molla = false

///

start_prosp_x = Math.floor(Math.random() * 1000) +1000
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



	////VARIABILI////

	speed_molla = speed_molla_start + (int(var_vel)/100);

	delta_spost_molla = speed_molla/dimSera_molla*7 + (var_ind/1000)

	ang_bin_molla = ang_bin_molla_start + var_prosp



	binarioProsp()


}

function draw_molla(){	




	// fill(0)
	rectMode(CENTER)
	rotClock_molla(ang_molla)


	graphics.camera(wiew_cam[0]+Pi_bin_x, 0, wiew_cam[2]+Pi_bin_z, wiew_cam[0], 0, wiew_cam[2], 0, 1, 0);	
	graphics.stroke(color_molStroke)
	graphics.fill(color_molSph);

	if (draw_save_molla == true){
		printSaveMolla()
	} else{
		pn_molla = [(P0_molla[0]+Pi_x_molla),(P0_molla[1]+Pi_y_molla),(spost_molla)]
		push();
		graphics.translate(P0_molla[0]-pn_molla[0], P0_molla[1]-pn_molla[1], -pn_molla[2])
		graphics.strokeWeight(0.1)
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
		graphics.strokeWeight(0.1)
		graphics.sphere(dimSera_molla)
		graphics.translate(-pn_sel_molla[0], -pn_sel_molla[1], -pn_sel_molla[2])
		pop();


	}




	draw_save_molla = false



}

function binarioProsp(){

	if (point_list_molla.length > 0){
	draw_save_molla = true
	}

	len_molla = point_list_molla.length
	wiew_cam = point_list_molla[len_molla-1]

	if (len_molla == 0){
	 wiew_cam = [0,0,0]
	}

	Pi_bin_x = parseInt(raggio_bin_molla * cos(radians(ang_bin_molla)))
	Pi_bin_z = parseInt(raggio_bin_molla * sin(radians(ang_bin_molla)))




}






