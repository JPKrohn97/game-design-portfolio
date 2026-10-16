---
layout: default
title: No* Animal Crossing
---

<div class="layout">
  <aside class="sidebar">
    <a href="index.html" class="btn-back">← Back to portfolio</a>
    
    <a href="https://jpkrohn97.itch.io/no-animal-crossing" target="_blank">
      <img alt="No* Animal Crossing Poster" src="https://github.com/user-attachments/assets/9d298243-7b5f-4506-83f9-cc874c611b26" style="width: 100%; border-radius: var(--radius-md);" />
    </a>

    <div style="text-align: center; margin-top: 0.5rem;">
      <h2 style="margin: 0.5rem 0;">No* Animal Crossing</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">Arcade Lane-Defense Survival</p>
    </div>

    <div class="btn-group" style="justify-content: center;">
      <a href="https://jpkrohn97.itch.io/no-animal-crossing" target="_blank" class="btn btn-primary" style="width: 100%;">
        Play in Browser ↗
      </a>
    </div>

    <div>
      <h3>Concept Origin</h3>
      <p>
        The first game developed during Futuregames assignments: create a game inspired by arcade classics (Frogger, Pac-Man, etc.). I wondered: <em>What if I inverted Frogger? Instead of playing as the frog, you control the cars to prevent animals from crossing.</em>
      </p>
    </div>

    <div>
      <h3>Gameplay Video</h3>
      <a href="https://youtu.be/_bysra4bc88" target="_blank">
        <img alt="Watch gameplay!" src="https://github.com/user-attachments/assets/2a5e9655-e0dc-4950-9ed2-3de901879cef" style="width: 100%; border-radius: var(--radius-md);" />
      </a>
    </div>
  </aside>

  <main class="content">
    <section>
      <div class="case-study-header">
        <h1>No* Animal Crossing</h1>
        <div class="subtitle">An Arcade Lane-Defense Survival Game</div>
        
        <div class="metadata-grid">
          <div class="metadata-item">
            <span class="label">Engine</span>
            <span class="value">Unity</span>
          </div>
          <div class="metadata-item">
            <span class="label">Role</span>
            <span class="value">Solo Game Designer / Programmer</span>
          </div>
          <div class="metadata-item">
            <span class="label">Timeline</span>
            <span class="value">1 month</span>
          </div>
          <div class="metadata-item">
            <span class="label">Genre</span>
            <span class="value">Arcade / Lane Defense / Score Attack</span>
          </div>
        </div>

        <div class="btn-group">
          <a href="https://jpkrohn97.itch.io/no-animal-crossing" target="_blank" class="btn btn-primary">
            Play in Browser on itch.io ↗
          </a>
          <a href="https://youtu.be/_bysra4bc88" target="_blank" class="btn btn-outline">
            Watch Gameplay ↗
          </a>
        </div>
      </div>

      <h2>Game Overview</h2>
      <p>
        An experimental arcade survival game where players defend a city by strategically spawning cars to eliminate incoming animals attempting to cross the streets. Inspired by Frogger's movement systems, the game reverses the roles: instead of avoiding traffic, players use traffic as a defensive tool.
      </p>

      <div class="feature-box">
        <h4>Design Problem</h4>
        <p>How could an arcade classic be reinterpreted into an engaging survival game that encourages strategy and high-scores?</p>
      </div>

      <div class="feature-box">
        <h4>Design Solution</h4>
        <ul>
          <li><strong>Satisfying Skill-Shot:</strong> Rewarding timing and prediction of enemy movement trajectories.</li>
          <li><strong>Strategic Resource Deployment:</strong> Encouraging players to decide when and where to deploy vehicles to maintain continuous lane control under escalating pressure.</li>
        </ul>
      </div>

      <h3>Gameplay Loop</h3>
      <p>
        Early on, players observe enemy movement, predict interception points, and spawn vehicles to eliminate threats before they reach their goal. As the game progresses, pressure increases, requiring both immediate split-second reactions and long-term lane planning across multiple roads.
      </p>

      <h3>Result</h3>
      <p>
        The game creates a steep, satisfying difficulty curve: early gameplay focuses on prediction and positioning, while later stages demand constant traffic flow to eliminate as many enemies as possible, along with quick reactions to deal with critters that slip through defensive gaps. Players are incentivized to optimize their survival strategy and compete for high scores on the leaderboard.
      </p>

      <h2>Gameplay Screenshots</h2>
      <div class="media-gallery">
        <a href="https://github.com/user-attachments/assets/7a7d1ae2-8690-42e0-9d0b-dc7725977e69" target="_blank">
          <img src="https://github.com/user-attachments/assets/7a7d1ae2-8690-42e0-9d0b-dc7725977e69" alt="Gameplay 1">
        </a>
        <a href="https://github.com/user-attachments/assets/d6933f08-2f76-4a17-bf9f-293be40e52e7" target="_blank">
          <img src="https://github.com/user-attachments/assets/d6933f08-2f76-4a17-bf9f-293be40e52e7" alt="Gameplay 2">
        </a>
        <a href="https://github.com/user-attachments/assets/c878412f-066d-4eea-b81d-32817ac084ff" target="_blank">
          <img src="https://github.com/user-attachments/assets/c878412f-066d-4eea-b81d-32817ac084ff" alt="Gameplay 3">
        </a>
        <a href="https://github.com/user-attachments/assets/727347bc-b6ea-412f-a7f3-11116d44b963" target="_blank">
          <img src="https://github.com/user-attachments/assets/727347bc-b6ea-412f-a7f3-11116d44b963" alt="Gameplay 4">
        </a>
      </div>

      <h2>Gameplay Features</h2>
      
      <h3>Player Vehicles</h3>
      <p>
        The player has access to four distinct vehicles, each with unique speed, durability, cooldown, and tactical purpose. Vehicles can be activated individually to trigger a one-time temporary speed boost, increasing the chances to intercept enemies.
      </p>

      <div class="projects-container" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); margin-top: 1rem;">
        <div class="feature-box" style="margin: 0;">
          <h4>Standard Car (Blue)</h4>
          <ul>
            <li>Balanced all-round vehicle</li>
            <li>Resists up to two enemy hits</li>
            <li>Lowest cooldown</li>
            <li>Primary tool for sustained defense and lane control</li>
          </ul>
        </div>

        <div class="feature-box" style="margin: 0;">
          <h4>Fast Car (Red)</h4>
          <ul>
            <li>Highest speed in the game</li>
            <li>Resists one hit</li>
            <li>Higher cooldown than Standard car</li>
            <li>Best used for quick interception</li>
          </ul>
        </div>

        <div class="feature-box" style="margin: 0;">
          <h4>Truck (Blue)</h4>
          <ul>
            <li>Slow but highly durable</li>
            <li>Resists multiple hits</li>
            <li>Can eliminate Bears in a single hit</li>
            <li>Highest cooldown</li>
            <li>Designed for high enemy density and heavy impact</li>
          </ul>
        </div>

        <div class="feature-box" style="margin: 0;">
          <h4>Tanker (Red)</h4>
          <ul>
            <li>Slightly faster than the Truck</li>
            <li>On impact, triggers an explosion destroying nearby entities</li>
            <li>Highest cooldown in the game</li>
            <li>High-risk, high-reward crowd control tool</li>
          </ul>
        </div>
      </div>

      <blockquote>
        Design note: Differences in vehicle speeds can lead to unintended collisions between player vehicles, creating additional risk and emergent gameplay situations.
      </blockquote>

      <h3>Enemy Types</h3>
      <p>
        Enemies spawn at the bottom of the screen and traverse vertically across multiple roads in a Frogger-inspired pattern. Different enemy types are introduced progressively throughout the level, altering predictability, speed, and durability.
      </p>

      <div class="feature-box">
        <h4>Frog</h4>
        <ul>
          <li>First enemy type introduced</li>
          <li>Moves by jumping forward between lanes with a short cooldown between jumps</li>
          <li>Predictable movement pattern; eliminated with a single hit</li>
        </ul>
      </div>

      <div class="feature-box">
        <h4>Rabbit</h4>
        <ul>
          <li>Second enemy type introduced</li>
          <li>Faster and less predictable than the Frog</li>
          <li>When off cooldown, rabbits can randomly jump backwards, punishing premature timing</li>
          <li>Eliminated with a single hit</li>
        </ul>
      </div>

      <div class="feature-box">
        <h4>Bear</h4>
        <ul>
          <li>Final enemy type introduced</li>
          <li>Slow but highly durable; requires multiple hits from standard vehicles</li>
          <li>Serves as a high-threat target that pressures resource allocation and timing decisions</li>
        </ul>
      </div>

      <h2>Leaderboard & Strategic Depth</h2>
      <p>
        Does the game require skill? Yes—timing a vehicle to intercept animals moving at varying rhythms requires precision. Players also require strategic thinking: early waves are manageable, but late-game spawn rates overwhelm uncoordinated defense lines. Planning a continuous flow across all four vehicle types is key to sustaining high scores.
      </p>

      <div style="text-align: center; margin: 1.5rem 0;">
        <a href="https://github.com/user-attachments/assets/089dde3a-59fa-42ff-b258-c6da373f1fa5" target="_blank">
          <img src="https://github.com/user-attachments/assets/089dde3a-59fa-42ff-b258-c6da373f1fa5" alt="Leaderboard" style="max-width: 650px; width: 100%; border-radius: var(--radius-md);" />
        </a>
        <blockquote>
          These are not the highest scores achieved, but they were the highest recorded by me during testing.
        </blockquote>
      </div>

      <h2>Reception</h2>
      <p>
        The team had a blast playing it and competing for high scores. Some initial feedback was that the concept seemed simple, but once playing, testers thoroughly enjoyed timing "skill-shots" with the fast cars and tactically sacrificing explosive tankers into large clusters of animals.
      </p>
    </section>
  </main>
</div>
