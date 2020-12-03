console.log("zootropio-in")

var temp_giro_zoo = 50
var speed_zoo = 150

var circo_zoo = temp_giro_zoo * speed_zoo
var raggio_c = circo_zoo/(2*3.14)

var ang_c = 0
var ang_b = 20

var numero_elementi = 1

var r_sfera = 100

var spost_centro = 320-(r_sfera/2)

var num = 1


var w = window.innerWidth;
var h = window.innerHeight;

let graphics_stz3

function setup_zoo(){

  var w = window.innerWidth;
  var h = window.innerHeight;

  element = random(2)
  console.log(element)

  
	graphics_stz3  = createGraphics(w,h,WEBGL)
  graphics_stz2  = createGraphics(w,h)

  // createCanvas(w,h,WEBGL)

}



function draw_zoo(){

  graphics_stz3.background(200)
  graphics_stz3.camera(0,0,1,0,0,0,0,1,0)
  create_element()


  // image(graphics_stz3, 0, 0)
  image(graphics_stz3, 0, 0)
}




function create_element(){

  push();
  rot_element(raggio_c,ang_c)
  graphics_stz3.translate(rot_x,rot_y, rot_z);
  graphics_stz3.rotateY(frameCount * 0.02);
  graphics_stz3.sphere(r_sfera);
  pop();

 ang_c = ang_c + 1
}


function create_element_2(){

  push();
  rot_element(raggio_c,ang_b)
  graphics_stz3.translate(rot_x,rot_y, rot_z);
  graphics_stz3.rotateY(frameCount * 0.02);
  graphics_stz3.sphere(r_sfera);
  pop();

   ang_b = ang_b + 1
}

function rot_element(raggio,ang){
  rot_x = raggio * cos(radians(ang))
  rot_y = 0
  rot_z = raggio * sin(radians(ang))

}