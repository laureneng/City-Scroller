		var building;
		var sprite;
		var road;
		void setup(){
			size(500,500);
			background(200,240,240);
			building=[];
			for(var i=0;i<3;i++){
				building.push(new Building(0,200,100,300,[180,184,184],5));
			}
			road=new Road(0,425,600,250);
			sprite = new Sprite(10,350,100,40,15,[0,0,255]);
		}
		void draw(){
			background(200,240,240);
			for (var i=0; i<building.length; i++){
				building[i].drawBuilding();
				//building[i].scroll();
			}
			road.drawRoad();
			sprite.drawSprite();
		}
		
		class Building {
			var r,g,b;
			var speedX;
			var width, height;
			var xPos, yPos;
			
			Building(x,y,w,h,color,speed){
				xPos=x;
				yPos=y;
				width=w;
				height=h;
				r=color[0];
				g=color[1];
				b=color[2];
				speedX=speed;
			}
			
			void drawBuilding(){
				noStroke();
				fill(r,g,b);
				rect(xPos,yPos,width,height);
				rect(xPos+50, yPos+100, width+84, height-100);
				rect(xPos+150, yPos-50, width+18, height+50);
				rect(xPos+250,yPos+19,width-13,height-18);
				rect(xPos+319, yPos-149, width, height+150);
				rect(xPos+415, yPos+55, width+27, height+30);
			}
		
			 void scroll(speed){
				xPos = xPos + speedX;
				if(xPos>650){
					xPos= 0;
				}
			}
		}
		class Road{
			var xPos;
			var yPos;
			var width;
			var height;
			
			Road(x,y,w,h){
				xPos=x;
				yPos=y;
				width=w;
				height=h;
			}
			
			void drawRoad(){
				
				fill(0,0,0);
				rect(xPos, yPos, 500, 85);
				
				fill(255, 255, 0);
				rect(xPos+60, yPos+31, 68, 16);

				fill(255, 255, 0);
				rect(xPos+180, yPos+31, 68, 16);
				
				fill(255, 255, 0);
				rect(xPos+290, yPos+31, 68, 16);
				
				fill(255, 255, 0);
				rect(xPos+400, yPos+31, 68, 16);
			}
		} 
		class Sprite{
			var r;
			var g;
			var b;
			var width;
			var height;
			var speed;
			var xPos;
			var yPos;
		
			Sprite(x,y,w,h,sp,color){
				xPos=x;
				yPos=y;
				width=w;
				height=h;
				speed=sp;
				r=color[0];
				g=color[1];
				b=color[2];
			}

			void drawSprite(){
				xPos=mouseX;
				var img = document.images.namedItem("girl.png").src;	
			}	
			 
			function moveSprite(e){
				if (e.keyCode == 39) {
						xPos=xPos+speed;
					} 
					if (e.keyCode == 37) {
						xPos=xPos-speed;
				  
					}
				}
			}