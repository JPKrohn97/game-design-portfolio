---
layout: default
title: Necromeowcy
---

<div class="layout">
  <aside class="sidebar content">
    <a href="index.html" class="my-link"><strong>Back to portfolio.</strong></a>
      <br>
    <section class="project-section projects-container">
    <img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/b18d7b8c-1cca-4c8f-b312-d694a7a55dcd" />
    <h1 style="text-align: center;">Necromeowcy</h1>
    <p>
      Necromweocy is a city builder made during a one week game jam. 
    </p>
    <p>
      I'm impressed on what we've achieved with little experience. Reflexing on the results, I understand we overscoped, we managed our time incorrectly and learned the importance of UX/UI in strategy games. 
    </p>
    </section>
    <a href="https://untalpanda.itch.io/necromeowcy" target="_blank" class="my-link">
      <strong>PLAY IN BROWSER</strong>
    </a>
  </aside>
  <main class="content">
  <section class="project-section">
    <h1 style="text-align: center;">"Borrowed Time"</h1>
    <p>
      This was the game jam theme which at first glance, it was a strange theme to build a game around, but after the initial brainstorming session, we started developing several ideas. Necromancy was big, and was shared among most team members. How could it be used? Having a dead army for what purpose? What if the necromancer is not evil, and uses the dead to serve the living for a limited period of time. 
    </p>
    <p>      
      <a href="https://github.com/user-attachments/assets/bf584bae-23ff-41f1-b78c-f3db90783afd" target="_blank" class="center-aligned">
        <img width="900" height="700" alt="image" src="https://github.com/user-attachments/assets/bf584bae-23ff-41f1-b78c-f3db90783afd" />
      </a>
      <br>
      <em>Gameplay.</em>
    </p>
  </section>
  <section class="project-section">
    <h1 style="text-align: center;">Core concept</h1>
    <p>
      We really liked the idea of having a necromancer helping their people, using the undead to make their small town thrive. But before having the undead, we needed to create a system for the living.  
      We started off by creating a "simple" system of population that would be the core of the city builder experience. The player can command a small group of peasants to do the player's bidding: building houses to increase population cap, create farms to feed the peasants, and then workshops, which generate building material for new buildings.  
    </p>
    <p>
      This "simple" infrastructure would make the town self-sufficient as long as the player manages the constant consumption of daily rations and procreation rate. But it is not that simple as it seems, if they are not satified, they become stressed, which in turn reduces their lifespan. Yes, each peasant live for a period of time, and several factors reduce the expected lifespan: not having a home for a night, not being able to eat for a day, and, <strong>notice the undead walking among them</strong>. With this system in mind, we were able to create a cycle of growing population and deceased old peasants burried in town's cemetery. 
    </p>
    <p> 
      This was a great opportunity to introduce necromancy into the game. The player would use the bodies stored in the graveyard to summon undead servants for a limited period of time. They can take any available job, and participate in the economy without consuming resources. Since peasants work during day shift, the player could do necromancy in secret, prevent scaring away peasants and having them to work at night; but, they have the choice to expose them in broad daylight, and making them work twice as much.
      We also found out that, having a limited amount of bodies, would make the mechanic of summon undead servants very situational, and we wanted to encourage the player to use them regularly. That's how we created an energy/mana system called "Purr". The player has the responsibility of taking care of their cat peasants and making them happy, but they also can take their "Purr" away, by shortening their days, and reuse it to raise undead servants. Taking some Purr might not be bad for the town, but taking too much would be CATastrophic...
    </p>
    <p>      
      <a href="https://github.com/user-attachments/assets/d2c97147-ecb0-489e-abcc-5f4b5dc8e7aa" target="_blank" class="center-aligned">
        <img width="900" height="700" alt="image" src="https://github.com/user-attachments/assets/d2c97147-ecb0-489e-abcc-5f4b5dc8e7aa" />
      </a>
      <br>
      <em>In-game tutorial.</em>
    </p>
    <p>
      <img width="900" height="700" alt="image" src="https://github.com/user-attachments/assets/8d22e13e-f948-40e6-bdc9-f8e467b4806c" />
      <em>Brainstormed mechanics and systems for the game.</em>
    </p>
    <p>
      Lastly, without any major setbacks, the game was still relatively easy, so we decided to introduce a random element to challenge the player. We added an event system that would trigger every few days, it would provide a narrative element that mentions events in the world and player's story. These events allow the player to pay the price: using Purr to fix a problem, losing resources or ignoring the problem (usually resulting in peasant casualties).
    </p>
    <p>
      <img width="900" height="700" alt="image" src="https://github.com/user-attachments/assets/2ee8d34b-6866-4466-9f1c-5fb0d462f645" />
      <em>Example of early version of events.</em>
    </p>
  </section>
  <section class="project-section">
    <h1 style="text-align: center;">Economy system</h1>
    <p>
      On this next image, I'm presenting a dynamic spreadsheet I worked on, that simulates a projected economy per in-game day: population growth, natural death rate, resource production and consuption, job assigment, food stocks and shortages, population cap. With these numbers in mind, we projected that the player should be able to upgrade their Castle, to unlock Tier 2 buildings and summons, allowing them grow even further. 
    </p>
    <p>
      This numbers don't take into account the positive outcomes of undead servants helping the economy, or the negatives from events and taking Purr away from the living. We weren't able to test these number properly as we run out of time, but we tried having a planned economy that would be self sufficient, and the rest is up to the player of how would they manage their growing town.
    </p>
    <p>
      <a href="https://github.com/user-attachments/assets/78b097c0-e1eb-4d38-a6fc-f2b7f51e4cc9" target="_blank" class="center-aligned">
        <img width="900" height="400" alt="image" src="https://github.com/user-attachments/assets/78b097c0-e1eb-4d38-a6fc-f2b7f51e4cc9" />
      </a>
      <br>
      <em>Click to open in new tab.</em>
    </p>
    <p>
      I must say I'm not an expert of excel, but I can manage working on functions to create spreadsheet that can allow me design an economy system for a "simple" game. See the sheet for yourself: 
    <a href="https://docs.google.com/spreadsheets/d/1D1Q1IpKQHnFNLXhoZSwwbAe1SD5LLhLoceH37spaDj4/edit?usp=sharing" class="my-link"><strong>Necromeowcy - Economy</strong></a> 
    </p>
  </section>
</main>
</div>
