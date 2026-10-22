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
    </div>

    <div>
      <h3>Quick Overview</h3>
      <p>
        A fast-paced underwater FPS boss encounter created in <strong>Unreal Engine 5.4</strong> at Futuregames. Battle hostile aquatic mobs through sunken ruins before confronting the massive Kraken in a submerged arena.
      </p>
    </div>

    <div>
      <h3>Core Credits</h3>
      <ul>
        <li><strong>Roles:</strong> Level Designer, Game Designer</li>
        <li><strong>Team Lead:</strong> Nikoloz Ninua</li>
        <li><strong>Assignment:</strong> Futuregames Advanced Design (Boss Fight)</li>
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
            <span class="label">Timeline</span>
            <span class="value">3 Weeks (Futuregames AGD GD25)</span>
          </div>
          <div class="metadata-item">
            <span class="label">Genre</span>
            <span class="value">FPS</span>
          </div>
        </div>
      </div>

      <h2>Gameplay Video</h2>
      <div class="responsive-iframe-container">
        <iframe src="https://www.youtube.com/embed/b9l_qhYmrbY" title="I HATE FISH Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <h2>Project Overview & Creative Vision</h2>
      <p>
        Developed during the Futuregames Advanced Design course, <strong>I HATE FISH</strong> is an underwater first-person shooter prototype. Our team combined claustrophobic corridor exploration with an expansive colosseum-style boss arena.
      </p>
      <p>
        Because traditional navigation navmeshes fail in full 3D vertical underwater volume, we've set up Unreal Engine 5.4 with a specialized 3D pathfinding plugin.
      </p>

      <h2>Level Design: From 2D Miro to Unreal</h2>
      <p>
        As Level Designer, I started with a 2m tall player character as main reference, and then a 20m tall, 50m long and 30m Kraken. With these two values, I started sketching the general layout in miro board and I approached the space in two distinct beats: <strong>Tutorial Corridors</strong> and the <strong>Boss Arena</strong>. 
      </p>

      <div class="feature-box">
        <h4>Introductory Section</h4>
        <ul>
          <li><strong>Spawn:</strong> The player begins in a safe area with a distant structure foreshadowing the arena.</li>
          <li><strong>Movement:</strong> After jumping through an opening into the water, the player must adapt into an underwater movement system, where they can explore safely and get used to the controls and rhythm. </li>
          <li><strong>Mechanics:</strong> Then they are introduced to basic mechanics: toggling levers, navigating timed doors, the friendly healing crabs, and explosive barrels (used to open passages or hurt enemies).</li>
          <li><strong>Teasing Enemy:</strong> A windows allow players to glimpse looming aquatic threats pacing inside adjacent chambers, creating anticipation.</li>
          <li><strong>Level:</strong> Linear and claustrophobic.</li>
          <li><strong>Increasing Threat:</strong> Finally, as the player move closer to the Arena, they are tested before the final confrotation.</li>
        </ul>
      </div>

      <div class="feature-box">
        <h4>Colosseum</h4>
        <ul>
          <li><strong>Fantasy:</strong> In order to reinforce the idea of facing a massive creature in underwater ruins, the Kraken relies on big and telegraphed attacks. Then there are several elements that are destructible. One of this cases is important during the introduction of the Kraken once the player enters the arena.</li>
          <li><strong>Level:</strong> Open and wide. Additionally, there are side passages which the player can take to have total cover from Kraken's bigger attacks, give them a breather.</li>
          <li><strong>Minions:</strong> To prevent the player from hiding and take safe shot on the Kraken, minions are constantly spawning forcing the player to move around.</li>
        </ul>
      </div>

      <h2>Design Challenges</h2>

      <div class="feature-box">
        <h4>"Swim Stroke" Movement</h4>
        <p>
          Unreal's default underwayer character movement felt floaty, uninspired, and disconnected from underwater physics. I was responsible to overhaul the movement system:
        </p>
        <ul>
          <li><strong>Rhythmic Impulse:</strong> Players can hold any movement key to swim at a slow, constant pace, or tap rhythmically to trigger forward thrusts replicating genuine swim strokes. The HUD provides with a visual indicator so the player can master the movement.</li>
          <li><strong>Physics Tuning:</strong> Custom values for drag, inertia, gravity, and momentum were tuned to deliver a realistic feeling.</li>
        </ul>
        <p>
          The result influenced the level design, enemy speed, boss timings, area of effect and many other systems.
        </p>
      </div>

      <div class="feature-box">
        <h4>Arena Rescaling for a Static Boss</h4>
        <p>
          By the second week of out three weeks project, our team leader made the call to rework the boss fight by anchoring the Kraken, in order to meet the deadline.
        </p>
        <p>
          I immediately redesigned new sketches: tightened the arena volume so the player could never feel completely out of danger, and introduced dedicated cover niches alongside a long-range tentacle slam attack so the boss could reach players attempting to exploit blind spots.
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
