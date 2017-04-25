function Sprite() {
  this.x = 10;
  this.y = 430;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 30;
  this.color = "blue";
  this.energia = 500;
  this.cooldown = 0;
}

function Sprite(x, y, w, h, cor){
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.color = cor;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.energia = 300;
}

Sprite.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

Sprite.prototype.mover = function (dt) {
  this.vx = this.vx + this.ax * dt;
  this.x = this.x + this.vx * dt;
  this.vy = this.vy + this.ay * dt;
  this.y = this.y + this.vy * dt;

  this.consumirEnergia();
};

Sprite.prototype.consumirEnergia = function () {
  if (this.ax != 0 || this.ay != 0) {
    if(this.ax > this.ay){
      this.energia = this.energia - Math.floor(Math.random() * 3);
    }
    else{
      this.energia = this.energia - Math.floor(Math.random() * 2);
    }
  }
}


