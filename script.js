const jokeBtn = document.getElementById('jokeBtn');
const joke = document.getElementById('joke');
jokeBtn.addEventListener('click', async () => {
  try {
    const resource = await fetch('https://sv443.net/jokeapi/v2/joke/Any');
    const data = await resource.json();
    joke.textContent = data.setup ? `${data.setup} - ${data.delivery}` : data.joke;
  } catch (e) { joke.textContent = "Joke is not loading"; }
});
