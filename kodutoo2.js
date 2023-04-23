new fullpage('#fullpage', {
    sectionsColor: ['#FA8072', '#F0F8FF', '#C0C0C0', '#FFE4E1', '#FFFFF0', '#F5F5DC', '#FFB6C1'],
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
      labels: ['Käsitöö', 'Muusika', 'Tantsimine', 'Kokandus', 'Lugemine', 'Fotografeerimine', 'Muu'],
      datasets: [{
        label: '%',
        data: [20, 8, 22, 8, 12, 24, 6],
        borderWidth: 1,
        backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400', '#20B2AA'],
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






let playerChoice = prompt("Выберите камень, ножницы или бумагу:");
let computerChoice = Math.floor(Math.random() * 3); // 0 - камень, 1 - ножницы, 2 - бумага

switch(playerChoice) {
  case "Kivi":
    if(computerChoice === 0) {
      console.log("viik");
    } else if(computerChoice === 1) {
      console.log("võit");
    } else {
      console.log("Kaotus");
    }
    break;
  case "Käärid":
    if(computerChoice === 0) {
      console.log("Kaotus");
    } else if(computerChoice === 1) {
      console.log("viik");
    } else {
      console.log("võit");
    }
    break;
  case "Paber":
    if(computerChoice === 0) {
      console.log("võit");
    } else if(computerChoice === 1) {
      console.log("Kaotus");
    } else {
      console.log("viik");
    }
    break;
  default:
    console.log("Vale sisestus");
}
