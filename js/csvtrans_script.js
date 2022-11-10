console.log('JS подключен к странице!')

if (window.jQuery) {	
	var verJquery = jQuery.fn.jquery;//jQuery подключен!
	console.log('jQuery подключен к странице!', verJquery)} //версию jQuery в консоль
else {console.log('jQuery НЕ подключен к странице!')}


const morse_voc = {}

const dict = {


	'A': ".-",
	'B': "-...",
	'C': "-.-.",
	'D': "-..",
	'E': ".",
	'F': "..-.",
	'G': "--.",
	'H': "....",
	'I': "..",
	'J': ".---",	
	'K': "-.-",		
	'L': ".-..",	
	'M': "--",	
	'N': "-.",	
	'O': "---",	
	'P': ".--.",	
	'Q': "--.-",	
	'R': ".-.",	
	'S': "...",	
	'T': "-",	
	'U': "..-",	
	'V': "...-",	
	'W': ".--",	
	'X': "-..-",	
	'Y': "-.--",	
	'Z': "--..",	




	'a': ".-",
	'b': "-...",
	'c': "-.-.",
	'd': "-..",
	'e': ".",
	'f': "..-.",
	'g': "--.",
	'h': "....",
	'i': "..",
	'j': ".---",	
	'k': "-.-",		
	'l': ".-..",	
	'm': "--",	
	'n': "-.",	
	'o': "---",	
	'p': ".--.",	
	'q': "--.-",	
	'r': ".-.",	
	's': "...",	
	't': "-",	
	'u': "..-",	
	'v': "...-",	
	'w': ".--",	
	'x': "-..-",	
	'y': "-.--",	
	'z': "--..",	

	' ': "......",

	'0': "-----",
	'1': ".----",
	'2': "..---",
	'3': "...--",
	'4': "....-",

	'5': ".....",
	'6': "-....",
	'7': "--...",
	'8': "---..",
	'9': "----.",


	'.': ".-.-.-",
	')': "-.--.-",
	'"': "--..--..",
	':': "---...",
	'=': "-...-",	      
	'?': "..--..",	

	'!': "--..--",	
	'@': ".--.-.",	

	'+': ".-.-.",	
	'*': "-..-..-",	
	'-': "-....-",

	'/': "-..-.",

	'$': "...-..-",	
	'&': ".-...",			
 	'_': "..--.-",   
         
     

};


console.log('JS HALLO!')



let inputIn = document.querySelector('.input-in');


$(function () {
	$("#btn1").bind("click", function () {


		console.log('[-- LOAD --] HALLO!')


	    let user_input = inputIn.value;
	    console.log('Your input is:',user_input)
	    console.log(typeof user_input); 


		//$("#dvCSV1").html('[-- LOAD --] HALLO!');
		$("#dvCSV2").html('>>>: ');
		$("#dvCSV2").append(user_input);

		ProcUserInput(user_input) // Вызов Функции Обработчика Юзерского Сообщения

	});
});



function ProcUserInput(user_input) {
	console.log('ProcUserInput() HALLO!')	
	console.log('ProcUserInput()', user_input)	

	console.log(`В строке "${user_input}"  ${user_input.length} символов`)

	const messageParts = user_input.split(" ");
	console.log(messageParts);

	var encode_message = ''
	
	for(ch of user_input){
      
    	//console.log(ch);
    	//console.log(dict[ch]);
    	encode_message += dict[ch] + ' ';

	}

	console.log(encode_message);
	//$("#dvCSV3").html('>>> ');
	$("#dvCSV3").html(encode_message);

}


/*

    $(function () {
        $("#upload").bind("click", function () {


            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
            if (regex.test($("#fileUpload").val().toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    console.log(regex)

                    var reader = new FileReader();

                    reader.onload = function (e) {

                    	console.log(e)

                        var table = $("<table />");

                        var rows = e.target.result.split("\n");
                        for (var i = 0; i < rows.length; i++) {
                            var row = $("<tr />");
                            var cells = rows[i].split(",");
                            for (var j = 0; j < cells.length; j++) {
                                var cell = $("<td />");
                                cell.html(cells[j]);
                                row.append(cell);
                            }
                            table.append(row);
                        }
                        $("#dvCSV").html('');
                        $("#dvCSV").append(table);
                    }
                    reader.readAsText($("#fileUpload")[0].files[0]);
                } else {
                    alert("This browser does not support HTML5.");
                }
            } else {
                alert("Please upload a valid CSV file.");
            }
        });
    });

 
 */
