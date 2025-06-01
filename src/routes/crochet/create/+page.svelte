<script>
  import "./stylenew.css";
  import "$lib/components/style.css";
  let { form } = $props();
</script>

<a href="/crochet" class="back-link">← Zurück zur Übersicht</a>

<div class="form-container">
<div class="form-card">
  <form method="POST" action="?/create" class="form-box">
    
    
    {#if form?.success}
      <p class="success">✅ Projekt erfolgreich erstellt!</p>
    {/if}

    <h2>Neues Häkelprojekt</h2>

    <div>
      <label for="name">Name</label>
      <input id="name" name="name" type="text" required />
    </div>

    

    <div style="display: flex; gap: 1rem;">
      <div style="flex: 1;">
      <label for="material">Material</label>
      <input id="material" name="material" type="text" />
    </div>
      <div style="flex: 1;">
        <label for="hook_size">Hook-size (mm)</label>
        <input
          id="hook_size"
          name="hook_size"
          type="number"
          step="0.1"
          min="0"
        />
      </div>
      <div style="flex: 1;">
        <label for="time">Zeit (Stunden)</label>
        <input id="time" name="time" type="number" step="1" min="0" />
      </div>
    </div>
    <div style="display: flex; gap: 1rem;">
      <div style="flex: 1;">
        <label for="schwierigkeitslevel">Level</label>
        <select id="schwierigkeitslevel" name="schwierigkeitslevel">
          <option value="">Bitte wählen</option>
          <option value="Einfach">Einfach</option>
          <option value="Mittel">Mittel</option>
          <option value="Fortgeschritten">Fortgeschritten</option>
        </select>
      </div>

      <div style="flex: 1;">
        <label for="status">Status</label>
        <select id="status" name="status">
          <option value="">kein Status</option>
          <option value="offen">offen</option>
          <option value="in Arbeit">in Arbeit</option>
          <option value="abgeschlossen">abgeschlossen</option>
        </select>
      </div>
    </div>
    <div>
        <label for="pattern">Pattern</label>
        <textarea id="pattern" name="pattern" rows="3" placeholder="kleine Beschreibung des Musters"></textarea>
    </div>

    <button type="submit" class="button-main">Projekt hinzufügen</button>
  </form>
</div>
</div>
