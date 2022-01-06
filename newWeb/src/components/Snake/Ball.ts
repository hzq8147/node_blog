export default class Ball {
    canvas;
    ctx;
    size;
    cacheCanvas;
    cacheCtx;
    color;
    x;
    y;
    
    constructor(canvas,ctx,size){
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = size;
        this.cacheCanvas = document.createElement("canvas");
        this.cacheCtx = this.cacheCanvas.getContext("2d");
        this.cacheCanvas.width = this.size * 8;
        this.cacheCanvas.height = this.size * 8;
        this.generate();
        
    }   
    generate(){
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
    }
    renderCache(){
        let ctx = this.cacheCtx;
        ctx.save();
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.size, this.size ,this.size,0,Math.PI * 2 ,false);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        this.ctx.drawImage(this.cacheCanvas,this.x - this.size, this.y - this.size);
    }
    die(){

    }
}