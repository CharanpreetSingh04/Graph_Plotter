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
   
  
// Write data in 'Output.txt' . 
 
 function getData() {
  var v=Math.random()*100;
  return v;
}
var val=0;
 function getXData(){
   val+=1;
   return val-1;
 }
  var time=new Date();
  var trace1 = {
    //x: Math.random(),
    //x: [getXData()],
    x: [time],
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
  /*var wb = XLSX.utils.book_new();
  wb.Props = {
    Title: "SheetJS Tutorial",
    Subject: "Test",
    Author: "ISRO PROJECT",
    CreatedDate: new Date(2021,21,1)
  };
  wb.SheetNames.push("Test Sheet");
  */
  Plotly.newPlot('graphDiv', data, layout);
  var cnt = 0;

  var interval = setInterval(function() {

  var time = new Date();

  var update = {
    x:  [[time]],
    y: [[getData()]]
  }
  var olderTime = time.setMinutes(time.getMinutes() - 1);
  var futureTime = time.setMinutes(time.getMinutes() + 1);

  var minuteView = {
        xaxis: {
          type: 'date',
          range: [olderTime,futureTime]
        }
      };

  Plotly.relayout('graphDiv', minuteView);
  Plotly.extendTraces('graphDiv', update, [0])

  //if(++cnt === 100) clearInterval(interval);
}, 200);
  /*var count=0;
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
    /*var ws_data = [[data,count]];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Test Sheet"] = ws;
    var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
    function s2ab(s) { 
      var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
      //var view = new Uint8Array(buf);  //create uint8array as viewer
      //for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i); //& 0xFF; //convert to octet
      return buf;    
    }
    $("#button-a").click(function(){
      saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
    });*/
 //}, 200);*/
  //var add = document. getElementById("add");
  //add. innerHTML = "Add";
  //var remove = document. getElementById("remove");
  //remove. innerHTML = "remove";
}
