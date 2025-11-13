export async function allMoviesByPage(
  numPage,
  select = "upcoming",
  urlCredits = 0
) {
  let url;
  if (urlCredits === 0) {
    url =
      "https://api.themoviedb.org/3/movie/" +
      select +
      "?language=es-EU&page=" +
      numPage;
  } else if (urlCredits === 1) {
    url = "https://api.themoviedb.org/3/movie/" + numPage + "?language=es-EU";
  } else if (urlCredits === 2) {
    url =
      "https://api.themoviedb.org/3/movie/" +
      numPage +
      "/credits?language=es-EU";
  } else if (urlCredits === 3) {
    url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      numPage +
      "&include_adult=false&language=en-US&page=1";
  }
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2FjNGNkYjNkZmFlZTcxOGYwZjVmMGM3ODEzYmI2YSIsIm5iZiI6MTcxNDEzMTE3MS40MjU5OTk5LCJzdWIiOiI2NjJiOTBlMzNkNzQ1NDAxMWNkMjNmYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iV7bz8DoQYMn2VhNDfCKVlKpUKRYnLcCILn2VshyIOs",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Error con código " + response.status);
    }
    let data = await response.json();
    let dataDetails;
    if (urlCredits === 1) {
      dataDetails = {
        id: data.id,
        title: data.original_title,
        votos: data.vote_average,
        sinopsis: data.overview,
        poster_path: data.poster_path,
      };
    }
    let mapa = new Map();
    let results = await (urlCredits === 0
      ? data.results
      : urlCredits === 1
      ? dataDetails
      : urlCredits === 2
      ? data
      : data.results);
    if (
      localStorage.getItem("movies") !== null &&
      (url.includes(select) || urlCredits === 3)
    ) {
      localStorage.setItem("movies", JSON.stringify(results));
    }
    return results;
  } catch (error) {
    console.error(error);
  }
}
