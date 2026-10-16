---
layout: default
title: Overbrewed
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
      <img class="poster" loading="lazy" alt="Overbrewed poster" src="/Source/Overbrewed-Poster.png" />
    </a>
    <h2 style="text-align:center;color:var(--accent)">Overbrewed</h2>
    <section class="project-section">
      <p class="small">Overbrewed is a two-player co-op, asymmetrical shopkeeping and potion-brewing simulator where teamwork and communication are everything. Fulfill orders, follow instructions precisely, brew and enchant potions — and don't drop the flask.</p>
      <br>
      <a class="btn" href="https://futuregames.itch.io/overbrewed" target="_blank" rel="noopener">View on itch.io</a>
    </section>
  </aside>

  <main class="content">
    <section class="projects">
      <h1 style="text-align:center">Overbrewed</h1>
      <h3 style="text-align:center">Asymmetric co-op potion shop chaos</h3>
      <ul class="meta">
        <li>Role: Team project (UI / design contributions)</li>
        <li>Platform: PC</li>
        <li>Genre: Co-op / Simulation</li>
      </ul>

      <h2>Overview</h2>
      <p>Overbrewed puts two players behind the counter of a magical apothecary. One reads incoming orders and instructs their partner, while the other mixes, brews and enchants potions. Success depends on swift communication, precision and avoiding catastrophic spills — each dropped flask can mean starting that order over.</p>

      <h3>Why this project</h3>
      <p class="small">I worked on UI polish and recipe flow during the jam prototype phase, focusing on clarity under pressure so players can coordinate quickly without breaking immersion.</p>

      <h3>Features</h3>
      <ul>
        <li>Asymmetric responsibilities: reader vs brewer</li>
        <li>Timed orders with escalating complexity</li>
        <li>Delicate item handling: one mistake can reset the brew</li>
      </ul>

      <p class="small">Trailer and assets live in the project Source folder. Play and feedback links are on the itch.io page linked above.</p>
    </section>
  </main>
</div>
