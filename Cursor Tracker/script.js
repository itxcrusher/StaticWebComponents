
// Cursor Tracker Bubble
var mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;

var circle = { 
     el:$('#cursor-tracker'),
     x:window.innerWidth/2, 
     y:window.innerHeight/2, 
     w:80, 
     h:80, 
     update:function(){
                   l = this.x-this.w/2; 
                   t = this.y-this.h/2; 
                   this.el.css({ 
                            'transform':
                            'translate3d('+l+'px,'+t+'px, 0)' }); 
                           }
}

$(window).mousemove (function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
})

setInterval (move,1000/60)
function move(){
  circle.x = lerp (circle.x, mouseX, 0.1);
  circle.y = lerp (circle.y, mouseY, 0.1);
  circle.update() 
}

function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}

// Toggle Display and Chase on Check and Uncheck

const checkBubble = document.querySelector(".click-bubble"),
      bubbleContainer = document.querySelector(".bubble-container");


      function toggleChase(){
            if (checkBubble.checked == true) {
              $(window).mousemove (function(e){
                        mouseX = 75;
                        mouseY = 800;
              })
            }
            else{
                  $(window).mousemove (function(e){
                        mouseX = e.clientX;
                        mouseY = e.clientY;
                  })
                }
          }

function toggleDisplay() {
  checkBubble.style.visibility = "visible";
}