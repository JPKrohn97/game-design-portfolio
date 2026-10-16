---
layout: default
title: OverBrewed
---

<div class="layout">
  <aside class="sidebar">
    <a href="index.html" class="btn-back">← Back to portfolio</a>
    
    <a href="https://futuregames.itch.io/overbrewed" target="_blank">
      <img src="Source/Overbrewed-Poster.png" alt="OverBrewed Poster" style="width: 100%; border-radius: var(--radius-md);" />
    </a>

    <div style="text-align: center; margin-top: 0.5rem;">
      <h2 style="margin: 0.5rem 0;">OverBrewed</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem;">2-Player Co-op Shopkeeping & Potion Sim</p>
    </div>

    <div class="btn-group" style="justify-content: center;">
      <a href="https://futuregames.itch.io/overbrewed" target="_blank" class="btn btn-primary" style="width: 100%;">
        Play on itch.io ↗
      </a>
    </div>

    <div>
      <h3>Quick overview</h3>
      <p>
        A two-player co-op, asymmetrical shopkeeping and potion-brewing simulator where each player assumes a specialized role, and precise verbal communication is everything.
      </p>
    </div>
  </aside>

  <main class="content">
    <section>
      <div class="case-study-header">
        <h1>OverBrewed</h1>
        <div class="subtitle">Asymmetrical Co-op Potion Brewing & Shop Management</div>
        
        <div class="metadata-grid">
          <div class="metadata-item">
            <span class="label">Engine</span>
            <span class="value">Unreal Engine 5.7</span>
          </div>
          <div class="metadata-item">
            <span class="label">Roles</span>
            <span class="value">Product Owner, Game Designer</span>
          </div>
          <div class="metadata-item">
            <span class="label">Project Type</span>
            <span class="value">Team Project (11 developers)</span>
          </div>
          <div class="metadata-item">
            <span class="label">Genre</span>
            <span class="value">Co-op / Asymmetrical Simulation</span>
          </div>
        </div>

        <div class="btn-group">
          <a href="https://futuregames.itch.io/overbrewed" target="_blank" class="btn btn-primary">
            Download & Play on itch.io ↗
          </a>
        </div>
      </div>

      <h2>Trailer & Gameplay</h2>
      <div class="video-container">
        <video controls preload="metadata" poster="Source/Overbrewed-Poster.png" class="featured-video">
          <source src="Source/Overbrewed-Trailer.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <h2>Game Overview</h2>
      <p>
        In <strong>OverBrewed</strong>, two players must operate a bustling fantasy potion shop in local LAN co-op. Each player steps into a unique asymmetrical role. Success demands constant voice communication, strict adherence to whimsical recipe formulas, and careful physical handling of fragile glassware.
      </p>

      <h3>Design Problem</h3>
      <p>
        How to build a cooperative cooking/crafting game where players feel mutually interdependent rather than simply dividing identical tasks in parallel?
      </p>

      <h3>Design Solution: Strict Asymmetry & Physicality</h3>
      <p>
        Instead of allowing both players to brew and sell simultaneously, information and execution tools are deliberately split:
      </p>

      <div class="feature-box">
        <h4>The Core Cooperative Loop</h4>
        <ol>
          <li><strong>Receive Orders:</strong> Interact with incoming fantasy patrons at the shop counter to log orders and recipe requirements.</li>
          <li><strong>Information Exchange:</strong> Read recipe instructions and relay precise ingredient requirements verbally to your brewing partner.</li>
          <li><strong>Brew & Enchant:</strong> Retrieve exotic reagents, manage the cauldron, stir to proper consistency (R key), and complete magical enchantments.</li>
          <li><strong>High-Stakes Delivery:</strong> Transport the finished flask across the workshop and hand it over to the client. Whatever you do: don't drop the flask, or it shatters and you restart from scratch!</li>
        </ol>
      </div>

      <div class="feature-box">
        <h4>Physics & Emergent Chaos</h4>
        <p>
          Players can pick up, carry, and throw items (holding Right Mouse Button). This physical mechanic injects hilarity and tension: tossing ingredients across the room saves time, but throwing or dropping a finished flask ruins the entire order.
        </p>
      </div>

      <h2>Team & Production Credits</h2>
      <div class="metadata-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
        <div class="metadata-item">
          <span class="label">Product Owner</span>
          <span class="value">Julián Perez Krohn</span>
        </div>
        <div class="metadata-item">
          <span class="label">Producer</span>
          <span class="value">Mat Kohan</span>
        </div>
        <div class="metadata-item">
          <span class="label">Game Designers</span>
          <span class="value">Julián Perez Krohn, Mateusz Szwarc, Murat Tunc, Noah Oskar Hindborg, Valdemar Vikstrom</span>
        </div>
        <div class="metadata-item">
          <span class="label">Programmers</span>
          <span class="value">Alexander Larsson, Matteo Vargari, Cem Koc</span>
        </div>
        <div class="metadata-item">
          <span class="label">3D Art & Animation</span>
          <span class="value">Cody Peltier (3D Art), Kevin Andersson (Animation)</span>
        </div>
        <div class="metadata-item">
          <span class="label">Audio & Music</span>
          <span class="value">Douglas Dahlstrom, Isabel Taube</span>
        </div>
      </div>

      <blockquote>
        Development post-mortem & player metrics: (workin on it)
      </blockquote>
    </section>
  </main>
</div>
