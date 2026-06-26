---
layout: default
title: No* Animal Crossing
---

<div class="layout">
  <aside class="sidebar">
    <a href="index.html" class="my-link"><strong>Back to portfolio.</strong></a>
    <img width="600" height="500" alt="No* Animal Crossing" src="https://github.com/user-attachments/assets/9d298243-7b5f-4506-83f9-cc874c611b26" />
    <h2 style="text-align: center;">What is "No* Animal Crossing"?</h2>
    <section class="project-section">
      <p>
        This was the first game I developed during my Futuregames assignments. The task was simple: create a game inspired by arcade classics such as Mario Bros, Pac-Man, Space Invaders, Snake, Frogger...  I instantly started thinking to myself: Frogger, Frogger, Frogger!?!?
        What if I inverted the gameplay of Frogger? I'm not playing as a frog, but the cars... What if I have to prevent the frog from crossing... and that's how I came up with the idea. Over the course of one month, and after not using Unity for nearly a year, I improvised various systems to build the core mechanics and interactions. I ended up using free Unity assets to for the simple art style to create this cohesive experience.
      </p>
      <a href="https://jpkrohn97.itch.io/no-animal-crossing" target="_blank" class="my-link">
        <strong>PLAY IN BROWSER</strong>
      </a>
    </section>
  </aside>
  <main class="content">
  <h1 style="text-align: center;">No* Animal Crossing</h1>
  <h3 style="text-align: center;">An arcade lane-defense survival game</h3>
    <ul>
      <li>Engine: Unity</li>
      <li>Role: solo game designer/programmer</li>
      <li>Development time: 1 month</li>
      <li>Genre: arcade/lane defense/score attack</li>
    </ul>
  <h2>Game overview</h2>
    <p>
An experimental arcade survival game where players defend a city by strategically spawning cars to eliminate incoming animals attempting to cross the streets.
Inspired by Frogger movement systems, the game reverses the roles: instead of avoiding traffic, we use traffic as a defensive tool.
  </p>
  <h3>Problem</h3>
    <p>
How could an arcade game be reinterpreted into an engaging survival game that encourages strategy and high-scores?
  </p>
  <h3>Solution</h3>
    <ul>
      <li>Satisfying skill-shot: rewarding timing and prediction of enemy movement</li>
      <li>Strategic use of resources: encourage players to decide when and where to deploy cars to control lanes by constant pressure</li>
    </ul>
  <h3>Gameplay loop</h3>
    <p>
Early on, players observe enemy movement, they predict interception points and spawn vehicles to eliminate threats, before they reach their goal. Later, as the game progresses, pressure increases, requiring both short-term reaction and long-term planning across multiple lanes.
  </p>
  <h3>Result</h3>
    <p>
      The game makes the player experiencee a difficulty curve: where early gameplay focuses on prediction and positioning; while later stages demand constant flow to eliminate as many enemies as possible, along with quick reactions to deal with enemies that slip through gaps in the defense. Players are incentivized to optimize their survival strategy and compete for high scores on the leaderboard.
  </p>
  <section class="project-section projects-container">
    <a href="https://github.com/user-attachments/assets/7a7d1ae2-8690-42e0-9d0b-dc7725977e69" target="_blank" class="project-card">
      <img src="https://github.com/user-attachments/assets/7a7d1ae2-8690-42e0-9d0b-dc7725977e69" alt="Gameplay 1">
    </a>
    <a href="https://github.com/user-attachments/assets/d6933f08-2f76-4a17-bf9f-293be40e52e7" target="_blank" class="project-card">
      <img src="https://github.com/user-attachments/assets/d6933f08-2f76-4a17-bf9f-293be40e52e7" alt="Gameplay 2">
    </a>
    <a href="https://github.com/user-attachments/assets/c878412f-066d-4eea-b81d-32817ac084ff" target="_blank" class="project-card">
      <img src="https://github.com/user-attachments/assets/c878412f-066d-4eea-b81d-32817ac084ff" alt="Gameplay 3">
    </a>
    <a href="https://github.com/user-attachments/assets/727347bc-b6ea-412f-a7f3-11116d44b963" target="_blank" class="project-card">
      <img src="https://github.com/user-attachments/assets/727347bc-b6ea-412f-a7f3-11116d44b963" alt="Gameplay 4">
    </a>
  </section>
  <section class="project-section">
    <h2>Gameplay features</h2>
    <h3>Player Vehicles</h3>
    <p>
      The player has access to four distinct vehicles, each with unique speed, durability, cooldown, and tactical purpose. Vehicles can be activated individually to trigger a one-time temporary speed boost, increasing the chances to intercept enemies.
    </p>
    <h4>Standard car (blue)</h4>
    <ul>
      <li>Balanced all-round vehicle</li>
      <li>Resist up to two enemy hits</li>
      <li>Lowest cooldown</li>
      <li>Primary tool for sustained defense and lane control</li>
    </ul>
    <h4>Fast car (Red)</h4>
    <ul>
      <li>Highest speed in the game</li>
      <li>Resist one hit</li>
      <li>Higher cooldown than Standard car</li>
      <li>Best used for quick interception</li>
    </ul>
    <h4>Truck (blue)</h4>
    <ul>
      <li>Slow but highly durable</li>
      <li>Resist multiple hits</li>
      <li>Can eliminate Bears in a single hit</li>
      <li>Highest cooldown</li>
      <li>Designed for high enemy density and heavy-impact situations</li>
    </ul>
    <h4>Tanker (red)</h4>
    <ul>
      <li>Slightly faster than the Truck</li>
      <li>On impact, triggers an explosion that destroys both enemies and vehicles within the area</li>
      <li>Highest cooldown in the game</li>
      <li>High-risk, high-reward tool for crowd control and emergency situations</li>
    </ul>
    <blockquote>
      Design note: differences in vehicle speeds can lead to unintended collisions, creating additional risk and emergent gameplay situations.
    </blockquote>
    <h3>Enemy Types</h3>
    <p>
      Enemies spawn at the bottom of the screen and traverse vertically across multiple roads in a Frogger-inspired pattern. Different enemy types are introduced progressively throughout the level, each altering predictability, speed, and durability. This increase in difficulty forces the players to continuously adapt their strategy to increasing pressure and enemy density. Additionally, as the game progresses, the spawn rate of more challenging enemy types is increased.
    </p>
    <h4>Frog</h4>
    <ul>
  <li>First enemy type introduced</li>
  <li>Moves by jumping forward between lanes. There is a short cooldown between jumps, creating clear windows of opportunity</li>
  <li>Predictable movement pattern</li>
  <li>Eliminated with a single hit</li>
    </ul>
    <h4>Rabbit</h4>
    <ul>
  <li>Second enemy type introduced</li>
  <li>Faster and less predictable than the Frog</li>
  <li>When off cooldown, rabbits can randomly jump backwards, increasing unpredictability</li>
  <li>Eliminated with a single hit</li>
    </ul>
    <h4>Bear</h4>
    <ul>
  <li>Final enemy type introduced</li>
  <li>Slow but highly durable enemy</li>
  <li>Requires multiple hits from standard vehicles to eliminate</li>
  <li>Most predictable movement pattern</li>
  <li>Serves as a high-threat target that pressures resource allocation and timing decisions</li>
    </ul>
  </section>
  <section class="project-section">
    <h3>How do you get to the leaderboard?</h3>
    <p>
      Does the game require skill? Yes, otherwise how are you supposed to time a car to run over... sorry, save the animals from crossing the dangerous street. Players also require strategic thinking. It's easy to defeat the first waves of critters, but at some point the spawn rate is high, and if players haven't prepared a continuous flow of cars, the animals will inevitably cross. Players have access to four different types of vehicles used for different purposes, so planning ahead is key.
    </p>
  </section>
  <section class="project-section projects-container" style="text-align: center;">
    <a href="https://github.com/user-attachments/assets/089dde3a-59fa-42ff-b258-c6da373f1fa5" target="_blank" style="text-align: center;">
      <img src="https://github.com/user-attachments/assets/089dde3a-59fa-42ff-b258-c6da373f1fa5" alt="Leaderboard" width="600" height="500" style="text-align: center;">
    </a>
    <blockquote>
      These are not the highest scores achieved, but they were the highest recorded by me.
    </blockquote>
  </section>
  <section class="project-section">
    <h3>How was it received?</h3>
    <p>
      During that time, the team had a blast playing it and competing to reach high scores. Some even commented that the original idea seemed silly and boring, but after playing for a while they enjoyed timing the cars, doing "skill-shots" by sending fast cars to deal with small enemies, or even using the explosive trucks tactically to defeat groups of enemies.
    </p>
  </section>
</main>
</div>


