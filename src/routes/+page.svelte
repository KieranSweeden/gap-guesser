<script>
    async function fetchGuess() {
        const res = await fetch('/api/guess');
        const data = await res.json();
        return data;
    }

    async function populateGuess() { 
        const guess = await fetchGuess();

        if (guess && guess.webTitle) {
            const element = document.getElementById('guess-headline');
            if (element) {
                element.innerText = guess.webTitle;
            }
        }
    }

</script>

<h1>Gap Guesser</h1>
<p id="guess-headline">No guess has been requested yet...</p>
<button on:click={populateGuess}>Fetch & log guess</button>