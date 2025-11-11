import db from "$lib/db.js";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const movie = await db.getMovie(params.id);
  if (!movie) throw error(404, "Movie not found");
  return { movie };
}

export const actions = {
  delete: async ({ params }) => {
    await db.deleteMovie(params.id);
    throw redirect(303, "/movies");
  }
};
