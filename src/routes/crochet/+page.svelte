<script>
  import CrochetCard from "$lib/components/CrochetCard.svelte";
  let { data } = $props();
</script>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<div>
  <a href="/crochet/create" class="btn btn-primary">Add new crochet project</a>
</div>
<div class="row mt-3">
  {#each data.crochets as crochet}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <CrochetCard {crochet}></CrochetCard>
    </div>
  {/each}
</div>
