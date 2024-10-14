async function getGames() {
  const response = await axios.get("./games.json");
  return response.data;
}

function renderTags(tags) {
  return String(
    tags.map(
      (tag) =>
        `<span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">${tag}</span>`
    )
  ).replaceAll(",", "");
}

function renderGame(game) {
  const container = document.getElementById("games");

  container.innerHTML += `
  <a href="#" class="group">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img
        src="${game.cover}"
        alt="${game.name}"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>

    <div class="flex gap-1 pt-2">
      ${renderTags(game.tags)}
    </div>

    <h3 class="mt-2 text-md text-gray-700">${game.name}</h3>
  </a>
`;
}

(async () => {
  const games = await getGames();

  games.forEach((game) => {
    renderGame(game);
  });
})();
