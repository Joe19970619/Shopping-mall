/*
 *
 * Created by 晓倩 on 2017/4/3.
 class Circle {
 //创建对象
 //以一个圆为对象
 //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
 //this.r是创建圆的半径，参数越大半径越大
 //this._mx,this._my是移动的距离，参数越大移动
 constructor(x, y) {
 this.x = x;
 this.y = y;
 this.r = Math.random() * 10 ;
 this._mx = Math.random() ;
 this._my = Math.random() ;

 }

 //canvas 画圆和画直线
 //画圆就是正常的用canvas画一个圆
 //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
 drawCircle(ctx) {
 ctx.beginPath();
 //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
 ctx.arc(this.x, this.y, this.r, 0, 360)
 ctx.closePath();
 ctx.fillStyle = 'rgba(204, 204, 204, 0.3)';
 ctx.fill();
 }

 drawLine(ctx, _circle) {
 let dx = this.x - _circle.x;
 let dy = this.y - _circle.y;
 let d = Math.sqrt(dx * dx + dy * dy)
 if (d < 150) {
 ctx.beginPath();
 //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
 ctx.moveTo(this.x, this.y);   //起始点
 ctx.lineTo(_circle.x, _circle.y);   //终点
 ctx.closePath();
 ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)';
 ctx.stroke();
 }
 }

 // 圆圈移动
 // 圆圈移动的距离必须在屏幕范围内
 move(w, h) {
 this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
 this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
 this.x += this._mx / 2;
 this.y += this._my / 2;
 }
 }
 //鼠标点画圆闪烁变动
 class currentCirle extends Circle {
 constructor(x, y) {
 super(x, y)
 }

 drawCircle(ctx) {
 ctx.beginPath();
 //注释内容为鼠标焦点的地方圆圈半径变化
 //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
 this.r = 8;
 ctx.arc(this.x, this.y, this.r, 0, 360);
 ctx.closePath();
 //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
 ctx.fillStyle = 'rgba(255, 77, 54, 0.6)'
 ctx.fill();

 }
 }
 //更新页面用requestAnimationFrame替代setTimeout
 window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

 let canvas = document.getElementById('canvas');
 let ctx = canvas.getContext('2d');
 let w = canvas.width = canvas.offsetWidth;
 let h = canvas.height = canvas.offsetHeight;
 let circles = [];
 let current_circle = new currentCirle(0, 0)

 let draw = function () {
 ctx.clearRect(0, 0, w, h);
 for (let i = 0; i < circles.length; i++) {
 circles[i].move(w, h);
 circles[i].drawCircle(ctx);
 for (j = i + 1; j < circles.length; j++) {
 circles[i].drawLine(ctx, circles[j])
 }
 }
 if (current_circle.x) {
 current_circle.drawCircle(ctx);
 for (var k = 1; k < circles.length; k++) {
 current_circle.drawLine(ctx, circles[k])
 }
 }
 requestAnimationFrame(draw)
 };

 let init = function (num) {
 for (var i = 0; i < num; i++) {
 circles.push(new Circle(Math.random() * w, Math.random() * h));
 }
 draw();
 };
 window.addEventListener('load', init(60));
 window.onmousemove = function (e) {
 e = e || window.event;
 current_circle.x = e.clientX;
 current_circle.y = e.clientY;
 };
 window.onmouseout = function () {
 current_circle.x = null;
 current_circle.y = null;

 };
 */
/**
 * Created by 晓倩 on 2017/4/3.
 */
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Circle = (function () {
    //创建对象
    //以一个圆为对象
    //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
    //this.r是创建圆的半径，参数越大半径越大
    //this._mx,this._my是移动的距离，参数越大移动

    function Circle(x, y) {
        _classCallCheck(this, Circle);

        this.x = x;
        this.y = y;
        this.r = Math.random() * 10;
        this._mx = Math.random();
        this._my = Math.random();
    }

    //鼠标点画圆闪烁变动

    //canvas 画圆和画直线
    //画圆就是正常的用canvas画一个圆
    //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理

    _createClass(Circle, [{
        key: 'drawCircle',
        value: function drawCircle(ctx) {
            ctx.beginPath();
            //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
            ctx.arc(this.x, this.y, this.r, 0, 360);
            ctx.closePath();
            ctx.fillStyle = 'rgba(204, 204, 204, 0.3)';
            ctx.fill();
        }
    }, {
        key: 'drawLine',
        value: function drawLine(ctx, _circle) {
            var dx = this.x - _circle.x;
            var dy = this.y - _circle.y;
            var d = Math.sqrt(dx * dx + dy * dy);
            if (d < 150) {
                ctx.beginPath();
                //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
                ctx.moveTo(this.x, this.y); //起始点
                ctx.lineTo(_circle.x, _circle.y); //终点
                ctx.closePath();
                ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)';
                ctx.stroke();
            }
        }

        // 圆圈移动
        // 圆圈移动的距离必须在屏幕范围内
    }, {
        key: 'move',
        value: function move(w, h) {
            this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx;
            this._my = this.y < h && this.y > 0 ? this._my : -this._my;
            this.x += this._mx / 2;
            this.y += this._my / 2;
        }
    }]);

    return Circle;
})();

var currentCirle = (function (_Circle) {
    _inherits(currentCirle, _Circle);

    function currentCirle(x, y) {
        _classCallCheck(this, currentCirle);

        _get(Object.getPrototypeOf(currentCirle.prototype), 'constructor', this).call(this, x, y);
    }

    //更新页面用requestAnimationFrame替代setTimeout

    _createClass(currentCirle, [{
        key: 'drawCircle',
        value: function drawCircle(ctx) {
            ctx.beginPath();
            //注释内容为鼠标焦点的地方圆圈半径变化
            //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
            this.r = 8;
            ctx.arc(this.x, this.y, this.r, 0, 360);
            ctx.closePath();
            //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
            ctx.fillStyle = 'rgba(255, 77, 54, 0.6)';
            ctx.fill();
        }
    }]);

    return currentCirle;
})(Circle);

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width = canvas.offsetWidth;
var h = canvas.height = canvas.offsetHeight;
var circles = [];
var current_circle = new currentCirle(0, 0);

var draw = function draw() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < circles.length; i++) {
        circles[i].move(w, h);
        circles[i].drawCircle(ctx);
        for ( var j = i + 1; j < circles.length; j++) {
            circles[i].drawLine(ctx, circles[j]);
        }
    }
    if (current_circle.x) {
        current_circle.drawCircle(ctx);
        for (var k = 1; k < circles.length; k++) {
            current_circle.drawLine(ctx, circles[k]);
        }
    }
    requestAnimationFrame(draw);
};

var init = function init(num) {
    for (var i = 0; i < num; i++) {
        circles.push(new Circle(Math.random() * w, Math.random() * h));
    }
    draw();
};
window.addEventListener('load', init(60));
/*
 window.onmousemove = function (e) {
 e = e || window.event;
 current_circle.x = e.clientX;
 current_circle.y = e.clientY;
 };
 window.onmouseout = function () {
 current_circle.x = null;
 current_circle.y = null;

 };*/