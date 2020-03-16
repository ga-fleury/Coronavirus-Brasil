var dateLabel = cases.map(function(d) {return d.date});
var seteDias = dateLabel.slice(dateLabel.length - 7, dateLabel.length);
var worldCasesData = cases.map(function(d) {return d.Brazil});
var casosSete = worldCasesData.slice(worldCasesData.length - 7, worldCasesData.length);

d3.csv('https://covid.ourworldindata.org/data/total_cases.csv')
  .then(makeChart);

  function makeChart(cases) {
    var chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: dateLabel,
        datasets: [
          {
            label: 'Casos Confirmados no Brasil',
            data: worldCasesData,
            backgroundColor: 'rgba(255, 200, 132, 0)',
            borderColor: 'rgba(50, 168, 82, 1)'
          },
        ],
        layout: {
        }
      }
    });
    console.log(length);
    console.log(seteDias.length);
  }