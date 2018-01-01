
var lo;
var spark;
markers = []
var myDiv

function setup() {
  var cnv = createCanvas(600, 400);
  cnv.parent('sketch-holder');

  //myDiv.style("display", "fixed");
    lo = new logo();
    markers.push(new marker(225, 150, 0, -.5, 260, 150,1))
    markers.push(new marker(225, 150, .15, -.3, 215 , 150,1))
    markers.push(new marker(290, 150, -.15, -.3, 215, 150,1))
    markers.push(new marker(290, 150, 0, -.5, 260, 150,1))
    markers.push(new marker(335, 205, .0009, 1, 211, 150,1.165))
    markers.push(new marker(335, 205, .0009, -1, 260, 205,1.165))




}

function draw() {
    background(255, 255, 255);
    lo.fill();
    lo.strokeWeight();
    lo.show();
    lo.fadeInColor();


    for (var i = 0; i <= markers.length; i++) {
        if (i < markers.length) {
            var pos = markers[i];
            pos.show();
            pos.update();
        };

    };
};
