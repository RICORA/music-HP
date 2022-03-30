var ScrollAmount;

//パララックス
function loadParallax() {
    var ground = document.getElementById('ground');
    function scroll() {
        ScrollAmount = document.documentElement.scrollTop || document.body.scrollTop;
        ground.style.backgroundPosition = "center " + ScrollAmount * -0.5 + "px";
    }
    scroll()
    window.addEventListener('scroll', scroll);
}

//パーティクル
function loadParticle() {
    var canvasWrap = document.getElementById('canvas-wrap');
    var canvas = document.getElementById('canvas-particle');
    var ctx = canvas.getContext('2d');

    //パーティクル配列
    var dots = [];
    //パーティクル数
    var num = 320;
    //最大透明度
    var maxalpha = 0.75;
    //スクロール速度
    var scrollspeed = 0.75;

    var Dot = function () {
        //サイズ
        this.size = Math.random() * 1 + 1;
        //透明度
        this.alpha = 0;
        //透明度の変化方向
        this.change = 'increase'; 
        //色
        this.color = 'rgba(255, 255, 255, ' + this.alpha * maxalpha + ')';
        //速度
        this.changespeed = 0.05 / this.size;
        // 位置(0~1)
        this.pos01 = {
            x: Math.random(),
            y: Math.random()
        };
        // 位置
        this.pos = {
            x: this.pos01.x * canvas.width,
            y: this.pos01.y * canvas.height
        };
    }

    Dot.prototype = {
        update: function () {
            this.draw();
            //変化方向の変更
            if (this.change == 'increase' && this.alpha > 1) {
                this.change = 'decrease';
            } else if (this.change == 'decrease' && this.alpha < 0) {
                this.change = 'increase';
            }
            //透明度変化
            if (this.change == 'increase') {
                this.alpha += this.changespeed;
            } else if (this.change = 'decrease') {
                this.alpha -= this.changespeed;
            }
            this.color = 'rgba(255, 255, 255, ' + this.alpha * maxalpha + ')';
            //位置更新
            this.pos.x = this.pos01.x * canvas.width;
            this.pos.y = (this.pos01.y * canvas.height - (ScrollAmount % (canvas.height / scrollspeed)) * scrollspeed + canvas.height) % canvas.height;
        },

        draw: function () {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    };

    function update() {
        requestAnimFrame(update);
        // 描画クリア
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        resize()
        // 更新
        for (var i = 0; i < num; i++) {
            dots[i].update();
        }
    }

    function resize() {
        // canvasサイズ
        canvas.setAttribute("width", canvasWrap.offsetWidth);
        canvas.setAttribute("height", canvasWrap.offsetHeight);
    }

    function particleInit() {
        resize()
        // パーティクル生成
        for (var i = 0; i < num; i++) {
            dots.push(new Dot());
        }
        update();
    }
    particleInit();
}



