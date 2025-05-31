<script>
  export let data;
  let crochet = data.crochet;
</script>

<a href="/crochet">Back</a>

 {#if crochet}
<h1>{crochet.name}</h1>
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={crochet.image} alt="" />
  </div>

  <div class="col">
    <p>Level: {crochet.schwierigkeitslevel}</p>
    <p>Time: {crochet.time}</p>
    <p>Hook-size: {crochet.hook_size}</p>
    <p>Material: {crochet.material}</p>
    <p>Pattern: {crochet.pattern}</p>
    <p>Status: {crochet.status}</p>
    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={crochet._id}>
      <button class="btn btn-danger">Delete Project</button>
    </form>
  </div>
  </div>
{:else}
  <p>Projekt nicht gefunden oder keine Daten geladen.</p>
{/if}

