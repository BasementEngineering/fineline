console.log("hello");

status = "start";
choosenPercentage = 0;

        function main(){
            document.getElementById('callToAction').innerHTML = "Where in your life are you at right now?";
            adjustCanvasSize();
            drawTimeline();
            }

        function drawTimeline(x=0,y=0){
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
                if(x != 0){
                    drawMarker(x,y);
                }
                if(status == "next"){
                    document.getElementById('callToAction').innerHTML = "What are your goals ?";
                }
            }
        }

        function adjustCanvasSize(){
            width = window.innerWidth;
            height = window.innerHeight;

            console.log(width, height)
            console.log(window.innerWidth, window.innerHeight)
            
            const canvas = document.getElementById('canvas');

            if(height > width){
                sidelength = Math.min(width, height);
                canvas.clientWidth = sidelength;
                canvas.clientHeight = sidelength;
                document.getElementById('callToAction').classList.remove('textbox-desktop')
                document.getElementById('callToAction').classList.add('textbox-mobile')
            }
            else{
                sidelength = width-(width*0.3);
                canvas.clientWidth = sidelength;
                canvas.clientHeight = height;
                canvas.height = height;
                document.getElementById('callToAction').classList.remove('textbox-mobile')
                document.getElementById('callToAction').classList.add('textbox-desktop')

            }
        }
        
        function drawMarker(x,y){
            console.log("drawing marker at ", x, y);
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.stroke();   

        }

        function canvasClicked(event){
            //get the click location in the canvas system 
            const canvas = document.getElementById('canvas');
            const rect = canvas.getBoundingClientRect();
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;

            //translate x and y to canvas coordinates considering the different sitzes of the canvas and the window
            x = x * canvas.width / canvas.clientWidth;
            y = canvas.height * 0.8;

            if(status == "start"){
            choosenPercentage = x / canvas.width;
            drawTimeline(x,y);
            status = "next";
            }

            console.log(x, y);

               
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