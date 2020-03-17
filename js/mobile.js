d3.csv('https://covid.ourworldindata.org/data/total_cases.csv')
  .then(cases => {
    d3.csv('https://covid.ourworldindata.org/data/new_cases.csv')
      .then(data => {
        d3.csv('https://covid.ourworldindata.org/data/total_deaths.csv')
          .then( dataD => {
            var mortesFull = dataD.map(d => d = d.Brazil);
            var newCasesFull = data.map(d => d = d.Brazil);
            // all-time dates and case numbers
            var dateFull = cases.map(d => d = d.date);
            var brasilCasesFull = cases.map(d => d = d.Brazil);
            // 30-day period 
            var dateTrinta = dateFull.slice(dateFull.length - 30, dateFull.length);
            var brasilCasesTrinta = brasilCasesFull.slice(brasilCasesFull.length - 30, brasilCasesFull.length);
            var newCasesTrinta = newCasesFull.slice(newCasesFull.length - 30, newCasesFull.length);
            var mortesTrinta = mortesFull.slice(mortesFull.length - 30, mortesFull.length);
            // 7-day period
            var dateSete = dateFull.slice(dateFull.length - 7, dateFull.length);
            var brasilCasesSete = brasilCasesFull.slice(brasilCasesFull.length - 7, brasilCasesFull.length);
            var newCasesSete = newCasesFull.slice(newCasesFull.length - 7, newCasesFull.length);
            var mortesSete = mortesFull.slice(mortesFull.length - 7, mortesFull.length);
            
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
                    type: 'bar',
                    backgroundColor: 'rgba(252, 240, 3, 0.5)',
                  },
                  {
                    label: 'Mortes',
                    data: mortesSete,
                    backgroundColor: 'rgba(0,0,0,0',
                    borderColor: 'rgba(252, 50, 50, 0.5)'
                  }
                ]
              },
              options: {
                maintainAspectRatio: false
              }
        });
      });
    });
  });
  