import { capitalizeFirstLetter } from "./helper/string";

export function frToEnPokemonName(name: string) {
  if (name) {
    console.log(POKEMON_NAME.find((needed) => needed.fr === capitalizeFirstLetter(name)))
    return POKEMON_NAME.find((needed) => needed.fr === capitalizeFirstLetter(name));
  }
}

export function enToFrPokemonName(name: string) {
  if (name) {
    return POKEMON_NAME.find((needed) => needed.en === capitalizeFirstLetter(name));
  }
}


// List of EN and FR translation of pokemon, needed to detect and translate research to API payload
export const POKEMON_NAME = [
  { en: "Bulbasaur", fr: "Bulbizarre" },
  { en: "Ivysaur", fr: "Herbizarre" },
  { en: "Venusaur", fr: "Florizarre" },
  { en: "Charmander", fr: "Salamèche" },
  { en: "Charmeleon", fr: "Reptincel" },
  { en: "Charizard", fr: "Dracaufeu" },
  { en: "Squirtle", fr: "Carapuce" },
  { en: "Wartortle", fr: "Carabaffe" },
  { en: "Blastoise", fr: "Tortank" },
  { en: "Caterpie", fr: "Chenipan" },
  { en: "Metapod", fr: "Chrysacier" },
  { en: "Butterfree", fr: "Papilusion" },
  { en: "Weedle", fr: "Aspicot" },
  { en: "Kakuna", fr: "Coconfort" },
  { en: "Beedrill", fr: "Dardargnan" },
  { en: "Pidgey", fr: "Roucool" },
  { en: "Pidgeotto", fr: "Roucoups" },
  { en: "Pidgeot", fr: "Roucarnage" },
  { en: "Rattata", fr: "Rattata" },
  { en: "Raticate", fr: "Rattatac" },
  { en: "Spearow", fr: "Piafabec" },
  { en: "Fearow", fr: "Rapasdepic" },
  { en: "Ekans", fr: "Abo" },
  { en: "Arbok", fr: "Arbok" },
  { en: "Pikachu", fr: "Pikachu" },
  { en: "Raichu", fr: "Raichu" },
  { en: "Sandshrew", fr: "Sabelette" },
  { en: "Sandslash", fr: "Sablaireau" },
  { en: "Nidoran♀", fr: "Nidoran♀" },
  { en: "Nidorina", fr: "Nidorina" },
  { en: "Nidoqueen", fr: "Nidoqueen" },
  { en: "Nidoran♂", fr: "Nidoran♂" },
  { en: "Nidorino", fr: "Nidorino" },
  { en: "Nidoking", fr: "Nidoking" },
  { en: "Clefairy", fr: "Mélofée" },
  { en: "Clefable", fr: "Mélodelfe" },
  { en: "Vulpix", fr: "Goupix" },
  { en: "Ninetales", fr: "Feunard" },
  { en: "Jigglypuff", fr: "Rondoudou" },
  { en: "Wigglytuff", fr: "Grodoudou" },
  { en: "Zubat", fr: "Nosferapti" },
  { en: "Golbat", fr: "Nosferalto" },
  { en: "Oddish", fr: "Mystherbe" },
  { en: "Gloom", fr: "Ortide" },
  { en: "Vileplume", fr: "Rafflesia" },
  { en: "Paras", fr: "Paras" },
  { en: "Parasect", fr: "Parasect" },
  { en: "Venonat", fr: "Mimitoss" },
  { en: "Venomoth", fr: "Aéromite" },
  { en: "Diglett", fr: "Taupiqueur" },
  { en: "Dugtrio", fr: "Triopikeur" },
  { en: "Meowth", fr: "Miaouss" },
  { en: "Persian", fr: "Persian" },
  { en: "Psyduck", fr: "Psykokwak" },
  { en: "Golduck", fr: "Akwakwak" },
  { en: "Mankey", fr: "Férosinge" },
  { en: "Primeape", fr: "Colossinge" },
  { en: "Growlithe", fr: "Caninos" },
  { en: "Arcanine", fr: "Arcanin" },
  { en: "Poliwag", fr: "Ptitard" },
  { en: "Poliwhirl", fr: "Têtarte" },
  { en: "Poliwrath", fr: "Tartard" },
  { en: "Abra", fr: "Abra" },
  { en: "Kadabra", fr: "Kadabra" },
  { en: "Alakazam", fr: "Alakazam" },
  { en: "Machop", fr: "Machoc" },
  { en: "Machoke", fr: "Machopeur" },
  { en: "Machamp", fr: "Mackogneur" },
  { en: "Bellsprout", fr: "Chétiflor" },
  { en: "Weepinbell", fr: "Boustiflor" },
  { en: "Victreebel", fr: "Empiflor" },
  { en: "Tentacool", fr: "Tentacool" },
  { en: "Tentacruel", fr: "Tentacruel" },
  { en: "Geodude", fr: "Racaillou" },
  { en: "Graveler", fr: "Gravalanch" },
  { en: "Golem", fr: "Grolem" },
  { en: "Ponyta", fr: "Ponyta" },
  { en: "Rapidash", fr: "Galopa" },
  { en: "Slowpoke", fr: "Ramoloss" },
  { en: "Slowbro", fr: "Flagadoss" },
  { en: "Magnemite", fr: "Magnéti" },
  { en: "Magneton", fr: "Ma,gnéton" },
  { en: "Farfetch'd", fr: "Canarticho" },
  { en: "Doduo", fr: "Doduo" },
  { en: "Dodrio", fr: "Dodrio" },
  { en: "Seel", fr: "Otaria" },
  { en: "Dewgong", fr: "Lamantine" },
  { en: "Grimer", fr: "Tadmorv" },
  { en: "Muk", fr: "Grotadmorv" },
  { en: "Shellder", fr: "Kokiyas" },
  { en: "Cloyster", fr: "Crustabri" },
  { en: "Gastly", fr: "Fantominus" },
  { en: "Haunter", fr: "Spectrum" },
  { en: "Gengar", fr: "Ectoplasma" },
  { en: "Onix", fr: "Onix" },
  { en: "Drowzee", fr: "Soporifik" },
  { en: "Hypno", fr: "Hypnomade" },
  { en: "Krabby", fr: "Krabby" },
  { en: "Kingler", fr: "Krabboss" },
  { en: "Voltorb", fr: "Voltorbe" },
  { en: "Electrode", fr: "Électrode" },
  { en: "Exeggcute", fr: "Noeunoeuf" },
  { en: "Exeggutor", fr: "Noadkoko" },
  { en: "Cubone", fr: "Osselait" },
  { en: "Marowak", fr: "Ossatueur" },
  { en: "Hitmonlee", fr: "Kicklee" },
  { en: "Hitmonchan", fr: "Tygnon" },
  { en: "Lickitung", fr: "Excelangue" },
  { en: "Koffing", fr: "Smogo" },
  { en: "Weezing", fr: "Smogogo" },
  { en: "Rhyhorn", fr: "Rhinocorne" },
  { en: "Rhydon", fr: "Rhinoféros" },
  { en: "Chansey", fr: "Leveinard" },
  { en: "Tangela", fr: "Saquedeneu" },
  { en: "Kangaskhan", fr: "Kangourex" },
  { en: "Horsea", fr: "Hypotrempe" },
  { en: "Seadra", fr: "Hypocéan" },
  { en: "Goldeen", fr: "Poissirène" },
  { en: "Seaking", fr: "Poissoroy" },
  { en: "Staryu", fr: "Stari" },
  { en: "Starmie", fr: "St,aross" },
  { en: "Mr. Mime", fr: "Mr. Mime" },
  { en: "Scyther", fr: "Insécateur" },
  { en: "Jynx", fr: "Lippoutou" },
  { en: "Electabuzz", fr: "Élektek" },
  { en: "Magmar", fr: "Magmar" },
  { en: "Pinsir", fr: "Scarabrute" },
  { en: "Tauros", fr: "Tauros" },
  { en: "Magikarp", fr: "Magicarpe" },
  { en: "Gyarados", fr: "Léviator" },
  { en: "Lapras", fr: "Lokhlass" },
  { en: "Ditto", fr: "Métamorph" },
  { en: "Eevee", fr: "Évoli" },
  { en: "Vaporeon", fr: "Aquali" },
  { en: "Jolteon", fr: "Voltali" },
  { en: "Flareon", fr: "Pyroli" },
  { en: "Porygon", fr: "Porygon" },
  { en: "Omanyte", fr: "Amonita" },
  { en: "Omastar", fr: "Amonistar" },
  { en: "Kabuto", fr: "Kabuto" },
  { en: "Kabutops", fr: "Kabutops" },
  { en: "Aerodactyl", fr: "Ptéra" },
  { en: "Snorlax", fr: "Ronflex" },
  { en: "Articuno", fr: "Artikodin" },
  { en: "Zapdos", fr: "Électhor" },
  { en: "Moltres", fr: "Sulfura" },
  { en: "Dratini", fr: "Minidraco" },
  { en: "Dragonair", fr: "Draco" },
  { en: "Dragonite", fr: "Dracolosse" },
  { en: "Mewtwo", fr: "Mewtwo" },
  { en: "Mew", fr: ",Mew" },
  { en: "Chikorita", fr: "Germignon" },
  { en: "Bayleef", fr: "Macronium" },
  { en: "Meganium", fr: "Méganium" },
  { en: "Cyndaquil", fr: "Héricendre" },
  { en: "Quilava", fr: "Feurisson" },
  { en: "Typhlosion", fr: "Typhlosion" },
  { en: "Totodile", fr: "Kaiminus" },
  { en: "Croconaw", fr: "Crocrodil" },
  { en: "Feraligatr", fr: "Aligatueur" },
  { en: "Sentret", fr: "Fouinette" },
  { en: "Furret", fr: "Fouinar" },
  { en: "Hoothoot", fr: "Hoothoot" },
  { en: "Noctowl", fr: "Noarfang" },
  { en: "Ledyba", fr: "Coxy" },
  { en: "Ledian", fr: "Coxyclaque" },
  { en: "Spinarak", fr: "Mimigal" },
  { en: "Ariados", fr: "Migalos" },
  { en: "Crobat", fr: "Nostenfer" },
  { en: "Chinchou", fr: "Loupio" },
  { en: "Lanturn", fr: "Lanturn" },
  { en: "Pichu", fr: "Pichu" },
  { en: "Cleffa", fr: "Mélo" },
  { en: "Igglybuff", fr: "Toudoudou" },
  { en: "Togepi", fr: "Togepi" },
  { en: "Togetic", fr: "Togetic" },
  { en: "Natu", fr: "Natu" },
  { en: "Xatu", fr: "Xatu" },
  { en: "Mareep", fr: "Wattouat" },
  { en: "Flaaffy", fr: "Lainergie" },
  { en: "Ampharos", fr: "Pharamp" },
  { en: "Bellossom", fr: "Joliflor" },
  { en: "Marill", fr: "Marill" },
  { en: "Azumarill", fr: "Azumarill" },
  { en: "Sudowoodo", fr: "Simularbre" },
  { en: "Politoed", fr: "Tarpaud" },
  { en: "Hoppip", fr: "Granivol" },
  { en: "Skiploom", fr: "Floravol" },
  { en: "Jumpluff", fr: "Cotovol" },
  { en: "Aipom", fr: "Capumain" },
  { en: "Sunkern", fr: "Tournegrin" },
  { en: "Sunflora", fr: "Héliatronc" },
  { en: "Yanma", fr: "Yanma" },
  { en: "Wooper", fr: "Axoloto" },
  { en: "Quagsire", fr: "Maraiste" },
  { en: "Espeon", fr: "Mentali" },
  { en: "Umbreon", fr: "Noctali" },
  { en: "Murkrow", fr: "Cornèbre" },
  { en: "Slowking", fr: "Roigada" },
  { en: "Misdreavus", fr: "Feuforêve" },
  { en: "Unown", fr: "Zarbi" },
  { en: "Wobbuffet", fr: "Qulbutoké" },
  { en: "Girafarig", fr: "Girafarig" },
  { en: "Pineco", fr: "Pomdepik" },
  { en: "Forretress", fr: "Foretress" },
  { en: "Dunsparce", fr: "Insolourdo" },
  { en: "Gligar", fr: "Scorplane" },
  { en: "Steelix", fr: "Steelix" },
  { en: "Snubbull", fr: "Snubbull" },
  { en: "Granbull", fr: "Granbull" },
  { en: "Qwilfish", fr: "Qwilfish" },
  { en: "Scizor", fr: "Cizayox" },
  { en: "Shuckle", fr: "Caratroc" },
  { en: "Heracross", fr: "Scarhino" },
  { en: "Sneasel", fr: "Farfuret" },
  { en: "Teddiursa", fr: "Teddiursa" },
  { en: "Ursaring", fr: "Ursaring" },
  { en: "Slugma", fr: "Limagma" },
  { en: "Magcargo", fr: "Volcaropod" },
  { en: "Swinub", fr: "Marcacrin" },
  { en: "Piloswine", fr: "Cochignon" },
  { en: "Corsola", fr: "Corayon" },
  { en: "Remoraid", fr: "Rémoraid" },
  { en: "Octillery", fr: "Octillery" },
  { en: "Delibird", fr: "Cadoizo" },
  { en: "Mantine", fr: "Démanta" },
  { en: "Skarmory", fr: "Airmure" },
  { en: "Houndour", fr: "Malosse" },
  { en: "Houndoom", fr: "Démolosse" },
  { en: "Kingdra", fr: "Hyporoi" },
  { en: "Phanpy", fr: "Phanpy" },
  { en: "Donphan", fr: "Donphan" },
  { en: "Porygon2", fr: "Porygon2" },
  { en: "Stantler", fr: "Cerfrousse" },
  { en: "Smeargle", fr: "Queulorior" },
  { en: "Tyrogue", fr: "Debugant" },
  { en: "Hitmontop", fr: "Kapoera" },
  { en: "Smoochum", fr: "Lippouti" },
  { en: "Elekid", fr: "Élekid" },
  { en: "Magby", fr: "Magby" },
  { en: "Miltank", fr: "Écrémeuh" },
  { en: "Blissey", fr: "Leuphorie" },
  { en: "Raikou", fr: "Raikou" },
  { en: "Entei", fr: "Entei" },
  { en: "Suicune", fr: "Suicune" },
  { en: "Larvitar", fr: "Embrylex" },
  { en: "Pupitar", fr: "Ymphect" },
  { en: "Tyranitar", fr: "Tyranocif" },
  { en: "Lugia", fr: "Lugia" },
  { en: "Ho-Oh", fr: "Ho-Oh" },
  { en: "Celebi", fr: "Celebi" },
  { en: "Treecko", fr: "Arcko" },
  { en: "Grovyle", fr: "Massko" },
  { en: "Sceptile", fr: "Jungko" },
  { en: "Torchic", fr: "Poussifeu" },
  { en: "Combusken", fr: "Galifeu" },
  { en: "Blaziken", fr: "Braségali" },
  { en: "Mudkip", fr: "Gobou" },
  { en: "Marshtomp", fr: "Flobio" },
  { en: "Swampert", fr: "Laggron" },
  { en: "Poochyena", fr: "Medhyèna" },
  { en: "Mightyena", fr: "Grahyèna" },
  { en: "Zigzagoon", fr: "Zigzaton" },
  { en: "Linoone", fr: "Linéon" },
  { en: "Wurmple", fr: "Chenipotte" },
  { en: "Silcoon", fr: "Armulys" },
  { en: "Beautifly", fr: "Charmillon" },
  { en: "Cascoon", fr: "Blindalys" },
  { en: "Dustox", fr: "Papinox" },
  { en: "Lotad", fr: "Nénupiot" },
  { en: "Lombre", fr: "Lombre" },
  { en: "Ludicolo", fr: "Ludicolo" },
  { en: "Seedot", fr: "Grainipiot" },
  { en: "Nuzleaf", fr: "Pifeuil" },
  { en: "Shiftry", fr: "Tengalice" },
  { en: "Taillow", fr: "Nirondelle" },
  { en: "Swellow", fr: "Hélédelle" },
  { en: "Wingull", fr: "Goélise" },
  { en: "Pelipper", fr: "Bekipan" },
  { en: "Ralts", fr: "Tarsal" },
  { en: "Kirlia", fr: "Kirlia" },
  { en: "Gardevoir", fr: "Gardevoir" },
  { en: "Surskit", fr: "Arakdo" },
  { en: "Masquerain", fr: "Maskadra" },
  { en: "Shroomish", fr: "Balignon" },
  { en: "Breloom", fr: "Chapignon" },
  { en: "Slakoth", fr: "Parecool" },
  { en: "Vigoroth", fr: "Vigoroth" },
  { en: "Slaking", fr: "Monaflèmit" },
  { en: "Nincada", fr: "Ningale" },
  { en: "Ninjask", fr: "Ninjask" },
  { en: "Shedinja", fr: "Munja" },
  { en: "Whismur", fr: "Chuchmur" },
  { en: "Loudred", fr: "Ramboum" },
  { en: "Exploud", fr: "Brouhabam" },
  { en: "Makuhita", fr: "Makuhita" },
  { en: "Hariyama", fr: "Hariyama" },
  { en: "Azurill", fr: "Azurill" },
  { en: "Nosepass", fr: "Tarinor" },
  { en: "Skitty", fr: "Skitty" },
  { en: "Delcatty", fr: "Delcatty" },
  { en: "Sableye", fr: "Ténéfix" },
  { en: "Mawile", fr: "Mysdibule" },
  { en: "Aron", fr: "Galekid" },
  { en: "Lairon", fr: "Galegon" },
  { en: "Aggron", fr: "Galeking" },
  { en: "Meditite", fr: "Méditikka" },
  { en: "Medicham", fr: "Charmina" },
  { en: "Electrike", fr: "Dynavolt" },
  { en: "Manectric", fr: "Élecsprint" },
  { en: "Plusle", fr: "Posipi" },
  { en: "Minun", fr: "Négapi" },
  { en: "Volbeat", fr: "Muciole" },
  { en: "Illumise", fr: "Lumivole" },
  { en: "Roselia", fr: "Rosélia" },
  { en: "Gulpin", fr: "Gloupti" },
  { en: "Swalot", fr: "Avaltout" },
  { en: "Carvanha", fr: "Carvanha" },
  { en: "Sharpedo", fr: "Sharpedo" },
  { en: "Wailmer", fr: "Wailmer" },
  { en: "Wailord", fr: "Wailord" },
  { en: "Numel", fr: "Chamallot" },
  { en: "Camerupt", fr: "Camérupt" },
  { en: "Torkoal", fr: "Chartor" },
  { en: "Spoink", fr: "Spoink" },
  { en: "Grumpig", fr: "Groret" },
  { en: "Spinda", fr: "Spinda" },
  { en: "Trapinch", fr: "Kraknoix" },
  { en: "Vibrava", fr: "Vibraninf" },
  { en: "Flygon", fr: "Libégon" },
  { en: "Cacnea", fr: "Cacnea" },
  { en: "Cacturne", fr: "Cacturne" },
  { en: "Swablu", fr: "Tylton" },
  { en: "Altaria", fr: "Altaria" },
  { en: "Zangoose", fr: "Mangriff" },
  { en: "Seviper", fr: "Séviper" },
  { en: "Lunatone", fr: "Séléroc" },
  { en: "Solrock", fr: "Solaroc" },
  { en: "Barboach", fr: "Barloche" },
  { en: "Whiscash", fr: "Barbicha" },
  { en: "Corphish", fr: "Écrapince" },
  { en: "Crawdaunt", fr: "Colhomard" },
  { en: "Baltoy", fr: "Balbuto" },
  { en: "Claydol", fr: "Kaorine" },
  { en: "Lileep", fr: "Lilia" },
  { en: "Cradily", fr: "Vacilys" },
  { en: "Anorith", fr: "Anorith" },
  { en: "Armaldo", fr: "Armaldo" },
  { en: "Feebas", fr: "Barpau" },
  { en: "Milotic", fr: "Milobellus" },
  { en: "Castform", fr: "Morphéo" },
  { en: "Kecleon", fr: "Kecleon" },
  { en: "Shuppet", fr: "Polichombr" },
  { en: "Banette", fr: "Branette" },
  { en: "Duskull", fr: "Skelénox" },
  { en: "Dusclops", fr: "Téraclope" },
  { en: "Tropius", fr: "Tropius" },
  { en: "Chimecho", fr: "Éoko" },
  { en: "Absol", fr: "Absol" },
  { en: "Wynaut", fr: "Okéoké" },
  { en: "Snorunt", fr: "Stalgamin" },
  { en: "Glalie", fr: "Oniglali" },
  { en: "Spheal", fr: "Obalie" },
  { en: "Sealeo", fr: "Phogleur" },
  { en: "Walrein", fr: "Kaimorse" },
  { en: "Clamperl", fr: "Coquiperl" },
  { en: "Huntail", fr: "Serpang" },
  { en: "Gorebyss", fr: "Rosabyss" },
  { en: "Relicanth", fr: "Relicanth" },
  { en: "Luvdisc", fr: "Lovdisc" },
  { en: "Bagon", fr: "Draby" },
  { en: "Shelgon", fr: "Drackhaus" },
  { en: "Salamence", fr: "Drattak" },
  { en: "Beldum", fr: "Terhal" },
  { en: "Metang", fr: "Métang" },
  { en: "Metagross", fr: "Métalosse" },
  { en: "Regirock", fr: "Regirock" },
  { en: "Regice", fr: "Regice" },
  { en: "Registeel", fr: "Registeel" },
  { en: "Latias", fr: "Latias" },
  { en: "Latios", fr: "Latios" },
  { en: "Kyogre", fr: "Kyogre" },
  { en: "Groudon", fr: "Groudon" },
  { en: "Rayquaza", fr: "Rayquaza" },
  { en: "Jirachi", fr: "Jirachi" },
  { en: "Deoxys", fr: "Deoxys" },
  { en: "Turtwig", fr: "Tortipouss" },
  { en: "Grotle", fr: "Boskara" },
  { en: "Torterra", fr: "Torterra" },
  { en: "Chimchar", fr: "Ouisticram" },
  { en: "Monferno", fr: "Chimpenfeu" },
  { en: "Infernape", fr: "Simiabraz" },
  { en: "Piplup", fr: "Tiplouf" },
  { en: "Prinplup", fr: "Prinplouf" },
  { en: "Empoleon", fr: "Pingoléon" },
  { en: "Starly", fr: "Étourmi" },
  { en: "Staravia", fr: "Étourvol" },
  { en: "Staraptor", fr: "Étouraptor" },
  { en: "Bidoof", fr: "Keunotor" },
  { en: "Bibarel", fr: "Castorno" },
  { en: "Kricketot", fr: "Crikzik" },
  { en: "Kricketune", fr: "Mélokrik" },
  { en: "Shinx", fr: "Lixy" },
  { en: "Luxio", fr: "Luxio" },
  { en: "Luxray", fr: "Luxray" },
  { en: "Budew", fr: "Rozbouton" },
  { en: "Roserade", fr: "Roserade" },
  { en: "Cranidos", fr: "Kranidos" },
  { en: "Rampardos", fr: "Charkos" },
  { en: "Shieldon", fr: "Dinoclier" },
  { en: "Bastiodon", fr: "Bastiodon" },
  { en: "Burmy", fr: "Cheniti" },
  { en: "Wormadam", fr: "Cheniselle" },
  { en: "Mothim", fr: "Papilord" },
  { en: "Combee", fr: "Apitrini" },
  { en: "Vespiquen", fr: "Apireine" },
  { en: "Pachirisu", fr: "Pachirisu" },
  { en: "Buizel", fr: "Mustébouée" },
  { en: "Floatzel", fr: "Mustéflott" },
  { en: "Cherubi", fr: "Ceribou" },
  { en: "Cherrim", fr: "Ceriflor" },
  { en: "Shellos", fr: "Sancoki" },
  { en: "Gastrodon", fr: "Tritosor" },
  { en: "Ambipom", fr: "Capidextre" },
  { en: "Drifloon", fr: "Baudrive" },
  { en: "Drifblim", fr: "Grodrive" },
  { en: "Buneary", fr: "Laporeille" },
  { en: "Lopunny", fr: "Lockpin" },
  { en: "Mismagius", fr: "Magirêve" },
  { en: "Honchkrow", fr: "Corboss" },
  { en: "Glameow", fr: "Chaglam" },
  { en: "Purugly", fr: "Chaffreux" },
  { en: "Chingling", fr: "Korillon" },
  { en: "Stunky", fr: "Moufouette" },
  { en: "Skuntank", fr: "Moufflair" },
  { en: "Bronzor", fr: "Archéomire" },
  { en: "Bronzong", fr: "Archéodong" },
  { en: "Bonsly", fr: "Ma,nzaï" },
  { en: "Mime Jr.", fr: "Mime Jr." },
  { en: "Happiny", fr: "Ptiravi" },
  { en: "Chatot", fr: "Pijako" },
  { en: "Spiritomb", fr: "Spiritomb" },
  { en: "Gible", fr: "Griknot" },
  { en: "Gabite", fr: "Carmache" },
  { en: "Garchomp", fr: "Carchacrok" },
  { en: "Munchlax", fr: "Goinfrex" },
  { en: "Riolu", fr: "Riolu" },
  { en: "Lucario", fr: "Lucario" },
  { en: "Hippopotas", fr: "Hippopotas" },
  { en: "Hippowdon", fr: "Hippodocus" },
  { en: "Skorupi", fr: "Rapion" },
  { en: "Drapion", fr: "Drascore" },
  { en: "Croagunk", fr: "Cradopaud" },
  { en: "Toxicroak", fr: "Coatox" },
  { en: "Carnivine", fr: "Vortente" },
  { en: "Finneon", fr: "Écayon" },
  { en: "Lumineon", fr: "Luminéon" },
  { en: "Mantyke", fr: "Babimanta" },
  { en: "Snover", fr: "Blizzi" },
  { en: "Abomasnow", fr: "Blizzaroi" },
  { en: "Weavile", fr: "Dimoret" },
  { en: "Magnezone", fr: "Magnézone" },
  { en: "Lickilicky", fr: "Coudlangue" },
  { en: "Rhyperior", fr: "Rhinastoc" },
  { en: "Tangrowth", fr: "Bouldeneu" },
  { en: "Electivire", fr: "Élekable" },
  { en: "Magmortar", fr: "Maganon" },
  { en: "Togekiss", fr: "Togekiss" },
  { en: "Yanmega", fr: "Yanméga" },
  { en: "Leafeon", fr: "Phyllali" },
  { en: "Glaceon", fr: "Givrali" },
  { en: "Gliscor", fr: "Scorvol" },
  { en: "Mamoswine", fr: "Ma,mmochon" },
  { en: "Porygon-Z", fr: "Porygon-Z" },
  { en: "Gallade", fr: "Gallame" },
  { en: "Probopass", fr: "Tarinorme" },
  { en: "Dusknoir", fr: "Noctunoir" },
  { en: "Froslass", fr: "Momartik" },
  { en: "Rotom", fr: "Motisma" },
  { en: "Uxie", fr: "Créhelf" },
  { en: "Mesprit", fr: "Créfollet" },
  { en: "Azelf", fr: "Créfadet" },
  { en: "Dialga", fr: "Dialga" },
  { en: "Palkia", fr: "Palkia" },
  { en: "Heatran", fr: "Heatran" },
  { en: "Regigigas", fr: "Regigigas" },
  { en: "Giratina", fr: "Giratina" },
  { en: "Cresselia", fr: "Cresselia" },
  { en: "Phione", fr: "Phione" },
  { en: "Manaphy", fr: "Manaphy" },
  { en: "Darkrai", fr: "Darkrai" },
  { en: "Shaymin", fr: "Shaymin" },
  { en: "Arceus", fr: "Arceus" },
  { en: "Victini", fr: "Victini" },
  { en: "Snivy", fr: "Vipélierre" },
  { en: "Servine", fr: "Lianaja" },
  { en: "Serperior", fr: "Majaspic" },
  { en: "Tepig", fr: "Gruikui" },
  { en: "Pignite", fr: "Grotichon" },
  { en: "Emboar", fr: "Roitiflam" },
  { en: "Oshawott", fr: "Moustillon" },
  { en: "Dewott", fr: "Mateloutre" },
  { en: "Samurott", fr: "Clamiral" },
  { en: "Patrat", fr: "Ratentif" },
  { en: "Watchog", fr: "Miradar" },
  { en: "Lillipup", fr: "Ponchiot" },
  { en: "Herdier", fr: "Ponchien" },
  { en: "Stoutland", fr: "Mastouffe" },
  { en: "Purrloin", fr: "Chacripan" },
  { en: "Liepard", fr: "Léopardus" },
  { en: "Pansage", fr: "Feuillajou" },
  { en: "Simisage", fr: "Feuiloutan" },
  { en: "Pansear", fr: "Flamajou" },
  { en: "Simisear", fr: "Flamoutan" },
  { en: "Panpour", fr: "Flotajou" },
  { en: "Simipour", fr: "Flotoutan" },
  { en: "Munna", fr: "Munna" },
  { en: "Musharna", fr: "Mushana" },
  { en: "Pidove", fr: "Poichigeon" },
  { en: "Tranquill", fr: "Colombeau" },
  { en: "Unfezant", fr: "Déflaisan" },
  { en: "Blitzle", fr: "Zébribon" },
  { en: "Zebstrika", fr: "Zéblitz" },
  { en: "Roggenrola", fr: "Nodulithe" },
  { en: "Boldore", fr: "Géolithe" },
  { en: "Gigalith", fr: "Gigalithe" },
  { en: "Woobat", fr: "Chovsourir" },
  { en: "Swoobat", fr: "Rhinolove" },
  { en: "Drilbur", fr: "Rototaupe" },
  { en: "Excadrill", fr: "Minotaupe" },
  { en: "Audino", fr: "Nanméouïe" },
  { en: "Timburr", fr: "Charpenti" },
  { en: "Gurdurr", fr: "Ouvrifier" },
  { en: "Conkeldurr", fr: "Bétochef" },
  { en: "Tympole", fr: "Tritonde" },
  { en: "Palpitoad", fr: "Batracné" },
  { en: "Seismitoad", fr: "Crapustule" },
  { en: "Throh", fr: "Judokrak" },
  { en: "Sawk", fr: "Karaclée" },
  { en: "Sewaddle", fr: "Larveyette" },
  { en: "Swadloon", fr: "Couverdure" },
  { en: "Leavanny", fr: "Manternel" },
  { en: "Venipede", fr: "Venipatte" },
  { en: "Whirlipede", fr: "Scobolide" },
  { en: "Scolipede", fr: "Brutapode" },
  { en: "Cottonee", fr: "Doudouvet" },
  { en: "Whimsicott", fr: "Farfaduvet" },
  { en: "Petilil", fr: "Chlorobule" },
  { en: "Lilligant", fr: "Fragilady" },
  { en: "Basculin", fr: "Bargantua" },
  { en: "Sandile", fr: "Mascaïman" },
  { en: "Krokorok", fr: "Escroco" },
  { en: "Krookodile", fr: "Crocorible" },
  { en: "Darumaka", fr: "Darumarond" },
  { en: "Darmanitan", fr: "Darumacho" },
  { en: "Maractus", fr: "Maracachi" },
  { en: "Dwebble", fr: "Crabicoque" },
  { en: "Crustle", fr: "Crabaraque" },
  { en: "Scraggy", fr: "Baggiguane" },
  { en: "Scrafty", fr: "Baggaïd" },
  { en: "Sigilyph", fr: "Cryptéro" },
  { en: "Yamask", fr: "Tutafeh" },
  { en: "Cofagrigus", fr: "Tutankafer" },
  { en: "Tirtouga", fr: "Carapagos" },
  { en: "Carracosta", fr: "Mégapagos" },
  { en: "Archen", fr: "Arkéapti" },
  { en: "Archeops", fr: "Aéroptéryx" },
  { en: "Trubbish", fr: "Miamiasme" },
  { en: "Garbodor", fr: "Miasmax" },
  { en: "Zorua", fr: "Zorua" },
  { en: "Zoroark", fr: "Zoroark" },
  { en: "Minccino", fr: "Chinchidou" },
  { en: "Cinccino", fr: "Pashmilla" },
  { en: "Gothita", fr: "Scrutella" },
  { en: "Gothorita", fr: "Mesmérella" },
  { en: "Gothitelle", fr: "Sidérella" },
  { en: "Solosis", fr: "Nucléos" },
  { en: "Duosion", fr: "Méios" },
  { en: "Reuniclus", fr: "Symbios" },
  { en: "Ducklett", fr: "Couaneton" },
  { en: "Swanna", fr: "Lakmécygne" },
  { en: "Vanillite", fr: "Sorbébé" },
  { en: "Vanillish", fr: "Sorboul" },
  { en: "Vanilluxe", fr: "Sorbouboul" },
  { en: "Deerling", fr: "Vivaldaim" },
  { en: "Sawsbuck", fr: "Haydaim" },
  { en: "Emolga", fr: "Emolga" },
  { en: "Karrablast", fr: "Carabing" },
  { en: "Escavalier", fr: "Lançargot" },
  { en: "Foongus", fr: "Trompignon" },
  { en: "Amoonguss", fr: "Gaulet" },
  { en: "Frillish", fr: "Viskuse" },
  { en: "Jellicent", fr: "Moyade" },
  { en: "Alomomola", fr: "Mamanbo" },
  { en: "Joltik", fr: "Statitik" },
  { en: "Galvantula", fr: "Mygavolt" },
  { en: "Ferroseed", fr: "Grindur" },
  { en: "Ferrothorn", fr: "Noacier" },
  { en: "Klink", fr: "Tic" },
  { en: "Klang", fr: "Clic" },
  { en: "Klinklang", fr: "Cliticlic" },
  { en: "Tynamo", fr: "Anchwatt" },
  { en: "Eelektrik", fr: "Lampéroie" },
  { en: "Eelektross", fr: "Ohmassacre" },
  { en: "Elgyem", fr: "Lewsor" },
  { en: "Beheeyem", fr: "Neitram" },
  { en: "Litwick", fr: "Funécire" },
  { en: "Lampent", fr: "Mélancolux" },
  { en: "Chandelure", fr: "Lugulabre" },
  { en: "Axew", fr: "Coupenotte" },
  { en: "Fraxure", fr: "Incisache" },
  { en: "Haxorus", fr: "Tranchodon" },
  { en: "Cubchoo", fr: "Polarhume" },
  { en: "Beartic", fr: "Polagriffe" },
  { en: "Cryogonal", fr: "Hexagel" },
  { en: "Shelmet", fr: "Escargaume" },
  { en: "Accelgor", fr: "Limaspeed" },
  { en: "Stunfisk", fr: "Limonde" },
  { en: "Mienfoo", fr: "Kungfouine" },
  { en: "Mienshao", fr: "Shaofouine" },
  { en: "Druddigon", fr: "Drakkarmin" },
  { en: "Golett", fr: "Gringolem" },
  { en: "Golurk", fr: "Golemastoc" },
  { en: "Pawniard", fr: "Scalpion" },
  { en: "Bisharp", fr: "Scalproie" },
  { en: "Bouffalant", fr: "Frison" },
  { en: "Rufflet", fr: "Furaiglon" },
  { en: "Braviary", fr: "Gueriaigle" },
  { en: "Vullaby", fr: "Vostourno" },
  { en: "Mandibuzz", fr: "Vaututrice" },
  { en: "Heatmor", fr: "Aflamanoir" },
  { en: "Durant", fr: "Fermite" },
  { en: "Deino", fr: "Solochi" },
  { en: "Zweilous", fr: "Diamat" },
  { en: "Hydreigon", fr: "Trioxhydre" },
  { en: "Larvesta", fr: "Pyronille" },
  { en: "Volcarona", fr: "Pyrax" },
  { en: "Cobalion", fr: "Cobaltium" },
  { en: "Terrakion", fr: "Terrakium" },
  { en: "Virizion", fr: "Viridium" },
  { en: "Tornadus", fr: "Boréas" },
  { en: "Thundurus", fr: "Fulguris" },
  { en: "Reshiram", fr: "Reshiram" },
  { en: "Zekrom", fr: "Zekrom" },
  { en: "Landorus", fr: "Démétéros" },
  { en: "Kyurem", fr: "Kyurem" },
  { en: "Keldeo", fr: "Keldeo" },
  { en: "Meloetta", fr: "Meloetta" },
  { en: "Chespin", fr: "Marisson" },
  { en: "Quilladin", fr: "Boguérisse" },
  { en: "Chesnaught", fr: "Blindépique" },
  { en: "Fennekin", fr: "Feunnec" },
  { en: "Braixen", fr: "Roussil" },
  { en: "Delphox", fr: "Goupelin" },
  { en: "Froakie", fr: "Grenousse" },
  { en: "Frogadier", fr: "Croâporal" },
  { en: "Greninja", fr: "Amphinobi" },
  { en: "Bunnelby", fr: "Sapereau" },
  { en: "Diggersby", fr: "Excavarenne" },
  { en: "Fletchling", fr: "Passerouge" },
  { en: "Fletchinder", fr: "Braisillon" },
  { en: "Talonflame", fr: "Flambusard" },
  { en: "Scatterbug", fr: "Lépidonille" },
  { en: "Spewpa", fr: "Pérégrain" },
  { en: "Vivillon", fr: "Prismillon" },
  { en: "Litleo", fr: "Hélionceau" },
  { en: "Pyroar", fr: "Némélios" },
  { en: "Flabébé", fr: "Flabébé" },
  { en: "Floette", fr: "Floette" },
  { en: "Florges", fr: "Florges" },
  { en: "Skiddo", fr: "Cabriolaine" },
  { en: "Gogoat", fr: "Chevroum" },
  { en: "Pancham", fr: "Pandespiègle" },
  { en: "Pangoro", fr: "Pandarbare" },
  { en: "Furfrou", fr: "Couafarel" },
  { en: "Espurr", fr: "Psystigri" },
  { en: "Meowstic", fr: "Mistigrix" },
  { en: "Honedge", fr: "Monorpale" },
  { en: "Doublade", fr: "Dimoclès" },
  { en: "Aegislash", fr: "Exagide" },
  { en: "Spritzee", fr: "Fluvetin" },
  { en: "Aromatisse", fr: "Cocotine" },
  { en: "Swirlix", fr: "Sucroquin" },
  { en: "Slurpuff", fr: "Cupcanaille" },
  { en: "Inkay", fr: "Sepiatop" },
  { en: "Malamar", fr: "Sepiatroce" },
  { en: "Binacle", fr: "Opermine" },
  { en: "Barbaracle", fr: "Golgopathe" },
  { en: "Skrelp", fr: "Venalgue" },
  { en: "Dragalge", fr: "Kravarech" },
  { en: "Clauncher", fr: "Flingouste" },
  { en: "Clawitzer", fr: "Gamblast" },
  { en: "Helioptile", fr: "Galvaran" },
  { en: "Heliolisk", fr: "Iguolta" },
  { en: "Tyrunt", fr: "Ptyranidur" },
  { en: "Tyrantrum", fr: "Rexillius" },
  { en: "Amaura", fr: "Amagara" },
  { en: "Aurorus", fr: "Dragmara" },
  { en: "Sylveon", fr: "Nymphali" },
  { en: "Hawlucha", fr: "Brutalibré" },
  { en: "Dedenne", fr: "Dedenne" },
  { en: "Carbink", fr: "Strassie" },
  { en: "Goomy", fr: "Mucuscule" },
  { en: "Sliggoo", fr: "Colimucus" },
  { en: "Goodra", fr: "Muplodocus" },
  { en: "Klefki", fr: "Trousselin" },
  { en: "Phantump", fr: "Brocélôme" },
  { en: "Trevenant", fr: "Desséliande" },
  { en: "Pumpkaboo", fr: "Pitrouille" },
  { en: "Gourgeist", fr: "Banshitrouye" },
  { en: "Bergmite", fr: "Grelaçon" },
  { en: "Avalugg", fr: "Séracrawl" },
  { en: "Noibat", fr: "Sonistrelle" },
  { en: "Noivern", fr: "Bruyverne" },
  { en: "Xerneas", fr: "Xerneas" },
  { en: "Yveltal", fr: "Yveltal" },
  { en: "Zygarde", fr: "Zygarde" },
  { en: "Diancie", fr: "Diancie" },
  { en: "Hoopa", fr: "Hoopa" },
  { en: "Volcanion", fr: "Volcanion" },
  { en: "Rowlet", fr: "Brindibou" },
  { en: "Dartrix", fr: "Efflèche" },
  { en: "Decidueye", fr: "Archéduc" },
  { en: "Litten", fr: "Flamiaou" },
  { en: "Torracat", fr: "Matoufeu" },
  { en: "Incineroar", fr: "Félinferno" },
  { en: "Popplio", fr: "Otaquin" },
  { en: "Brionne", fr: "Otarlette" },
  { en: "Primarina", fr: "Oratoria" },
  { en: "Pikipek", fr: "Picassaut" },
  { en: "Trumbeak", fr: "Piclairon" },
  { en: "Toucannon", fr: "Bazoucan" },
  { en: "Yungoos", fr: "Manglouton" },
  { en: "Gumshoos", fr: "Argouste" },
  { en: "Grubbin", fr: "Larvibule" },
  { en: "Charjabug", fr: "Chrysapile" },
  { en: "Vikavolt", fr: "Lucanon" },
  { en: "Crabrawler", fr: "Crabagarre" },
  { en: "Crabominable", fr: "Crabominable" },
  { en: "Oricorio", fr: "Plumeline" },
  { en: "Cutiefly", fr: "Bombydou" },
  { en: "Ribombee", fr: "Rubombelle" },
  { en: "Rockruff", fr: "Rocabot" },
  { en: "Lycanroc", fr: "Lougaroc" },
  { en: "Wishiwashi", fr: "Froussardine" },
  { en: "Mareanie", fr: "Vorastérie" },
  { en: "Toxapex", fr: "Prédastérie" },
  { en: "Mudbray", fr: "Tiboudet" },
  { en: "Mudsdale", fr: "Bourrinos" },
  { en: "Dewpider", fr: "Araqua" },
  { en: "Araquanid", fr: "Tarenbulle" },
  { en: "Fomantis", fr: "Mimantis" },
  { en: "Lurantis", fr: "Floramantis" },
  { en: "Morelull", fr: "Spododo" },
  { en: "Shiinotic", fr: "Lampignon" },
  { en: "Salandit", fr: "Tritox" },
  { en: "Salazzle", fr: "Malamandre" },
  { en: "Stufful", fr: "Nounourson" },
  { en: "Bewear", fr: "Chelours" },
  { en: "Bounsweet", fr: "Croquine" },
  { en: "Steenee", fr: "Candine" },
  { en: "Tsareena", fr: "Sucreine" },
  { en: "Comfey", fr: "Guérilande" },
  { en: "Oranguru", fr: "Gouroutan" },
  { en: "Passimian", fr: "Quartermac" },
  { en: "Wimpod", fr: "Sovkipou" },
  { en: "Golisopod", fr: "Sarmuraï" },
  { en: "Sandygast", fr: "Bacabouh" },
  { en: "Palossand", fr: "Trépassable" },
  { en: "Pyukumuku", fr: "Concombaffe" },
  { en: "Type: Null", fr: "Type: 0" },
  { en: "Silvally", fr: "Silvallié" },
  { en: "Minior", fr: "Météno" },
  { en: "Komala", fr: "Dodoala" },
  { en: "Turtonator", fr: "Boumata" },
  { en: "Togedemaru", fr: "Togedemaru" },
  { en: "Mimikyu", fr: "Mimiqui" },
  { en: "Bruxish", fr: "Denticrisse" },
  { en: "Drampa", fr: "Draïeul" },
  { en: "Dhelmise", fr: "Sinistrail" },
  { en: "Jangmo-o", fr: "Bébécaille" },
  { en: "Hakamo-o", fr: "Écaïd" },
  { en: "Kommo-o", fr: "Ékaïser" },
  { en: "Tapu Koko", fr: "Tokorico" },
  { en: "Tapu Lele", fr: "Tokopiyon" },
  { en: "Tapu Bulu", fr: "Tokotoro" },
  { en: "Tapu Fini", fr: "Tokopisco" },
  { en: "Cosmog", fr: "Cosmog" },
  { en: "Cosmoem", fr: "Cosmovum" },
  { en: "Solgaleo", fr: "Solgaleo" },
  { en: "Lunala", fr: "Lunala" },
  { en: "Nihilego", fr: "Zéroïd" },
  { en: "Buzzwole", fr: "Mouscoto" },
  { en: "Pheromosa", fr: "Cancrelove" },
  { en: "Xurkitree", fr: "Câblifère" },
  { en: "Celesteela", fr: "Bamboiselle" },
  { en: "Kartana", fr: "Katagami" },
  { en: "Guzzlord", fr: "Engloutyran" },
  { en: "Necrozma", fr: "Necrozma" },
  { en: "Magearna", fr: "Magearna" },
  { en: "Marshadow", fr: "Marshadow" },
  { en: "Poipole", fr: "Vémini" },
  { en: "Naganadel", fr: "Mandrillon" },
  { en: "Stakataka", fr: "Ama-Ama" },
  { en: "Blacephalon", fr: "Pierroteknik" },
  { en: "Zeraora", fr: "Zeraora" },
  { en: "Meltan", fr: "Meltan" },
  { en: "Melmetal", fr: ",Melmetal" },
  { en: "Grookey", fr: "Ouistempo" },
  { en: "Thwackey", fr: "Badabouin" },
  { en: "Rillaboom", fr: "Gorythmic" },
  { en: "Scorbunny", fr: "Flambino" },
  { en: "Raboot", fr: "Lapyro" },
  { en: "Cinderace", fr: "Pyrobut" },
  { en: "Sobble", fr: "Larméléon" },
  { en: "Drizzile", fr: "Arrozard" },
  { en: "Inteleon", fr: "Lézargus" },
  { en: "Skwovet", fr: "Rongourmand" },
  { en: "Greedent", fr: "Rongrigou" },
  { en: "Rookidee", fr: "Minisange" },
  { en: "Corvisquire", fr: "Bleuseille" },
  { en: "Corviknight", fr: "Corvaillus" },
  { en: "Blipbug", fr: "Larvadar" },
  { en: "Dottler", fr: "Coléodôme" },
  { en: "Orbeetle", fr: "Astronelle" },
  { en: "Nickit", fr: "Goupilou" },
  { en: "Thievul", fr: "Roublenard" },
  { en: "Gossifleur", fr: "Tournicoton" },
  { en: "Eldegoss", fr: "Blancoton" },
  { en: "Wooloo", fr: "Moumouton" },
  { en: "Dubwool", fr: "Moumouflon" },
  { en: "Chewtle", fr: "Khélocrok" },
  { en: "Drednaw", fr: "Torgamord" },
  { en: "Yamper", fr: "Voltoutou" },
  { en: "Boltund", fr: "Fulgudog" },
  { en: "Rolycoly", fr: "Charbi" },
  { en: "Carkol", fr: "Wagomine" },
  { en: "Coalossal", fr: "Monthracite" },
  { en: "Applin", fr: "Verpom" },
  { en: "Flapple", fr: "Pomdrapi" },
  { en: "Appletun", fr: "Dratatin" },
  { en: "Silicobra", fr: "Dunaja" },
  { en: "Sandaconda", fr: "Dunaconda" },
  { en: "Cramorant", fr: "Nigosier" },
  { en: "Arrokuda", fr: "Embrochet" },
  { en: "Barraskewda", fr: "Hastacuda" },
  { en: "Toxel", fr: "Toxizap" },
  { en: "Toxtricity", fr: "Salarsen" },
  { en: "Sizzlipede", fr: "Grillepattes" },
  { en: "Centiskorch", fr: "Scolocendre" },
  { en: "Clobbopus", fr: "Poulpaf" },
  { en: "Grapploct", fr: "Krakos" },
  { en: "Sinistea", fr: "Théffroi" },
  { en: "Polteageist", fr: "Polthégeist" },
  { en: "Hatenna", fr: "Bibichut" },
  { en: "Hattrem", fr: "Chapotus" },
  { en: "Hatterene", fr: "Sorcilence" },
  { en: "Impidimp", fr: "Grimalin" },
  { en: "Morgrem", fr: "Fourbelin" },
  { en: "Grimmsnarl", fr: "Angoliath" },
  { en: "Obstagoon", fr: "Ixon" },
  { en: "Perrserker", fr: "Berserkatt" },
  { en: "Cursola", fr: "Corayôme" },
  { en: "Sirfetch'd", fr: "Palarticho" },
  { en: "Mr. Rime", fr: "M. Glaquette" },
  { en: "Runerigus", fr: "Tutétékri" },
  { en: "Milcery", fr: "Crèmy" },
  { en: "Alcremie", fr: "Charmilly" },
  { en: "Falinks", fr: "Hexadron" },
  { en: "Pincurchin", fr: "Wattapik" },
  { en: "Snom", fr: "Frissonille" },
  { en: "Frosmoth", fr: "Beldeneige" },
  { en: "Stonjourner", fr: "Dolman" },
  { en: "Eiscue", fr: "Bekaglaçon" },
  { en: "Indeedee", fr: "Wimessir" },
  { en: "Morpeko", fr: "Morpeko" },
  { en: "Cufant", fr: "Charibari" },
  { en: "Copperajah", fr: "Pachyradjah" },
  { en: "Dracozolt", fr: "Galvagon" },
  { en: "Arctozolt", fr: "Galvagla" },
  { en: "Dracovish", fr: "Hydragon" },
  { en: "Arctovish", fr: "Hydragla" },
  { en: "Duraludon", fr: "Duralugon" },
  { en: "Dreepy", fr: "Fantyrm" },
  { en: "Drakloak", fr: "Dispareptil" },
  { en: "Dragapult", fr: "Lanssorien" },
  { en: "Zacian", fr: "Zacian" },
  { en: "Zamazenta", fr: "Zamazenta" },
  { en: "Eternatus", fr: "Éthernatos" },
  { en: "Kubfu", fr: "Wushours" },
  { en: "Urshifu", fr: "Shifours" },
  { en: "Zarude", fr: "Zarude" },
  { en: "Regieleki", fr: "Regieleki" },
  { en: "Regidrago", fr: "Regidrago" },
  { en: "Glastrier", fr: "Blizzeval" },
  { en: "Spectrier", fr: "Spectreval" },
  { en: "Calyrex", fr: "Sylveroy" },
  { en: "Wyrdeer", fr: "Cerbyllin" },
  { en: "Kleavor", fr: "Hachécateur" },
  { en: "Ursaluna", fr: "Ursaking" },
  { en: "Basculegion", fr: "Paragruel" },
  { en: "Sneasler", fr: "Farfurex" },
  { en: "Overqwil", fr: "Qwilpik" },
  { en: "Enamorus", fr: "Amovénus" },
];
