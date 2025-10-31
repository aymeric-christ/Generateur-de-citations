const quotes = [
  {
    text: "Le succès, c’est tomber sept fois, se relever huit.",
    author: "Proverbe japonais",
  },
  {
    text: "La simplicité est la sophistication suprême.",
    author: "Leonard de Vinci",
  },
  {
    text: "Crois en toi et tout deviendra possible.",
    author: "Anonyme",
  },
  {
    text: "Le seul vrai échec est d’abandonner.",
    author: "Jean-Paul Sartre",
  },
  {
    text: "Fais de ta vie un rêve, et d’un rêve une réalité.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    "text": "Si tu n’essaies jamais, tu ne sauras jamais ce que tu aurais pu devenir.",
    "author": "Hinata Hyuga, Naruto"
  },
  {
    "text": "Je ne suis pas un héros parce que je veux être aimé, mais parce que je veux protéger.",
    "author": "All Might, My Hero Academia"
  },
  {
    "text": "Les règles sont faites pour ceux qui ne peuvent pas créer leurs propres chemins.",
    "author": "Monkey D. Luffy, One Piece"
  },
  {
    "text": "Je vais devenir le Roi des Pirates !",
    "author": "Monkey D. Luffy, One Piece"
  },
  {
    "text": "Celui qui ne sacrifie rien ne peut rien gagner.",
    "author": "Edward Elric, Fullmetal Alchemist"
  },
  {
    "text": "Si tu ne ris pas, tu perds déjà.",
    "author": "Gintoki Sakata, Gintama"
  },
  {
    "text": "Même si tu tombes, tu dois te relever. Toujours.",
    "author": "Naruto Uzumaki, Naruto"
  },
  {
    "text": "Ce n’est pas parce que tu es faible que tu es inutile.",
    "author": "Sakura Haruno, Naruto"
  },
  {
    "text": "L’avenir appartient à ceux qui croient en la beauté de leurs rêves.",
    "author": "Lain Iwakura, Serial Experiments Lain"
  },
  {
    "text": "Tout ce que je fais, je le fais pour protéger mes amis.",
    "author": "Natsu Dragneel, Fairy Tail"
  },
  {
    "text": "Je suis le prince des Saiyans, Vegeta, et je ne me laisserai jamais surpasser !",
    "author": "Vegeta, Dragon Ball Z"
  },
  {
    "text": "Même si je dois me battre jusqu’au dernier souffle, je n’abandonnerai jamais.",
    "author": "Vegeta, Dragon Ball Z"
  },
  {
    "text": "Je refuse de perdre contre Kakarot !",
    "author": "Vegeta, Dragon Ball Z"
  },
  {
    "text": "Un Saiyan ne se rend jamais !",
    "author": "Vegeta, Dragon Ball Z"
  },
  {
    "text": "Mon pouvoir continue de croître… et toi, tu es déjà dépassé.",
    "author": "Vegeta, Dragon Ball Z"
  }

];

const generateButton = document.getElementById("generate-btn");
const citationList = document.getElementById("citations-list");

function Generate() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  const authorElement = selectedQuote.author;
  const textElement = selectedQuote.text;
  citationList.innerHTML = `
    <div class="p-5  ">
    <p class="text-xl mb-4 text-primary-content">"${textElement}"</p>
    <p class="text-md text-orange-500">— ${authorElement}</p>
  </div>
    `;
  console.log();
}

generateButton.addEventListener("click", Generate);
