<script>
  let { form } = $props();
</script>

<a href="/crochet">Back</a>
<h1>Add a Project</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Pattern</label>
    <input name="pattern" class="form-control" type="number" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Material</label>
    <input name="material" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary">Add Project</button>
</form>

{#if form?.success}
  <p>Project created</p>
{/if}
