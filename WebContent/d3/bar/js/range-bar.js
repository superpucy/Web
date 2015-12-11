var svg_width = 300;
var svg_height = 300;
var padding = 5;
var dataset = [
               {"min":10,"max":20},
   			{"min":25,"max":40},
   			{"min":30,"max":60},
   			{"min":18,"max":39},
   			{"min":3,"max":47}
   		];
var svg = d3.select("body")
	.append("svg")
	.attr("width",svg_width)
	.attr("height",svg_height);

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x",function(d,i){
		return i * (svg_width/dataset.length);
	})
	.attr("y",function(d){
		return svg_height - (d.max*4);
	})
	.attr("width",(svg_width/dataset.length)-padding)
	.attr("height",function(d){
		return (d.max-d.min)*4;
	})
	.attr("fill",function(d){
		 return "rgb(" +  d.max*5 + ",0 ,0 )";
	});