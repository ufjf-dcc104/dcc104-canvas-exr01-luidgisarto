function Sprite() {
  this.x = 10;
  this.y = 430;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.g = 0;
  this.width = 30;
  this.height = 30;
  this.color = "blue";
  this.energia = 500;
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

Sprite.prototype.desenhar = function (ctx, img) {
  ctx.fillStyle = this.color;
  ctx.drawImage(img, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
  ctx.strokeStyle = "white";
  ctx.strokeRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
};

Sprite.prototype.mover = function (dt) {
  this.x += this.vx * dt;
  this.y += this.vy * dt;
  this.g += this.g * dt;
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

Sprite.prototype.ultrapassouAlturaPouso = function(base){
  if(this.y > 431)
    return true;
  return false;
}

Sprite.prototype.atingiuLimites = function(tela){
  if(this.y < 0
  || this.x < 0
  || this.x > tela.width
  || this.y > tela.height)
    return true;
  return false;
}

Sprite.prototype.colidiu = function (alvo) {
  if(this.x + this.width/2 < alvo.x-alvo.width/2) return false;
  if(this.x -this.width/2 > alvo.x+alvo.width/2) return false;
  if(this.y + this.height/2 < alvo.y-alvo.height/2) return false;
  if(this.y -this.height/2 > alvo.y+alvo.height/2) return false;
  return true;  
};
