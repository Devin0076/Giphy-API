const apiKey = 'xwjHze06uP2uNptiXcrOYV8JxowZhLA6';

document.getElementById('fetch-gif-btn').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value || 'funny cat';

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=12`);

    const data = await response.json();
    

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = ''; // Clear previous GIFs

    if (data.data.length > 0) {
        data.data.forEach(gif => {
            const url = gif.images.original.url;
            const img = document.createElement('img');
            img.src = url;
            img.alt = query;
            img.classList.add('img-fluid', 'col-3', 'mb-3', 'rounded', 'shadow-sm');
            gifContainer.appendChild(img);
        });
    } else {
        gifContainer.innerHTML = '<p class="text-center">No GIFs found. Try again.</p>';
    }
});
        
    