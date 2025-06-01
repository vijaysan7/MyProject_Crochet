<script>
  let { crochet } = $props();
</script>

<div class="crochet-card">
  <img class="crochet-image" src={crochet.image} alt={crochet.name} />
  <div class="crochet-details">
    <h3 class="crochet-title">
      <a href={'/crochet/' + crochet._id}>{crochet.name}</a>
    </h3>
    <p>Level: {crochet.schwierigkeitslevel}</p>
    <p>Dauer: {crochet.time}</p>
    <slot></slot>
  </div>
</div>

<style>
  .crochet-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    margin: 15px;
    background-color: #fcf9fa;
    max-width: 250px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: box-shadow 0.2s;
  }

  .crochet-card:hover {
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  }

  .crochet-image {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 15px;
  }

  .crochet-title a {
    color: #0b0b0b;
    font-size: 0.7em;
    text-decoration: none;
  }

  .crochet-details p {
    color: #464545;
    margin: 5px 0;
  }
</style>
