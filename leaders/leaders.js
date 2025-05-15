// Leader data for the gallery cards
const leaders = { //const leaders stores all the data for the leaders
  "base-game": [ // Base Game Leaders 
    {
      name: "Teddy Roosevelt", // name of leader
      civ: "America", // Civilization they belong to
      ability: "Roosevelt Corollary - Combat strength on home continent, bonus appeal to Cities with National Parks and the Rough Rider unique unit.", // What their abilities do
      agenda: "Big Stick Policy - Likes peaceful civilizations on his continent, dislikes warmongers on his continent.", // Agenda that dictates how they play and their behavior 
      img: "leader_portraits/Teddy_Roosevelt_29.webp"
    },
    {
      name: "Frederick Barbarossa",
      civ: "Germany",
      ability: "Holy Roman Emperor - Governments gain an additional Military Policy slot, and all units enjoy bonus combat strength against city-states and their units.",
      agenda: "Iron Crown - Likes conquering city-states and likes those who do not associate with them. Dislikes Suzerains of city-states or those who conquered city-states.",
      img: "leader_portraits/Frederick_Barbarossa_29.webp"
    },
    {
      name: "Hojo Tokimune",
      civ: "Japan",
      ability: "Divine Wind - Extra combat strength for units next to coastal and shallow water tiles. Encampment, Holy Site, and Theater Square district are built in half the time.",
      agenda: "Bushido - Likes civilizations that have both strong military and strong faith or culture outputs. Dislikes civilizations that are strong in one but weak in the other.",
      img: "leader_portraits/Hojo_Tokimune_29.webp"
    },
    {
      name: "Pericles",
      civ: "Greece",
      ability: "Surrounded by Glory - Greece gains +5% culture for every city-state Greece is the Suzerain of.",
      agenda: "Dellan League - Likes civilizations that do not compete for city-state suzerainty and dislikes those who compete for suzerainty.",
      img: "leader_portraits/Pericles_29.webp"
    },
    {
      name: "Qin Shi Huang",
      civ: "China",
      ability: "The First Emperor - Builders gain an additional build charge and can use charges to complete a percent of production costs for Ancient and Classical Wonders.",
      agenda: "Wall of 10,000 Li - Prioritizes building wonders and dislikes civilizations that have more wonders than him.",
      img: "leader_portraits/Qin_Shi_Huang_29.webp"
    },
    {
      name: "Saladin",
      civ: "Arabia",
      ability: "Righteousness of the Faith - Worship buildings for Arabia's Religion is cheaper to purchase with faith and Arabian cities with those buildings gain bonus science culture and faith.",
      agenda: "Ayyubid Dynasty - Wants his worship buildings in as many cities as possible and likes civilizations with it. Dislikes civilizations following other religions.",
      img: "leader_portraits/Saladin_29.webp"
    },


  ],
  "rise-fall": [
    {
      name: "Seondeok",
      civ: "Korea",
      ability: "Hwarang - Cities with established Governors receive bonus culture and science for every promotion the Governor has.",
      agenda: "Cheomseongdae - Tries to builds lots of science and likes those who also build science. Dislikes those with weak science outputs.",
      img: "leader_portraits/Seondeok_29.webp"
    },
    {
      name: "Shaka",
      civ: "Zulu",
      ability: "Amabutho - May form Corps and Armies earlier than normal and units formed into Corps and Armies gain bonus combat strength.",
      agenda: "Horn, Chest, Loins - Forms as many Corps and Armies as possible and likes those who do the same.",
      img: "leader_portraits/Shaka_29.webp"
    },
    {
      name: "Genghis Khan",
      civ: "Mongolia",
      ability: "Mongol Horde - Cavalry class units gain bonus combat strength and a chance to capture defeated cavalry class enemy units.",
      agenda: "Horse Lord - Builds plenty of cavalry units and likes civilizations who do not build cavalry units.",
      img: "leader_portraits/Genghis_Khan_29.webp"
    },
    {
      name: "Robert the Bruce",
      civ: "Scotland",
      ability: "Bannockburn - Can declare War of Liberation earlier and all cities gain double production and units gain bonus movement for the next 10 turns after declaring a War of Liberation.",
      agenda: "Flower of Scotland - Will not attack his neighbors unless they break a promise and dislikes civilizations who wage war against their neighbors.",
      img: "leader_portraits/Robert_The_Bruce_29.webp"
    },
    {
      name: "Poundmaker",
      civ: "Cree",
      ability: "Favorable Terms - Alliances give shared  visibility and trade routes give food in the sending city and gold in the receiving city for every camp and pasture the city has.",
      agenda: "Iron Confederacy - Forms as many alliances as possible and likes those who do the same. Dislikes civilizations who do not establish alliances.",
      img: "leader_portraits/Poundmaker_29.webp"
    },
    {
      name: "Wilhelmina",
      civ: "Netherlands",
      ability: "Radio Oranje - Domestic trade routes provide loyalty for the starting city and bonus culture sent to or received from foreign civlizations.",
      agenda: "Billionaire - Tries to have as many trade routes as possible, and likes civilizations who trade with her cities, dislikes those who do not send trade routes to her.",
      img: "leader_portraits/Wilhelmina_29.webp"
    },
  ],
  "gathering-storm": [
    {
      name: "Wilfrid Laurier",
      civ: "Canada",
      ability: "The Last Best West - Can build farms on tundra tiles, purchasing snow and tundra tiles are cheaper to purchase with gold. Mines and lumber mills on snow and tundra tiles gain bonus production and Strategic resource mines accumulate resources twice as fast and farms on tundra and snow tiles gain bonus food.",
      agenda: "Canadian Expeditionary Force - Participates in emergencies and competitions whenever possible and likes civilizations who do the same.",
      img: "leader_portraits/Wilfrid_Laurier_29.webp"
    },
    {
      name: "Matthias Corvinus",
      civ: "Hungary",
      ability: "Raven King - Levied city-state units gain bonus combat strength, movement speed and can be upgraded at a discount. Levying units from a city-state also grants envoys with that city-state, also unlock the Black Army unique unit.",
      agenda: "Raven Banner - Will often levy city-state troops and likes those who do the same.",
      img: "leader_portraits/Matthias_Corvinus_29.webp"
    },
    {
      name: "Kupe",
      civ: "Māori",
      ability: "Kupe's Voyage - Start the game in the ocean and gain bonus science and culture per turn before the capital is settled. The capital receives bonus population and a builder. The Palace grants bonus housing and amenities.",
      agenda: "Kaitiakitanga - Refuses to remove features and instead plants woods and creates national parks, and likes civilizations who do the same.",
      img: "leader_portraits/Kupe_29.webp"
    },
    {
      name: "Kristina",
      civ: "Sweden",
      ability: "Minerva of the North - Buildings with at least three Great Work slots and wonders with at least two Great Work slots are automatically themed when all slots are filled. Gains access to the Queen's Bibliotheque unique building in the government plaza.",
      agenda: "Bibliophile - Likes to collect as many Great Works as possible and likes civilizations who leave it to her.",
      img: "leader_portraits/Kristina_29.webp"
    },
    {
      name: "Pachacuti",
      civ: "Inca",
      ability: "Qhapaq Ñan - Domestic trade routes gain bonus food for every mountain tile in the origin city, also unlock the Qhapaq Ñan unique improvement.",
      agenda: "Sapa Inca - Tries to settle near mountains and likes civilizations who leave those areas alone to him.",
      img: "leader_portraits/Pachacuti_29.webp"
    },
  ],
  "new-frontier": [
    {
      name: "Simón Bolívar",
      civ: "Gran Colombia",
      ability: "Campaña Admirable - Entering a new era grants a Commandante General, a unique Great Person.",
      agenda: "Carabobo - Focuses on promoting his units and building many encampments. Likes civilizations who have many promoted units.",
      img: "leader_portraits/Sim3Fvar_29.webp"
    },
    {
      name: "Basil II",
      civ: "Byzantium",
      ability: "Porphyrogénnētos - Both heavy and light cavalry units deal full damage when attacking cities following the same religion as Byzantium and unlock the Tagma unique unit.",
      agenda: "Divine Guardian - Focuses on obtaining and spreading his religion to other civilizations and likes those who follow his religion.",
      img: "leader_portraits/Basil_II_29.webp"
    },
    {
      name: "Bà Triệu",
      civ: "Vietnam",
      ability: "Drive out the Aggressors - Units gain bonus combat strength when fighting in rainforest, marsh, and woods tiles. Gain an extra movement point if they start in one of those tiles. Both of these bonuses are doubled inside Vietnam's territory.",
      agenda: "Defender of the Homeland - Likes civilizations who have never declared war on her and never forgives those who have, with her opinion decreasing further with each turn the war lasts. This decreased opinion can not be recovered.",
      img: "leader_portraits/B3Fu_29.webp"
    },
    {
      name: "João III",
      civ: "Portugal",
      ability: "Porta do Cerco - Bonus sight range for all units, gain an extra trade route slot when meeting another civilization for the first time. Gain open borders with all city-states.",
      agenda: "Navigator's Legacy - Focuses on exploring as much of the map as possible and likes those who do the same..",
      img: "leader_portraits/Joao_29.webp"
    },
    {
      name: "Lady Six Sky",
      civ: "Maya",
      ability: "Ix Mutal Ajaw - Non capital cities within six tiles of the capital gain bonuses to all yields and receive a builder when founded, while cities more than six tiles away receive a penalty to all yields. Units within six tiles of the Mayan capital also gain bonus combat strength.",
      agenda: "Solitary - Keeps her cities clustered around her capital and likes civilizations who settle far away from her. Dislikes those who settle near her or place troops near her borders.",
      img: "leader_portraits/Lady_Six_Sky_29.webp"
    },
    {
      name: "Menelik II",
      civ: "Ethiopia",
      ability: "Council of Ministers - Ethiopian cities founded on hills receive science and culture per turn equal to a percent of the city's faith production. Units get bonus combat strength when fighting on hills.",
      agenda: "Ethiopian Highlands - Tries to settle cities on hills and likes civilizations who avoid settling near hills.",
      img: "leader_portraits/Menelik_II_29.webp"
    },
  ],
  "leader-pass": [
    {
      name: "Elizabeth I",
      civ: "England",
      ability: "Drake's Legacy - After recruiting England's first Great Admiral, gain additional trade route capacity. Trade routes to city-states gain bonus gold for every specialty district from the origin city. Double yields from plundering trade routes.",
      agenda: "Trade Agreement - Tries to have as many trade routes as possible and likes civilizations who trade with her.",
      img: "leader_portraits/Elizabeth_I_29.webp"
    },
    {
      name: "Ludwig II",
      civ: "Germany",
      ability: "Swan King - Wonders even unfinished receive bonus culture from each adjacent districts and these bonus culture adjacencies are converted to tourism after unlocking the Castle technology.",
      agenda: "Eternal Enigma - Likes civilizations who do not maximize the number of districts in their cities and dislike those who do.",
      img: "leader_portraits/Ludwig_II_29.webp"
    },
    {
      name: "Abraham Lincoln",
      civ: "America",
      ability: "Emancipation Proclamation - Industrial Zones grant amenities but plantations reduce loyalty. When constructing industrial zones and their buildings, receive a free melee unit which gains bonus combat strength and no resource requirements.",
      agenda: "Preserver of the Union - Likes civilizations who have the same government as him. Dislikes those with a different government and really dislikes those with a different government of the same era.",
      img: "leader_portraits/Abraham_Lincoln_29.webp"
    },
    {
      name: "Nader Shah",
      civ: "Persia",
      ability: "Sword of Persia - Bonus combat strength for all units when attacking full health units. Cities not founded by Nadar Shah gain faith and gold on domestic trade routes.",
      agenda: "Jazayerchi - Likes civilizations with a high number of land units and dislike those with low number of land units.",
      img: "leader_portraits/Nader_Shah_29.webp"
    },
    {
      name: "Nzinga Mbande",
      civ: "Kongo",
      ability: "Queen of Ndongo and Mtamba - Cities on the same continent as the capital receive bonuses to all yields while cities on a different continent receive penalties to their yields.",
      agenda: "Decolonization - Likes civilizations who do not have cities on her continent amd dislikes those who do have cities.",
      img: "leader_portraits/Nzinga_Mbande_29.webp"
    },
    {
      name: "Theodora",
      civ: "Byzantium",
      ability: "Metanoia - Holy sites provide culture equal to their adjacency bonus. Farms provide adjacencies to holy sites and hippodromes.",
      agenda: "New Rome - Tries to build up as much culture as she can and likes those who focus on culture. Dislikes civilizations who have low culture outputs.",
      img: "leader_portraits/Theodora_29.webp"
    },
  ]
};
// Sets up each gallery for the leader
document.addEventListener("DOMContentLoaded", () => { // Waits until all of the html has loaded in before any modifications
  for (const group in leaders) {
    const contentDiv = document.getElementById(`${group}-content`); // Points to the container for that group's carousel 
    let currentIndex = 0; // Tracks which leader is being shown
// Displays the Leaders and their respective information
    function renderLeader(index) {
      const leader = leaders[group][index];
      if (!leader) return;
      contentDiv.innerHTML = `
        <div class="leader-card">
          <img src="${leader.img}" alt="${leader.name}" class="leader-img"/>
          <h4>${leader.name}</h4>
          <p><strong>Civilization:</strong> ${leader.civ}</p>
          <p><strong>Ability:</strong> ${leader.ability}</p>
          <p><strong>Agenda:</strong> ${leader.agenda}</p>
        </div>
      `;
    }

    // Initialize with the first leader
    renderLeader(currentIndex);

    // Button functionality which allows the users to click the buttons to navigate each card
    document.querySelector(`#${group} .prev-btn`).addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + leaders[group].length) % leaders[group].length;
      renderLeader(currentIndex);
    });

    document.querySelector(`#${group} .next-btn`).addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % leaders[group].length;
      renderLeader(currentIndex);
    });
  }
});

