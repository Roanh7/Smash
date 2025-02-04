const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Eenvoudige beheerder-gegevens
const adminUser = {
  username: 'admin',
  password: '12345' // Zet hier een eigen wachtwoord
};

// Om te onthouden of we ingelogd zijn; in productie zou je sessions of JWT gebruiken
let isLoggedIn = false;

// Pad naar JSON
const dataFilePath = path.join(__dirname, 'rankingData.json');

// Body-parser
app.use(bodyParser.json());

// Statische bestanden (HTML, CSS, JS) serveren vanaf deze map
app.use(express.static(__dirname));

/**
 * GET /api/ranking
 * Stuurt de huidige ranking terug uit JSON
 */
app.get('/api/ranking', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Fout bij het lezen van rankingData.json' });
    }
    const jsonData = JSON.parse(data);
    return res.status(200).json(jsonData);
  });
});

/**
 * POST /api/login
 * Controleert beheerder-inlog
 */
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser.username && password === adminUser.password) {
    isLoggedIn = true;
    return res.status(200).json({ message: 'Succesvol ingelogd als admin!' });
  } else {
    return res.status(401).json({ message: 'Ongeldige inloggegevens' });
  }
});

/**
 * POST /api/logout
 * Uitloggen
 */
app.post('/api/logout', (req, res) => {
  isLoggedIn = false;
  return res.status(200).json({ message: 'Uitgelogd' });
});

/**
 * POST /api/ranking/update
 * Updaten van de data in rankingData.json (alleen als ingelogd)
 */
app.post('/api/ranking/update', (req, res) => {
  if (!isLoggedIn) {
    return res.status(403).json({ message: 'Niet gemachtigd. Log eerst in.' });
  }

  const { players } = req.body;
  // Schrijf nieuwe data naar JSON-bestand
  fs.writeFile(dataFilePath, JSON.stringify({ players }, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Fout bij wegschrijven naar rankingData.json' });
    }
    return res.status(200).json({ message: 'Ranking succesvol geüpdatet' });
  });
});

// Start de server
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});