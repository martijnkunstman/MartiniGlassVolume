let sliderHeight;
let buttonHeight;
let sliderVolume;
let buttonVolume;

function coneFillHeightToVolume(fillHeightPercentage) {
  return Math.pow(fillHeightPercentage / 100, 3) * 100;
}

function reset() {
  sliderHeight.value(50);
}

function setup() {
  sliderHeight = createSlider(0, 100, 50, 1);
  sliderHeight.position(50, 50);
  sliderHeight.size(900);
  buttonHeight = createButton("");
  buttonHeight.mousePressed(reset);
  buttonHeight.position(50, 100);
  //
  sliderVolume = createSlider(0, 100, 50, 1);
  sliderVolume.position(50, 150);
  sliderVolume.size(900);
  buttonVolume = createButton("");
  buttonVolume.mousePressed(reset);
  buttonVolume.position(50, 200);

  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(200);
  orbitControl();
  //
  translate(-250, 0, 0);
  fill("white");
  cone(200, 200, 16, 4, false);
  //
  translate(0, 100 - sliderHeight.value(), 0);
  fill("blue");
  cone(sliderHeight.value() * 2, sliderHeight.value() * 2, 16, 4, true);
  //
  translate(500, -100 + sliderHeight.value(), 0);
  fill("white");
  cone(200, 200, 16, 4, false);
  //
  translate(0, sliderHeight.value(), 0);
  fill("blue");
  cone(
    200 - sliderHeight.value() * 2,
    200 - sliderHeight.value() * 2,
    16,
    4,
    true
  );
  buttonHeight.html(sliderHeight.value());
  sliderVolume.value(coneFillHeightToVolume(sliderHeight.value()));
  buttonVolume.html(sliderVolume.value());
}
