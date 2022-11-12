console.log('JS подключен к странице!')

if (window.jQuery) {	
	var verJquery = jQuery.fn.jquery;//jQuery подключен!
	console.log('jQuery подключен к странице!', verJquery)} //версию jQuery в консоль
else {console.log('jQuery НЕ подключен к странице!')}


const images = document.images;


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
'TWO_A','TWO_B','TWO_C','TWO_D',
'JKR_A','JKR_B'
];


var num_of_changes = 0

var stot_1 = false;
var stot_2 = false;
var stot_3 = false;
var stot_4 = false;
var stot_5 = false;

var user_bet = 0;
	console.log('User Bet:', user_bet );

// BET Buttons Block:
$(function(){	$("#bet-btn02").click(function(){ 
    		user_bet = 0; console.log('User Bet:', user_bet ); 
    		$("#user-bet").html('YOUR BET: '); 
			$("#user-bet").append(user_bet);
    	}); });


$(function(){	$("#bet-btn1").click(function(){ 
    		user_bet += 1; console.log('User Bet:', user_bet ); 
    		$("#user-bet").html('YOUR BET: '); 
			$("#user-bet").append(user_bet);
    	}); });	    

$(function(){	$("#bet-btn2").click(function(){ 
    		user_bet += 2; console.log('User Bet:', user_bet );
    		$("#user-bet").html('YOUR BET: '); 
			$("#user-bet").append(user_bet);
    	}); });	
	    
$(function(){	$("#bet-btn3").click(function(){ 
    		user_bet += 5; console.log('User Bet:', user_bet );  
    		$("#user-bet").html('YOUR BET: '); 
			$("#user-bet").append(user_bet);
    	}); });		

$(function(){	$("#bet-btn4").click(function(){ 
    		user_bet += 10; console.log('User Bet:', user_bet );  
    		$("#user-bet").html('YOUR BET: '); 
			$("#user-bet").append(user_bet);
    	}); });

$(function(){	$("#bet-btn5").click(function(){ 
    		user_bet += 25; console.log('User Bet:', user_bet );  
    		$("#user-bet").html('YOUR BET: '); 
			$("#user-bet").append(user_bet);
    	}); });	    						

$(function(){	$("#bet-btn6").click(function(){ 
    		user_bet += 50; console.log('User Bet:', user_bet );  
    		$("#user-bet").html('YOUR BET: '); 
			$("#user-bet").append(user_bet);
    	}); });	   

//---------------------------------------------------  	 

// PUSH Buttons Block:


$(function(){	$("#push-btn1").click(function(){ 
    	$(this).css('background-color', 'red');
    	stot_1 = true;
    	num_of_changes += 1
    	console.log('#push-btn1',stot_1)

    	}); });	 

$(function(){	$("#push-btn2").click(function(){ 
    	$(this).css('background-color', 'red');
    	stot_2 = true;
    	num_of_changes += 1
    	console.log('#push-btn2')

    	}); });	


$(function(){	$("#push-btn3").click(function(){ 
    	$(this).css('background-color', 'red');
    	stot_3 = true;  
    	num_of_changes += 1    	  	
    	console.log('#push-btn3')

    	}); });	

$(function(){	$("#push-btn4").click(function(){
    	$(this).css('background-color', 'red'); 
     	stot_4 = true;   
    	num_of_changes += 1     		
    	console.log('#push-btn4')

    	}); });

$(function(){	$("#push-btn5").click(function(){ 
    	$(this).css('background-color', 'red');
    	stot_5 = true;
    	num_of_changes += 1    	    	
    	console.log('#push-btn5')

    	}); });	

//---------------------------------------------------  	 

// HIT and STAND Buttons Block:

$(function(){	$("#hit-btn").click(function(){ 
    console.log('#hit-btn');


	console.log(num_of_changes);



	if(stot_1 == true){
		console.log("Change Card # 1 ");
		get_random_card(0)
	}


	if(stot_2 == true){
		console.log("Change Card # 2 ");
		get_random_card(1)
	}	

	if(stot_3 == true){
		console.log("Change Card # 3 ");
		get_random_card(2)		
	}	

	if(stot_4 == true){
		console.log("Change Card # 4 ");
		get_random_card(3)		
	}	
	if(stot_5 == true){
		console.log("Change Card # 5 ");
		get_random_card(4)
	}				


	



	drop_buttons()
 
	});
}); 


$(function(){	$("#stand-btn").click(function(){ 
    console.log('#stand-btn')
	
    drop_buttons()

	new_round();


	});	
}); 

$(function(){	$("#skip-btn").click(function(){ 
	drop_buttons()
	for (var i=0; i<5;i++){

		images[i].src = `static/images/card_deck/ZER_0.jpg`;
	}

	}); 
});



//---------------------------------------------------  	 

//NEW ROUND: Give 5 cards:

function drop_buttons(){

	getted_numbers = []

	$("#push-btn1").css('background-color','');
	$("#push-btn2").css('background-color','');
	$("#push-btn3").css('background-color','');
	$("#push-btn4").css('background-color','');
	$("#push-btn5").css('background-color','');

	num_of_changes = 0

    stot_1 = false;
	stot_2 = false;
	stot_3 = false;
	stot_4 = false;
	stot_5 = false;
}

var getted_numbers = []





function get_random_card(num_card){
	console.log('Get Random Card')
    
	var a = Math.floor(Math.random() * 53) + 1
	while (getted_numbers.includes(a)){
		console.log('!!!')
		var a = Math.floor(Math.random() * 53) + 1
	}

	console.log(a, CD[a] )
	images[num_card].src = `static/images/card_deck/${CD[a]}.jpg`;
	getted_numbers.push(a)
	console.log( getted_numbers )

}


function get_5_random_cards(){

	for (var i=0; i<5;i++){

		images[i].src = `static/images/card_deck/ZER_0.jpg`;
	}

	console.log('Get Random Card');

	

	for (var i=0; i<5;i++){
    	

		var a = Math.floor(Math.random() * 53) + 1
		while (getted_numbers.includes(a)){
			console.log('!!!')
			var a = Math.floor(Math.random() * 53) + 1
		}
		console.log(a, CD[a] )
		
		getted_numbers.push(a)
		console.log( getted_numbers )	
		}


	setTimeout('images[0].src = `static/images/card_deck/${CD[getted_numbers[0]]}.jpg`;', 1000);
	setTimeout('images[1].src = `static/images/card_deck/${CD[getted_numbers[1]]}.jpg`;', 1250);
	setTimeout('images[2].src = `static/images/card_deck/${CD[getted_numbers[2]]}.jpg`;', 1500);
	setTimeout('images[3].src = `static/images/card_deck/${CD[getted_numbers[3]]}.jpg`;', 1750);				
	setTimeout('images[4].src = `static/images/card_deck/${CD[getted_numbers[4]]}.jpg`;', 2000);
	}


function show_card(){
	console.log( 'wait,,' )	
	for (var i=0; i<5;i++){
		images[i].src = `static/images/card_deck/${CD[getted_numbers[i]]}.jpg`;
	}
}

function new_round(){
	console.log('function: new_round')
	console.log('NEW ROUND: Give 5 cards!')
    
    get_5_random_cards()	

}



//if(i == 0){images[0].src=`static/images/card_deck/${rcard[0]}.jpg`;}
//if(i == 1){images[1].src=`static/images/card_deck/${rcard[1]}.jpg`;}	
//if(i == 2){images[2].src=`static/images/card_deck/${rcard[2]}.jpg`;}
//if(i == 3){images[3].src=`static/images/card_deck/${rcard[3]}.jpg`;}
//if(i == 4){images[4].src=`static/images/card_deck/${rcard[4]}.jpg`;}