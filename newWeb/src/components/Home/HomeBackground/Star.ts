export default class Star {
    id;
    x;
    y;
    useCacha;
    color;
    cacheCanvas;
    cacheCtx;
    config;
    r;
    ctx;
    bg;
    constructor(id,x,y,useCache,bg){
        this.bg = bg;
        this.config = bg.config;
        this.ctx = bg.ctx;
        this.id = id;
        this.x = x;
        this.y = y;
        this.useCacha = useCache;
        this.cacheCanvas = document.createElement("canvas");
        this.cacheCtx = this.cacheCanvas.getContext("2d");
        this.r = Math.floor(Math.random() * bg.config.star_r) + 1;
        this.cacheCanvas.width = this.r * 6;
        this.cacheCanvas.height = this.r * 6;
        let alpha = (Math.floor(Math.random() * 10) + 1) / bg.config.star_alpha;
        this.color = "rgba(255,255,255," + alpha + ")";
        if (useCache) {
            this.cache();
        }
    }
    draw(){
        let ctx = this.ctx;
        if (!this.useCacha){   
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.shadowColor='white';
            ctx.shadowBlur = this.r * 2;
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.r,0,Math.PI * 2,false);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }else {
            ctx.drawImage(this.cacheCanvas,this.x - this.r,this.y - this.r);            
        }
    }
    cache(){
        let ctx = this.cacheCtx;
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = this.r * 2;
        ctx.beginPath();
        ctx.arc(this.r * 3, this.r * 3, this.r, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    move(){
        this.y -= this.config.move_distance;
        if (this.y <= -10){
            this.y = this.bg.HEIGHT + 10;
        }
        this.draw();
    }
    die(){
        this.bg.stars[this.id] = null;
        delete this.bg.stars[this.id]
    }

}