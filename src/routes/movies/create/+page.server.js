import db from "$lib/db.js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const title = form.get("title")?.toString().trim();
    const year  = Number(form.get("year"));
    const length = form.get("length")?.toString().trim();
    const poster = form.get("poster")?.toString().trim();

    if (!title || !year || !length) {
      return fail(400, { error: "Bitte Titel, Jahr und Dauer angeben.", values: { title, year, length, poster } });
    }

    const movie = { title, year, length };
    if (poster) movie.poster = poster;

    const id = await db.createMovie(movie);
    if (!id) return fail(500, { error: "Erstellen fehlgeschlagen.", values: { title, year, length, poster } });

    throw redirect(303, `/movies/${id}`);
  }
};
