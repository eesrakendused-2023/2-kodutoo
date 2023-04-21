new fullpage('#fullpage', {
    sectionsColor: ['yellow', 'green', 'blue', 'red', 'orange', 'white', 'green'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'lastPage'],
    navigation: true,
    slidesNavPosition: 'bottom',
    menu: '#myMenu',
    css3:true
  });

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Kunst', 'Muusika', 'Trenn', 'Toit', 'Lugemine/Õppimine', 'Tegevused õues', 'Muu'],
      datasets: [{
        label: '%',
        data: [6, 8, 12, 8, 22, 24, 20],
        borderWidth: 1
      }]
    },
    options: {
        responsive: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  var map = L.map('map').setView([59.4370, 24.7536], 10);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([59.3486, 24.6145], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);


hljs.highlightAll();