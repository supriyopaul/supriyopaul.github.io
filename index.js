/* This script is an implementation of the "Type-Writer" effect, used to simulate the typing of text on a web page.
The script is written in JavaScript and utilizes the jQuery library.
*/

var Typer={
    text: null, // variable to store the text file's content
    accessCountimer:null, // variable to store the setInterval object
    index:0, // current position of the text file's content that is being written
    speed:2, // speed at which the text is written
    file:"", // file location of the text file
    accessCount:0, // number of times the user has pressed "Alt + Shift"
    deniedCount:0, // number of times the user has pressed "Caps Lock"
	
	/*
	The init function is then defined, which sets an interval for the updLstChr function
	to be called every 500ms and retrieves the content of the "Typer.file" property using
	an HTTP GET request and sets it as the value of the "Typer.text" property.
	*/
    init: function(){
        // set interval function to update the last character of the text
        accessCountimer=setInterval(function(){Typer.updLstChr();},500); 
        // fetch the text file's content
        $.get(Typer.file,function(data){
            Typer.text=data;
            Typer.text = Typer.text.slice(0, Typer.text.length-1);
        });
    },

    content:function(){
        // function to return the current written text on the screen
        return $("#console").html();
    },

    write:function(str){
        // function to write the given string on the screen
        $("#console").append(str);
        return false;
    },

    addText:function(key){
        // if user press "Alt + Shift"
        if(key.keyCode==18){
            Typer.accessCount++; 
            // if user press it more than 3 times
            if(Typer.accessCount>=3){
                Typer.makeAccess(); 
            }
        }
        
        // if user press "Caps Lock"
        else if(key.keyCode==20){
            Typer.deniedCount++; 
            // if user press it more than 3 times
            if(Typer.deniedCount>=3){
                Typer.makeDenied(); 
            }
        }
        
        // if user press "ESC"
        else if(key.keyCode==27){ 
            Typer.hidepop(); 
        }
        
        else if(Typer.text){ 
            var cont=Typer.content(); 
            // if last character is pipe | remove it
            if(cont.substring(cont.length-1,cont.length)=="|") 
                $("#console").html($("#console").html().substring(0,cont.length-1)); 
            if(key.keyCode!=8){ 
                Typer.index+=Typer.speed;    
            }
            else {
            // if the user press backspace, decrease the index
                if(Typer.index>0) 
                    Typer.index-=Typer.speed;
            }
            var text=Typer.text.substring(0,Typer.index)
            var rtn= new RegExp("\n", "g"); 

            $("#console").html(text.replace(rtn,"<br/>"));
            window.scrollBy(0,50); 
        }
        
        // prevent default behavior of keys
        if (key.preventDefault && key.keyCode != 122) { 
            key.preventDefault()
		};  
		
		// otherway prevent keys default behavior
		if(key.keyCode != 122){
			key.returnValue = false;
		}
	},
 
	updLstChr:function(){ 
		var cont=this.content(); 
		// function is used to delete the last character of the text 
		// in the console element if it is "|" and adds "|" to the console element
		//if the last character is not "|"
		if(cont.substring(cont.length-1,cont.length)=="|") 
			$("#console").html($("#console").html().substring(0,cont.length-1)); 
		
		else
			this.write("|"); // else write it
	}
}

function replaceUrls(text) {
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);
	
	if (space != -1) { 
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\""  + url + "\">" + url + "</a>");
	} 
	
	else {
		return text
	}
}

Typer.speed=3;
Typer.file="supriyopaul.txt"; // add your own name here
Typer.init();
 
var timer = setInterval("t();", 9);
function t() {
	Typer.addText({"keyCode": 123748});
	
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}
