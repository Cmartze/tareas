const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Convertir la respuesta a JSON
    console.log(data);
    $n.textContent = data.name; // Usa template literals para mostrar correctamente los datos
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (error) {
    console.error('Hubo un error:', error);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);


/*
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Selección corregida para clase name
const $b = document.querySelector('.blog'); // Selección corregida para clase blog

async function displayUser(username) {
  $n.textContent = 'Cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Convertir la respuesta a JSON
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = data.blog || 'No disponible'; // Manejo de caso donde blog no está definido
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski');
*/