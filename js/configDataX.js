var canvasWidth = 160;
var canvasHeight = 160;

//var cutOutPercentageX = 75;

cutOutPercentageX = 120 / canvasWidth * 100;
cutOutPercentage2LayersOuter = 140 / canvasWidth * 100;

var transparent = -0.2;
function IncrementTransparentX() {
    transparent += 0.2;
    if(transparent > 0.8) {
        transparent = 0;
    }
//    console.log(transparent);
    return transparent;
}

//Basic ConfigData X-Team
        var configBg = {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: [
                    "Life Span",
                    "Places of Residence",
                    "Education",
                    "Work",
                    "Life Milestones",
                ],
                datasets: [{
                    label: "My Timicle",
                    data: [

                    ],
                    backgroundColor: [
                        'rgba(176, 036, 024, 1)',
                        'rgba(255, 255, 255, 0)'
                    ],
                    borderWidth: 0,
                    borderColor: 'rgba(255, 255, 255, 0)',
                    hoverborderWidth: 0,
                    hoverBorderColor: 'rgba(0, 0, 0, 0)'
                }]
            },

            // Configuration options go here
            options: {
                responsive: false,
                legend: {
                    display: false,
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'Timicle X-Team '
                },
                animation: {
                    animateScale: false,
                    animateRotate: true
                },
                cutoutPercentage: cutOutPercentageX,
        //            segmentShowStroke: false
            }
        };

        var config = {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: [
                    "Life Span",
                    "Your Timicle",
                ],
                datasets: [{
                    label: "My Life Span",
                    data: [

                    ],
                    backgroundColor: [
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)'
                    ],
                    borderWidth: 0,
                    borderColor: 'rgba(255, 255, 255, 0)',
                    hoverborderWidth: 0,
                    hoverBorderColor: 'rgba(0, 0, 0, 0)'
                }]
            },

            // Configuration options go here
            options: {
                responsive: false,
                legend: {
                    display: false,
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'Timicle X-Team '
                },
                animation: {
                    animateScale: false,
                    animateRotate: true
                },
                cutoutPercentage: cutOutPercentageX,
            //            segmentShowStroke: false
            }
        };
    //End Basic ConfigData X-Team

    //Basic ConfigData2Layers X-Team
        var config2Layers = {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: [
                    "Life Span",
                    "Your Timicle",
                ],
                datasets: [{
                    label: "My Life Span",
                    data: [

                    ],
                    backgroundColor: [
                        'rgba(0, 0, 0, .2)',
                        'rgba(255, 255, 255, 0)'
                    ],
                    borderWidth: 0,
                    borderColor: 'rgba(255, 255, 255, 0)',
                    hoverborderWidth: 0,
                    hoverBorderColor: 'rgba(0, 0, 0, 0)'
                }]
            },

            // Configuration options go here
            options: {
                responsive: false,
                legend: {
                    display: false,
                    position: 'top'
                },
                title: {
                    display: false,
                    text: 'Timicle X-Team '
                },
                animation: {
                    animateScale: false,
                    animateRotate: true
                },
                cutoutPercentage: cutOutPercentage2LayersOuter,
                        segmentShowStroke: true
            }
        };
    //End Basic ConfigData2Layers X-Team

//	Dataset2 X-Team
var newDataset2Bg = {
    backgroundColor: [
        'rgba(236, 224, 212, 1)',
        'rgba(0, 0, 0, 0)'
    ],
    data: [

    ],
};

var newDataset2 = {
    backgroundColor: [
        'rgba(236, 224, 212, 1)',
        'rgba(0, 0, 0, 0)'
    ],
    data: [

    ],
};

var Dataset2Length = newDataset2.data.length - 1;
for (var i = 0; i < Dataset2Length; i++) {
    backgroundColor = "rgba(0, 0, 0, " + IncrementTransparentX() + ")";
    console.log(backgroundColor);
    newDataset2.backgroundColor.push(backgroundColor);
}
newDataset2.backgroundColor.push("rgba(0, 0, 0, 0)");
transparent = -0.2;
//console.log(newDataset2.backgroundColor);
//	Dataset2 X-Team

//	Dataset3 X-Team
var newDataset3Bg = {
    backgroundColor: [
        'rgba(230, 189, 184, 1)',
        "rgba(0, 0, 0, 0)",
    ],
    data: [

    ],
    label: 'Education',
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0)',
    hoverborderWidth: 0,
    hoverBorderColor: 'rgba(0, 0, 0, 0)'
};


var newDataset3 = {
    backgroundColor: [
        "rgba(0, 0, 0, 0.1)",
        "rgba(0, 0, 0, 0.2)",
        "rgba(0, 0, 0, 0.3)",
        "rgba(0, 0, 0, 0.4)",
        "rgba(0, 0, 0, 0.5)",
        "rgba(0, 0, 0, 0.6)",
        "rgba(0, 0, 0, 0)"
    ],
    data: [

    ],
    label: 'Education',
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 1)',
    hoverborderWidth: 0,
    hoverBorderColor: 'rgba(0, 0, 0, 0)'
};

var Dataset3Length = newDataset3.data.length - 1;
for (var i = 0; i < Dataset3Length; i++) {
    backgroundColor = "rgba(0, 0, 0, " + IncrementTransparentX() + ")";
    console.log(backgroundColor);
    newDataset3.backgroundColor.push(backgroundColor);
}
newDataset3.backgroundColor.push("rgba(0, 0, 0, 0)");
transparent = -0.2;
//console.log(newDataset3.backgroundColor);
//	Dataset3 X-Team


//	Dataset4 X-Team
var newDataset4Bg = {
    backgroundColor: [
        window.chartColors.blue,
        "rgba(0, 0, 0, 0)",
    ],
    data: [

    ],
    label: 'Education',
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0)',
    hoverborderWidth: 0,
    hoverBorderColor: 'rgba(0, 0, 0, 0)'
};


var newDataset4 = {
    backgroundColor: [
        'rgba(0, 0, 0, 0)',
        'rgba(0, 0, 0, 0)'
    ],
    data: [

    ],
    label: 'Education',
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 1)',
    hoverborderWidth: 0,
    hoverBorderColor: 'rgba(0, 0, 0, 0)'
};

var Dataset4Length = newDataset4.data.length - 1;
for (var i = 0; i < Dataset4Length; i++) {
    backgroundColor = "rgba(0, 0, 0, " + IncrementTransparentX() + ")";
//    console.log(backgroundColor);
    newDataset4.backgroundColor.push(backgroundColor);
}
newDataset4.backgroundColor.push("rgba(0, 0, 0, 0)");
transparent = -0.2;
//console.log(newDataset4.backgroundColor);
//	Dataset4 X-Team

//	Dataset5 X-Team
var newDataset5Bg = {
        backgroundColor: [
        window.chartColors.yellow,
        "rgba(0, 0, 0, 0)",
    ],
    data: [

    ],
    label: 'Education',
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0)',
    hoverborderWidth: 0,
    hoverBorderColor: 'rgba(0, 0, 0, 0)'
};


var newDataset5 = {
    backgroundColor: [
        'rgba(0, 0, 0, 0)',
        'rgba(0, 0, 0, 0)'
    ],
    data: [

    ],
    label: 'Education',
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 1)',
    hoverborderWidth: 0,
    hoverBorderColor: 'rgba(0, 0, 0, 0)'
};

var Dataset5Length = newDataset5.data.length - 1;
for (var i = 0; i < Dataset5Length; i++) {
    backgroundColor = "rgba(0, 0, 0, " + IncrementTransparentX() + ")";
//    console.log(backgroundColor);
    newDataset5.backgroundColor.push(backgroundColor);
}
newDataset5.backgroundColor.push("rgba(0, 0, 0, 0)");
transparent = -0.2;
//console.log(newDataset5.backgroundColor);
//	Dataset5 X-Team


//	Dataset6 X-Team
var newDataset5L = {
    backgroundColor: [
        'rgba(255, 255, 255, .5)',
        'rgba(0, 0, 0, 0)'
    ],
    data: [

    ],
    label: 'Work',
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 1)',
    hoverborderWidth: 0,
    hoverBorderColor: 'rgba(0, 0, 0, 0)'
};

var Dataset6Length = newDataset5L.data.length - 1;
for (var i = 0; i < Dataset6Length; i++) {
    backgroundColor = "rgba(0, 0, 0, " + IncrementTransparentX() + ")";
    console.log(backgroundColor);
    newDataset5L.backgroundColor.push(backgroundColor);
}
newDataset5L.backgroundColor.push("rgba(0, 0, 0, 0)");
transparent = -0.2;
//console.log(newDataset5.backgroundColor);
//	Dataset6 X-Team
