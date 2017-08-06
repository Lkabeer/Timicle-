var ageYear = 0;
var dateOfBirth = 0;
var svgText = 90;
var agePer = 0;
var textCounter = 0;
var numberOfLayers = 2;

var textId;
var textPath;

var textRight = -5 - ( 20 * numberOfLayers);
var textTop = 30 + ( 20 * numberOfLayers);
console.log(textPath);

var infancy;
var childhood;
var adolescene;
var adulthood;
var midlife;
var mature;
var late;

    function lifeCycle(agePer) {
        infancy = agePer * 3;
        childhood = agePer * 8;
        adolescene = agePer * 10;
        adulthood = agePer * 14;
        midlife = agePer * 15;
        mature = agePer * 30;
        late = 100 - (infancy + childhood + adolescene + adulthood + midlife + mature);
        console.log(agePer, infancy + childhood + adolescene);
    }

    function restOfLife() {
        late = 100 - (infancy + childhood + adolescene + adulthood + midlife + mature);
    }

    function calculateAge() {
            //  Get today's Date X-Team
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
            today = yyyy+'-'+mm+'-'+dd;

            console.log(today);

            document.querySelector("#todayX").value = today;
        //  End Get today's Date X-Team

        //  Get Age X-Team
            var date1 = document.querySelector("#birthdayX").value;
            var date2 = document.querySelector("#todayX").value;

            var date1Object = new Date(date1.replace(/-/g,'/'));
            var date2Object = new Date(date2.replace(/-/g,'/'));

            dateOfBirth = date1Object.getFullYear();

            var age = Math.abs(date2Object.getTime() - date1Object.getTime());

            ageYear = Math.round(age / (1000 * 3600 * 24 * 365)) ;

            console.log(ageYear);

            //  age Percentage
                if(ageYear > 0 && ageYear <= 11) {
                    agePer = 3.75;
                    lifeCycle(agePer);
                    adolescene = adulthood = midlife = mature = 0;
                    late = 100 - (infancy + childhood + adolescene + adulthood + midlife + mature);
                }else if(ageYear > 11 && ageYear <= 21) {
                    agePer = 2.5;
                    lifeCycle(agePer);
                    adulthood = midlife = mature = 0;
                    late = 100 - (infancy + childhood + adolescene + adulthood + midlife + mature);
                }else if(ageYear > 21 && ageYear <= 35) {
                    agePer = 2.5;
                    lifeCycle(agePer);
                    midlife = mature = 0;
                    late = 100 - (infancy + childhood + adolescene + adulthood + midlife + mature);
                }else if(ageYear > 35 && ageYear <= 50) {
                    agePer = 1.5;
                    lifeCycle(agePer);
                    mature = 0;
                    late = 100 - (infancy + childhood + adolescene + adulthood + midlife + mature);
                }else if(ageYear > 50 && ageYear <= 80) {
                    agePer = .83;
                    lifeCycle(agePer);
                    late = 100 - (infancy + childhood + adolescene + adulthood + midlife + mature);
                }else if(ageYear > 80) {
                    agePer = .83;
                    lifeCycle(agePer);
                    late = 100 - (infancy + childhood + adolescene + adulthood + midlife + mature);
                }

                ageYear = agePer * ageYear;
                console.log(ageYear);

            //  End age Percentage
        //  End Get Age X-Team
    }

    function pushNewDataset(newDatasetBg, newDataset) {
        canvasWidth += 40;
        canvasHeight += 40;
        cutOutPercentageX = 120 /canvasWidth * 100;

        configBg.options.cutoutPercentage = cutOutPercentageX;
        config.options.cutoutPercentage = cutOutPercentageX;

        $("canvas").css("width", canvasWidth);
        $("canvas").css("height", canvasHeight);

        configBg.data.datasets.unshift(newDatasetBg);
        config.data.datasets.unshift(newDataset);
        window.myDoughnutBg.update();
        window.myDoughnut.update();
    }

    function pushNewDatasetMulti(newDataset) {

        config2Layers.data.datasets.unshift(newDataset);
        window.myDoughnut2Layers.update();
    }

    function pushNewText(layerName) {
    //Text X-Team
        svgText += 40;
        textCounter++;
        textId = "text" + textCounter;
        textPath = "wavy" + textCounter;

        textRight -= 20;
        textTop -= 40;


        var svg = d3.select("#containerX").append("svg")
                    .attr("id", textId)
                    .attr("width", svgText)
                    .attr("height", svgText)
                    .style("right", textRight + "px")
                    .style("top", textTop + "px")
                    .style("text-transform", "uppercase")
                    .attr("display", "inline-block");

        //Create an SVG arc starting at location [0,300], ending at [400,300] with a radius of 200 (circle)
        var path = svg.append("path")
            .attr("id", textPath) //A unique ID to reference later
            .attr("d", "M0, " + svgText + "A60,60 0 0,1 " +  svgText + ", " + svgText) //Notation for an SVG path
            .style("fill", "none");
//            .style("stroke", "#AAAAAA")
//            .style("stroke-dasharray", "5,5");

        //Create an SVG text element and append a textPath element
        var textArc = svg.append("text")
            .style("text-anchor","end")
          .append("textPath")				//append a textPath to the text element
            .attr("xlink:href", "#" + textPath) 	//place the ID of the path here
            .attr("startOffset", "50%")		//place the text halfway on the arc
            .text(layerName);
        //End Text X-Team
    }

window.onload = function() {
   calculateAge();
    //Basic Data X-Team
        var canvasWidth = 160;
        var canvasHeight = 160;
        //var cutOutPercentageX = 75;
        cutOutPercentageX = 120 / canvasWidth * 100;

        console.log(infancy, childhood, adolescene, adulthood, midlife, mature, late);

        var transparent = -0.2;
        function IncrementTransparentX() {
            transparent += 0.2;
            if(transparent > 0.8) {
                transparent = 0;
            }
            console.log(transparent);
            return transparent;
        }

        var canvas = document.getElementsByTagName("canvas");

        Chart.defaults.global.animation.easing = 'easeOutBack';

        var colorNames = Object.keys(window.chartColors);
    //End Basic Data X-Team


    //Basic ConfigData X-Team

    //End Basic ConfigData X-Team


    //build Timicle X-Team
        $("#addDataset").click(function() {
            var ctxBg = document.getElementById("myChartBg").getContext("2d");
            window.myDoughnutBg = new Chart(ctxBg, configBg);
            var ctx = document.getElementById("myChart").getContext("2d");
            window.myDoughnut = new Chart(ctx, config);
            var ctx2Layers = document.getElementById("myChart2Layers").getContext("2d");
            window.myDoughnut2Layers = new Chart(ctx2Layers, config2Layers);

            $("canvas").css("width", canvasWidth).css("height", canvasHeight);

            // push data X-Team
            calculateAge();
            console.log("final:" + ageYear);
            configBg.data.datasets[0].data.push(ageYear);
            configBg.data.datasets[0].data.push(100 - ageYear);
            config.data.datasets[0].data.push(ageYear);
            config.data.datasets[0].data.push(100 - ageYear);
            config2Layers.data.datasets[0].data.push(ageYear);
            config2Layers.data.datasets[0].data.push(100 - ageYear);
            console.log(config.data.datasets[0].data);

            newDataset2Bg.data.push(ageYear, 100 - ageYear);
            newDataset2.data.push(ageYear, 100 - ageYear);

            newDataset3Bg.data.push(100);
            newDataset3.data.push(infancy, childhood, adolescene, adulthood, midlife, mature, late);
//            configBg.data.datasets[0].backgroundColor.push('rgba(176, 036, 024, 1)');
//            configBg.data.datasets[0].backgroundColor.push('rgba(255, 255, 255, 0)');
//            config.data.datasets[0].backgroundColor.push('rgba(0, 0, 0, 0.1)');
//            config.data.datasets[0].backgroundColor.push('rgba(255, 255, 255, 0)');

            newDataset4Bg.data.push(ageYear, 100 - ageYear);
            newDataset4.data.push(ageYear, 100 - ageYear);

            newDataset5Bg.data.push(ageYear, 100 - ageYear);
            newDataset5.data.push(ageYear, 100 - ageYear);
            newDataset5L.data.push(ageYear, 100 - ageYear);

            console.log(configBg.data.datasets[0].backgroundColor);
            // End push data X-Team

            window.myDoughnutBg.update();
            window.myDoughnut.update();
            window.myDoughnut2Layers.update();

            pushNewDataset(newDataset2Bg, newDataset2);
            pushNewDataset(newDataset3Bg, newDataset3);
            pushNewDataset(newDataset4Bg, newDataset4);
            pushNewDataset(newDataset5Bg, newDataset5);

            pushNewDatasetMulti(newDataset5L);

            pushNewText("Life Span");
            pushNewText(dateOfBirth);
            pushNewText("Life Cycle");
            pushNewText("Places of residence");
            pushNewText("Work");

        });

    //End build Timicle X-Team
};
