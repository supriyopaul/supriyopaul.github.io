/* This script is an implementation of the "Type-Writer" effect, used to simulate the typing of text on a web page.
The script is written in JavaScript and utilizes the jQuery library.
*/
const TEXT = `
<span id="b">supriyo@paul</span>~:<span id="k">$</span><span id="b"></span>cat resume.txt<br/><br/>
<span><strong>
..######..##.....##.########..########..####.##....##..#######.....########.....###....##.....##.##......
.##....##.##.....##.##.....##.##.....##..##...##..##..##.....##....##.....##...##.##...##.....##.##......
.##.......##.....##.##.....##.##.....##..##....####...##.....##....##.....##..##...##..##.....##.##......
..######..##.....##.########..########...##.....##....##.....##....########..##.....##.##.....##.##......
.......##.##.....##.##........##...##....##.....##....##.....##....##........#########.##.....##.##......
.##....##.##.....##.##........##....##...##.....##....##.....##....##........##.....##.##.....##.##......
..######...#######..##........##.....##.####....##.....#######.....##........##.....##..#######..########
</strong></span>        
<br/>
<span>
..######.########.#######...###.####
.##....#.##.....#.##.........##..##.
.##......##.....#.##.........##..##.
..######.##.....#.######.....##..##.
.......#.##.....#.##.........##..##.
.##....#.##.....#.##.........##..##.
..######.########.#######...###.####                
</span>
<br/>
<span class="text--glitch" data-text="## Summary">## Summary</span><br/>
- <span id="console">Hi, I am @supriyopaul95 on LinkedIn</span><br/>
- <span id="console">Software Engineer specializing in <span id="rainbow">Python development</span>, <span id="rainbow">DevOps</span>, and <span id="rainbow">Automation Engineering</span></span><br/>
- <span id="console">Currently exploring the realm of <span id="rainbow">knowledge graphs</span> and <span id="rainbow">LLM frameworks</span></span><br/>
- <span id="console">Aspiring <span id="rainbow">system architect</span></span><br/>
- <span id="console">Passionate advocate for clean, maintainable code </span><br/>
- <span id="console">Tinkering with <a href="https://github.com/supriyopaul/applibot">Applibot</a> my latest hobby project! </span><br/>
- <span id="console">Hobbies include Badminton, Volleyball, watching Anime, and Docuseries </span><br/>
- <span id="console">Favorite authors: Yuval Noah Harari and Paulo Coelho </span><br/>
<br/>
<span class="text--glitch" data-text="## Contact">## Contact</span><br/>
- <span id="console"><strong>Email:</strong> paul.supriyo.paul@gmail.com</span><br/>
- <span id="console"><strong>Phone:</strong> +91 8340265344</span><br/>
- <span id="console"><strong>GitHub:</strong> <a href="https://github.com/supriyopaul95">supriyopaul95</a></span><br/>
- <span id="console"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/supriyopaul95">supriyopaul95</a></span><br/>
- <span id="console"><strong>Portfolio:</strong> <a href="https://supriyopaul.github.io/">supriyopaul.github.io</a></span><br/>
- <span id="console"><strong>Location:</strong> Whitefield, Bengaluru</span><br/>
- <span id="console"><strong>Twitter:</strong> <a href="https://twitter.com/supriyopaul">@supriyopaul</a></span><br/>
<br/>
<span class="text--glitch" data-text="## Education">## Education</span><br/>
<span class="text--glitch-small" data-text="### Bachelor of Technology, Computer Science">### Bachelor of Technology, Computer Science</span><br/>
<span id="console"><strong>Mallabhum Institute of Technology</strong> | 2013-2017</span><br/>
<br/>
<span class="text--glitch" data-text="### High School">### High School</span><br/>
<span id="console"><strong>D.A.V Public School</strong> | 2011-2013</span><br/>
<br/>
<span class="text--glitch" data-text="### School">### School</span><br/>
<span id="console"><strong>De Nobili School</strong> | 2000-2011</span><br/>
<br/>
<span class="text--glitch" data-text="## Certificates">## Certificates</span><br/>
- <span id="console"><a href="https://www.coursera.org/account/accomplishments/certificate/JMQWSQBKDSZC">AI for everyone by DeepLearning.AI (Issued Aug 2022)</a></span><br/>
- <span id="console"><a href="https://www.udemy.com/certificate/UC-1dd3f3c2-d8ad-46b5-9a09-801f26cf0df6/">Protocol Buffers 3 [Java, Golang, Python] by Udemy (Issued Jan 2022)</a></span><br/>
- <span id="console"><a href="https://www.udemy.com/certificate/UC-d119c94a-5051-48e0-8f9b-6298c8975b81/">Data Structures and Algorithms by Udemy (Issued Aug 2021)</a></span><br/>
- <span id="console"><a href="https://www.udemy.com/certificate/UC-a6688b24-e5c2-48e2-9c10-231f972eae68/">System Design by Udemy (Issued Date Missing)</a></span><br/>
<br/>
<span class="text--glitch" data-text="## Experience">## Experience</span><br/>
<span class="text--glitch" data-text="### Jio Platforms Private Limited">### Jio Platforms Private Limited</span><br/>
<span id="console"><strong>Software Engineer II</strong> | Sep 2021-Present</span><br/>
- <span id="console">Engineered a comprehensive <span id="rainbow">Knowledge-graph</span> platform, encompassing <span id="rainbow">microservices</span> like Schema, Data, and Search, to facilitate the semantic storage and retrieval of domain knowledge, enhancing data accessibility and interoperability.</span><br/>
- <span id="console">Spearheaded the performance monitoring, scaling, and refinement of <span id="rainbow">Knowledge Graph Services</span>, ensuring optimal scalability for <span id="rainbow">Big Data</span> ingestion and retrieval, and enhancing service reliability and efficiency.</span><br/>
- <span id="console">Provided mentorship on best practices and maintainability within the AICOE's <span id="rainbow">AI Platform</span>, fostering a culture of knowledge sharing and continuous improvement within the team.</span><br/>
<br/>
<span class="text--glitch" data-text="### Ajio">### Ajio</span><br/>
<span id="console"><strong>DevOps Engineer</strong> | Sep 2019 - Sep 2021</span><br/>
- <span id="console">Engineered and deployed multiple robust clusters designed for extensive <span id="rainbow">log aggregation</span>, capable of processing over 7 billion records daily, alongside conducting comprehensive load testing for the in-house cloud infrastructure platform, JAWS.</span><br/>
- <span id="console">Oversaw and optimized the scalability of <span id="rainbow">ELK</span> and <span id="rainbow">Kafka</span> clusters to accommodate the diverse operational needs across various business units, ensuring seamless data flow and reduced system latency.</span><br/>
- <span id="console">Founded and led the Tools & Automation team at Ajio, implementing strategic <span id="rainbow">automation solutions</span> to streamline workflows and eliminate redundant tasks across multiple departments, enhancing overall operational efficiency.</span><br/>
<br/>
<span class="text--glitch" data-text="### Deepcompute LLC">### Deepcompute LLC</span><br/>
<span id="console"><strong>Associate Software Engineer</strong> | Aug 2017- Sep 2019</span><br/>
- <span id="console">Collaborated with cross-functional teams to develop and enhance open-source libraries and modules such as <a href="https://github.com/deep-compute/logagg">logagg</a>, <a href="https://github.com/deep-compute/basescript">basescript</a>, <a href="https://github.com/deep-compute/deeputil">deeputil</a>, contributing to the creation of versatile and <span id="rainbow">reusable software components</span>.</span><br/>
- <span id="console">Played a pivotal role in <span id="rainbow">application development</span> and facilitated teams in managing deployments and logs, establishing and enforcing stringent benchmarks for <span id="rainbow">code quality</span> to ensure the delivery of robust and efficient software solutions.</span><br/>
<br/>
<span class="text--glitch" data-text="## Skills">## Skills</span><br/>
<span class="text--glitch" data-text="### Technologies & Concepts">### Technologies & Concepts</span><br/>
- <span id="console"><span id="rainbow">System Design</span></span><br/>
- <span id="console"><span id="rainbow">Microservices</span></span><br/>
- <span id="console"><span id="rainbow">Knowledge Modelling</span></span><br/>
- <span id="console"><span id="rainbow">LLM frameworks</span> (RAG, Langchain)</span><br/>
- <span id="console"><span id="rainbow">NLP</span></span><br/>
- <span id="console"><span id="rainbow">Protocol Buffers</span> (gRPC)</span><br/>
- <span id="console"><span id="rainbow">REST APIs</span> (FastAPI)</span><br/>
- <span id="console"><span id="rainbow">CI/CD</span></span><br/>
- <span id="console"><span id="rainbow">OOPS</span></span><br/>
- <span id="console"><span id="rainbow">Dashboarding</span></span><br/>
<br/>
<span class="text--glitch" data-text="### Programming Languages">### Programming Languages</span><br/>
- <span id="console"><span id="rainbow">Python</span></span><br/>
- <span id="console"><span id="rainbow">Bash</span></span><br/>
<br/>
<span class="text--glitch" data-text="### DevOps Tools">### DevOps Tools</span><br/>
- <span id="console"><span id="rainbow">Linux</span></span><br/>
- <span id="console"><span id="rainbow">Docker</span></span><br/>
- <span id="console"><span id="rainbow">Kubernetes</span></span><br/>
- <span id="console"><span id="rainbow">Azure DevOps</span></span><br/>
- <span id="console"><span id="rainbow">Ansible</span></span><br/>
- <span id="console"><span id="rainbow">Elastic Stack</span> (ELK)</span><br/>
- <span id="console"><span id="rainbow">Prometheus</span></span><br/>
- <span id="console"><span id="rainbow">Travis CI</span></span><br/>
- <span id="console"><span id="rainbow">Grafana</span></span><br/>
- <span id="console"><span id="rainbow">Kibana</span></span><br/>
<br/>
<span class="text--glitch" data-text="### Databases">### Databases</span><br/>
- <span id="console"><span id="rainbow">ArangoDB</span></span><br/>
- <span id="console"><span id="rainbow">LanceDB</span></span><br/>
- <span id="console"><span id="rainbow">Elasticsearch</span></span><br/>
- <span id="console"><span id="rainbow">InfluxDB</span></span><br/>
- <span id="console"><span id="rainbow">MongoDB</span></span><br/>
- <span id="console"><span id="rainbow">Redis</span></span><br/>`;


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

Typer.speed=10;
Typer.init();
 
var timer = setInterval("t();", 9);
function t() {
	Typer.addText({"keyCode": 123748});
	
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}
