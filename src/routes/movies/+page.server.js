import db from "$lib/db.js";

export async function load() {
  const movies = await db.getMovies();
  return { movies };
}
