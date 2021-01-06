class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			//restitution:1,
			//friction:0,
			//density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=10
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("white")
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}