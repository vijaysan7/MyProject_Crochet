<script>
    import CrochetCard from "$lib/components/CrochetCard.svelte";
    let { data } = $props();
</script>

<h2>Inspirationen</h2>
<div class="row mt-3">
    {#each data.inspo as crochet}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
                <CrochetCard {crochet}>
                    <form
                        method="POST"
                        action="?/addToCollection"
                        class="d-flex justify-content-center mt-2">
                        <input type="hidden" name="id" value={crochet._id} />
                        <button type="submit" class="btn btn-sm btn-success"
                            >Zu myCollection hinzufügen</button>
                    </form>
                </CrochetCard>
        </div>
    {/each}
</div>
