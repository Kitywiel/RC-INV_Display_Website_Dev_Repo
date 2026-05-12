const box = document.getElementById("SD-THT-scroll-box");
const box1 = document.getElementById("SD-Flasg-Flag-Scroll-Box");
let pos = 0;
let speed = 0.30;
let pos1 = 0;
let speed1 = 0.25;

function loop() {
  if (box.scrollHeight > box.clientHeight) {
    pos += speed;
    box.scrollTop = pos;
    
    // restart when bottom is reached
    if (pos >= box.scrollHeight - box.clientHeight) {
      pos = 0;
    }
  }

  requestAnimationFrame(loop);
}
loop();

function loop1() {
  if (box1.scrollHeight > box1.clientHeight) {
    pos1 += speed1;
    box1.scrollTop = pos1;
    
    // restart when bottom is reached
    if (pos1 >= box1.scrollHeight - box1.clientHeight) {
      pos1 = 0;
    }
  }

  requestAnimationFrame(loop1);
}


loop1();