<script>
    import CrochetCard from "$lib/components/CrochetCard.svelte";
    import "$lib/components/style.css";
    let { data } = $props();
</script>


<h2>Meine Inspirationen</h2>
<p><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>
<div class="row mt-3">
    {#each data.inspo as crochet}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
                <CrochetCard {crochet}>
                    <form
                        method="POST"
                        action="?/addToCollection"
                        class="d-flex justify-content-center mt-2">
                        <input type="hidden" name="id" value={crochet._id} />
                        <button type="submit" class="button-main">Zu myProjects hinzufügen</button>
                    </form>
                </CrochetCard>
        </div>
    {/each}
</div>
