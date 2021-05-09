class ground{
    constructor(x,y,width,height){
    var options={
    Statics: true ,

 }
this.body=Bodies.rectancle(x,y,width,height,options);
this.width = width;
this.height= height;

world.add(world,this.body);

}
display(){
    rectMode(CENTER);

    fill(255);

    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
};







