const games = [
    {
        id: "1",
        title: "God of War Ragnarok",
        platform: ["PlayStation 4", "PlayStation 5"],
    },
    {
        id: "2",
        title: "Elden Ring",
        platform: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    },
    {
        id: "3",
        title: "Horizon Forbidden West",
        platform: ["PlayStation 4", "PlayStation 5"],
    },
    {
        id: "4",
        title: "Starfield",
        platform: ["PC", "Xbox Series X/S"],
    },
    {
        id: "5",
        title: "The Legend of Zelda: Breath of the Wild 2",
        platform: ["Nintendo Switch"],
    },
    {
        id: "6",
        title: "Spider-Man 2",
        platform: ["PlayStation 5"],
    },
    {
        id: "7",
        title: "Forspoken",
        platform: ["PC", "PlayStation 5"],
    },
    {
        id: "8",
        title: "Hogwarts Legacy",
        platform: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    },
    {
        id: "9",
        title: "Bayonetta 3",
        platform: ["Nintendo Switch"],
    },
    {
        id: "10",
        title: "Final Fantasy XVI",
        platform: ["PlayStation 5"],
    },
    {
        id: "11",
        title: "The Last of Us Part I",
        platform: ["PlayStation 5"],
    },
    {
        id: "12",
        title: "Red Dead Redemption 2",
        platform: ["PC", "PlayStation 4", "Xbox One"],
    },
    {
        id: "13",
        title: "Grand Theft Auto V",
        platform: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    },
    {
        id: "14",
        title: "Cyberpunk 2077",
        platform: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    },
    {
        id: "15",
        title: "The Witcher 3: Wild Hunt",
        platform: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    },
    {
        id: "16",
        title: "Metal Gear Solid V: The Phantom Pain",
        platform: ["PC", "PlayStation 4", "Xbox One"],
    },
    {
        id: "17",
        title: "Bloodborne",
        platform: ["PlayStation 4"],
    },
    {
        id: "18",
        title: "Sekiro: Shadows Die Twice",
        platform: ["PC", "PlayStation 4", "Xbox One"],
    },
    {
        id: "19",
        title: "Ghost of Tsushima",
        platform: ["PlayStation 4", "PlayStation 5"],
    },
    {
        id: "20",
        title: "Death Stranding",
        platform: ["PC", "PlayStation 4", "PlayStation 5"],
    },
];

const authors = [
    {
        id: "1",
        name: "João Silva",
        verified: true,
        avatar: "https://www.instagram.com/_u/joaosilvagram/?utm_source=ig_embed&ig_rid=96652744-29b6-4555-9988-f525cadda4fc&ig_mid=47BDA958-66EE-4058-9A5A-8382131170AF",
    },
    {
        id: "2",
        name: "Maria Oliveira",
        verified: false,
        avatar: "https://www.pinterest.com/pin/621567186052282581/",
    },
    {
        id: "3",
        name: "Pedro Souza",
        verified: true,
        avatar: "https://www.instagram.com/pedrosouzafoto/",
    },
    {
        id: "4",
        name: "Ana Costa",
        verified: false,
        avatar: "https://www.instagram.com/anacostaoficial/?hl=en",
    },
    {
        id: "5",
        name: "Bruno Santos",
        verified: true,
        avatar: "https://www.instagram.com/brunosantos/?hl=en",
    },
];

const reviews = [
    {
        id: "1",
        rating: 9,
        content: "God of War Ragnarok é um jogo épico e emocionante, com uma história envolvente e gráficos incríveis. A jogabilidade é desafiadora e recompensadora, e o mundo do jogo é enorme e cheio de detalhes. Recomendo a todos os fãs de jogos de ação e aventura.",
        author_id: "1",
        game_id: "1",
    },
    {
        id: "2",
        rating: 8,
        content: "Elden Ring é um jogo de RPG de ação desafiador e gratificante. O mundo aberto é enorme e cheio de segredos para descobrir. A jogabilidade é complexa e profunda, e o sistema de combate é recompensador. Recomendo a todos os jogadores que procuram um desafio.",
        author_id: "2",
        game_id: "2",
    },
    {
        id: "3",
        rating: 7,
        content: "Horizon Forbidden West é um jogo de ação e aventura em mundo aberto com uma história interessante e personagens memoráveis. A jogabilidade é divertida e variada, e o mundo do jogo é bonito e cheio de vida. Recomendo a todos os fãs de jogos de ação e aventura.",
        author_id: "3",
        game_id: "3",
    },
    {
        id: "4",
        rating: 9,
        content: "Starfield é um RPG espacial ambicioso com um universo enorme para explorar. A história é envolvente e os personagens são bem desenvolvidos. A jogabilidade é variada e divertida, e o mundo do jogo é cheio de possibilidades. Recomendo a todos os fãs de RPGs e jogos espaciais.",
        author_id: "4",
        game_id: "4",
    },
    {
        id: "5",
        rating: 8,
        content: "The Legend of Zelda: Breath of the Wild 2 é uma sequência épica que expande o mundo do jogo original de maneiras inovadoras. A história é emocionante e os desafios são desafiadores. A jogabilidade é divertida e gratificante, e o mundo do jogo é cheio de segredos para descobrir. Recomendo a todos os fãs de jogos de aventura.",
        author_id: "5",
        game_id: "5",
    },
    {
        id: "6",
        rating: 9,
        content: "Spider-Man 2 é um jogo de ação e aventura em mundo aberto com uma história emocionante e personagens memoráveis. A jogabilidade é divertida e acrobática, e o mundo do jogo é cheio de possibilidades. Recomendo a todos os fãs de jogos de super-heróis.",
        author_id: "1",
        game_id: "6",
    },
    {
        id: "7",
        rating: 7,
        content: "Forspoken é um jogo de ação e aventura com uma história interessante e um sistema de magia único. A jogabilidade é divertida e desafiadora, e o mundo do jogo é bonito e cheio de perigos. Recomendo a todos os fãs de jogos de ação e aventura.",
        author_id: "2",
        game_id: "7",
    },
    {
        id: "8",
        rating: 8,
        content: "Hogwarts Legacy é um RPG de ação em mundo aberto ambientado no universo de Harry Potter. A história é envolvente e os personagens são bem desenvolvidos. A jogabilidade é divertida e variada, e o mundo do jogo é cheio de possibilidades. Recomendo a todos os fãs de jogos de RPG e do universo Harry Potter.",
        author_id: "3",
        game_id: "8",
    },
    {
        id: "9",
        rating: 9,
        content: "Bayonetta 3 é um jogo de ação e aventura com uma história emocionante e personagens memoráveis. A jogabilidade é divertida e acrobática, e o mundo do jogo é cheio de possibilidades. Recomendo a todos os fãs de jogos de ação e aventura.",
        author_id: "4",
        game_id: "9",
    },
    {
        id: "10",
        rating: 9,
        content: "Testando agora se o game de id 4 terá duas reviews de autores diferentes",
        author_id: "2",
        game_id: "4",
    },
    {
        id: "11",
        rating: 7,
        content: "Aqui deve aparecer um texto genérico sobre um jogo hipotético apenas para acrescentar mais um objeto ao array de reviews realacionado ao usuário de id 4",
        author_id: "4",
        game_id: "6",
    }
]

export default { games, authors, reviews }