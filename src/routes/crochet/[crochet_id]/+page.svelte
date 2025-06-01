<script>
  import { page } from '$app/stores';
  import "$lib/components/style.css";
  import "./stylesID.css";
  export let data;
  let crochet = data.crochet;
  // Editierbarer Status
   $: editStatus = $page.url.searchParams.get("editStatus") === "true";

</script>

<a href="/crochet" class="back-link">← Zurück zur Übersicht</a>


{#if crochet}
  <div class="project-detail-card">
    <h2>{crochet.name}</h2>

    <div class="project-layout">
      <!-- Linke Seite: Bild -->
      <div class="image-side">
        <img class="crochet-image" src={crochet.image} alt={crochet.name} />
      </div>

      <!-- Rechte Seite: Info -->
      <div class="info-side">
        <p><strong>Level:</strong> {crochet.schwierigkeitslevel}</p>
        <p><strong>Zeit:</strong> {crochet.time}</p>
        <p><strong>Häkelnadel:</strong> {crochet.hook_size}</p>
        <p><strong>Material:</strong> {crochet.material}</p>
        <p><strong>Muster:</strong> {crochet.pattern}</p>
        
        {#if editStatus}
        <!-- Bearbeitbarer Status -->
         <form method="POST" action="?/updateStatus" class="form-box-style">
          <input type="hidden" name="id" value={crochet._id} />
          <label for="status-select"><strong>Status ändern:</strong></label>
          <select name="status" id="status-select" bind:value={crochet.status}>
            <option value="offen" selected={crochet.status === 'offen'}>offen</option>
            <option value="in Bearbeitung" selected={crochet.status === 'in Bearbeitung'}>in Bearbeitung</option>
            <option value="abgeschlossen" selected={crochet.status === 'abgeschlossen'}>abgeschlossen</option>
          </select>
          <button type="submit" class="button-main">Speichern</button>
        </form>
        {:else}
        <!-- Nur anzeigen -->
        <p><strong>Status:</strong> {crochet.status}</p>
        {/if}
        <p></p>
        <form method="POST" action="?/delete" class="delete-form">
          <input type="hidden" name="id" value={crochet._id} />
          <button type="submit" class="button-main">Projekt löschen</button>
        </form>
      </div>
    </div>
  </div>

{:else}
  <p>Projekt nicht gefunden oder keine Daten geladen.</p>
{/if}


