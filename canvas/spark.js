function spark() {
    this.x = width / 2;
    this.y = 0;
    this.yspeed = 5;

    this.fall = function() {
        this.y = this.y + this.yspeed;

    }

    this.show = function() {
        fill(255, 255, 0);
        strokeWeight(0);
        ellipse(this.x, this.y, 4, 4);

    }
}
