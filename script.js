// Lijst met personages, movesets en skins
const characters = [
  {
    name: "Link",
    player: "Surin",
    image: "https://www.smashbros.com/assets_v2/img/fighter/link/main.png",
    skins: [
      "https://www.smashbros.com/assets_v2/img/fighter/link/main.png",
      "https://www.smashbros.com/assets_v2/img/fighter/link/main2.png",
      "https://www.smashbros.com/assets_v2/img/fighter/link/main3.png",
      "https://www.smashbros.com/assets_v2/img/fighter/link/main4.png",
      "https://www.smashbros.com/assets_v2/img/fighter/link/main5.png",
      "https://www.smashbros.com/assets_v2/img/fighter/link/main6.png",
      "https://www.smashbros.com/assets_v2/img/fighter/link/main7.png",
      "https://www.smashbros.com/assets_v2/img/fighter/link/main8.png"
    ],

    moves: [
      {
        button: "B",
        colorClass: "red",
        name: "Bow and Arrows",
        description: "Shoots an arrow—two at once if one is picked up off the ground."
      },
      {
        button: "Side + B",
        colorClass: "blue",
        name: "Boomerang",
        description: "Throws a boomerang diagonally. The control stick can be flicked for extra power."
      },
      {
        button: "Up + B",
        colorClass: "orange",
        name: "Spin Attack",
        description: "Strikes opponents while spinning. Acts as a jump if used in midair."
      },
      {
        button: "Down + B",
        colorClass: "green",
        name: "Remote Bomb",
        description: "Creates a remote bomb with the Sheikah Slate. Down special again detonates it."
      }
    ],
    ultimate: {
      button: "B",
      name: "Final Smash: Ancient Bow and Arrow",
      description: "Link shoots an Ancient Arrow that flies straight ahead..."
    }
  },
  {
    // Ridley vervangt Mario
    name: "Ridley",
    player: "Roan",
    image: "https://www.smashbros.com/assets_v2/img/fighter/ridley/main.png",
    skins: [
      "https://www.smashbros.com/assets_v2/img/fighter/ridley/main.png",
      "https://www.smashbros.com/assets_v2/img/fighter/ridley/main2.png",
      "https://www.smashbros.com/assets_v2/img/fighter/ridley/main3.png",
      "https://www.smashbros.com/assets_v2/img/fighter/ridley/main4.png",
      "https://www.smashbros.com/assets_v2/img/fighter/ridley/main5.png",
      "https://www.smashbros.com/assets_v2/img/fighter/ridley/main6.png",
      "https://www.smashbros.com/assets_v2/img/fighter/ridley/main7.png",
      "https://www.smashbros.com/assets_v2/img/fighter/ridley/main8.png"
    ],
    moves: [
      {
        button: "B",
        colorClass: "red",
        name: "Plasma Breath",
        description: "Ridley spits fireballs; can be charged for more."
      },
      {
        button: "Side + B",
        colorClass: "blue",
        name: "Space Pirate Rush",
        description: "Grabs an opponent and drags them across the stage."
      },
      {
        button: "Up + B",
        colorClass: "orange",
        name: "Wing Blitz",
        description: "Ridley flies in one of four directions with a powerful tackle."
      },
      {
        button: "Down + B",
        colorClass: "green",
        name: "Skewer",
        description: "A powerful stab that deals massive damage if it hits precisely."
      }
    ],
    ultimate: {
      button: "B",
      name: "Final Smash: Plasma Scream",
      description: "Ridley unleashes a massive beam attack across the stage."
    }
  },
  {
    name: "Samus",
    player: "Taha",
    image: "https://www.smashbros.com/assets_v2/img/fighter/samus/main.png",
    skins: [
      "https://www.smashbros.com/assets_v2/img/fighter/samus/main.png",
      "https://www.smashbros.com/assets_v2/img/fighter/samus/main2.png",
      "https://www.smashbros.com/assets_v2/img/fighter/samus/main3.png",
      "https://www.smashbros.com/assets_v2/img/fighter/samus/main4.png",
      "https://www.smashbros.com/assets_v2/img/fighter/samus/main5.png",
      "https://www.smashbros.com/assets_v2/img/fighter/samus/main6.png",
      "https://www.smashbros.com/assets_v2/img/fighter/samus/main7.png",
      "https://www.smashbros.com/assets_v2/img/fighter/samus/main8.png"
    ],
    moves: [
      {
        button: "B",
        colorClass: "red",
        name: "Charge Shot",
        description: "Fires an energy blast that can be charged for more power."
      },
      {
        button: "Side + B",
        colorClass: "blue",
        name: "Missile",
        description: "Fires a guided missile."
      },
      {
        button: "Up + B",
        colorClass: "orange",
        name: "Screw Attack",
        description: "Launches Samus into a spinning attack."
      },
      {
        button: "Down + B",
        colorClass: "green",
        name: "Bomb",
        description: "Drops a bomb that explodes after a short time."
      }
    ],
    ultimate: {
      button: "B",
      name: "Zero Laser",
      description: "Fires a massive laser beam across the stage."
    }
  },
  {

    name: "King K. Rool",
    player: "Chip",
    image: "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main.png",
    skins: [
      "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main.png",
      "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main2.png",
      "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main3.png",
      "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main4.png",
      "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main5.png",
      "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main6.png",
      "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main7.png",
      "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main8.png"
    ],
 
    moves: [
      {
        button: "B",
        colorClass: "red",
        name: "Blunderbuss",
        description: "Fires a cannonball that can be vacuumed back in."
      },
      {
        button: "Side + B",
        colorClass: "blue",
        name: "Crownerang",
        description: "Throws his crown like a boomerang."
      },
      {
        button: "Up + B",
        colorClass: "orange",
        name: "Helicopter Pack",
        description: "Ascends using a small helicopter on his back."
      },
      {
        button: "Down + B",
        colorClass: "green",
        name: "Gut Check",
        description: "Counters attacks using his hefty belly."
      }
    ],
    ultimate: {
      button: "B",
      name: "Final Smash: Blast-O-Matic",
      description: "Fires a massive laser from his ship, blasting foes off the stage."
    }
  },
  {

    name: "Falco",
    player: "Jef",
    image: "https://www.smashbros.com/assets_v2/img/fighter/falco/main.png",
    skins: [
      "https://www.smashbros.com/assets_v2/img/fighter/falco/main.png",
      "https://www.smashbros.com/assets_v2/img/fighter/falco/main2.png",
      "https://www.smashbros.com/assets_v2/img/fighter/falco/main3.png",
      "https://www.smashbros.com/assets_v2/img/fighter/falco/main4.png",
      "https://www.smashbros.com/assets_v2/img/fighter/falco/main5.png",
      "https://www.smashbros.com/assets_v2/img/fighter/falco/main6.png",
      "https://www.smashbros.com/assets_v2/img/fighter/falco/main7.png",
      "https://www.smashbros.com/assets_v2/img/fighter/falco/main8.png"
    ],
  
    moves: [
      {
        button: "B",
        colorClass: "red",
        name: "Blaster",
        description: "Fires quick laser shots. Falco's lasers cause slight flinching."
      },
      {
        button: "Side + B",
        colorClass: "blue",
        name: "Falco Phantasm",
        description: "Dashes quickly forward, striking anyone in his path."
      },
      {
        button: "Up + B",
        colorClass: "orange",
        name: "Fire Bird",
        description: "Falco charges up, then blasts off in a chosen direction."
      },
      {
        button: "Down + B",
        colorClass: "green",
        name: "Reflector",
        description: "Reflects projectiles and can trip nearby opponents."
      }
    ],
    ultimate: {
      button: "B",
      name: "Final Smash: Team Star Fox",
      description: "Falco calls in his teammates to unleash a cinematic airstrike."
    }
  },
  {

    name: "Little Mac",
    player: "Shah",
    image: "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main.png",
    skins: [
      "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main.png",
      "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main2.png",
      "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main3.png",
      "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main4.png",
      "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main5.png",
      "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main6.png",
      "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main7.png",
      "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main8.png"
    ],
    moves: [
      {
        button: "B",
        colorClass: "red",
        name: "Straight Lunge",
        description: "Charges up a powerful punch that can KO at high percentages."
      },
      {
        button: "Side + B",
        colorClass: "blue",
        name: "Jolt Haymaker",
        description: "Leaps forward with a swinging punch."
      },
      {
        button: "Up + B",
        colorClass: "orange",
        name: "Rising Uppercut",
        description: "Jumps up with an uppercut punch."
      },
      {
        button: "Down + B",
        colorClass: "green",
        name: "Slip Counter",
        description: "Counters an attack and responds with a quick blow."
      }
    ],
    ultimate: {
      button: "B",
      name: "Final Smash: Giga Mac Rush",
      description: "Transforms into Giga Mac and unleashes a barrage of punches."
    }
  }
];

let currentCharacterIndex = 0;
let currentSkinIndex = 0;

// === Swipe-animatie functie ===
function animateCharacterChange(direction) {
  // direction = 1  => 'next'  (swipe out left, swipe in right)
  // direction = -1 => 'prev'  (swipe out right, swipe in left)
  const content = document.querySelector('.content');
  const outClass = direction === 1 ? 'slide-out-left' : 'slide-out-right';
  const inClass = direction === 1 ? 'slide-in-right' : 'slide-in-left';

  // 1) slide out
  content.classList.add(outClass);
  
  // 2) Wacht tot de slide-out animatie klaar is
  content.addEventListener('animationend', function handleOutAnimation() {
    content.classList.remove(outClass);
    content.removeEventListener('animationend', handleOutAnimation);

    // 2b) Pas nu pas het personage aan in JS
    currentCharacterIndex = (currentCharacterIndex + direction + characters.length) % characters.length;
    updateCharacter(currentCharacterIndex);

    // 3) slide in
    content.classList.add(inClass);

    // 4) Na "slide in" animatie verwijderen we de inClass weer.
    content.addEventListener('animationend', function handleInAnimation() {
      content.classList.remove(inClass);
      content.removeEventListener('animationend', handleInAnimation);
    });
  });
}

// Functie om het personage te updaten
function updateCharacter(index) {
  const character = characters[index];
  document.getElementById("character-name").textContent = character.name; // Update naam
  document.querySelector(".player-name strong").textContent = character.player; // Update spelernaam
  
  // Reset naar eerste skin
  document.getElementById("character-skin").src = character.skins[0];
  currentSkinIndex = 0;

  // Update moveset
  updateMoves(character);
}

// Functie om de moveset te updaten
function updateMoves(character) {
  const movesContainer = document.querySelector(".normal-moves");
  movesContainer.innerHTML = ""; // Verwijder oude moves

  character.moves.forEach(move => {
    const moveDiv = document.createElement("div");
    moveDiv.classList.add("move");

    moveDiv.innerHTML = `
      <div class="icon ${move.colorClass}">${move.button}</div>
      <div class="description">
        <h2>${move.name}</h2>
        <p>${move.description}</p>
      </div>
    `;
    movesContainer.appendChild(moveDiv);
  });

  // Update de ultimate move
  const ultimate = document.querySelector(".ultimate .description");
  ultimate.querySelector("h2").textContent = character.ultimate.name;
  ultimate.querySelector("p").textContent = character.ultimate.description;
}

// Event listener voor skin switch (klik op de afbeelding)
document.getElementById("character-skin").addEventListener("click", function () {
  const character = characters[currentCharacterIndex];
  currentSkinIndex = (currentSkinIndex + 1) % character.skins.length;
  this.src = character.skins[currentSkinIndex];
});

// Event listeners voor pijltjes
document.getElementById("prev-character").addEventListener("click", function () {
  // -1 => ga naar "vorige", dus swipe-out-right => swipe-in-left
  animateCharacterChange(-1);
});

document.getElementById("next-character").addEventListener("click", function () {
  // 1 => ga naar "volgende", dus swipe-out-left => swipe-in-right
  animateCharacterChange(1);
});

// Initialiseer het eerste personage
updateCharacter(currentCharacterIndex);