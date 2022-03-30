var ScrollAmount;

//�p�����b�N�X
function loadParallax() {
    var ground = document.getElementById('ground');
    function scroll() {
        ScrollAmount = document.documentElement.scrollTop || document.body.scrollTop;
        ground.style.backgroundPosition = "center " + ScrollAmount * -0.5 + "px";
    }
    scroll()
    window.addEventListener('scroll', scroll);
}

//�p�[�e�B�N��
function loadParticle() {
    var canvasWrap = document.getElementById('canvas-wrap');
    var canvas = document.getElementById('canvas-particle');
    var ctx = canvas.getContext('2d');

    //�p�[�e�B�N���z��
    var dots = [];
    //�p�[�e�B�N����
    var num = 320;
    //�ő哧���x
    var maxalpha = 0.75;
    //�X�N���[�����x
    var scrollspeed = 0.75;

    var Dot = function () {
        //�T�C�Y
        this.size = Math.random() * 1 + 1;
        //�����x
        this.alpha = 0;
        //�����x�̕ω�����
        this.change = 'increase'; 
        //�F
        this.color = 'rgba(255, 255, 255, ' + this.alpha * maxalpha + ')';
        //���x
        this.changespeed = 0.05 / this.size;
        // �ʒu(0~1)
        this.pos01 = {
            x: Math.random(),
            y: Math.random()
        };
        // �ʒu
        this.pos = {
            x: this.pos01.x * canvas.width,
            y: this.pos01.y * canvas.height
        };
    }

    Dot.prototype = {
        update: function () {
            this.draw();
            //�ω������̕ύX
            if (this.change == 'increase' && this.alpha > 1) {
                this.change = 'decrease';
            } else if (this.change == 'decrease' && this.alpha < 0) {
                this.change = 'increase';
            }
            //�����x�ω�
            if (this.change == 'increase') {
                this.alpha += this.changespeed;
            } else if (this.change = 'decrease') {
                this.alpha -= this.changespeed;
            }
            this.color = 'rgba(255, 255, 255, ' + this.alpha * maxalpha + ')';
            //�ʒu�X�V
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
        // �`��N���A
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        resize()
        // �X�V
        for (var i = 0; i < num; i++) {
            dots[i].update();
        }
    }

    function resize() {
        // canvas�T�C�Y
        canvas.setAttribute("width", canvasWrap.offsetWidth);
        canvas.setAttribute("height", canvasWrap.offsetHeight);
    }

    function particleInit() {
        resize()
        // �p�[�e�B�N������
        for (var i = 0; i < num; i++) {
            dots.push(new Dot());
        }
        update();
    }
    particleInit();
}



