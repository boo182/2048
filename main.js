
(function( $ ) {
 
   $.fn.mygame = function( size ) {
 
        var settings = $.extend({
            gameObject: this.attr("id"),
           	blockSize: size,
           	boardSize: (size*4)+40
        }, size );
        $("#"+settings.gameObject).append("<div id='board'></div>");
        $("#board").css({ 
        	"width":settings.boardSize+"px", 
        	"height":settings.boardSize+"px+40px", 
        	"padding":"10px"
        });
 		
 		var tileId = 0;
      	 for(var i = 0; i<16; i++)
       	 {
       	 	tileId++; 
       	 	$("#board").append("<div class='square-container' id= 'sq-"+tileId+"'></div>");
       	 	$(".square-container").css({
       	 		"float":"left", 
       	 		"width":settings.blockSize+"px", 
       	 		"height":settings.blockSize+"px", 
       	 		"background-color": "#eee4da",
       	 		"margin":"5px", 
       	 		"border-radius":"10%"
       	 	});
      	 }
       
      function tiles(size)
      {
      	var font = (size-40);
       	var startTileA = Math.floor(Math.random() * 16) + 1;
       	var startTileB = Math.floor(Math.random() * 16) + 1;
       	var firstTile = Math.random();
       	var scndTile = Math.random();

       	if(firstTile < 0.5){firstTile = 2;}
       	else{firstTile = 4;}
       
       	if(scndTile < 0.5){scndTile = 2;}
       	else{scndTile = 4;}
       	
       	while(startTileB == startTileA){startTileB = Math.floor(Math.random() * 16) + 1;}

       
       
       	$("#sq-"+startTileA).append("<div class='tiles' >"+firstTile+"</div>");
       	$("#sq-"+startTileB).append("<div class='tiles' >"+scndTile+"</div>");
       
       	$(".tiles").css({
       		
       		"font-size": font+"px",
       		"text-align":"center",
       		"margin-top":"13px",
       		"position":"relative"       	
       	});
       	var pos = $(".tiles").parent();

       
       		for(var i= 0; i < pos.length; i++)
       		{
       			if($(pos[i]).attr("id") == "sq-1" || $(pos[i]).attr("id") == "sq-2" || $(pos[i]).attr("id") == "sq-3" || $(pos[i]).attr("id") == "sq-4")
       			{
       				$(pos[i]).children().addClass("row1");
       			}
       			else if($(pos[i]).attr("id") == "sq-5" || $(pos[i]).attr("id") == "sq-6" || $(pos[i]).attr("id") == "sq-7" || $(pos[i]).attr("id") == "sq-8")
       			{
       				$(pos[i]).children().addClass("row2");
       			}
       			else if($(pos[i]).attr("id") == "sq-9" || $(pos[i]).attr("id") == "sq-10" || $(pos[i]).attr("id") == "sq-11" || $(pos[i]).attr("id") == "sq-12")
       			{
       				$(pos[i]).children().addClass("row3");
       			}
       			else
       			{
       				$(pos[i]).children().addClass("row4");
       			}

       			if($(pos[i]).attr("id") == "sq-1" || $(pos[i]).attr("id") == "sq-5" || $(pos[i]).attr("id") == "sq-9" || $(pos[i]).attr("id") == "sq-13")
       			{
       				$(pos[i]).children().addClass("col1");
       			}
       			else if($(pos[i]).attr("id") == "sq-2" || $(pos[i]).attr("id") == "sq-6" || $(pos[i]).attr("id") == "sq-10" || $(pos[i]).attr("id") == "sq-14")
       			{
       				$(pos[i]).children().addClass("col2");
       			}
       			else if($(pos[i]).attr("id") == "sq-3" || $(pos[i]).attr("id") == "sq-7" || $(pos[i]).attr("id") == "sq-11" || $(pos[i]).attr("id") == "sq-15")
       			{
       				$(pos[i]).children().addClass("col3");
       			}
       			else
       			{
       				$(pos[i]).children().addClass("col4");
       			}

       		} 

       	}
       	function newTile()
       	{
       		var font = (60);
       		var newId = Math.floor(Math.random() * 16) + 1;
       		var newTile = Math.random();
       		var sq = $("#sq-"+newId);
       		if(newTile < 0.5){newTile = 2;}
       		else{newTile = 4;}
       		
       		while( $("#sq-"+newId).children().length > 0)
       		{
       			newId = Math.floor(Math.random() * 16) + 1;
       		}
       		$("#sq-"+newId).append("<div class='tiles' id='nTile'>"+newTile+"</div>");
       			$(".tiles").css({
       		
       		"font-size": font+"px",
       		"text-align":"center",
       		"margin-top":"13px",
       		"position":"relative"       	
       	});

       		
       		if(newId == 1 || newId == 2 || newId == 3 || newId == 4)
            {
              $("#nTile").addClass("row1");
            }
            else if(newId == 5 || newId == 6 || newId == 7 || newId == 8)
            {
              $("#nTile").addClass("row2");
            }
            else if(newId == 9 || newId == 10 || newId == 11 || newId == 12)
            {
              $("#nTile").addClass("row3");
            }
            else
            {
              $("#nTile").addClass("row4");
            }
       		if(newId == 1 || newId == 5 || newId == 9 || newId == 13)
       			{
       				$("#nTile").addClass("col1");
       			}
       			else if(newId == 2 || newId == 6 || newId == 10 || newId == 14)
       			{
       				$("#nTile").addClass("col2");
       			}
       			else if(newId == 3 || newId == 7 || newId == 11 || newId == 15)
       			{
       				$("#nTile").addClass("col3");
       			}
       			else
       			{
       				$("#nTile").addClass("col4");
       			}
       		
      
       		$("#nTile").removeAttr("id");

       	}

       	function moves()
       	{
       			
       		var score = 0;

       $(document).keydown(function(e){
        var tiles = $(".tiles");
        
        for (var i = 0; i < tiles.length; i++)
        {
          $(tiles[i]).removeClass("merge");
        }
   switch (e.which){
     case 37: //fleche gauche 
    for(var i = 0; i<tiles.length; i++)
    {	
    	
    	var a = $(tiles[i]);
		var b = a.attr("class").substr(6, 4);
		var c = a.attr("class").substr(14, 1);
		var d = a.attr("class").substr(11, 4);

		for(var k = 1; k<5; k++)//go through rows
		{
			
			if(b == "row"+k)
			{
				var j = ((k-1)*4)+1
				while(j < (c*1)+((k-1)*4))
				{
					if($("#sq-"+j).text() == "")
					{
						a.appendTo($("#sq-"+j)).removeClass(d).addClass("col"+(j-((k-1)*4)));
           
						
						break;	
					}
					else if($("#sq-"+j).children().length > 0 && $("#sq-"+j) !== a )
					{
						
						if($("#sq-"+j).children().text() == a.text() && $("#sq-"+j).children().attr("class").search("merge") < 0)
						{

							$("#sq-"+j).children().text((a.text())*2);
              $("#sq-"+j).children().addClass("merge");
							score = score + a.text()*1;
              a.remove();
              
							break;
						}
					}
						
					
						j++;
					}
				}	
			}
		}
		newTile();
     
		
		break;
    
   	   
       
     case 38: //fleche haut
     for(var i = 0; i<tiles.length; i++)// get every tiles
    { 
    var a = $(tiles[i]);
    var b = a.attr("class").substr(6, 4); //displays full classes row 
    var d = a.attr("class").substr(11, 4); //displays full classes col
    var col = (a.attr("class").substr(14, 1))*1;//displays col num
    var row = (a.attr("class").substr(9, 1))*1;//displays row num
    
    for(var k = 1; k<5; k++)//go through columns
    {

      if(d == "col"+k)
      {
        var j = ((row-1)*4+k)-4;
        while(j >= k)
        {
          if($("#sq-"+j).text() == "")
          {
            
            a.appendTo($("#sq-"+j)).removeClass().addClass("tiles row"+(((j-k)/4)+1)+" col"+col);
         
               
          
          }
          else if($("#sq-"+j).children().length > 0 && $("#sq-"+j) !== a )
          {
            
            if($("#sq-"+j).children().text() == a.text() && $("#sq-"+j).children().attr("class").search("merge") < 0)
            {
              $("#sq-"+j).children().text((a.text())*2);
              $("#sq-"+j).children().addClass("merge");
              score = score + a.text()*1;
              a.remove();
              
              break;
            }
          }
            
          
            j=j-4;
          }
        } 
      }
    }

newTile();
 
       break; 
     case 39: // fleche droite
     for(var i = tiles.length-1; i>=0; i--)
    {	
    	
    	 a = $(tiles[i]);//tuile
		 b = a.attr("class").substr(6, 4);
		 c = a.attr("class").substr(14, 1);
		 d = a.attr("class").substr(11, 4);

		for(k = 1; k<5; k++)
		{
			if(b == "row"+k)
			{
				j = ((k*4))
				while(j > (c*1)+((k-1)*4))
				{
					
					if($("#sq-"+j).text() == "")
					{
						a.appendTo($("#sq-"+j)).removeClass(d).addClass("col"+(j-((k-1)*4)));
            
						
						break;	
					}
					else if($("#sq-"+j).children().length > 0 && $("#sq-"+j) !== a )
          {
            
            if($("#sq-"+j).children().text() == a.text() && $("#sq-"+j).children().attr("class").search("merge") < 0)
            {
              $("#sq-"+j).children().text((a.text())*2);
              $("#sq-"+j).children().addClass("merge");
              
              score = score + a.text()*1;
              a.remove();
              
              break;
            }
          }
						
					
						j--;
					}
				}	
			}
		}
newTile();
 
       break;
     case 40: // fleche bas
     
  for(var i = (tiles.length)-1; i>=0; i--)// get every tiles
    { 
      
    var a = $(tiles[i]);
    var b = a.attr("class").substr(6, 4); //displays full classes row 
    var d = a.attr("class").substr(11, 4); //displays full classes col
    var col = (a.attr("class").substr(14, 1))*1;//displays col num
    var row = (a.attr("class").substr(9, 1))*1;//displays row num
    
    for(var k = 13; k<17; k++)//go through columns
    {
         if(d == "col"+(k-12))
      {
        var j = ((row-1)*4+(k-12))+4;
       while(j <= k)
        {
                if($("#sq-"+j).text() == "")
          {
          a.appendTo($("#sq-"+j)).removeClass().addClass("tiles row"+(((j-(k-12))/4)+1)+" col"+col);
          
               
          
          }
          else if($("#sq-"+j).children().length > 0 && $("#sq-"+j) !== a )
          {
            
            if($("#sq-"+j).children().text() == a.text() && $("#sq-"+j).children().attr("class").search("merge") < 0)
            {
              $("#sq-"+j).children().text((a.text())*2);
              $("#sq-"+j).children().addClass("merge");
              score = score + (a.text()*1);
                          a.remove();
              
              break;
            }
          }
            
          
            j=j+4;
          }
        } 
      }
    }
    newTile();
     
        break;
   }
$("#score").empty();   	
$("#score").append("Score: "+score);


colors();
});
      
}

function reset()
{
   for (var i = 0; i < 17; i++)
  {
    $("#sq-"+i).empty();
  }
  tiles(100);
  
}
function colors()
{
  var tiles = $(".tiles");
  var arr = [];
  console.log(tiles.length);
  $(".square-container").css("background-color", "#eee4da");
  for(var i = 0; i< tiles.length; i++)
  {
    arr.push($(tiles[i]).text());
    if($(tiles[i]).text() == 2){$(tiles[i]).parent().css("background-color", "#f6eccd")}
    else if($(tiles[i]).text() == 4){$(tiles[i]).parent().css("background-color", "#ffb58d")}
    else if($(tiles[i]).text() == 8){$(tiles[i]).parent().css("background-color", "#f28074")}
      else if($(tiles[i]).text() == 16){$(tiles[i]).parent().css("background-color", "#e13434")}
    else if($(tiles[i]).text() == 32){$(tiles[i]).parent().css("background-color", "#851313")}
      else if($(tiles[i]).text() == 64){$(tiles[i]).parent().css("background-color", "#00f9ff")}
    else if($(tiles[i]).text() == 128){$(tiles[i]).parent().css("background-color", "#009fff")}
      else if($(tiles[i]).text() == 256){$(tiles[i]).parent().css("background-color", "#0078ff")}
    else if($(tiles[i]).text() == 512){$(tiles[i]).parent().css("background-color", "#005eff")}
      else if($(tiles[i]).text() == 1024){$(tiles[i]).parent().css("background-color", "#0900ff")}
    else if($(tiles[i]).text() == 2048){$(tiles[i]).parent().css("background-color", "#3eb308")}
      else if($(tiles[i]).length == 0){$(tiles[i]).parent().css("background-color", "#eee4da")}

      

  }

  console.log(arr);

  
}




tiles(100);
moves();


$("#newGame").on("click", function(){
  reset();
});


  }    
}( jQuery ));





$(document).ready(function(){
$("#coco").mygame(100);


});






 
  



