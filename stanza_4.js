let list_mindRiff = []

var sizeText = 10

var interLine = sizeText*1.6

var marginLeft = 50

function setup_mindRiff(){


	textSize(sizeText);
	
	// list_mindRiff = list_mindRiff_inside
	
}


function draw_mindRiff(){
	background(1)
	drawList()
}




function drawList(){


	len_mindRiff = list_mindRiff.length

	for (el_mRiff = len_mindRiff; el_mRiff > 0; el_mRiff--){

		single_elementListRiff_s = list_mindRiff[el_mRiff-1]

		len_sing_el = single_elementListRiff_s.length
		console.log(len_sing_el)

		alt_blocco = interLine*(len_sing_el+1)

		fill("#ac80ff");
		text("––––––––––––––––––––––––––––––––––––––", marginLeft,  (interLine*1)+(alt_blocco*el_mRiff));
		text("ingresso:" + single_elementListRiff_s[0], marginLeft,   (interLine*2)+(alt_blocco*el_mRiff));
		text("var_ind: " + single_elementListRiff_s[1], marginLeft,   (interLine*3)+(alt_blocco*el_mRiff));
		text("var_prsop: " + single_elementListRiff_s[2], marginLeft, (interLine*4)+(alt_blocco*el_mRiff));
		text("var_vel: " + single_elementListRiff_s[3], marginLeft,   (interLine*5)+(alt_blocco*el_mRiff));
		text("––––––––––––––––––––––––––––––––––––––", marginLeft,  (interLine*6)+(alt_blocco*el_mRiff));

	}
}


function capture_stateMindRiff(){

	single_elementListRiff = [form_stz,var_ind,var_prosp,var_vel]

	len_mindRiff = list_mindRiff.length

	single_elementListRiff_c = list_mindRiff[len_mindRiff-1]


	if (len_mindRiff != 0){
		if (single_elementListRiff[0] != single_elementListRiff_c[0]){
			append(list_mindRiff,single_elementListRiff)
		}
	}else{
		append(list_mindRiff,single_elementListRiff)
		
	}

}

