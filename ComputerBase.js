class ComputerBase{ 
constructor(x,y,width,height)

var options = {

isStatic:true

}

this.body = Bodies.rectangle(x,y,width,height)
this.width = width
this.height = height
this.image = loadImage("base2.png")

world.add(world,this.body)

display(){
var pos = this.body.position
var angle =  this.body.angle

Push()
translate([pos.x,pos.y])
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,this.width,this.height)

Pop()

}
}