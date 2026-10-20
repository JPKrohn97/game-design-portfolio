---
layout: default
title: Zomvid-19
---

<div class="layout">
  <aside class="sidebar">
    <a href="index.html" class="btn-back">← Back to portfolio</a>
    
    <img src="Source/Zomvid19-Poster.png" alt="Zomvid-19 Poster" style="width: 100%; border-radius: var(--radius-md);" />
    
    <div style="text-align: center; margin-top: 0.5rem;">
      <h2 style="margin: 0.5rem 0;">Zomvid-19</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">Fortify, Scavenge & Survive</p>
    </div>

    <div class="btn-group" style="justify-content: center;">
      <a href="https://miro.com/app/board/uXjVHvWENxQ=/?share_link_id=246443047222" target="_blank" class="btn btn-primary" style="width: 100%;">
        Miro Design Board ↗
      </a>
    </div>

    <div>
      <h3>Quick Overview</h3>
      <p>
        Survive the apocalypse by preparing your base defenses during the day to hold off relentless zombie hordes at night. An intense first-person survival experience developed in <strong>Unreal Engine 5.8</strong>.
      </p>
    </div>

    <div>
      <h3>Core Credits</h3>
      <ul>
        <li><strong>Format:</strong> Team Project (Team 01)</li>
        <li><strong>Roles:</strong> Product Owner, Game Designer</li>
        <li><strong>Producers:</strong> Camilla Davel Braga, Alex Loubenets</li>
        <li><strong>Artist:</strong> Nadir Zahim</li>
        <li><strong>Designers:</strong> Julián Perez Krohn, Gargeya Deshmukh, Nikoloz Ninua</li>
      </ul>
    </div>
  </aside>

  <main class="content">
    <section>
      <div class="case-study-header">
        <h1>Zomvid-19</h1>
        <div class="subtitle">First-Person Zombie Survival & Player-Driven Barricade Defense</div>
        
        <div class="metadata-grid">
          <div class="metadata-item">
            <span class="label">Engine</span>
            <span class="value">Unreal Engine 5.8</span>
          </div>
          <div class="metadata-item">
            <span class="label">Roles</span>
            <span class="value">Product Owner, Game Designer</span>
          </div>
          <div class="metadata-item">
            <span class="label">Format</span>
            <span class="value">Team Project (Team 01)</span>
          </div>
          <div class="metadata-item">
            <span class="label">Genre</span>
            <span class="value">FPS / Base Fortification / Survival</span>
          </div>
        </div>

        <div class="btn-group">
          <a href="https://miro.com/app/board/uXjVHvWENxQ=/?share_link_id=246443047222" target="_blank" class="btn btn-primary">
            Explore Miro GDD & Kanban ↗
          </a>
        </div>
      </div>

      <h2>Trailer & Gameplay Footage</h2>
      <div class="video-container">
        <video controls preload="metadata" poster="Source/Zomvid19-Poster.png" class="featured-video">
          <source src="Source/Zomvid19-Trailer.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <h2>Game Overview & Premise</h2>
      <p>
        Conceived from an original prototype concept, <strong>Zomvid-19</strong> (internally developed as <em>Zombie Fortress</em>) is an FPS zombie defense experience centered around player-driven physical fortification. Players must scavenge randomized loot and fortify their compound in daylight, because once the sun sets, the infected swarm with deadly aggression.
      </p>

      <h2>Core Design Pillars & Systems</h2>
      
      <div class="feature-box">
        <h4>1. Player-Driven Fortification & Barricade Physics</h4>
        <p>
          Unlike static-cover shooters, players actively build their own perimeter defense. Grab furniture, drag it to doorways, and physically nail it in place with a hammer (Right Mouse Button) to build resilient barricades. Place deadly defensive traps to halt advancing waves, or use your tools (J key) to deconstruct and reconfigure choke points on the fly.
        </p>
      </div>

      <div class="feature-box">
        <h4>2. Day & Night Survival Loop</h4>
        <p>
          Strategic tension is governed by a strict circadian cycle:
        </p>
        <ul>
          <li><strong>Daylight Phase:</strong> Tactical calm dedicated to scouting, gathering randomized loot drops, boarding up windows, and tuning power distribution.</li>
          <li><strong>Night Phase:</strong> High-stress combat trial where aggressive horde waves assault fortified choke points.</li>
        </ul>
      </div>

      <div class="feature-box">
        <h4>3. Power Management & Illumination Blueprints</h4>
        <p>
          Darkness is a lethal hazard. Players must manage their base's electrical generator and power supply via the Power Menu (TAB key) to keep spotlights active. In addition, I created custom <strong>Fire Barrel Blueprints</strong> to light up dark perimeters, giving players sightlines on advancing infected.
        </p>
      </div>

      <div class="feature-box">
        <h4>4. Scavenging & Dynamic Loot System</h4>
        <p>
          I designed and coded the <strong>Loot Spawner</strong> and <strong>Loot Manager</strong> Blueprints, dynamically seeding items, ammunition, and crafting materials across the compound so that every survival run yields distinct tactical choices.
        </p>
      </div>

      <h2>Player Controls & Mechanics</h2>
      <div class="metadata-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        <div class="metadata-item">
          <span class="label">Movement</span>
          <span class="value">W, A, S, D & Spacebar (Jump)</span>
        </div>
        <div class="metadata-item">
          <span class="label">Combat & Throw</span>
          <span class="value">Left Mouse Button</span>
        </div>
        <div class="metadata-item">
          <span class="label">Nail / Build</span>
          <span class="value">RMB (with Hammer) / J (Remove)</span>
        </div>
        <div class="metadata-item">
          <span class="label">Interact / Grab</span>
          <span class="value">E key / G (Drop item)</span>
        </div>
        <div class="metadata-item">
          <span class="label">Inventory & Reload</span>
          <span class="value">Mouse Wheel, 1-4 / R (Reload)</span>
        </div>
        <div class="metadata-item">
          <span class="label">Power Grid</span>
          <span class="value">TAB (Power Menu)</span>
        </div>
      </div>

      <h2>Production Leadership & Team Credits</h2>
      <p>
        As Product Owner, Team Leader, and Producer, I guided the project from concept to Gold release: initialized the Unreal Engine project and GitHub repository, authored the GDD on Miro, ran daily agile standups, built the tutorial level, edited audio and video, and balanced core Blueprints.
      </p>

      <div class="metadata-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        <div class="metadata-item">
          <span class="label">Product Owner & Team Lead</span>
          <span class="value">Julián Perez Krohn</span>
        </div>
        <div class="metadata-item">
          <span class="label">Producers</span>
          <span class="value">Camilla Davel Braga, Alex Loubenets</span>
        </div>
        <div class="metadata-item">
          <span class="label">Designers</span>
          <span class="value">Julián Perez Krohn, Gargeya Deshmukh, Nikoloz Ninua</span>
        </div>
        <div class="metadata-item">
          <span class="label">Programmers</span>
          <span class="value">Theo Choicoski, Ozan Turp, Sandee Srisawat (Jab)</span>
        </div>
        <div class="metadata-item">
          <span class="label">3D Artist</span>
          <span class="value">Nadir Zahim</span>
        </div>
        <div class="metadata-item">
          <span class="label">Special Thanks</span>
          <span class="value">Mateusz Swarc</span>
        </div>
      </div>

      <blockquote>
        "Leading Zomvid-19 reinforced the importance of clear design pillars: marrying physical barricade mechanics with power and lighting management transforms a simple wave shooter into a tense, tactical survival defense." — Julián Perez Krohn
      </blockquote>
    </section>
  </main>
</div>
