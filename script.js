new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor : ['#FFE0F2', '#beb4d6', '#957DAD', '#CDEBCC', '#FEC5E5', '#FEBE93', '#FFE0CC'],
    onLeave: function(origin, destination, direction){
        if(destination.index == 0){
          // First section
          // Add code for slider
        }
        if(destination.index == 1){
          // Second section
        }
        // ...
      }
});

$(document).ready(function() {
    var canvas = document.getElementById('score-chart');
    var ctx = canvas.getContext('2d');

    var data = {
        labels: ['Score 1', 'Score 2', 'Score 3'],
        datasets: [{
            label: 'Last 3 Scores',
            data: [10, 20, 30],
            backgroundColor: '#a7bed3',
            borderColor: '#333',
            borderWidth: 1
        }]
    };

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
