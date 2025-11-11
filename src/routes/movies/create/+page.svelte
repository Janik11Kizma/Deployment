<script>
  export let form;
</script>

<a class="btn btn-link ps-0" href="/movies">← Zurück</a>
<h1 class="mt-1 mb-3">Neuen Film erfassen</h1>

<form method="POST" class="row gy-3" style="max-width:540px">
  <div class="col-12">
    <label class="form-label">Titel</label>
    <input name="title" class="form-control" required value={form?.values?.title || ""} />
  </div>

  <div class="col-6">
    <label class="form-label">Jahr</label>
    <input name="year" type="number" min="1900" max="2100" class="form-control" required value={form?.values?.year || ""} />
  </div>

  <div class="col-6">
    <label class="form-label">Dauer (z.B. '114 Minuten')</label>
    <input name="length" class="form-control" required value={form?.values?.length || ""} />
  </div>

  <details class="col-12">
    <summary class="mb-1">Optional: Poster-URL</summary>
    <input name="poster" class="form-control" placeholder="https://..." value={form?.values?.poster || ""} />
    <div class="form-text">Wenn leer, wird automatisch /images/placeholder.jpg gesetzt.</div>
  </details>

  {#if form?.error}
    <div class="text-danger">{form.error}</div>
  {/if}

  <div class="col-12">
    <button class="btn btn-success">Speichern</button>
  </div>
</form>
