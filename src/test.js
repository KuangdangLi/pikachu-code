const string = `<style>
.skin {
    position: relative;
    background-color: #ffdb00;
    min-height: 100vh;
}
.nose{
    width: 10px;
    height: 10px;
    border: 10px;
    border: 10px solid;
    border-color: #000000 transparent transparent transparent;
    position: relative;
    top: 238px;
    left: 50%;
    margin-left: -5px;
}
.yuan {
    width: 20px;
    height: 5px;
    position: absolute;
    border: 1px solid #000000;
    background-color: #000000;
    top: -14px;
    left: -10px;
    border-top-left-radius: 10px 5px;
    border-top-right-radius: 10px 5px;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
            transform: rotate(0deg);
        }
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
.eyes{
    width: 58px;
    height: 58px;
    border: 3px solid #000000;
    background: #2e2e2e;
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -29px;
    border-radius: 100%;
}
.eyes.left {
    transform: translateX(-115px);
}
.eyes.right {
    transform: translateX(115px);
}
.eyes::after{
    content: "";
    display: block;
    width: 26px;
    height: 26px;
    border: 3px solid #000000;
    border-radius: 100%;
    background: #fff;
    position: relative;
    left: 5px;
    top: -1px;
}
.mouth {
    width: 200px;
    height: 200px;
    position: relative;
    top: 234px;
    left: 50%;
    margin-left: -100px;
}

.mouth .up .lip{
    position: relative;
    width: 80px;
    height: 25px;
    border: 2px solid black;
    border-top-color: transparent;
    border-right-color: transparent;
    background-color: #ffdb00;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    z-index: 1;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateZ(0) translateX(-42px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    border-right-color: transparent;
    transform: rotate(15deg) translateZ(0) translateX(42px);
}
.mouth .up .lip::after{
    content: '';
    display: block;
    width: 5px;
    height: 30px;
    background-color: #ffdb00;
    position: absolute;
    bottom: 0;
}
.mouth .up .lip.left::after{
    right: -2px;
}
.mouth .up .lip.right::after{
    left: -2px;
}
.down{
    position: relative;
    width: 200px;
    height: 200px;
    top: 20px;
    overflow: hidden;
}
.down .cir1{
    position: absolute;
    width: 100px;
    height: 1000px;
    border: 1px solid black;
    background-color: #9b000a;
    bottom: 60px;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px/200px;
    overflow: hidden;
}
.down .cir1 .cir2{
    position: absolute;
    width: 100px;
    height: 300px;
    border: 1px solid transparent;
    background-color: #ff5b5d;
    bottom: -184px;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;

}
.cheek{
    position: absolute;
    width: 88px;
    height: 88px;
    border: 3px solid black;
    top: 320px;
    left: 50%;
    margin-left: -44px;
    z-index: 2;
    border-radius: 50%;
    background-color: #ff0000;
}
.cheek.left{
    transform: translateX(-158px);
}
.cheek.right{
    transform: translateX(158px);
}
</style>`

let n = 0;
let id;
let speed = 100;
function run() {
    id = setInterval(() => { 
        n += 1;
        if(n > string.length){
         window.clearInterval(id)
         return
        }
        demo1.innerText = string.substring(0,n)
        demo2.innerHTML = string.substring(0,n)
        demo1.scrollTop =demo1.scrollHeight;
     }, speed);
     return id;
}

run();

btnPause.onclick = ()=>{
    window.clearInterval(id)
}
btnPlay.onclick = ()=>{
    run();
}
btnSlow.onclick = ()=>{
    window.clearInterval(id);
    speed = 300;
    run();
}
btnNormal.onclick = ()=>{
    window.clearInterval(id);
    speed = 100;
    run();
}
btnFast.onclick = ()=>{
    window.clearInterval(id);
    speed = 0;
    run();
}