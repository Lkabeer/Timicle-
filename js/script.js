var counter = 1;

var canvas = document.getElementsByTagName("canvas");

Chart.defaults.global.animation.easing = 'easeOutBack';

window.onload = function() {
    var ctxBg = document.getElementById("myChartBg").getContext("2d");
    window.myDoughnutBg = new Chart(ctxBg, configBg);
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myDoughnut = new Chart(ctx, config);

    $("canvas").css("width", canvasWidth);
    $("canvas").css("height", canvasHeight);

    window.myDoughnutBg.update();
    window.myDoughnut.update();
};

// Delay X-Team

	setTimeout(pushDataSet2, 200);
	function pushDataSet2() {
        canvasWidth += 40;
        canvasHeight += 40;
        cutOutPercentageX = 120/canvasWidth * 100;

        configBg.options.cutoutPercentage = cutOutPercentageX;
        config.options.cutoutPercentage = cutOutPercentageX;

        $("canvas").css("width", canvasWidth);
        $("canvas").css("height", canvasHeight);

        configBg.data.datasets.unshift(newDataset2Bg);
		config.data.datasets.unshift(newDataset2);
        window.myDoughnutBg.update();
		window.myDoughnut.update();

	}
//
	setTimeout(pushDataSet3, 400);
	function pushDataSet3() {
        canvasWidth += 40;
        canvasHeight += 40;
        cutOutPercentageX = 120/canvasWidth * 100;

        configBg.options.cutoutPercentage = cutOutPercentageX;
        config.options.cutoutPercentage = cutOutPercentageX;

        $("canvas").css("width", canvasWidth);
        $("canvas").css("height", canvasHeight);

        configBg.data.datasets.unshift(newDataset3Bg);
		config.data.datasets.unshift(newDataset3);
        window.myDoughnutBg.update();
		window.myDoughnut.update();
	}
//
	setTimeout(pushDataSet4, 600);
	function pushDataSet4() {
        canvasWidth += 40;
        canvasHeight += 40;
        cutOutPercentageX = 120/canvasWidth * 100;

        configBg.options.cutoutPercentage = cutOutPercentageX;
        config.options.cutoutPercentage = cutOutPercentageX;

        $("canvas").css("width", canvasWidth);
        $("canvas").css("height", canvasHeight);

        configBg.data.datasets.unshift(newDataset4Bg);
		config.data.datasets.unshift(newDataset4);
        window.myDoughnutBg.update();
		window.myDoughnut.update();
	}

	setTimeout(pushDataSet5, 800);
	function pushDataSet5() {
        canvasWidth += 40;
        canvasHeight += 40;
        cutOutPercentageX = 120 /canvasWidth * 100;

        configBg.options.cutoutPercentage = cutOutPercentageX;
        config.options.cutoutPercentage = cutOutPercentageX;

        $("canvas").css("width", canvasWidth);
        $("canvas").css("height", canvasHeight);

        configBg.data.datasets.unshift(newDataset5Bg);
		config.data.datasets.unshift(newDataset5);
        window.myDoughnutBg.update();
		window.myDoughnut.update();
	}


//end Delay X-Team

    var colorNames = Object.keys(window.chartColors);
