function initGraph(dat)
{
    var time=new Date();
    var trace1 = {
      x: [time],
      y: [dat],
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
        }
    };
    
    var id=dat;
    Plotly.newPlot('graphDiv', data, layout);
    var interval = setInterval(function() {
        function getData(){
            axios.get('https://random-data-api.com/api/users/random_user').then(response=>{
              id=response.data.id;
            });
        }
        var time = new Date();
        getData();

        var update = {
            y: [[id]],
            x: [[time]]
        }; 

        var olderTime = time.setMinutes(time.getMinutes() - 1);
        var futureTime = time.setMinutes(time.getMinutes() + 1);

        var minuteView = {
                xaxis: {
                  type: 'date',
                  range: [olderTime,futureTime]
                }
          };

          Plotly.relayout('graphDiv', minuteView);
          Plotly.extendTraces('graphDiv', update, [0]);
    }, 1000);      
}
