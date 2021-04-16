class Rain
{
    constructor(x,y,r)
    {
        this.body=Bodies.circle(x,y,r,{'restitution':0.9,'friction':0.01 })
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.r=r;
    }
    display()
    {
        ellipseMode(CENTER)
        fill("blue")
        ellipse(this.x,this.y,this.r,this.r+4);
    }
}