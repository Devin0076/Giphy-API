const apiKey = 'xwjHze06uP2uNptiXcrOYV8JxowZhLA6';

document.getElementById('fetch-gif-btn').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value || 'funny cat';

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=1`);

    const data = await response.json();
    const gifUrl = data.data[0]?.images?.downsized_medium?.url;

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = ''; // Clear previous GIFs

    if (gifUrl) {
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = query;
        img.classList.add('img-fluid', 'mb-3');
        gifContainer.appendChild(img);
    } else {
        gifContainer.innerHTML = '<p>No GIF found. Try another search.</p>';
    }
});