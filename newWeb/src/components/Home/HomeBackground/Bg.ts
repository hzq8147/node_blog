   /*
  * @let star_r：star半径系数，系数越大，半径越大
  * @let star_alpha：生成star的透明度，star_alpha越大，透明度越低
  * @let initStarsPopulation：初始化stars的个数
  * @let move_distance：star位移的距离，数值越大，位移越大
  * @let dot_r : dot半径系数，系数越大，半径越大
  * @let dot_speeds : dots运动的速度
  * @let dot_alpha : dots的透明度
  * @let aReduction：dot消失条件，透明度小于aReduction时消失
  * @let dotsMinDist：dot最小距离
  * @let maxDistFromCursor：dot最大距离
  * */
import Star from "./Star";
export default class Bg {
    config = {
        star_r: 3,
        star_alpha: 5,
        initStarsPopulation: 150,
        move_distance: 0.25,
        dot_r: 5,
        dot_speeds: 0.5,
        dot_alpha: 0.5,
        dot_aReduction: 0.01,
        dotsMinDist: 5,
        maxDistFromCursor: 50,
    };
    stars: any = [];
    dots = [];
    canvas;
    ctx;
    WIDTH;
    HEIGHT;
    mouseMoving = false;
    mouseMoveChecker;
    mouseX;
    mouseY;
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    initConfig(conf){
        if (conf instanceof Object){
            for (let key in conf){
                this.config[key] = conf[key];
            }
        }
    }
    resize(){
        this.WIDTH = document.documentElement.clientWidth;
        this.HEIGHT = document.documentElement.clientHeight;
        this.canvas.setAttribute("width", this.WIDTH);
        this.canvas.setAttribute("height", this.HEIGHT);
    }
    init(conf){
        this.initConfig(conf);//初始化设置
        this.resize();
        this.ctx.strokeStyle = "white";
        this.ctx.shadowColor = "white";
        for (let i = 0; i < this.config.initStarsPopulation; i++) {
            
            this.stars[i] = new Star(i, Math.floor(Math.random() * this.WIDTH), Math.floor(Math.random() * this.HEIGHT), true,this);
            //stars[i].draw();
        }
        this.ctx.shadowBlur = 0;
        this.animate();
    }
    
    animate(){
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);

        for (let i in this.stars) {
            this.stars[i].move();
        }
        // for (let i in this.dots) {
        //     this.dots[i].move();
        // }
        // drawIfMouseMoving();
        requestAnimationFrame(this.animate.bind(this));
    }
}