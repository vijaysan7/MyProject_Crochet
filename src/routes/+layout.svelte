<script>
  import "./styles.css"
  let { children } = $props();
</script>

<div class="layout">
  <nav class="sidebar">
    <a href="/" class="logo">CrochetApp</a>
    <ul>
      <li><a href="/crochet">myProjects</a></li>
      <li><a href="/crochet/inspo">myInspo</a></li>
      <li><a href="/crochet/create" class="add">+ newProject</a></li>
    </ul>
  </nav>

  <main class="main-content">
    {@render children()}
  </main>
</div>


