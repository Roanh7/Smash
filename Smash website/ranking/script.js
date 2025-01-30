document.addEventListener("DOMContentLoaded", function() {
    // Voorbeeld-data. Pas de waarden aan zoals je wilt.
    const rankingData = [
        { player: "Roan", points: 1, totalWins: 50 },
        { player: "Jef", points: 3, totalWins: 45 },
        { player: "Chip", points: 4, totalWins: 40 },
        { player: "Taha", points: 2, totalWins: 35 },
        { player: "Shah", points: 6, totalWins: 25 },
        { player: "Surin", points: 5, totalWins: 35 },
        { player: "Ricky", points: 7, totalWins: 35 },
        { player: "Murat", points: 8, totalWins: 35 }
    ];
  
    const rankingList = document.getElementById("ranking-list");

    // Sorteer op points aflopend (hoogste eerst):
    rankingData.sort((a, b) => b.points - a.points);

    // Maak rijen in de tabel
    rankingData.forEach((player, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.player}</td>
            <td>${player.points}</td>
            <td>${player.totalWins}</td>
        `;

        // Top 3 => "out-of-tub", rest => "in-tub"
        if (index < 3) {
            row.classList.add("out-of-tub");
        } else {
            row.classList.add("in-tub");
        }

        // FadeInScale-animatie met wat vertraging
        row.style.animation = `fadeInScale 0.5s ease-out ${index * 0.2}s forwards`;

        rankingList.appendChild(row);
    });
});