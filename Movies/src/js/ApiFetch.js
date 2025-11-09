export async function allMoviesByPage(numPage,select="upcoming") {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2FjNGNkYjNkZmFlZTcxOGYwZjVmMGM3ODEzYmI2YSIsIm5iZiI6MTcxNDEzMTE3MS40MjU5OTk5LCJzdWIiOiI2NjJiOTBlMzNkNzQ1NDAxMWNkMjNmYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iV7bz8DoQYMn2VhNDfCKVlKpUKRYnLcCILn2VshyIOs",
      Accept: "application/json",
    },
  };
  try {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/"+select+"?language=en-US&page=" +
        numPage,
      options
    );

    if (!response.ok) {
      throw new Error("Error con código " + response.status);
    }
    let data = await response.json();
    let results = data.results;
    if (localStorage.getItem("movies") === null) {
      localStorage.setItem("movies", JSON.stringify(results));
    }
    return results;
  } catch (error) {
    console.error(error);
  }
}
