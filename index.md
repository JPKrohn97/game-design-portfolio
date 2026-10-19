---
layout: default
title: Julián Perez Krohn - Game Design Portfolio
---

<!-- Top Navigation Bar -->
<header class="top-navbar">
  <div class="nav-container">
    <button type="button" class="nav-btn" id="btn-nav-about" aria-expanded="false" aria-controls="panel-about">
      <svg class="nav-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      <span>About me & contact details</span>
    </button>
    <button type="button" class="nav-btn nav-btn-center" id="btn-nav-career">
      <svg class="nav-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        <path d="M6 12h4m-2-2v4"></path>
        <circle cx="15" cy="11" r="1"></circle>
        <circle cx="17" cy="13" r="1"></circle>
      </svg>
      <span>Game design career</span>
    </button>
    <button type="button" class="nav-btn" id="btn-nav-ttrpg" aria-expanded="false" aria-controls="panel-ttrpg">
      <svg class="nav-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"></path>
        <path d="M12 22V12"></path>
        <path d="M21 7l-9 5-9-5"></path>
      </svg>
      <span>TTRPG & DM</span>
    </button>
  </div>
</header>

<!-- Backdrop Overlay for Side Panels -->
<div id="panels-overlay" class="panels-overlay" aria-hidden="true"></div>

<!-- Left Drawer: About Me & Contact Details (>= 1/3 page width) -->
<aside id="panel-about" class="drawer-panel drawer-left" aria-hidden="true">
  <div class="drawer-header">
    <h3>About Me & Contact</h3>
    <button type="button" class="drawer-close-btn" id="close-about-btn" aria-label="Close panel">✕</button>
  </div>
  <div class="drawer-content">
    <div>
      <div class="status-badge">
        <span class="status-dot"></span>
        <span>Game Designer & Developer</span>
      </div>
      <h1>Julián Perez Krohn</h1>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 0.75rem;">
        Moved from Argentina to Poland to pursue a professional career in game development.
      </p>
    </div>

    <img alt="Julián Perez Krohn" src="https://github.com/user-attachments/assets/75fa9d81-8b3f-4fde-bc44-3806cbbdec6b" style="border-radius: var(--radius-md); width: 100%; border: 1px solid var(--border-color);" />

    <div>
      <h3>Background & Interests</h3>
      <ul style="margin-left: 1.25rem;">
        <li><strong>Game Design student</strong> at Futuregames Warsaw</li>
        <li>Software Developer (7 years of experience)</li>
        <li>Tabletop RPG enjoyer and Dungeon Master since 2021</li>
        <li>Hardcore PC gamer & board game aficionado</li>
        <li>Medieval fencing enthusiast</li>
      </ul>
    </div>

    <div class="btn-group" style="margin: 0;">
      <a href="https://linktr.ee/jpkrohn97" target="_blank" class="btn btn-outline" style="width: 100%; justify-content: center;">
        Linktree Profile ↗
      </a>
      <a href="https://jpkrohn97.itch.io" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center;">
        itch.io Games ↗
      </a>
    </div>

    <details class="expandable">
      <summary>More about me</summary>
      <div>
        <p>
          I'm 28 years old, born and raised in Argentina, and surrounded by games since childhood. From playing card games with grandparents and boardgames with cousins, to playing sports at school and videogames with friends; I have always been a fan of the social interactions that come out of playing games: competitiveness, cooperation, deception, and most importantly, <strong>joy</strong>.
        </p>
        <p>
          I've been thinking of making games since I was 13, and slowly but surely, I'm moving forward with the objective of entering the industry to develop my professional skills, gain valuable experience, and build connections. My ultimate goal is making an impact on both the industry and the world. I believe the best games aren't remembered because of what players did, but because of how those experiences made them feel and the stories they created along the way.
        </p>
        <img alt="Harrier Du Bois Halloween 2025" src="https://github.com/user-attachments/assets/be3904ad-215f-4280-bec0-5e7aadec1f6a" style="border-radius: var(--radius-md); width: 100%;" />
        <blockquote>
          *Me as Harrier Du Bois from Disco Elysium, on Halloween 2025.
        </blockquote>

        <h3 style="margin-top: 1.5rem;">Favourite videogames</h3>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-top: 0.5rem;">
          <a href="https://github.com/user-attachments/assets/8d019e89-1669-43b3-b169-259b807debc8" target="_blank">
            <img src="https://github.com/user-attachments/assets/8d019e89-1669-43b3-b169-259b807debc8" alt="Favourite videogames 1" style="border-radius: var(--radius-sm); width: 100%;">
          </a>
          <a href="https://github.com/user-attachments/assets/d12cd85f-9c89-4de2-9b62-c7e9a4061739" target="_blank">
            <img src="https://github.com/user-attachments/assets/d12cd85f-9c89-4de2-9b62-c7e9a4061739" alt="Favourite videogames 2" style="border-radius: var(--radius-sm); width: 100%;">
          </a>
          <a href="https://github.com/user-attachments/assets/c88e8aa3-d42d-41a4-bf57-d6fce9e14643" target="_blank">
            <img src="https://github.com/user-attachments/assets/c88e8aa3-d42d-41a4-bf57-d6fce9e14643" alt="Favourite videogames 3" style="border-radius: var(--radius-sm); width: 100%;">
          </a>
          <a href="https://github.com/user-attachments/assets/568353a1-2a24-46bf-a454-11cdaecb4c6b" target="_blank">
            <img src="https://github.com/user-attachments/assets/568353a1-2a24-46bf-a454-11cdaecb4c6b" alt="Favourite videogames 4" style="border-radius: var(--radius-sm); width: 100%;">
          </a>
        </div>

        <h3 style="margin-top: 1.5rem;">Favourite boardgames</h3>
        <div style="margin-top: 0.5rem;">
          <a href="https://github.com/user-attachments/assets/d991960d-0e12-4ec9-b79a-34d99bda003d" target="_blank">
            <img src="https://github.com/user-attachments/assets/d991960d-0e12-4ec9-b79a-34d99bda003d" alt="Favourite boardgames" style="border-radius: var(--radius-sm); width: 100%;">
          </a>
        </div>
      </div>
    </details>
  </div>
</aside>

<!-- Right Drawer: TTRPG & Dungeon Master (>= 1/3 page width) -->
<aside id="panel-ttrpg" class="drawer-panel drawer-right" aria-hidden="true">
  <div class="drawer-header">
    <h3>TTRPG & Dungeon Master</h3>
    <button type="button" class="drawer-close-btn" id="close-ttrpg-btn" aria-label="Close panel">✕</button>
  </div>
  <div class="drawer-content">
    <div>
      <div class="status-badge">
        <span class="status-dot"></span>
        <span>Tabletop RPGs Since 2021</span>
      </div>
      <h2>Dungeon Master & Worldbuilding</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem;">
        Storytelling, encounter balancing, dynamic pacing, and interactive worldbuilding for tabletop campaigns.
      </p>
    </div>

    <div class="feature-box" style="margin: 0;">
      <h4>Systems Played & DMed</h4>
      <ul style="margin-left: 1.25rem; margin-bottom: 1rem;">
        <li>Dungeons & Dragons 5e (2014 & 2024 editions)</li>
        <li>Pathfinder 2e</li>
        <li>Shadow of the Demon Lord</li>
        <li>Daggerheart</li>
        <li>Vampire: The Masquerade (20th Anniversary Edition)</li>
      </ul>
      <img alt="Descent into Avernus final battle" src="https://github.com/user-attachments/assets/8db4ff34-3eef-4aab-bcb4-c9d101256442" style="border-radius: var(--radius-md); width: 100%; border: 1px solid var(--border-color);" />
      <blockquote>
        After a long and rushed D&D online campaign, Descent into Avernus, we met with the party to have the final showdown in person.
      </blockquote>
    </div>

    <div class="feature-box" style="margin: 0;">
      <h4>Adventures Run as DM</h4>
      <ul style="margin-left: 1.25rem; margin-bottom: 1rem;">
        <li>Descent into Avernus (D&D 5e)</li>
        <li>Death Pit of Molloch (D&D 5e)</li>
        <li>Grim Hollow [1-3] (D&D 5e)</li>
        <li>The Lost Kenku & The Wild Sheep Chase (D&D 5e)</li>
        <li>Dead by Dawn, Fine Country Folk, Tales of the Desolation (Shadow of the Demon Lord)</li>
        <li>The Sablewood Messengers (Daggerheart)</li>
      </ul>
      <img alt="Dungeon Master in action" src="https://github.com/user-attachments/assets/35c28943-db80-49fd-85e4-993ced292c6c" style="border-radius: var(--radius-md); width: 100%; border: 1px solid var(--border-color);" />
    </div>
  </div>
</aside>

<!-- Main Showcase Feed: Games Listed One Below The Other -->
<main class="main-showcase-container">
  <div class="showcase-header">
    <div class="status-badge" style="margin-bottom: 0.75rem;">
      <span class="status-dot"></span>
      <span>Game Design Highlights</span>
    </div>
    <h1>Game Design Career</h1>
    <p>Selected game design case studies, mechanics breakdowns, and development post-mortems.</p>
  </div>

  <div class="showcase-stack">
    <!-- 1. Zomvid-19 -->
    <article class="showcase-item" style="--item-bg: url('Source/Zomvid19Poster.png');">
      <div class="showcase-backdrop"></div>
      <div class="showcase-card">
        <div class="card-meta-row">
          <span class="card-tag tag-product">PO & Game Design / UE5.8</span>
          <span class="showcase-num">01</span>
        </div>
        <h2><a href="zomvid-19.html">Zomvid-19</a></h2>
        <p class="showcase-desc">
          First-person zombie defense team project in Unreal Engine 5.8. Led production as Product Owner & Game Designer, designing player-driven barricade systems, illumination, and loot economy.
        </p>
        <div class="showcase-actions">
          <a href="zomvid-19.html" class="btn btn-primary">Explore Case Study →</a>
          <a href="https://miro.com/app/board/uXjVHvWENxQ=/?share_link_id=246443047222" target="_blank" class="btn btn-outline">Miro GDD ↗</a>
        </div>
      </div>
    </article>

    <!-- 2. I HATE FISH -->
    <article class="showcase-item" style="--item-bg: url('Source/IHateFish-Poster.png');">
      <div class="showcase-backdrop"></div>
      <div class="showcase-card">
        <div class="card-meta-row">
          <span class="card-tag tag-boss">LD & Game Design / UE5.4</span>
          <span class="showcase-num">02</span>
        </div>
        <h2><a href="i-hate-fish.html">I HATE FISH</a></h2>
        <p class="showcase-desc">
          Underwater FPS boss prototype team project in Unreal Engine 5.4. Sized 3D space metrics, custom swim stroke impulse mechanics, and Atlantis ruin level pacing.
        </p>
        <div class="showcase-actions">
          <a href="i-hate-fish.html" class="btn btn-primary">Explore Case Study →</a>
          <a href="https://jpkrohn97.itch.io/i-hate-fish" target="_blank" class="btn btn-outline">Play on itch.io ↗</a>
        </div>
      </div>
    </article>

    <!-- 3. OverBrewed -->
    <article class="showcase-item" style="--item-bg: url('Source/Overbrewed-Poster.png');">
      <div class="showcase-backdrop"></div>
      <div class="showcase-card">
        <div class="card-meta-row">
          <span class="card-tag tag-coop">PO & Game Design / UE5.7</span>
          <span class="showcase-num">03</span>
        </div>
        <h2><a href="overbrewed.html">OverBrewed</a></h2>
        <p class="showcase-desc">
          Asymmetrical two-player co-op potion brewing team project in Unreal Engine 5.7 where verbal communication, role division, and physical handling reign.
        </p>
        <div class="showcase-actions">
          <a href="overbrewed.html" class="btn btn-primary">Explore Case Study →</a>
          <a href="https://futuregames.itch.io/overbrewed" target="_blank" class="btn btn-outline">Play on itch.io ↗</a>
        </div>
      </div>
    </article>

    <!-- 4. No* Animal Crossing -->
    <article class="showcase-item" style="--item-bg: url('https://github.com/user-attachments/assets/6b5366d6-a10f-4253-976f-fcc5b6088fea');">
      <div class="showcase-backdrop"></div>
      <div class="showcase-card">
        <div class="card-meta-row">
          <span class="card-tag tag-design">Lane Defense / Arcade</span>
          <span class="showcase-num">04</span>
        </div>
        <h2><a href="NoAnimalCrossing.html">No* Animal Crossing</a></h2>
        <p class="showcase-desc">
          Inverting Frogger's core premise: players control traffic to defensively eliminate crossing animals with satisfying skill-shots and lane control.
        </p>
        <div class="showcase-actions">
          <a href="NoAnimalCrossing.html" class="btn btn-primary">Explore Case Study →</a>
          <a href="https://jpkrohn97.itch.io/no-animal-crossing" target="_blank" class="btn btn-outline">Play in Browser ↗</a>
        </div>
      </div>
    </article>

    <!-- 5. Project Trash -->
    <article class="showcase-item" style="--item-bg: url('https://github.com/user-attachments/assets/f4ccde91-0897-44d1-912d-dde7cbfe9844');">
      <div class="showcase-backdrop"></div>
      <div class="showcase-card">
        <div class="card-meta-row">
          <span class="card-tag tag-product">Product Owner / Arcade</span>
          <span class="showcase-num">05</span>
        </div>
        <h2><a href="ProjectTrash.html">Project Trash</a></h2>
        <p class="showcase-desc">
          Fast-paced arcade recycling game combining educational design pillars with responsive sensory feedback. Published on Steam and itch.io.
        </p>
        <div class="showcase-actions">
          <a href="ProjectTrash.html" class="btn btn-primary">Explore Case Study →</a>
          <a href="https://store.steampowered.com/app/4798760/Project_Trash/" target="_blank" class="btn btn-outline">Steam ↗</a>
        </div>
      </div>
    </article>

    <!-- 6. Necromeowcy -->
    <article class="showcase-item" style="--item-bg: url('https://github.com/user-attachments/assets/92792a7e-5e68-42e0-9bac-6fc5b0a4068e');">
      <div class="showcase-backdrop"></div>
      <div class="showcase-card">
        <div class="card-meta-row">
          <span class="card-tag tag-design">City Builder / Jam</span>
          <span class="showcase-num">06</span>
        </div>
        <h2><a href="Necromeowcy.html">Necromeowcy</a></h2>
        <p class="showcase-desc">
          Strategic city builder made in a one-week game jam featuring necromancy for the common good, living vs. undead workforce, and economy modeling.
        </p>
        <div class="showcase-actions">
          <a href="Necromeowcy.html" class="btn btn-primary">Explore Case Study →</a>
          <a href="https://untalpanda.itch.io/necromeowcy" target="_blank" class="btn btn-outline">Play in Browser ↗</a>
        </div>
      </div>
    </article>
  </div>
</main>
