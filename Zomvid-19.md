---
layout: default
title: Zomvid-19
---

<style>
:root{--bg:#000;--panel:#1a0b2a;--muted:#b79ef7;--accent:#39ff14}
.layout{display:flex;gap:2rem;padding:2rem;background:var(--bg);color:var(--muted);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial}
.sidebar{width:320px;background:linear-gradient(180deg,rgba(120,60,200,0.06),transparent);border:1px solid rgba(120,60,200,0.15);padding:1rem;border-radius:12px}
.content{flex:1;background:linear-gradient(180deg,rgba(20,10,30,0.6),transparent);padding:1.5rem;border-radius:12px;border:1px solid rgba(120,60,200,0.08)}
img.poster{width:100%;height:auto;border-radius:8px;display:block;margin-bottom:1rem;box-shadow:0 8px 24px rgba(0,0,0,0.6)}
h1,h2,h3{color:#e6dcff}
.btn{display:inline-block;padding:0.6rem 1rem;border-radius:8px;text-decoration:none;color:#070707;background:var(--accent);font-weight:600}
.btn-ghost{background:transparent;border:1px solid rgba(120,60,200,0.12);color:var(--muted);padding:0.45rem 0.75rem;border-radius:8px}
.project-section{margin-top:1rem}
ul.meta{list-style:none;padding:0;display:flex;gap:1rem;flex-wrap:wrap}
ul.meta li{background:rgba(120,60,200,0.06);padding:0.4rem 0.6rem;border-radius:8px;color:#dcd0ff;font-size:0.95rem}
.small{font-size:0.95rem;color:#bfb1ee}
</style>

<div class="layout">
  <aside class="sidebar">
    <p><a href="index.html" class="btn-ghost"><strong>Back to portfolio</strong></a></p>
    <a href="index.html">
      <img class="poster" loading="lazy" alt="Zomvid-19 poster" src="/Source/Zomvid19Poster.png" />
    </a>
    <h2 style="text-align:center;color:var(--accent)">Zomvid-19</h2>
    <section class="project-section">
      <p class="small">Zomvid-19 is a top-down action prototype focused on outbreak control: coordinate NPCs, place barricades, craft items and survive waves of undead. Resource choices and positioning decide how long you last.</p>
      <br>
      <a class="btn" href="#" target="_blank" rel="noopener">Play Demo</a>
    </section>
  </aside>

  <main class="content">
    <section class="projects">
      <h1 style="text-align:center">Zomvid-19</h1>
      <h3 style="text-align:center">Top-down outbreak management with zany flair</h3>
      <ul class="meta">
        <li>Engine: Godot</li>
        <li>Role: designer/programmer</li>
        <li>Development time: 1 month (prototype)</li>
        <li>Genre: Action / Strategy</li>
      </ul>

      <h2>Overview</h2>
      <p>Lead a ragtag crew through increasingly difficult waves of undead. Zomvid-19 combines base-building elements with fast action: place barricades, assign NPCs defensive roles, craft crucial items and prioritize fuel and supplies to keep the outbreak contained.</p>

      <h3>Core mechanics</h3>
      <ul>
        <li>Wave-based zombie influx with escalating difficulty</li>
        <li>Simple base-building and barricade placement</li>
        <li>Item crafting and resource prioritization</li>
      </ul>

      <h3>Portfolio note</h3>
      <p class="small">I expanded the original page text to better showcase systems and player goals. If you have a link to an official page or builds, I can pull the exact public description and add a direct link.</p>
    </section>
  </main>
</div>
