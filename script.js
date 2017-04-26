$(document).ready(function(){
(function( $ ) {
 
   jQuery.fn.extend({

   		mygame: function(size) {
   		
   			$this = $(this);
   			
   			var gameObject = $this.attr("id");
   			var blockSize = size;
   			var boardSize = size*4;
   			$("gameObject").append("<div class='board'>Hello World</div>");
   		}
   });
}( jQuery ));



$("#coco").mygame(5);

});
