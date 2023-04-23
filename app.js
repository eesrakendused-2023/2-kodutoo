

//spotify id
const playlistId = '76wy8wHBDOpjCFbQacXMHB';




var secretNumber = Math.floor(Math.random() * 10) + 1;

  function guessNumber() {
    var guess = parseInt(document.getElementById("guessInput").value);
    if (guess === secretNumber) {
      document.getElementById("guessResult").innerHTML = "Congratulations! You guessed the number!";
    } else {
      document.getElementById("guessResult").innerHTML = "Sorry, try again!";
    }
  }



  //form js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#status');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('https://formspree.io/f/xvondbpd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      status.innerHTML = 'Thank you for your message!';
      form.reset();
    } else {
      status.innerHTML = 'Oops! Something went wrong. Please try again.';
    }
  });
});

