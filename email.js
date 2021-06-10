var form = document.getElementById('my-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('my-form-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML = 'Thanks for sending!';
      status.style.color = 'green';
      form.reset();
    })
    .catch((error) => {
      status.style.color = 'red';
      status.innerHTML = 'There was a problem in sending';
    });
}
form.addEventListener('submit', handleSubmit);
