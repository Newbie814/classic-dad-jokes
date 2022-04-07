const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');

btn.addEventListener('click', () => {
  fetchJoke();
});

const fetchJoke = async () => {
  joke.textContent = 'Loading...';
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'matt',
    },
  });

  const data = await response.json();
  joke.textContent = data.joke;
  console.log(data);
};

fetchJoke();
