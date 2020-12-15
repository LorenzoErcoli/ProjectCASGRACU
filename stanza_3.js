var r_sfera = 100
var spost_centro = 320-(r_sfera/2)


var temp_giro_zoo = 50
var speed_zoo = 300

var ang_el = 0


///VARIABILI///

var vel_zooElement_start = (Math.random() * 0.35) +0.05
var numero_elementi_start = 1
var setup_element = []
var list_setup_element = []



var w = window.innerWidth;
var h = window.innerHeight;


/// SET-IMGGRAPHICS
let graphics_stz3




function setup_zoo(){

  var w = window.innerWidth;
  var h = window.innerHeight;

  var ang_el = 0
  numero_elementi =  numero_elementi_start + int(var_ind)
  vel_zooElement =  vel_zooElement_start + (var_vel/100000);
  console.log(var_vel/100000)



  for(el = 0; el < numero_elementi; el++){
    var d_temp_giro_zoo = random(20,100)
    var d_speed_zoo = random(60,300)
    var d_ang_el = random(0,360)

    var d_circo_zoo = d_temp_giro_zoo * d_speed_zoo
    var d_raggio_c = d_circo_zoo/(2*3.14)


    setup_element = [d_raggio_c, d_ang_el]
    append(list_setup_element, setup_element)  
  }
	
  // console.log(list_setup_element)

  graphics_stz3  = createGraphics(w,h,WEBGL)

  
  // console.log("new - " + vel_zooElement)
  // createCanvas(w,h,WEBGL)

}



function draw_zoo(){

  graphics_stz3.background(color_zooBack)
  graphics_stz3.camera(0,0,1,0,0,0,0,1,0)

  for (ne = 0; ne < numero_elementi; ne++){
  create_element()
  }

  // image(graphics_stz3, 0, 0)
  image(graphics_stz3, 0, 0)
}




function create_element(){


  select_element = list_setup_element[ne]
  push();
  graphics_stz3.stroke(color_zooElement)
  rot_element(select_element[0],ang_el + (select_element[1]))
  graphics_stz3.translate(rot_x,rot_y, rot_z);
  // graphics_stz3.rotateY(frameCount * 0.02);
  graphics_stz3.sphere(r_sfera);
  graphics_stz3.translate(-rot_x,-rot_y,-rot_z);
  pop();

 ang_el = ang_el + vel_zooElement

}



function rot_element(raggio,ang){

  rot_x = raggio * cos(radians(ang))
  rot_y = 0
  rot_z = raggio * sin(radians(ang))

}

