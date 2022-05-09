<template>
    <section>
        <div class="score">{{gameState.score}}</div>
        <div class="map" ref="mapRef"> 
            <div class="menu" v-if="gameState.status == 'die'">
                <div class="text">
                    重新开始？
                </div>
                <div class="text">
                    你得到了{{gameState.score}}分
                </div>
                <div class="btn" @click="initGame">
                    do it
                </div>
            </div>
            <div class="menu" v-if="gameState.status == 'ready'">
                <div class="text">
                    准备开始？
                </div>
                <div class="btn" @click="initGame">
                    lets do it！
                </div>
            </div>
            <canvas id="snake"></canvas>
        </div>
    </section>
</template>
<script setup>
/**
 * props:
 * 
 * @param width Map Width
 * @param height Map Height
 * @param startX Snake StartX
 * @param startY Snake StartY
 * @param initLength Snake init length
 * @param ballSize ball circle radius
 * @param increaseSize Snake increase Length after eat a ball
 * @param speed Snake move speed
 * @param snakeWidth Snake width
 */
import {reactive, ref, nextTick, onMounted} from 'vue';
import utils from './utils';
import Ball from './Ball';
const INIT_SNAKE_STATE = {
    path:[],
    direction:'right',
    speed:0.5
}
const map = reactive([]);
const props = defineProps({
    width:{
        type: String,
        default: '200px'
    },
    height:{
        type: String,
        default: '200px'
    },
    startX:{
        type: Number,
        default: 75
    },
    startY:{
        type: Number,
        default: 75
    },
    initLength:{
        type: Number,
        default: 50
    },
    ballSize:{
        type: Number,
        default: 8
    },
    increaseSize:{
        type: Number,
        default: 20
    },
    speed:{
        type: Number,
        default: 1
    },
    snakeWidth:{
        type: Number,
        default: 5
    }
})
onMounted(()=>{
    
    // initGame();
})
const initGame = ()=>{
    gameState.status = 'run';
    initState();
    initMap();
    initBall();
    initSnakePath();
    paintSnake();
    startMove();
    initControl();
    
}
const stopGame = ()=>{
    gameState.status = 'die';
    clearMap();
    window.cancelAnimationFrame(anima);
    // clearInterval(interval);
}
const initState = () =>{
    gameState.score = 0;
    snakeState = JSON.parse(JSON.stringify(INIT_SNAKE_STATE));
    snakeState.speed = props.speed;
}
const mapRef = ref(null);
let snakeState = INIT_SNAKE_STATE;
const gameState = reactive({
    score: 0,
    status: 'ready',
});
let canvas = null;
let context = null;

const initMap = ()=>{
    canvas = document.getElementById('snake');
    context = canvas.getContext('2d');
    if (!mapRef.value) return;
    let trueHeight = mapRef.value.clientHeight;
    let trueWidth = mapRef.value.clientWidth;
    canvas.setAttribute("width", trueWidth);
    canvas.setAttribute("height", trueHeight);
}
const initSnakePath = ()=>{
    snakeState.path = [
        {x:props.startX,y:props.startY},
        {x:props.startX - props.initLength,y:props.startY}
    ]
}
const clearMap = ()=>{
    context.clearRect(0, 0, canvas.width, canvas.height);
}
const paintSnake = ()=>{
    clearMap();
    context.strokeStyle = 'pink';
    context.lineWidth = props.snakeWidth;
    context.beginPath();
    snakeState.path.forEach((point,index)=>{
        if (index == 0){
            context.moveTo(point.x,point.y);
        }else {
            context.lineTo(point.x,point.y);
        }
    })
    context.stroke();
    
}
let ball = null;
const initBall=()=>{
    ball = new Ball(canvas,context,props.ballSize)
}
let anima = null;
let interval =null;
const startMove = ()=>{
    move();
    ball.renderCache();
    anima = requestAnimationFrame(startMove);
    if (gameState.status == 'die'){
        window.cancelAnimationFrame(anima);
    }
    // interval = setInterval(()=>{
    //     move();
    // },500)
}
const move = () =>{
    snakeMove(snakeState.direction);
}
const snakeMove = (direct)=>{
    snakeState.path.forEach((point,index) =>{
        if (index > 0){
            if (index == snakeState.path.length - 1){
                // the last
                let move = utils.getMove(snakeState.path[index - 1], point);
                let {type,l} = utils.getDirectMove(move);
                point[type] = type == 'x' ? point.x + l * snakeState.speed : point.y + l * snakeState.speed ;
                let newMove = utils.getMove(snakeState.path[index - 1], point);
                if (move != newMove){
                    snakeState.path.splice(index,1);
                }else{
                    snakeState.path[index] = point;
                }
            }
        }else {
            let {type,l} = utils.getDirectMove(direct);
            point[type] = type == 'x' ? point.x + l * snakeState.speed : point.y + l * snakeState.speed ;
            snakeState.path[index] = point;
            if (point.x <= 0 || point.y <= 0 || point.x >= canvas.width || point.y >= canvas.height){
                stopGame();
            }
            if (utils.isInBall(point,ball)){
                ball.generate();
                generateSanke();
                gameState.score ++;
            }
           
        }
    })
    if (checkPath()){
        stopGame();
    }
    if (gameState.status == 'run'){
        paintSnake();
    }
}
const generateSanke = ()=>{
    const lastPoint = snakeState.path[ snakeState.path.length -1 ];
    let move = utils.getMove(snakeState.path[snakeState.path.length - 2], lastPoint);
    let newPoint ;
    switch (move){
        case 'up':
            newPoint = {
                x:lastPoint.x,
                y:lastPoint.y + (1 * props.increaseSize)
            }
            break;
        case 'down':
            newPoint = {
                x:lastPoint.x,
                y:lastPoint.y + (-1 * props.increaseSize)
            }
            break;
        case 'left':
            newPoint = {
                x:lastPoint.x + (1 * props.increaseSize),
                y:lastPoint.y 
            }
            break;
        case 'right':
            newPoint = {
                x:lastPoint.x + (-1 * props.increaseSize),
                y:lastPoint.y 
            }
            break;
    }
    snakeState.path.push(newPoint);

}
const checkPath = ()=>{
    if (snakeState.path.length <= 2){
        return false;
    }
    const line = [snakeState.path[0],snakeState.path[1]];
    for (let i = 1 ;i < snakeState.path.length - 1;i++ ){
        const point = snakeState.path[i];
        const result = utils.haveIntersection(line,[point,snakeState.path[i+1]]);
        
        if (result) return true;
    }
    return false;
}
const changeDirect = (newDirect) =>{
    const nowDirection = snakeState.direction;
    if (newDirect == nowDirection){
        return;
    }
    // forbid converee direction
    if (newDirect == 'left' && nowDirection == 'right' ||
        newDirect == 'right' && nowDirection == 'left' ||
        newDirect == 'down' && nowDirection == 'up' ||
        newDirect == 'up' && nowDirection == 'down'
    ){
        return;
    }
    snakeState.direction = newDirect;
    const newPoint = {
        x: snakeState.path[0].x,
        y: snakeState.path[0].y
    }
    snakeState.path.splice(0,0,newPoint);
}
const initControl = ()=> {
    
    const keydown = (ev)=>{
        if (gameState.status != 'run'){
            document.removeEventListener('keydown',keydown);
            return;
        }
        switch(ev.keyCode){
            case 37:
            case 100:
                changeDirect('left');
                event.preventDefault(); 
                break;
            case 38:
            case 104:
                changeDirect('up');
                event.preventDefault(); 
                break;
            case 39:
            case 102:
                changeDirect('right');
                event.preventDefault(); 
                break;
            case 40:
            case 98:
                changeDirect('down');
                event.preventDefault(); 
                break;
            
        }
    }
    document.addEventListener('keydown',keydown);
}
</script>
<style scope lang="less" rel="styleSheet/less">
.score {
    font-size: 20px;
    font-weight: bold;
}
.map {
    width:v-bind('width');
    height:v-bind('height');
    border:1px solid black;
    position:relative;
    .menu {
        position:absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        .text {
            font-size: 20%;
        }
        .btn {
            font-size: 10%;
            border: 1px solid blue;
            text-align: center;
        }
    }
}
</style>
