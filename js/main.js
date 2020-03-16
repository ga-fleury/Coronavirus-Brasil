
d3.csv('https://covid.ourworldindata.org/data/total_cases.csv')
.then(makeChart);

console.log(d3.csv('https://covid.ourworldindata.org/data/total_cases.csv'))

function makeChart(cases) {
  // all-time dates and case numbers
  var dateFull = cases.map(function(d) {return d.date});
  var brasilCasesFull = cases.map(function(d) {return d.Brazil});
  // 30-day period 
  var dateTrinta = dateFull.slice(dateFull.length - 30, dateFull.length);
  var brasilCasesTrinta = brasilCasesFull.slice(brasilCasesFull.length - 30, brasilCasesFull.length);
  // 7-day period
  var dateSete = dateFull.slice(dateFull.length - 7, dateFull.length);
  var brasilCasesSete = brasilCasesFull.slice(brasilCasesFull.length - 7, brasilCasesFull.length);

    var chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: dateTrinta,
        datasets: [
          {
            label: 'Casos Confirmados no Brasil',
            data: brasilCasesTrinta,
            backgroundColor: 'rgba(255, 200, 132, 0)',
            borderColor: 'rgba(50, 168, 82, 1)'
          },
        ],
        options: {
          scales: {
            display: false
          }
        }
      }
    });
  }