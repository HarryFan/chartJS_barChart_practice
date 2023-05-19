var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["<  1","1 - 2","3 - 4","5 - 9","10 - 14","15 - 19","20 - 24","25 - 29","> - 29"],
		datasets: [{
			label: '總員工',
			backgroundColor: "#caf270",
			data: [12, 59, 5, 56, 58,12, 59, 87, 45],
		  }, {
			label: '工程師',
			backgroundColor: "#45c490",
			data: [12, 59, 5, 56, 58,12, 59, 85, 23],
		  }, {
			label: '政府職員',
			backgroundColor: "#008d93",
			data: [12, 59, 5, 56, 58,12, 59, 65, 51],
		  }, {
			label: '政黨工作人員',
			backgroundColor: "#2e5468",
			data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
		  }],
		  
	},
	options: {
		title: {
		  display: true,
		  text: '各職位工作年限分布'
		},
		scales: {
		  xAxes: [{
			stacked: true,
			scaleLabel: {
			  display: true,
			  labelString: '工作年限（年）'
			},
			gridLines: {
			  display: false
			}
		  }],
		  yAxes: [{
			stacked: true,
			scaleLabel: {
			  display: true,
			  labelString: '員工人數'
			},
			ticks: {
			  beginAtZero: true
			},
			type: 'linear'
		  }]
		},
		responsive: true,
		maintainAspectRatio: false,
		legend: {
		  position: 'bottom'
		},
		tooltips: {
		  mode: 'index',
		  intersect: false
		}
	  }
	  
});