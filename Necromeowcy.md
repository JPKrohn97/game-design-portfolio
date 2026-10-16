---
layout: default
title: Necromeowcy
---

<div class="layout">
  <aside class="sidebar">
    <a href="index.html" class="btn-back">← Back to portfolio</a>
    
    <a href="https://untalpanda.itch.io/necromeowcy" target="_blank">
      <img alt="Necromeowcy Cover" src="https://github.com/user-attachments/assets/b18d7b8c-1cca-4c8f-b312-d694a7a55dcd" style="width: 100%; border-radius: var(--radius-md);" />
    </a>

    <div style="text-align: center; margin-top: 0.5rem;">
      <h2 style="margin: 0.5rem 0;">Necromeowcy</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">1-Week Game Jam Project</p>
    </div>

    <div class="btn-group" style="justify-content: center;">
      <a href="https://untalpanda.itch.io/necromeowcy" target="_blank" class="btn btn-primary" style="width: 100%;">
        Play in Browser ↗
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

        <div class="btn-group">
          <a href="https://untalpanda.itch.io/necromeowcy" target="_blank" class="btn btn-primary">
            Play on itch.io ↗
          </a>
          <a href="https://docs.google.com/spreadsheets/d/1D1Q1IpKQHnFNLXhoZSwwbAe1SD5LLhLoceH37spaDj4/edit?usp=sharing" target="_blank" class="btn btn-outline">
            View Economy Spreadsheet ↗
          </a>
        </div>
      </div>

      <h2>Theme Interpretation: "Borrowed Time"</h2>
      <p>
        At first glance, "Borrowed Time" seemed like an unusual prompt for a strategy game. During our brainstorming sessions, necromancy emerged as a central theme. How could it be subverted? What if the necromancer isn't inherently evil, but uses the dead to serve the living for a strictly limited period of time?
      </p>

      <div style="margin: 1.5rem 0;">
        <a href="https://github.com/user-attachments/assets/bf584bae-23ff-41f1-b78c-f3db90783afd" target="_blank">
          <img src="https://github.com/user-attachments/assets/bf584bae-23ff-41f1-b78c-f3db90783afd" alt="Necromeowcy Gameplay" style="width: 100%; border-radius: var(--radius-md);" />
        </a>
        <p style="text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;"><em>In-game town view and citizen management.</em></p>
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

      <div style="margin: 1.5rem 0;">
        <a href="https://github.com/user-attachments/assets/d2c97147-ecb0-489e-abcc-5f4b5dc8e7aa" target="_blank">
          <img src="https://github.com/user-attachments/assets/d2c97147-ecb0-489e-abcc-5f4b5dc8e7aa" alt="In-game tutorial" style="width: 100%; border-radius: var(--radius-md);" />
        </a>
        <p style="text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;"><em>In-game guidance explaining the Purr and summon cycle.</em></p>
      </div>

      <div style="margin: 1.5rem 0;">
        <img src="https://github.com/user-attachments/assets/8d22e13e-f948-40e6-bdc9-f8e467b4806c" alt="Brainstormed mechanics and systems" style="width: 100%; border-radius: var(--radius-md);" />
        <p style="text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;"><em>Original design whiteboard mapping systems, resources, and dependencies.</em></p>
      </div>

      <div class="feature-box">
        <h4>3. Dynamic Dilemmas & Narrative Events</h4>
        <p>
          To prevent passive optimization, an event system triggers dilemmas every few in-game days. Players must make hard trade-offs: spend precious Purr to resolve emergencies, sacrifice stockpiled material, or ignore problems and suffer civilian casualties.
        </p>
      </div>

      <div style="margin: 1.5rem 0;">
        <img src="https://github.com/user-attachments/assets/2ee8d34b-6866-4466-9f1c-5fb0d462f645" alt="Event system prototype" style="width: 100%; border-radius: var(--radius-md);" />
        <p style="text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;"><em>Early event system mock-ups and narrative choices.</em></p>
      </div>

      <h2>Systemic Economy Modeling</h2>
      <p>
        To balance resource production and attrition, I built a dynamic spreadsheet simulation forecasting daily town metrics: population growth, natural mortality, food consumption, job distribution, inventory deficits, and upgrade thresholds for the Tier 2 Castle.
      </p>

      <div style="margin: 1.5rem 0;">
        <a href="https://github.com/user-attachments/assets/78b097c0-e1eb-4d38-a6fc-f2b7f51e4cc9" target="_blank">
          <img src="https://github.com/user-attachments/assets/78b097c0-e1eb-4d38-a6fc-f2b7f51e4cc9" alt="Economy spreadsheet preview" style="width: 100%; border-radius: var(--radius-md);" />
        </a>
      </div>

      <p>
        Explore the live spreadsheet calculations:
        <a href="https://docs.google.com/spreadsheets/d/1D1Q1IpKQHnFNLXhoZSwwbAe1SD5LLhLoceH37spaDj4/edit?usp=sharing" target="_blank" class="my-link">
          <strong>Open Necromeowcy Economy Sheet ↗</strong>
        </a>
      </p>
    </section>
  </main>
</div>
