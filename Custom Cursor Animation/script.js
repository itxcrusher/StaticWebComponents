// Custom Cursor 
let mouse = new Mouse({

  mouse : 'defult',
  // To change the type of mouse
  // Accepts 3 options : defult / cirle / point
  // default option : cirle
  
  color: 'red',
  // To change the color of the mouse
  // default option : #ffda79
  
  mouseHover : false,
  // Adds a hover effect to the element on which the mouse is on
  // Accepts 3 options : false / border / background
  // default option : false
  
  mousePointer: false,
  // To show or hide the mouse from the page
  // Accepts 2 options : false / true
  // default option : false
  
  el: 'a',
  // The items you want to hover effect
  // accept any item
  // Should be placed ; etween the elements
  // default option : a
  
  el_hover: true,
  // Activate or disable hover effect on items
  // Accepts 2 options : false / true
  // default option : true
  
  mouse_clicked: true,
  // To activate or disable the effect of clicking on the page
  // Accepts 2 options : false / true
  // default option : true
  
  clrChanged : true,
  // Change the color of the mouse automatically
  // Accepts 2 options : false / true
  // default option : false
  
});
mouse.mouse();