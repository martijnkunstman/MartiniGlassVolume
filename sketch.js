let sliderHeight;
let buttonHeight;
let sliderVolume;
let buttonVolume;

function coneFillHeightToVolume(fillHeightPercentage) {
  return Math.pow(fillHeightPercentage / 100, 3) * 100;
}

function coneVolumeToFillHeight(volumePercentage) {
  return Math.cbrt(volumePercentage / 100) * 100;
}

function resetHeight() {
  sliderHeight.value(50);
  updateHeight();
}

function resetVolume() {
  sliderVolume.value(50);
  updateVolume();
}

function setup() {
  sliderHeight = createSlider(0, 100, 50, 1);
  sliderHeight.position(50, 50);
  sliderHeight.size(900);
  sliderHeight.input(updateHeight);
  buttonHeight = createButton("");
  buttonHeight.mousePressed(resetHeight);
  buttonHeight.position(50, 100);
  //
  sliderVolume = createSlider(0, 100, 50, 1);
  sliderVolume.position(50, 150);
  sliderVolume.size(900);
  sliderVolume.input(updateVolume);
  buttonVolume = createButton("");
  buttonVolume.mousePressed(resetVolume);
  buttonVolume.position(50, 200);

  createCanvas(1000, 1000, WEBGL);

  resetHeight();
}

function draw() {
  background(200);
  orbitControl();
  // 1
  translate(-250, 0, 0);
  fill("white");
  cone(200, 200, 16, 4, false);
  // 2
  translate(0, 100 - sliderHeight.value(), 0);
  fill("blue");
  cone(sliderHeight.value() * 2, sliderHeight.value() * 2, 16, 4, true);
  // 1
  translate(500, -100 + sliderHeight.value(), 0);
  fill("rgba(255, 255, 255, 0.5)");
  cone(200, 200, 16, 4, false);
  //2
  translate(0, 100-sliderVolume.value(), 0);
  //translate(0, 0 - sliderVolume.value(), 0);
  fill("red");
  cone(sliderVolume.value() * 2, sliderVolume.value() * 2, 16, 4, true);


  buttonHeight.html(sliderHeight.value());
  buttonVolume.html(sliderVolume.value());
}

function updateHeight() {
  sliderVolume.value(coneFillHeightToVolume(sliderHeight.value()));
}

function updateVolume() {
  sliderHeight.value(coneVolumeToFillHeight(sliderVolume.value()));
}
