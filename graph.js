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
 function getData() {
  return Math.random()*100;
}
var val=0;
 function getXData(){
   val+=1;
   return val-1;
 }
  var trace1 = {
    
    //x: Math.random(),
    //x: [getXData()],
    y: [getData()],
    //y: [6,9,8,11,12,10,9,5,1,11,7,17,21,22,20,18,21,8,9,8,8,12,10,17,9],
    mode: 'lines+markers',
    name: 'value',
    
    line: {shape: 'spline'},
    type: 'scatter'
  };


  var data = [trace1];
  var layout = {
    height: 670,
    width: 1440,
    title: "Historic Prices",
    yaxis: {
      linecolor: 'lightblue',
      linewidth: 2,
      mirror: true,
      title: "price"
    },
    xaxis: {
      linecolor: 'lightblue',
      linewidth: 2,
      mirror: true,
      title: "time"
    },
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {size: 16},
      yref: 'paper'
    }};

  Plotly.newPlot('graphDiv', data, layout);
  var count=0;
  setInterval(function() {
    Plotly.extendTraces('graphDiv', { y: [[getData()]] }, [0])
    count++;
    if(count>50){
      Plotly.relayout('graphDiv',{
        xaxis: {
                  range: [count-50,count]
               }
      });
    }
 }, 200);
  //var add = document. getElementById("add");
  //add. innerHTML = "Add";
  //var remove = document. getElementById("remove");
  //remove. innerHTML = "remove";
}
