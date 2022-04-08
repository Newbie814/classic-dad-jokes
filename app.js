const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');

btn.addEventListener('click', () => {
  fetchJoke();
});

const fetchJoke = async () => {
  joke.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'matt',
      },
    });
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const data = await response.json();
    joke.textContent = data.joke;
  } catch (error) {
    joke.textContent = 'Error!';
  }
};

fetchJoke();
