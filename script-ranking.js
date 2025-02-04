 // 1) DOM-elementen
 const rankingListEl = document.getElementById("ranking-list");
 const adminUsername = document.getElementById("admin-username");
 const adminPassword = document.getElementById("admin-password");
 const loginButton   = document.getElementById("login-button");
 const logoutButton  = document.getElementById("logout-button");
 const adminPanel    = document.getElementById("admin-panel");
 const winsNeededEl  = document.getElementById("winsNeeded");
 const playersUpdateEl = document.getElementById("players-update");
 const updateRankingBtn = document.getElementById("update-ranking-button");

 // 2) Haal ranking op en render in de tabel
 async function loadRanking() {
   try {
     const res = await fetch('/api/ranking');
     const data = await res.json(); // { players: [...] }
     const rankingData = data.players;

     // Sorteer op points (aflopend)
     rankingData.sort((a, b) => b.points - a.points);

     // Maak de tabelcellen
     rankingListEl.innerHTML = '';
     rankingData.forEach((p, index) => {
       const row = document.createElement("tr");
       row.innerHTML = `
           <td>${index + 1}</td>
           <td>${p.player}</td>
           <td>${p.points}</td>
           <td>${p.totalWins}</td>
       `;

       // Top 3 => "out-of-tub", rest => "in-tub"
       if (index < 3) {
           row.classList.add("out-of-tub");
       } else {
           row.classList.add("in-tub");
       }

       // FadeInScale animatie
       row.style.animation = `fadeInScale 0.5s ease-out ${index * 0.2}s forwards`;

       rankingListEl.appendChild(row);
     });
   } catch (error) {
     console.error("Fout bij het ophalen van de ranking:", error);
   }
 }

 // 3) Login
 loginButton.addEventListener('click', async () => {
   const username = adminUsername.value;
   const password = adminPassword.value;

   try {
     const res = await fetch('/api/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ username, password })
     });

     if (res.ok) {
       alert('Succesvol ingelogd als admin!');
       adminPanel.style.display = 'block';
       logoutButton.style.display = 'inline-block';
       loginButton.style.display = 'none';
       adminUsername.style.display = 'none';
       adminPassword.style.display = 'none';

       // Admin-panel voorbereiden
       prepareAdminPanel();
     } else {
       alert('Ongeldige inloggegevens!');
     }
   } catch (err) {
     console.error("Login-fout:", err);
   }
 });

 // 4) Logout
 logoutButton.addEventListener('click', async () => {
   try {
     const res = await fetch('/api/logout', { method: 'POST' });
     if (res.ok) {
       alert("Uitgelogd!");
       adminPanel.style.display = 'none';
       logoutButton.style.display = 'none';
       loginButton.style.display = 'inline-block';
       adminUsername.style.display = 'inline-block';
       adminPassword.style.display = 'inline-block';
     }
   } catch (err) {
     console.error("Logout-fout:", err);
   }
 });

 // 5) Voorbereid adminpanel: Haal nogmaals data op en maak velden voor 'winsTonight'
 async function prepareAdminPanel() {
   try {
     const res = await fetch('/api/ranking');
     const data = await res.json();
     const players = data.players;

     // Leeg de div
     playersUpdateEl.innerHTML = '';

     players.forEach((player, index) => {
       const div = document.createElement('div');
       div.style.marginBottom = '10px';
       div.innerHTML = `
         <strong>${player.player}</strong> (huidige points: ${player.points}, totalWins: ${player.totalWins})
         <br/>
         <label>Wins vanavond:</label>
         <input type="number" id="winsTonight-${index}" value="0" min="0" style="width:60px">
       `;
       playersUpdateEl.appendChild(div);
     });
   } catch (error) {
     console.error("Fout bij het laden van admin panel data:", error);
   }
 }

 // 6) Update ranking (POST /api/ranking/update)
 updateRankingBtn.addEventListener('click', async () => {
   try {
     // 1. Huidige data ophalen
     const res = await fetch('/api/ranking');
     const data = await res.json();
     const players = data.players;

     // 2. winsNeeded uitlezen
     const winsNeeded = parseInt(winsNeededEl.value);

     // 3. Voor elke speler de input “winsTonight” ophalen + berekenen
     players.forEach((player, index) => {
       const winsTonightInput = document.getElementById(`winsTonight-${index}`);
       const winsTonight = parseInt(winsTonightInput.value);

       // Verhoog totalWins
       player.totalWins += winsTonight;

       // Als winsTonight >= winsNeeded => +1 point (of jouw eigen regels)
       if (winsTonight >= winsNeeded) {
         player.points += 1;
       }
     });

     // 4. Nieuwe data naar de server sturen
     const updateRes = await fetch('/api/ranking/update', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ players })
     });

     if (updateRes.ok) {
       alert("Ranking succesvol geüpdatet!");
       // Ranking opnieuw laden om het resultaat te zien
       loadRanking();
       // Admin panel herladen
       prepareAdminPanel();
     } else {
       alert("Fout bij het opslaan van de ranking.");
     }
   } catch (error) {
     console.error("Update error:", error);
   }
 });

 // 7) Laad de ranking zodra de pagina opent
 document.addEventListener("DOMContentLoaded", loadRanking);