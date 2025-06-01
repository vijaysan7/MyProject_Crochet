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
  background-color: #f8eff1;
  border-radius: 16px;
  padding: 1.2rem;
  margin: 1rem;
  max-width: 260px;
  text-align: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
}

.crochet-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.crochet-image {
  width: 100%;
    border-radius: 20px;
    margin-bottom: 15px;
}

.crochet-title a {
  color: #5c2c32;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.crochet-title a:hover {
  text-decoration: underline;
}

.crochet-details p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: #6b4b50;
}
</style>
