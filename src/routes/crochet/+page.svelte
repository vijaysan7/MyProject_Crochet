<script>
  import CrochetCard from "$lib/components/CrochetCard.svelte";
  let { data } = $props();
</script>

<h2>Meine Projekte</h2>

<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<div class="row mt-3">
  {#each data.project as crochet}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <CrochetCard {crochet}></CrochetCard>
    </div>
  {/each}
</div>
