new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'lastPage'],
    navigation: true,
    slidesNavPosition: 'bottom',
    css3:true
  });

const ctx = document.getElementById('myChart');
let delayed;
  
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Räpp muusika', 'Tattoo', 'Piersing', 'Gym', 'Jalutamine', 'Teised hobbid'],
      datasets: [{
        label: '# of Votes',
        data: [30, 20, 15, 15, 5, 3],
        borderWidth: 1,
        backgroundColor: ['#CB4865', '#1F788D', '#F7C49F', '#56AE60', '#234EA0', '#D9800']
      }]
    },
    options: {
      animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          }
      }
    }
});

