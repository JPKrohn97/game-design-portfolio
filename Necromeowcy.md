---
layout: default
title: Necromeowcy
---

<div class="layout">
  <aside class="sidebar">
    <a href="index.html" class="btn-back">← Back to portfolio</a>

    <a href="https://untalpanda.itch.io/necromeowcy" target="_blank" rel="noopener noreferrer">
      <img class="sidebar-poster" alt="Necromeowcy Cover" src="Source/Necromeowcy-Poster.png" loading="lazy" decoding="async" />
    </a>

    <div class="sidebar-hero">
      <h2>Necromeowcy</h2>
      <p class="sidebar-tagline">1-Week Game Jam Project</p>
    </div>

    <div class="btn-group btn-group--center btn-group--stack">
      <a href="https://untalpanda.itch.io/necromeowcy" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Play in Browser ↗
      </a>
      <a href="https://docs.google.com/spreadsheets/d/1D1Q1IpKQHnFNLXhoZSwwbAe1SD5LLhLoceH37spaDj4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
        View Economy Spreadsheet ↗
      </a>
    </div>

    <div>
      <h3>Jam Reflections</h3>
      <p>
        Necromeowcy is a city builder created during a one-week game jam. Reflecting on our results, we definitely overscoped and faced time constraints, but learned valuable lessons about economy balance and strategy game UX/UI.
      </p>
    </div>
  </aside>

  <main class="content">
    <section>
      <div class="case-study-header">
        <h1>Necromeowcy</h1>
        <div class="subtitle">A City Builder Built on "Borrowed Time"</div>

        <div class="metadata-grid">
          <div class="metadata-item">
            <span class="label">Jam Theme</span>
            <span class="value">"Borrowed Time"</span>
          </div>
          <div class="metadata-item">
            <span class="label">Role</span>
            <span class="value">System & Economy Designer</span>
          </div>
          <div class="metadata-item">
            <span class="label">Timeline</span>
            <span class="value">1 week (Game Jam)</span>
          </div>
          <div class="metadata-item">
            <span class="label">Genre</span>
            <span class="value">City Builder / Strategy</span>
          </div>
        </div>
      </div>

      <h2>Theme Interpretation: "Borrowed Time"</h2>
      <p>
        At first glance, "Borrowed Time" seemed like an unusual prompt for a strategy game. During our brainstorming sessions, necromancy emerged as a central theme. How could it be subverted? What if the necromancer isn't inherently evil, but uses the dead to serve the living for a strictly limited period of time?
      </p>

      <div class="media-block">
        <a href="Source/media/necromeowcy/town.png" target="_blank" rel="noopener noreferrer">
          <img class="media-constrained" src="Source/media/necromeowcy/town.png" alt="Necromeowcy Gameplay" loading="lazy" decoding="async" />
        </a>
        <p class="media-caption"><em>In-game town view and citizen management.</em></p>
      </div>

      <h2>Core Systems & Mechanics</h2>

      <div class="feature-box">
        <h4>1. Living Population Infrastructure</h4>
        <p>
          Before handling the undead, we designed a foundational ecosystem for the living. Players command cat peasants to build houses (increasing population cap), sow farms (producing daily food rations), and erect workshops (generating construction materials). However, if basic needs are neglected, peasants become stressed, shortening their lifespan and filling the local cemetery.
        </p>
      </div>

      <div class="feature-box">
        <h4>2. Undead Labor & The "Purr" Energy Economy</h4>
        <p>
          Deceased peasants buried in the graveyard can be summoned as temporary undead workers. Undead laborers consume no food rations, but their presence in daylight terrifies living citizens. Players must balance night-shift clandestine necromancy against broad-daylight productivity.
        </p>
        <p>
          To prevent summons from becoming overly situational, we designed an energy mechanic called <strong>"Purr"</strong>. Happy citizens produce Purr, but the necromancer can also siphon Purr directly from living peasants, prematurely aging them to fuel rituals. Taking some Purr sustains the town—taking too much is CATastrophic.
        </p>
      </div>

      <div class="media-block">
        <a href="Source/media/necromeowcy/tutorial.png" target="_blank" rel="noopener noreferrer">
          <img class="media-constrained" src="Source/media/necromeowcy/tutorial.png" alt="In-game tutorial" loading="lazy" decoding="async" />
        </a>
        <p class="media-caption"><em>In-game guidance explaining the Purr and summon cycle.</em></p>
      </div>

      <div class="media-block">
        <img class="media-constrained" src="Source/media/necromeowcy/whiteboard.png" alt="Brainstormed mechanics and systems" loading="lazy" decoding="async" />
        <p class="media-caption"><em>Original design whiteboard mapping systems, resources, and dependencies.</em></p>
      </div>

      <div class="feature-box">
        <h4>3. Dynamic Dilemmas & Narrative Events</h4>
        <p>
          To prevent passive optimization, an event system triggers dilemmas every few in-game days. Players must make hard trade-offs: spend precious Purr to resolve emergencies, sacrifice stockpiled material, or ignore problems and suffer civilian casualties.
        </p>
      </div>

      <div class="media-block">
        <img class="media-constrained" src="Source/media/necromeowcy/events.png" alt="Event system prototype" loading="lazy" decoding="async" />
        <p class="media-caption"><em>Early event system mock-ups and narrative choices.</em></p>
      </div>

      <h2>Systemic Economy Modeling</h2>
      <p>
        To balance resource production and attrition, I built a dynamic spreadsheet simulation forecasting daily town metrics: population growth, natural mortality, food consumption, job distribution, inventory deficits, and upgrade thresholds for the Tier 2 Castle.
      </p>

      <div class="media-block">
        <a href="Source/media/necromeowcy/economy.png" target="_blank" rel="noopener noreferrer">
          <img class="media-constrained" src="Source/media/necromeowcy/economy.png" alt="Economy spreadsheet preview" loading="lazy" decoding="async" />
        </a>
      </div>

      <p>
        Explore the live spreadsheet calculations:
        <a href="https://docs.google.com/spreadsheets/d/1D1Q1IpKQHnFNLXhoZSwwbAe1SD5LLhLoceH37spaDj4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="my-link">
          <strong>Open Necromeowcy Economy Sheet ↗</strong>
        </a>
      </p>
    </section>
  </main>
</div>
