
var keys = {
	bind : function() {
	  
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status) {
		
		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};
$("#up").on("touchstart", function(){
  keys.up = true
  setTimeout(function() {
    keys.up = 0
  }, 500)
})
$("#right").on("touchstart", function(){
  keys.right = true
})
$("#right").on("touchend", function() {
  keys.right = false
})
$("#left").on("touchstart", function() {
  keys.left = true
})
$("#left").on("touchend", function() {
  keys.left = false
})