console.log("Preload running...");

// loop through all the content you want to preload
var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

// images and sounds
preload(
  "images/sam/sam1.png",
  "images/sam/sam2.png",
  "images/sam/sam3.png",
  "images/sam/sam4.png",
  "images/sam/sam5.png",
  "images/sam/sam6.png",
  "images/sam/sam7.png",
  "images/sam/sam8.png",
  "images/sam/sam9.png",
  "images/sam/sam10.png",
  "images/sam/sam11.png",
  "images/bg1.png",
  "images/down.png",
  "images/up.png",
  "images/left.png",
  "images/right.png",
  "images/farmerfront.png",
  "images/farmerback.png",
  "images/farmerright.png",
  "images/fall.png",
  "images/junimo.png",
  "images/lewis.png",
  "images/lewis1.png",
  "images/lewis2.png",
  "images/maze.png",
  "images/outline.png",
  "images/penny.png",
  "images/popup.png",
  "images/start.png",
  "images/secretarea.png",
  "images/sebastian1.png",
  "images/sebastian2.png",
  "images/inventory.png",
  "audio/slide.mp3",
  "audio/stardew.mp3",
  "audio/chest.mp3"
);
