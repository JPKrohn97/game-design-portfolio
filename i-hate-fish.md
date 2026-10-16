---
layout: default
title: I HATE FISH
---

<div class="layout">
  <aside class="sidebar">
    <a href="index.html" class="btn-back">← Back to portfolio</a>
    
    <a href="https://jpkrohn97.itch.io/i-hate-fish" target="_blank">
      <img src="Source/IHateFish-Poster.png" alt="I HATE FISH Poster" style="width: 100%; border-radius: var(--radius-md);" />
    </a>

    <div style="text-align: center; margin-top: 0.5rem;">
      <h2 style="margin: 0.5rem 0;">I HATE FISH</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">The Kraken Boss Encounter</p>
    </div>

    <div class="btn-group" style="justify-content: center;">
      <a href="https://jpkrohn97.itch.io/i-hate-fish" target="_blank" class="btn btn-primary" style="width: 100%;">
        Play on itch.io ↗
      </a>
      <a href="https://youtu.be/b9l_qhYmrbY" target="_blank" class="btn btn-outline" style="width: 100%;">
        Watch on YouTube ↗
      </a>
      <a href="https://miro.com/app/board/uXjVGy_LbHE=/?share_link_id=182028882207" target="_blank" class="btn btn-outline" style="width: 100%;">
        Miro Design Board ↗
      </a>
    </div>

    <div>
      <h3>Quick Overview</h3>
      <p>
        A fast-paced underwater FPS boss encounter created in <strong>Unreal Engine 5.4</strong> at Futuregames. Battle hostile aquatic mobs through sunken Atlantis ruins before confronting the massive Kraken in a gladiatorial submerged arena.
      </p>
    </div>

    <div>
      <h3>Core Credits</h3>
      <ul>
        <li><strong>Format:</strong> Team Project (Team Hate Fish)</li>
        <li><strong>Roles:</strong> Level Designer, Game Designer</li>
        <li><strong>Team Lead:</strong> Nikoloz Ninua</li>
        <li><strong>Assignment:</strong> Futuregames Boss Design (AGD GD25)</li>
      </ul>
    </div>
  </aside>

  <main class="content">
    <section>
      <div class="case-study-header">
        <h1>I HATE FISH</h1>
        <div class="subtitle">Underwater FPS Boss Encounter & Level Design Case Study</div>
        
        <div class="metadata-grid">
          <div class="metadata-item">
            <span class="label">Engine</span>
            <span class="value">Unreal Engine 5.4</span>
          </div>
          <div class="metadata-item">
            <span class="label">Roles</span>
            <span class="value">Level Designer, Game Designer</span>
          </div>
          <div class="metadata-item">
            <span class="label">Format</span>
            <span class="value">Team Project</span>
          </div>
          <div class="metadata-item">
            <span class="label">Timeline</span>
            <span class="value">3 Weeks (Futuregames AGD GD25)</span>
          </div>
          <div class="metadata-item">
            <span class="label">Genre</span>
            <span class="value">Underwater FPS / Boss Fight</span>
          </div>
        </div>

        <div class="btn-group">
          <a href="https://jpkrohn97.itch.io/i-hate-fish" target="_blank" class="btn btn-primary">
            Download on itch.io ↗
          </a>
          <a href="https://youtu.be/b9l_qhYmrbY" target="_blank" class="btn btn-outline">
            Watch Full Gameplay ↗
          </a>
          <a href="https://miro.com/app/board/uXjVGy_LbHE=/?share_link_id=182028882207" target="_blank" class="btn btn-outline">
            Miro Design Board ↗
          </a>
          <a href="https://canva.link/k5eisas0gd05s8u" target="_blank" class="btn btn-outline">
            Canva Deck ↗
          </a>
        </div>
      </div>

      <h2>Gameplay Video</h2>
      <div class="responsive-iframe-container">
        <iframe src="https://www.youtube.com/embed/b9l_qhYmrbY" title="I HATE FISH Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <h2>Project Overview & Creative Vision</h2>
      <p>
        Developed during the Futuregames Boss Design module, <strong>I HATE FISH</strong> is an intense underwater first-person shooter prototype. Sourcing key assets from Epic's FAB store (an ancient Atlantis ruins kit and a terrifying Kraken model), our team combined claustrophobic corridor exploration with an expansive colosseum-style boss arena.
      </p>
      <p>
        Because traditional navigation navmeshes fail in full 3D vertical underwater volume, I helped set up Unreal Engine 5.4 with a specialized 3D pathfinding plugin, configured our Miro board for rapid level sketching, and coordinated our Diversion version control repository.
      </p>

      <h2>Level Design: From 2D Miro Metrics to Unreal Greybox</h2>
      <p>
        As Level Designer, I approached the space in two distinct beats: an **Introductory Tutorial Corridor** and the **Submerged Boss Colosseum**.
      </p>

      <div class="feature-box">
        <h4>1. Introductory Section (Tutorial & Pacing)</h4>
        <ul>
          <li><strong>Safe Spawn & Immersion:</strong> The player begins in a dry, safe room and jumps through an opening into the water, establishing the land-to-water movement transition.</li>
          <li><strong>Environmental Literacy:</strong> Introduces essential interaction mechanics before high-stress encounters: toggling levers, navigating timed doors, and detonating naval mines/explosive barrels to breach destructible walls.</li>
          <li><strong>The Tease:</strong> Built-in submerged windows allow players to glimpse looming aquatic threats pacing inside adjacent chambers, creating anticipation and narrative tension.</li>
        </ul>
      </div>

      <div class="feature-box">
        <h4>2. Boss Arena Metrics & Sightlines</h4>
        <p>
          Level metrics were calculated based on a <strong>2m player character</strong> versus a <strong>20m tall, 50m wide Kraken colossus</strong>:
        </p>
        <ul>
          <li><strong>Scale & Flow:</strong> Calibrated corridor dimensions so smaller shark minions could flank the player in 3D while preserving readable combat lines.</li>
          <li><strong>Verticality & Pillars:</strong> Distributed ancient Atlantis pillars throughout the arena floor to serve as visual anchor points, cover from sweeping attacks, and tactical vertical navigation routes.</li>
        </ul>
      </div>

      <h2>Production Pivots & Design Challenges</h2>

      <div class="feature-box">
        <h4>Pivotal Design 1: The "Swim Stroke" Movement Rework</h4>
        <p>
          Unreal's default character controller felt floaty, uninspired, and disconnected from underwater physics. I spearheaded a complete movement overhaul:
        </p>
        <ul>
          <li><strong>Rhythmic Impulse:</strong> Players can hold any movement key to swim at a slow, constant pace, or tap rhythmically to trigger forward thrusts replicating genuine swim strokes.</li>
          <li><strong>Physics Tuning:</strong> Custom values for drag, inertia, gravity attenuation, and momentum were tuned to deliver an authentic underwater weight. This impulse mechanic later influenced minion attack velocity and boss reaction timing.</li>
        </ul>
      </div>

      <div class="feature-box">
        <h4>Pivotal Design 2: Arena Rescaling for a Static Boss</h4>
        <p>
          Midway through production, technical bottlenecks made a free-roaming 3D boss AI impractical within our 3-week timeline. As Producer, I made the call to anchor the Kraken to a fixed lair at the far end of the arena.
        </p>
        <p>
          I immediately redesigned the greybox layout: <strong>tightened the arena volume</strong> so the player could never feel completely out of danger, and introduced dedicated cover niches alongside a long-range tentacle slam attack so the boss could reach players attempting to exploit blind spots.
        </p>
      </div>

      <h2>Production & Cross-Discipline Collaboration</h2>
      <p>
        Beyond level architecture, I acted as Producer for Team Hate Fish:
      </p>
      <ul>
        <li>Organized daily standups, maintained sprint tracking, and coordinated feature branches across disciplines.</li>
        <li>Directly assisted with boss attack state debugging, minion spawn triggers, weapon projectile interactions, particle VFX (underwater bubbles, hit effects), and spatial audio cues.</li>
        <li>Bridged Level Design with UI/VFX to ensure player feedback systems (swim impulse cues, tentacle attack wind-ups) were readable and synchronized.</li>
      </ul>

      <h2>Playtesting & Design Retrospective</h2>
      <p>
        We conducted observational playtests without priming players, logging friction points, combat readability, and emergent behaviors:
      </p>

      <div class="feature-box">
        <h4>Key Playtest Insights</h4>
        <ul>
          <li><strong>Telegraphing is Paramount:</strong> In 3D space with 6 degrees of freedom, clear visual and audio tells are vital. Untelegraphed attacks feel unfair; telegraphed strikes make evasion deeply satisfying.</li>
          <li><strong>Arena Proportion:</strong> Stationary bosses require tight, focused arenas where players feel continuous pressure, rather than oversized halls that dilute combat intensity.</li>
          <li><strong>Phase Escalation:</strong> Visual phase transitions must unmistakably signal escalated stakes to the player.</li>
        </ul>
      </div>

      <div class="feature-box">
        <h4>Personal Learnings as a Level Designer</h4>
        <p>
          <em>"Player movement must always precede level design."</em> Locking down character movement physics early prevents workflow bottlenecks and ensures greybox geometry is built to exact metrics from day one. Additionally, weapon feedback in underwater fluid dynamics requires dedicated tuning so shooting feels crisp rather than sluggish.
        </p>
      </div>

      <blockquote>
        "The level presents a strong sense of exploration, mystery, and danger. Sizing the arena around telegraphed attacks and swim stroke cadence was critical to turning a chaotic 3D space into an engaging, readable encounter." — Julián Perez Krohn
      </blockquote>
    </section>
  </main>
</div>
