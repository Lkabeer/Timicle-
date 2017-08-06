//Text X-Team
var svg = d3.select("#containerX").append("svg")
            .attr("id", "text1")
            .attr("width", 120)
            .attr("height", 120)
            .attr("display", "none");

//Create an SVG arc starting at location [0,300], ending at [400,300] with a radius of 200 (circle)
var path = svg.append("path")
    .attr("id", "wavy1") //A unique ID to reference later
    .attr("d", "M0,120 A60,60 0 0,1 120,120") //Notation for an SVG path
    .style("fill", "none");
//    .style("stroke", "#AAAAAA")
//    .style("stroke-dasharray", "5,5");

//Create an SVG text element and append a textPath element
var textArc = svg.append("text")
    .style("text-anchor","end")
  .append("textPath")				//append a textPath to the text element
    .attr("xlink:href", "#wavy1") 	//place the ID of the path here
    .attr("startOffset", "50%")		//place the text halfway on the arc
    .text("Life Span");
//End Text X-Team


//Text X-Team
var svg = d3.select("#containerX").append("svg")
            .attr("id", "text2")
            .attr("width", 160)
            .attr("height", 160)
            .attr("display", "none");

//Create an SVG arc starting at location [0,300], ending at [400,300] with a radius of 200 (circle)
var path = svg.append("path")
    .attr("id", "wavy2") //A unique ID to reference later
    .attr("d", "M0,160 A60,60 0 0,1 160,160") //Notation for an SVG path
    .style("fill", "none");
//    .style("stroke", "#AAAAAA")
//    .style("stroke-dasharray", "5,5");

//Create an SVG text element and append a textPath element
var textArc = svg.append("text")
    .style("text-anchor","end")
  .append("textPath")				//append a textPath to the text element
    .attr("xlink:href", "#wavy2") 	//place the ID of the path here
    .attr("startOffset", "50%")		//place the text halfway on the arc
    .text("Places of Residence");
//End Text X-Team


//Text X-Team
var svg = d3.select("#containerX").append("svg")
            .attr("id", "text3")
            .attr("width", 200)
            .attr("height", 200)
            .attr("display", "none");


//Create an SVG arc starting at location [0,300], ending at [400,300] with a radius of 200 (circle)
var path = svg.append("path")
    .attr("id", "wavy3") //A unique ID to reference later
    .attr("d", "M0,200 A60,60 0 0,1 200,200") //Notation for an SVG path
    .style("fill", "none");
//    .style("stroke", "#AAAAAA")
//    .style("stroke-dasharray", "5,5");

//Create an SVG text element and append a textPath element
var textArc = svg.append("text")
    .style("text-anchor","end")
  .append("textPath")				//append a textPath to the text element
    .attr("xlink:href", "#wavy3") 	//place the ID of the path here
    .attr("startOffset", "50%")		//place the text halfway on the arc
    .text("Education");
//End Text X-Team


//Text X-Team
var svg = d3.select("#containerX").append("svg")
            .attr("id", "text4")
            .attr("width", 240)
            .attr("height", 240)
            .attr("display", "none");

//Create an SVG arc starting at location [0,300], ending at [400,300] with a radius of 200 (circle)
var path = svg.append("path")
    .attr("id", "wavy4") //A unique ID to reference later
    .attr("d", "M0,240 A60,60 0 0,1 240,240") //Notation for an SVG path
    .style("fill", "none");
//    .style("stroke", "#AAAAAA")
//    .style("stroke-dasharray", "5,5");

//Create an SVG text element and append a textPath element
var textArc = svg.append("text")
    .style("text-anchor","end")
  .append("textPath")				//append a textPath to the text element
    .attr("xlink:href", "#wavy4") 	//place the ID of the path here
    .attr("startOffset", "50%")		//place the text halfway on the arc
    .text("Work");
//End Text X-Team


//Text X-Team
var svg = d3.select("#containerX").append("svg")
            .attr("id", "text5")
            .attr("width", 280)
            .attr("height", 280)
            .attr("display", "none");

//Create an SVG arc starting at location [0,300], ending at [400,300] with a radius of 200 (circle)
var path = svg.append("path")
    .attr("id", "wavy5") //A unique ID to reference later
    .attr("d", "M0,280 A60,60 0 0,1 280,280") //Notation for an SVG path
    .style("fill", "none");
//    .style("stroke", "#AAAAAA")
//    .style("stroke-dasharray", "5,5");

//Create an SVG text element and append a textPath element
var textArc = svg.append("text")
    .style("text-anchor","end")
  .append("textPath")				//append a textPath to the text element
    .attr("xlink:href", "#wavy5") 	//place the ID of the path here
    .attr("startOffset", "50%")		//place the text halfway on the arc
    .text("Part-time Work");
//End Text X-Team

setTimeout(function() {
    $("svg").attr("display", "inline-block");
}, 1500);
