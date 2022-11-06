console.log('JS подключен к странице!')

if (window.jQuery) {	
	var verJquery = jQuery.fn.jquery;//jQuery подключен!
	console.log('jQuery подключен к странице!', verJquery)} //версию jQuery в консоль
else {console.log('jQuery НЕ подключен к странице!')}

//<img src="static/images/card_deck/ACE_C.jpg" alt="Картинка 3" />
//<button id="btn1">[-- HIT --]</button>

// CD - Card Deck
const CD = [
'ACE_A','ACE_B','ACE_C','ACE_D',
'KNG_A','KNG_B','KNG_C','KNG_D',
'QEN_A','QEN_B','QEN_C','QEN_D',
'JCK_A','JCK_B','JCK_C','JCK_D',
'TEN_A','TEN_B','TEN_C','TEN_D',
'NIN_A','NIN_B','NIN_C','NIN_D',
'ETH_A','ETH_B','ETH_C','ETH_D',
'SEV_A','SEV_B','SEV_C','SEV_D',
'SIX_A','SIX_B','SIX_C','SIX_D',
'FIV_A','FIV_B','FIV_C','FIV_D',
'FOR_A','FOR_B','FOR_C','FOR_D',
'TRE_A','TRE_B','TRE_C','TRE_D',
'TWO_A','TWO_B','TWO_C','TWO_D'
]


const images = document.images;

var limit_i = 0
var rcard = []

$(function(){
    $("#btn1").click(function(){ 
        //$(this).css('background-color', 'red');
        //alert('Мир jQuery!');
        console.log('Pressed HIT!'); 

        if(limit_i == 0){
        	// RN - Random Nambers List
        	var RN = []
        	for (var i=0; i<5;i++){

        		RN.push(Math.floor(Math.random() * 51) + 1)
        	}

        	//RN = Math.floor(Math.random() * 51) + 1
			
			console.log(RN); 

        	rcard = [CD[RN[0]], CD[RN[1]], CD[RN[2]], CD[RN[3]], CD[RN[4]], ]
        }

        if(limit_i == 5){console.log('Card LIMITED!')}

        else{limit_i += 1;


        	
        

			for(var i=0; i<limit_i;i++){
				console.log('limit_i:', i, `Show Card Index ${i}`);
				if(i == 0){images[0].src=`static/images/card_deck/${rcard[0]}.jpg`;}
				if(i == 1){images[1].src=`static/images/card_deck/${rcard[1]}.jpg`;}	
				if(i == 2){images[2].src=`static/images/card_deck/${rcard[2]}.jpg`;}
				if(i == 3){images[3].src=`static/images/card_deck/${rcard[3]}.jpg`;}
				if(i == 4){images[4].src=`static/images/card_deck/${rcard[4]}.jpg`;}
			}
		}	
			/*	
			images[0].src="static/images/card_deck/KNG_A.jpg";
			images[1].src="static/images/card_deck/TEN_D.jpg";		
			images[2].src="static/images/card_deck/ACE_C.jpg";
			images[3].src="static/images/card_deck/TWO_A.jpg";
			images[4].src="static/images/card_deck/FIV_B.jpg";
			*/
		    //images[i].src="static/images/card_deck/ZER_0.jpg";
		      




    });
});

$(function(){
    $("#btn2").click(function(){ 
        //$(this).css('background-color', 'red');
        //alert('Мир jQuery!');
        console.log('Pressed SKIP!'); 
		
		for(var i=0; i<images.length;i++){
		    images[i].src="static/images/card_deck/ZER_0.jpg";
		}

		limit_i = 0

		rcard = []

    });
});
