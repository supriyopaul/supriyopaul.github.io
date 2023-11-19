/* This script is an implementation of the "Type-Writer" effect, used to simulate the typing of text on a web page.
The script is written in JavaScript and utilizes the jQuery library.
*/
const TEXT = `<span id="b">supriyo@paul</span>:<span id="b"></span><span id="c">$</span> cd About-me/<br/>
<span id="b">supriyo@paul</span>:<span id="b"></span><span id="c">$</span> cat resume.txt<br/><br/>
<span id="a"># Supriyo Paul</span><br/>
<span id="op"><strong>Senior Software Engineer</strong></span><br/>
<span id="op">## Summary</span><br/>
- <span id="op">Hi, I am @supriyopaul95 on LinkedIn 💼</span><br/>
- <span id="op">Software Engineer specializing in Python development, DevOps, and Automation Engineering </span><br/>
- <span id="op">Currently exploring the realm of knowledge graphs and LLM frameworks </span><br/>
- <span id="op">Aspiring system architect </span><br/>
- <span id="op">Passionate advocate for clean, maintainable code </span><br/>
- <span id="op">Tinkering with <a href="https://github.com/supriyopaul/applibot">Applibot</a> my latest hobby project! </span><br/>
- <span id="op">Hobbies include Badminton, Volleyball, watching Anime, and Docuseries </span><br/>
- <span id="op">Favorite authors: Yuval Noah Harari and Paulo Coelho </span><br/>
<br/>
<span id="op">## Contact</span><br/>
- <span id="op"><strong>Email:</strong> paul.supriyo.paul@gmail.com</span><br/>
- <span id="op"><strong>Phone:</strong> +91 8340265344</span><br/>
- <span id="op"><strong>GitHub:</strong> <a href="https://github.com/supriyopaul95">supriyopaul95</a></span><br/>
- <span id="op"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/supriyopaul95">supriyopaul95</a></span><br/>
- <span id="op"><strong>Portfolio:</strong> <a href="https://supriyopaul.github.io/">supriyopaul.github.io</a></span><br/>
- <span id="op"><strong>Location:</strong> Whitefield, Bengaluru</span><br/>
- <span id="op"><strong>Twitter:</strong> <a href="https://twitter.com/supriyopaul">@supriyopaul</a></span><br/>
<br/>
<span id="op">## Education</span><br/>
<span id="a">### Bachelor of Technology, Computer Science</span><br/>
<span id="op"><strong>Mallabhum Institute of Technology</strong> | 2013-2017</span><br/>
<br/>
<span id="a">### High School</span><br/>
<span id="op"><strong>D.A.V Public School</strong> | 2011-2013</span><br/>
<br/>
<span id="a">### School</span><br/>
<span id="op"><strong>De Nobili School</strong> | 2000-2011</span><br/>
<br/>
<span id="op">## Certificates</span><br/>
- <span id="op"><a href="https://www.coursera.org/account/accomplishments/certificate/JMQWSQBKDSZC">AI for everyone by DeepLearning.AI (Issued Aug 2022)</a></span><br/>
- <span id="op"><a href="https://www.udemy.com/certificate/UC-1dd3f3c2-d8ad-46b5-9a09-801f26cf0df6/">Protocol Buffers 3 [Java, Golang, Python] by Udemy (Issued Jan 2022)</a></span><br/>
- <span id="op"><a href="https://www.udemy.com/certificate/UC-d119c94a-5051-48e0-8f9b-6298c8975b81/">Data Structures and Algorithms by Udemy (Issued Aug 2021)</a></span><br/>
- <span id="op"><a href="https://www.udemy.com/certificate/UC-a6688b24-e5c2-48e2-9c10-231f972eae68/">System Design by Udemy (Issued Date Missing)</a></span><br/>
<br/>
<span id="op">## Experience</span><br/>
<span id="a">### Jio Platforms Private Limited</span><br/>
<span id="op"><strong>Software Engineer II</strong> | Sep 2021-Present</span><br/>
- <span id="op">Engineered a comprehensive Knowledge-graph platform, encompassing microservices like Schema, Data, and Search, to facilitate the semantic storage and retrieval of domain knowledge, enhancing data accessibility and interoperability.</span><br/>
- <span id="op">Spearheaded the performance monitoring, scaling, and refinement of Knowledge Graph Services, ensuring optimal scalability for Big Data ingestion and retrieval, and enhancing service reliability and efficiency.</span><br/>
- <span id="op">Provided mentorship on best practices and maintainability within the AICOE's AI Platform, fostering a culture of knowledge sharing and continuous improvement within the team.</span><br/>
<br/>
<span id="a">### Ajio</span><br/>
<span id="op"><strong>DevOps Engineer</strong> | Sep 2019 - Sep 2021</span><br/>
- <span id="op">Engineered and deployed multiple robust clusters designed for extensive log aggregation, capable of processing over 7 billion records daily, alongside conducting comprehensive load testing for the in-house cloud infrastructure platform, JAWS.</span><br/>
- <span id="op">Oversaw and optimized the scalability of ELK and Kafka clusters to accommodate the diverse operational needs across various business units, ensuring seamless data flow and reduced system latency.</span><br/>
- <span id="op">Founded and led the Tools & Automation team at Ajio, implementing strategic automation solutions to streamline workflows and eliminate redundant tasks across multiple departments, enhancing overall operational efficiency.</span><br/>
<br/>
<span id="a">### Deepcompute LLC</span><br/>
<span id="op"><strong>Associate Software Engineer</strong> | Aug 2017- Sep 2019</span><br/>
- <span id="op">Collaborated with cross-functional teams to develop and enhance open-source libraries and modules such as <a href="https://github.com/deep-compute/logagg">logagg</a>, <a href="https://github.com/deep-compute/basescript">basescript</a>, <a href="https://github.com/deep-compute/deeputil">deeputil</a>, contributing to the creation of versatile and reusable software components.</span><br/>
- <span id="op">Played a pivotal role in application development and facilitated teams in managing deployments and logs, establishing and enforcing stringent benchmarks for code quality to ensure the delivery of robust and efficient software solutions.</span><br/>
<br/>
<span id="op">## Skills</span><br/>
<span id="a">### Technologies & Concepts</span><br/>
- <span id="op">System Design</span><br/>
- <span id="op">Microservices</span><br/>
- <span id="op">Knowledge Modelling</span><br/>
- <span id="op">LLM frameworks (RAG, Langchain)</span><br/>
- <span id="op">NLP</span><br/>
- <span id="op">Protocol Buffers (gRPC)</span><br/>
- <span id="op">REST APIs (FastAPI)</span><br/>
- <span id="op">CI/CD</span><br/>
- <span id="op">OOPS</span><br/>
- <span id="op">Dashboarding</span><br/>
<br/>
<span id="a">### Programming Languages</span><br/>
- <span id="op">Python</span><br/>
- <span id="op">Bash</span><br/>
<br/>
<span id="a">### DevOps Tools</span><br/>
- <span id="op">Linux</span><br/>
- <span id="op">Docker</span><br/>
- <span id="op">Kubernetes</span><br/>
- <span id="op">Azure DevOps</span><br/>
- <span id="op">Ansible</span><br/>
- <span id="op">Elastic Stack (ELK)</span><br/>
- <span id="op">Prometheus</span><br/>
- <span id="op">Travis CI</span><br/>
- <span id="op">Grafana</span><br/>
- <span id="op">Kibana</span><br/>
<br/>
<span id="a">### Databases</span><br/>
- <span id="op">ArangoDB</span><br/>
- <span id="op">LanceDB</span><br/>
- <span id="op">Elasticsearch</span><br/>
- <span id="op">InfluxDB</span><br/>
- <span id="op">MongoDB</span><br/>
- <span id="op">Redis</span><br/>`;


var Typer={
    text: TEXT, // variable to store the text file's content
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
        this.text = this.text.slice(0, this.text.length - 1);
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

Typer.speed=4;
Typer.init();
 
var timer = setInterval("t();", 9);
function t() {
	Typer.addText({"keyCode": 123748});
	
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}
