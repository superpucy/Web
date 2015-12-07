var svg_width = 300;
var svg_height = 300;
var dataset = [10,20,60,40,50,60];
var svg = d3.select("body")
	.append("svg")
	.attr("width",svg_width)
	.attr("height",svg_height);

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x",function(d,i){
		return 0;
	})
	.attr("y",function(d,i){
		return i * (svg_height/dataset.length);
	})
	.attr("width",function(d){
		return  d*4;
	})
	.attr("height",function(d){
		return svg_height/dataset.length;
	})
	.attr("fill",function(d){
		 return "rgb(" +  d*5 + ",0 ,0 )";
	});