<script>
  export let data;
  const { movie } = data;

  function confirmDelete(e) {
    if (!confirm(`"${movie.title}" wirklich löschen?`)) {
      e.preventDefault();
    }
  }
</script>

<a class="btn btn-link ps-0" href="/movies">← Zurück</a>

<div class="row g-4 mt-1">
  <div class="col-auto">
    <img src={movie.poster} alt={"Poster " + movie.title} class="img-fluid rounded border" style="max-width:220px" />
  </div>
  <div class="col">
    <h1 class="mb-1">{movie.title}</h1>
    <div class="text-secondary mb-3">{movie.year} · {movie.length}</div>

    {#if movie.actors?.length}
      <h5>Actors</h5>
      <ul class="mb-4">
        {#each movie.actors as a}<li>{a}</li>{/each}
      </ul>
    {/if}

    <form method="POST" on:submit={confirmDelete}>
      <button class="btn btn-danger" formaction="?/delete" formmethod="post">Film löschen</button>
    </form>
  </div>
</div>
