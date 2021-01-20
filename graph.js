function initGraph()
{
  /*
  var trace1 = {
    x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
      y: [1, 3, 6],
    mode: 'lines',
    name: 'linear',
    line: {color: '#17BECF'},
    //type: 'scatter'
    };
  */ 
  var trace1 = {
    
    //x: Math.random(),
    x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    y: [6,9,8,11,12,10,9,5,1,11,7,17,21,22,20,18,21,8,9,8,8,12,10,17,9],
    mode: 'lines+markers',
    name: 'value',
    
    line: {shape: 'spline'},
    type: 'scatter'
  };


  var data = [trace1];

  var layout = {
    height: 670,
    width: 1440,
    yaxis: {
      linecolor: 'lightblue',
      linewidth: 2,
      mirror: true,
    },
    xaxis: {
      linecolor: 'lightblue',
      linewidth: 2,
      mirror: true,
    },
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {size: 16},
      yref: 'paper'
    }};

  Plotly.newPlot('graphDiv', data, layout);
  //var add = document. getElementById("add");
  //add. innerHTML = "Add";
  //var remove = document. getElementById("remove");
  //remove. innerHTML = "remove";
}
//Test
