---
layout: default
title: I HATE FISH
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
.highlights{color:var(--accent);font-weight:700}
</style>

<div class="layout">
  <aside class="sidebar">
    <p><a href="index.html" class="btn-ghost"><strong>Back to portfolio</strong></a></p>
    <a href="index.html">
      <img class="poster" loading="lazy" alt="I HATE FISH poster" src="/Source/IHateFish-Poster.png" />
    </a>
    <h2 style="text-align:center;color:var(--accent)">I HATE FISH</h2>
    <section class="project-section">
      <p class="small">SHOOT THE FISH — Fight your way through an arena of aggressive fish. Keep moving, aim carefully, and clear waves before they overwhelm you. FACE THE KRAKEN — When the waters calm, a massive Kraken rises with enormous tentacles to test your skills.</p>
      <br>
      <a class="btn" href="https://jpkrohn97.itch.io/i-hate-fish" target="_blank" rel="noopener">View on itch.io</a>
    </section>
  </aside>

  <main class="content">
    <section class="projects">
      <h1 style="text-align:center">I HATE FISH</h1>
      <h3 style="text-align:center">Fast-paced arena shooter with monstrous surprises</h3>
      <ul class="meta">
        <li>Engine: Unity</li>
        <li>Role: solo designer/programmer</li>
        <li>Development time: 2 weeks</li>
        <li>Genre: Action / Shooter</li>
      </ul>

      <h2>Overview</h2>
      <p>In I HATE FISH you blast waves of hostile sea-creatures across compact arenas, keeping momentum and positioning to survive. The game ramps to a tense boss encounter with a giant Kraken that changes the arena and demands pattern recognition and careful aim.</p>

      <h3>Core mechanics</h3>
      <ul>
        <li>Wave-based enemy spawns with shifting attack patterns</li>
        <li>Player dodge and aim focus mechanics for tight, arcade-like combat</li>
        <li>Boss phase with multi-stage attacks and environmental hazards</li>
      </ul>

      <h3>Portfolio note</h3>
      <p class="small">This page pulls the short description from the public itch.io listing and pairs it with the game's poster from the Source folder. If you want screenshots or a playable embed added to this page, I can include them (itch embeds or hosted build).</p>
    </section>
  </main>
</div>
