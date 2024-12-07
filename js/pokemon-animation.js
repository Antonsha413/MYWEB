document.addEventListener("DOMContentLoaded", function() {
    const pokemons = document.querySelectorAll('.pokemon');

    pokemons.forEach(pokemon => {
        moveRandomly(pokemon);
        setInterval(() => moveRandomly(pokemon), 3000);
    });

    function moveRandomly(pokemon) {
        const x = Math.floor(Math.random() * window.innerWidth) - 100;
        const y = Math.floor(Math.random() * window.innerHeight) - 100;
        pokemon.style.transform = `translate(${x}px, ${y}px)`;
    }
});
