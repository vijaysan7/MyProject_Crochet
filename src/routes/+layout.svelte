<script>
  import "./styles.css"
  let { children } = $props();
  import { page } from "$app/stores";
</script>

<div class="layout">
  {#if $page.url.pathname !== "/"}
  <nav class="sidebar">
    <a href="/" class="logo">CrochetApp</a>
    <ul>
      <li><a href="/crochet">myProjects</a></li>
      <li><a href="/crochet/inspo">myInspo</a></li>
      <li><a href="/crochet/create" class="add">+ newProject</a></li>
    </ul>
  </nav>
  {/if}

  <main class="main-content">
    {@render children()}
  </main>
</div>


