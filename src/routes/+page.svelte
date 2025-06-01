<style>
.circle-menu-grid {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 3rem 1rem;
  flex-wrap: wrap;
}

.circle-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #276749;
  transition: transform 0.3s ease;
}

.circle-card img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.9;
  box-shadow: 0 4px 12px rgba(72, 187, 120, 0.2);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.circle-card:hover img {
  opacity: 1;
  transform: scale(1.05);
}

.circle-card p {
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}
</style>

<h1 style="text-align: center; margin-top: 2rem;">Willkommen bei CrochetApp</h1>

<div class="circle-menu-grid">
  <a href="/crochet" class="circle-card">
    <img src="/images/1.jpg" alt="My Projects" />
    <p>My Projects</p>
  </a>
  <a href="/crochet/inspo" class="circle-card">
    <img src="/images/2.jpg" alt="My Inspo" />
    <p>My Inspo</p>
  </a>
  <a href="/crochet/create" class="circle-card">
    <img src="/images/3.jpg" alt="Add Project" />
    <p>Add Project</p>
  </a>
</div>