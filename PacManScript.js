/*
PacMan Script
*/


var canvas = document.getElementById("PacManCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;
var border = 20;
var cellSize = 50;
var radius = 25;



var pacMan =
{
	
	
	radius : 25,
	posX : 0,
	posY : 0,
	size : 50,
	image : "pac-man.jpg",
	
	
	
	moveRight: function()
    {
		this.clear();
		
		this.posX += cellSize;
		
		if(this.posX > canvas.width - border - this.size)
	    {
			this.posX = canvas.width - border - this.size;
		}
		
		this.draw();
	},
	
	
	
	
	moveLeft: function()
	{
		
		this.clear();
		
		this.posX -= cellSize;
		
		if(this.posX > border)
	    {
			this.posX = border;
		}
		
		this.draw();
		
	},
	
	
	
	
	moveUp: function()
    {
		
		this.clear();
		
		this.posY += cellSize;
		
		if(this.posY > border)
	    {
			this.posY = border;
		}
		
		this.draw();

		
		
	},
	
	
	
	
	
	moveDown: function()
	{

	    this.clear();
		
		this.posY -= cellSize;
		
		if(this.posY > canvas.width - border - this.size)
	    {
			this.posY = canvas.width - border - this.size;
		}
		
		this.draw();
	
	},
	
	
	
	
	clear: function()
	{	
		ctx.fillStyle = "white";
		ctx.fillRect(this.posX, this.posY, this.size, this.size)	
	},
	
	
	
	
	draw: function()
	{	
	    base_image = new Image();
		base_image.src = this.image;
		ctx.drawImage(base_image, this.posX, this.posY, this.size, this.size);
	}
	
	
};



function drawGrid()
{
	
   for (var x = 0; x < canvas.width; x += cellSize) 
  {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.width);
	ctx.strokeStyle = "#000000";
    ctx.stroke();
  }



   for (var y = 0; y < canvas.height; y += cellSize) 
   {
     ctx.moveTo(0, y);
     ctx.lineTo(canvas.width, y);
	 ctx.strokeStyle = "#000000";
     ctx.stroke();
   }

  
}




 
function createPacMan()
{
	
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.beginPath();
   ctx.arc(100, 100, this.radius, 0, 2 * Math.PI);
   ctx.fillStyle = "#FFF000";
   ctx.fill();
   ctx.strokeStyle = "#FFF000";
   ctx.stroke();
   
}

createPacMan();







function createMovingPacMan()
{
	
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.beginPath();
   ctx.arc(100 + posX, 100 + posY, this.radius, 0, 2 * Math.PI);
   ctx.fillStyle = "#FFF000";
   ctx.fill();
   ctx.strokeStyle = "#FFF000";
   ctx.stroke();
   

}





    window.addEventListener('keydown', movePacMan, false);
	
	var posX = 0;
	var posY = 0;
	
	
	function movePacMan(event)
    {
		 
	     switch(event.keyCode)
		 {
			 
		   case 37:
		   posX -= 5;
		   break;
		   
		   case 38:
		   posY -= 5;
		   break;
		   
		   case 39:
		   posX += 5;
		   break;
		   
		   case 40:
		   posY += 5;
		   break;

		   
		 }
		 
		 event.preventDefault();
		 createMovingPacMan();
		 
     }	
	 
	 
	 
	 
	 base_image = new Image();
	 base_image.src = 'pac-man.jpg';
	 base_image.onload = function()
	 {
		 ctx.drawImage(base_image, this.posX, this.posY, this.size, this.size);
	 }


	
	