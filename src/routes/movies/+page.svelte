<script>
  import MovieCard from "$lib/components/MovieCard.svelte";
  export let data;
  const { movies } = data;
</script>

<div class="d-flex justify-content-between align-items-center mb-3">
  <h1 class="m-0">Movies</h1>
  <a class="btn btn-success" href="/movies/create">➕ Neuer Film</a>
</div>

{#if movies?.length === 0}
  <p>Keine Filme vorhanden.</p>
{/if}

<div class="row">
  {#each movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <a class="text-decoration-none" href={`/movies/${movie._id}`}>
        <MovieCard {movie}/>
      </a>
    </div>
  {/each}
</div>
