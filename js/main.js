
d3.csv('https://covid.ourworldindata.org/data/total_cases.csv')
.then(makeChart);

function makeChart(cases) {
  var dateFull = cases.map(function(d) {return d.date});
  var brasilCasesFull = cases.map(function(d) {return d.Brazil});
  var dateSeven = dateFull.slice(dateFull.length - 7, dateFull.length);
  var brasilCasesSeven = brasilCasesFull.slice(brasilCasesFull.length - 7, brasilCasesFull.length);

    var chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: dateFull,
        datasets: [
          {
            label: 'Casos Confirmados no Brasil',
            data: brasilCasesFull,
            backgroundColor: 'rgba(255, 200, 132, 0)',
            borderColor: 'rgba(50, 168, 82, 1)'
          },
        ],
        layout: {
        }
      }
    });
  }