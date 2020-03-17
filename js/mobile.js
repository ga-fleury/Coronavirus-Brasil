d3.csv('../data/brasil_full.csv')
  .then(data => {
    // all-time dates and case numbers
    var suspectFull = data.map(d => d = d.casos_suspeitos)
    var mortesFull = data.map(d => d = d.mortes_total);
    var newCasesFull = data.map(d => d = d.casos_dia);
    var dateFull = data.map(d => d = d.dia);
    var brasilCasesFull = data.map(d => d = d.casos_total);
    // 30-day period 
    var dateTrinta = dateFull.slice(dateFull.length - 30, dateFull.length);
    var brasilCasesTrinta = brasilCasesFull.slice(brasilCasesFull.length - 30, brasilCasesFull.length);
    var newCasesTrinta = newCasesFull.slice(newCasesFull.length - 30, newCasesFull.length);
    var mortesTrinta = mortesFull.slice(mortesFull.length - 30, mortesFull.length);
    var suspectTrinta = suspectFull.slice(suspectFull.length - 30, suspectFull.length);
    // 7-day period
    var dateSete = dateFull.slice(dateFull.length - 7, dateFull.length);
    var brasilCasesSete = brasilCasesFull.slice(brasilCasesFull.length - 7, brasilCasesFull.length);
    var newCasesSete = newCasesFull.slice(newCasesFull.length - 7, newCasesFull.length);
    var mortesSete = mortesFull.slice(mortesFull.length - 7, mortesFull.length);
    var suspectSete = suspectFull.slice(suspectFull.length - 7, suspectFull.length);

    var chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: dateSete,
        datasets: [
          {
            label: 'Casos Confirmados no Brasil',
            data: brasilCasesSete,
            backgroundColor: 'rgba(255, 200, 132, 0)',
            borderColor: 'rgba(50, 168, 82, 1)'
          },
          {
            label: 'Novos Casos (dia)',
            data: newCasesSete,
            backgroundColor: 'rgba(50, 168, 82, 1)',
            borderColor: 'rgba(50, 168, 82, 1)',
          },
          {
            label: 'Mortes',
            data: mortesSete,
            backgroundColor: 'rgba(252, 50, 50, 1)',
            borderColor: 'rgba(252, 50, 50, 1)'
          },
          // {
          //   label: 'Casos Suspeitos',
          //   data: suspectSete,
          //   backgroundColor: 'rgba(255, 255, 50, 1)',
          //   type: 'bar'
          // }
        ]
      },
      options: {
        maintainAspectRatio: false
      }
    });
  });
