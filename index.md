---
layout: default
title: Julián Perez Krohn - Game Design Portfolio
---

<!-- 1. Top Tab Navigation Bar (Always Visible, Full Width) -->
<header class="top-navbar-fixed" id="main-top-navbar">
  <nav class="top-nav-tabs" aria-label="Main Portfolio Navigation">
    <button type="button" class="nav-tab-btn" id="btn-tab-about" aria-expanded="false" aria-controls="drawer-about">
      <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      <span>About me</span>
    </button>
    <button type="button" class="nav-tab-btn nav-tab-center active" id="btn-tab-career" aria-expanded="true">
      <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        <path d="M6 12h4m-2-2v4"></path>
        <circle cx="15" cy="11" r="1"></circle>
        <circle cx="17" cy="13" r="1"></circle>
      </svg>
      <span>Game design career</span>
    </button>
    <button type="button" class="nav-tab-btn" id="btn-tab-ttrpg" aria-expanded="false" aria-controls="drawer-ttrpg">
      <svg class="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"></path>
        <path d="M12 22V12"></path>
        <path d="M21 7l-9 5-9-5"></path>
      </svg>
      <span>DM & TTRPGs background</span>
    </button>
  </nav>
</header>

<!-- 2. Backdrop Overlay for Side Drawers -->
<div id="panels-overlay" class="panels-overlay" aria-hidden="true"></div>

<!-- 3. Left Drawer: About Me (Expands to >= 50% width on desktop, 100% on mobile) -->
<aside id="drawer-about" class="drawer-panel drawer-left" aria-hidden="true">
  <div class="drawer-scroll-container">
    <div class="drawer-header-bar" style="justify-content: flex-end;">
      <button type="button" class="drawer-close-btn" id="close-about-btn" aria-label="Close About Me panel">✕</button>
    </div>

    <!-- Div 1 (Superior): Dos columnas -->
    <div class="about-top-grid">
      <!-- Columna 1: Nombre, descripción y foto -->
      <div class="about-col-primary">
        <div class="status-badge">
          <span class="status-dot"></span>
          <span>Game Designer & Developer</span>
        </div>
        <h1 class="about-name">Julián Perez Krohn</h1>
        <p class="about-bio-short">
          Moved from Argentina to Poland to pursue a professional career in game development.
        </p>
        <div class="about-photo-wrapper">
          <img alt="Julián Perez Krohn" src="https://github.com/user-attachments/assets/75fa9d81-8b3f-4fde-bc44-3806cbbdec6b" class="about-photo" />
        </div>
      </div>

      <!-- Columna 2: Background & Interests, Contact details & links, y Favourite games -->
      <div class="about-col-secondary">
        <h3>Background & Interests</h3>
        <ul class="about-interests-list">
          <li><strong>Game Design student</strong> at Futuregames Warsaw</li>
          <li>Software Developer (7 years of experience)</li>
          <li>Tabletop RPG enjoyer and Dungeon Master since 2021</li>
          <li>Hardcore PC gamer & board game aficionado</li>
          <li>Medieval fencing enthusiast</li>
        </ul>

        <div class="about-links-section">
          <h4 class="links-subtitle">Contact details & links</h4>
          <div class="about-links">
            <a href="https://linktr.ee/jpkrohn97" target="_blank" class="btn btn-outline" style="width: 100%; justify-content: center;">
              Linktree Profile ↗
            </a>
            <a href="https://jpkrohn97.itch.io" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center;">
              itch.io Games ↗
            </a>
          </div>
        </div>

        <!-- Favourite games (Ubicado directamente debajo de Contact details & links) -->
        <div class="favorites-section" style="margin-top: 1.25rem;">
          <h4 class="links-subtitle">Favourite games</h4>
          <div class="favorites-grid" style="margin-top: 0.65rem;">
            <div class="favorites-col">
              <h5 class="fav-subheading">Videogames</h5>
              <div class="games-thumb-grid">
                <a href="https://github.com/user-attachments/assets/8d019e89-1669-43b3-b169-259b807debc8" target="_blank">
                  <img src="https://github.com/user-attachments/assets/8d019e89-1669-43b3-b169-259b807debc8" alt="Favourite videogames 1">
                </a>
                <a href="https://github.com/user-attachments/assets/d12cd85f-9c89-4de2-9b62-c7e9a4061739" target="_blank">
                  <img src="https://github.com/user-attachments/assets/d12cd85f-9c89-4de2-9b62-c7e9a4061739" alt="Favourite videogames 2">
                </a>
                <a href="https://github.com/user-attachments/assets/c88e8aa3-d42d-41a4-bf57-d6fce9e14643" target="_blank">
                  <img src="https://github.com/user-attachments/assets/c88e8aa3-d42d-41a4-bf57-d6fce9e14643" alt="Favourite videogames 3">
                </a>
                <a href="https://github.com/user-attachments/assets/568353a1-2a24-46bf-a454-11cdaecb4c6b" target="_blank">
                  <img src="https://github.com/user-attachments/assets/568353a1-2a24-46bf-a454-11cdaecb4c6b" alt="Favourite videogames 4">
                </a>
              </div>
            </div>

            <div class="favorites-col">
              <h5 class="fav-subheading">Boardgames</h5>
              <div class="boardgame-thumb-wrapper">
                <a href="https://github.com/user-attachments/assets/d991960d-0e12-4ec9-b79a-34d99bda003d" target="_blank">
                  <img src="https://github.com/user-attachments/assets/d991960d-0e12-4ec9-b79a-34d99bda003d" alt="Favourite boardgames">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Div 2 (Inferior): Botón expandible para historia personal y cosplay -->
    <div class="about-expandable-section">
      <details class="about-expandable">
        <summary>
          <span>More about me</span>
          <span class="chevron">▾</span>
        </summary>
        <div class="about-expanded-content">
          <p>
            I'm 28 years old, born and raised in Argentina, and surrounded by games since childhood. From playing card games with grandparents and boardgames with cousins, to playing sports at school and videogames with friends; I have always been a fan of the social interactions that come out of playing games: competitiveness, cooperation, deception, and most importantly, <strong>joy</strong>.
          </p>
          <p>
            I've been thinking of making games since I was 13, and slowly but surely, I'm moving forward with the objective of entering the industry to develop my professional skills, gain valuable experience, and build connections. My ultimate goal is making an impact on both the industry and the world. I believe the best games aren't remembered because of what players did, but because of how those experiences made them feel and the stories they created along the way.
          </p>
          
          <div class="cosplay-wrapper">
            <img alt="Harrier Du Bois Halloween 2025" src="https://github.com/user-attachments/assets/be3904ad-215f-4280-bec0-5e7aadec1f6a" class="cosplay-photo" />
            <blockquote class="photo-caption">
              *Me as Harrier Du Bois from Disco Elysium, on Halloween 2025.
            </blockquote>
          </div>
        </div>
      </details>
    </div>
  </div>
</aside>

<!-- 4. Right Drawer: DM & TTRPGs background (Expands to >= 50% width on desktop, 100% on mobile) -->
<aside id="drawer-ttrpg" class="drawer-panel drawer-right" aria-hidden="true">
  <div class="drawer-scroll-container">
    <div class="drawer-header-bar" style="justify-content: flex-end;">
      <button type="button" class="drawer-close-btn" id="close-ttrpg-btn" aria-label="Close TTRPG panel">✕</button>
    </div>

    <!-- Dos columnas: Systems Played & DMed / Adventures Run as DM -->
    <div class="ttrpg-grid">
      <!-- Columna 1: Systems Played & DMed -->
      <div class="ttrpg-col">
        <h4>Systems Played & DMed</h4>
        <ul>
          <li>Dungeons & Dragons 5e (2014 & 2024 editions)</li>
          <li>Pathfinder 2e</li>
          <li>Shadow of the Demon Lord</li>
          <li>Daggerheart</li>
          <li>Vampire: The Masquerade (20th Anniversary Edition)</li>
          <li>Call of Cthulhu (7th Edition)</li>
        </ul>
        <div class="ttrpg-photo-box">
          <img alt="Descent into Avernus final battle" src="https://github.com/user-attachments/assets/8db4ff34-3eef-4aab-bcb4-c9d101256442" class="ttrpg-img" />
          <blockquote class="photo-caption">
            *After a long and rushed D&D online campaign, Descent into Avernus, we met with the party to have the final showdown in person.
          </blockquote>
        </div>
      </div>

      <!-- Columna 2: Adventures Run as DM -->
      <div class="ttrpg-col">
        <h4>Adventures Run as DM</h4>
        <ul>
          <li>Descent into Avernus (D&D 5e)</li>
          <li>Death Pit of Molloch (D&D 5e)</li>
          <li>Grim Hollow [1-3] (D&D 5e)</li>
          <li>The Lost Kenku & The Wild Sheep Chase (D&D 5e)</li>
          <li>Dead by Dawn, Fine Country Folk, Tales of the Desolation (Shadow of the Demon Lord)</li>
          <li>The Sablewood Messengers (Daggerheart)</li>
        </ul>
        <div class="ttrpg-photo-box">
          <img alt="Dungeon Master in action" src="https://github.com/user-attachments/assets/35c28943-db80-49fd-85e4-993ced292c6c" class="ttrpg-img" />
          <blockquote class="photo-caption">
            *Dungeon Master in action, balancing encounters, tension, and player agency.
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</aside>

<!-- 5. Main Content: Vertical Alternating Overlapping Games Showcase Feed (Grunge Ripped Posters) -->
<main class="games-showcase-page">
  <div class="games-showcase-list">
    <!-- 1. Zomvid-19 (Impar -> Poster on Right, Scrap Container on Left) -->
    <article class="game-showcase-item">
      <div class="game-poster-bg" style="background-image: url('Source/Zomvid19-Poster.png');"></div>
      <div class="game-overlay-container">
        <div class="game-card-header">
          <h2 class="game-overlay-title"><a href="zomvid-19.html">Zomvid-19</a></h2>
          <div class="game-overlay-tags">
            <span class="card-tag tag-product">PO & Game Design / UE5.8</span>
          </div>
        </div>
        <p class="game-overlay-desc">
          First-person zombie defense team project in Unreal Engine 5.8. Led production as Product Owner & Game Designer, designing player-driven barricade systems, illumination, and loot economy.
        </p>
        <div class="game-overlay-action">
          <a href="zomvid-19.html" class="btn btn-primary">Read more →</a>
        </div>
      </div>
    </article>

    <!-- 2. I HATE FISH (Par -> Poster on Left, Scrap Container on Right) -->
    <article class="game-showcase-item">
      <div class="game-poster-bg" style="background-image: url('Source/IHateFish-Poster.png');"></div>
      <div class="game-overlay-container">
        <div class="game-card-header">
          <h2 class="game-overlay-title"><a href="i-hate-fish.html">I HATE FISH</a></h2>
          <div class="game-overlay-tags">
            <span class="card-tag tag-boss">LD & Game Design / UE5.4</span>
          </div>
        </div>
        <p class="game-overlay-desc">
          Underwater FPS boss prototype team project in Unreal Engine 5.4. Sized 3D space metrics, custom swim stroke impulse mechanics, and Atlantis ruin level pacing.
        </p>
        <div class="game-overlay-action">
          <a href="i-hate-fish.html" class="btn btn-primary">Read more →</a>
        </div>
      </div>
    </article>

    <!-- 3. OverBrewed (Impar -> Poster on Right, Scrap Container on Left) -->
    <article class="game-showcase-item">
      <div class="game-poster-bg" style="background-image: url('Source/Overbrewed-Poster.png');"></div>
      <div class="game-overlay-container">
        <div class="game-card-header">
          <h2 class="game-overlay-title"><a href="overbrewed.html">OverBrewed</a></h2>
          <div class="game-overlay-tags">
            <span class="card-tag tag-coop">PO & Game Design / UE5.7</span>
          </div>
        </div>
        <p class="game-overlay-desc">
          Asymmetrical two-player co-op potion brewing team project in Unreal Engine 5.7 where verbal communication, role division, and physical handling reign.
        </p>
        <div class="game-overlay-action">
          <a href="overbrewed.html" class="btn btn-primary">Read more →</a>
        </div>
      </div>
    </article>

    <!-- 4. No* Animal Crossing (Par -> Poster on Left, Scrap Container on Right) -->
    <article class="game-showcase-item">
      <div class="game-poster-bg" style="background-image: url('Source/NoAnimalCrossing-Poster.png');"></div>
      <div class="game-overlay-container">
        <div class="game-card-header">
          <h2 class="game-overlay-title"><a href="NoAnimalCrossing.html">No* Animal Crossing</a></h2>
          <div class="game-overlay-tags">
            <span class="card-tag tag-design">Lane Defense / Arcade</span>
          </div>
        </div>
        <p class="game-overlay-desc">
          Inverting Frogger's core premise: players control traffic to defensively eliminate crossing animals with satisfying skill-shots and lane control.
        </p>
        <div class="game-overlay-action">
          <a href="NoAnimalCrossing.html" class="btn btn-primary">Read more →</a>
        </div>
      </div>
    </article>

    <!-- 5. Project Trash (Impar -> Poster on Right, Scrap Container on Left) -->
    <article class="game-showcase-item">
      <div class="game-poster-bg" style="background-image: url('Source/ProjectTrash-Poster.png');"></div>
      <div class="game-overlay-container">
        <div class="game-card-header">
          <h2 class="game-overlay-title"><a href="ProjectTrash.html">Project Trash</a></h2>
          <div class="game-overlay-tags">
            <span class="card-tag tag-product">Product Owner / Arcade</span>
          </div>
        </div>
        <p class="game-overlay-desc">
          Fast-paced arcade recycling game combining educational design pillars with responsive sensory feedback. Published on Steam and itch.io.
        </p>
        <div class="game-overlay-action">
          <a href="ProjectTrash.html" class="btn btn-primary">Read more →</a>
        </div>
      </div>
    </article>

    <!-- 6. Necromeowcy (Par -> Poster on Left, Scrap Container on Right) -->
    <article class="game-showcase-item">
      <div class="game-poster-bg" style="background-image: url('Source/Necromeowcy-Poster.png');"></div>
      <div class="game-overlay-container">
        <div class="game-card-header">
          <h2 class="game-overlay-title"><a href="Necromeowcy.html">Necromeowcy</a></h2>
          <div class="game-overlay-tags">
            <span class="card-tag tag-design">City Builder / Jam</span>
          </div>
        </div>
        <p class="game-overlay-desc">
          Strategic city builder made in a one-week game jam featuring necromancy for the common good, living vs. undead workforce, and economy modeling.
        </p>
        <div class="game-overlay-action">
          <a href="Necromeowcy.html" class="btn btn-primary">Read more →</a>
        </div>
      </div>
    </article>
  </div>
</main>
