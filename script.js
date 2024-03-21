console.log("hello");

status = "start";
choosenPercentage = 0;

        function main(){
            document.getElementById('callToAction').innerHTML = "Where in your life are you at right now?";
            adjustCanvasSize();
            drawTimeline();
            }

        function drawTimeline(){
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            //#add an image into the canvas

            const imgHeightFactor = 0.5;
            const img = new Image();	
            img.src = 'timeline.png';
            img.onload = function() {
                ctx.drawImage(img, 0, canvas.height - (canvas.width*imgHeightFactor), canvas.width, canvas.width*imgHeightFactor);
            }
            const img2 = new Image();
            img2.src = 'timeline_green.png';
            img2.onload = function() {
                sw = img.width*choosenPercentage;
                sh = img.height;
                ctx.drawImage(img2, 0, 0, sw, sh, 0, canvas.height - (canvas.width*imgHeightFactor), canvas.width*choosenPercentage, canvas.width*imgHeightFactor);
               /* ctx.drawImage(img2, 
                    0, canvas.height - (canvas.width*imgHeightFactor), 
                    canvas.width*choosenPercentage, canvas.width*imgHeightFactor, 0, canvas.height - (canvas.width*imgHeightFactor), canvas.width*choosenPercentage, canvas.width*imgHeightFactor);
               */ }
        }

        function adjustCanvasSize(){
            width = window.innerWidth;
            height = window.innerHeight;

            min =  Math.min(width, height);
            const canvas = document.getElementById('canvas');
            canvas.clientWidth = min;
            canvas.clientHeight = min;
        }

        

        function canvasClicked(event){
            //get the click location in the canvas system 
            const canvas = document.getElementById('canvas');
            const rect = canvas.getBoundingClientRect();
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;

            //translate x and y to canvas coordinates considering the different sitzes of the canvas and the window
            x = x * canvas.width / canvas.clientWidth;
            y = y * canvas.height / canvas.clientHeight;

            if(status == "start"){
            choosenPercentage = x / canvas.width;
            }
            drawTimeline();

            console.log(x, y);
            //draw a circle at the click location
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.stroke();

            //draw a line from the last click location to the current click location
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y);
            ctx.stroke();
            
        }

        window.onresize = function() {
            console.log("resize");
            main();
        }
        
        window.onload = function() {
            canvas = document.getElementById('canvas');
            canvas.addEventListener('click', canvasClicked);

            main();
        }