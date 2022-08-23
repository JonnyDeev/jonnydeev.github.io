//Selectors

const section = document.querySelector("section");
const lives = document.querySelector(".livesLeft");
let playerLives = 6;
const btn = document.querySelector("button");

lives.textContent = playerLives;

//data

const getData = () => [
  { imgSrc: "./images/1.jpg", name: "paramore" },
  { imgSrc: "./images/2.jpg", name: "brand new eyes" },
  { imgSrc: "./images/3.jpg", name: "all we know is falling" },
  { imgSrc: "./images/4.jpg", name: "riot2" },
  { imgSrc: "./images/5.jpg", name: "after laughter" },
  { imgSrc: "./images/6.jpg", name: "riot" },
  { imgSrc: "./images/7.jpg", name: "the final riot" },
  { imgSrc: "./images/8.jpg", name: "petals for armour" },
  { imgSrc: "./images/1.jpg", name: "paramore" },
  { imgSrc: "./images/2.jpg", name: "brand new eyes" },
  { imgSrc: "./images/3.jpg", name: "all we know is falling" },
  { imgSrc: "./images/4.jpg", name: "riot2" },
  { imgSrc: "./images/5.jpg", name: "after laughter" },
  { imgSrc: "./images/6.jpg", name: "riot" },
  { imgSrc: "./images/7.jpg", name: "the final riot" },
  { imgSrc: "./images/8.jpg", name: "petals for armour" },
];

//randomize function using fisher yates algorithm

const randomize = () => {
  const cardData = getData();
  for (let i = cardData.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = cardData[i];
    cardData[i] = cardData[j];
    cardData[j] = k;
  }
  return cardData;
};

//generate cards

const generateCards = () => {
  const cardData = randomize();
  //generate HTML
  cardData.forEach((element) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //image to cards faces
    face.setAttribute("src", element.imgSrc);
    card.setAttribute("name", element.name);
    //card to display
    card.appendChild(face);
    card.appendChild(back);
    section.appendChild(card);

    //add flipp efect
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

//check cards

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCard = document.querySelectorAll(".flipped");
  console.log(clickedCard);
  //logic
  if (flippedCard.length === 2) {
    if (
      flippedCard[0].getAttribute("name") ===
      flippedCard[1].getAttribute("name")
    ) {
      console.log("correct");
      flippedCard.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("incorrect");
      flippedCard.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => {
          card.classList.remove("toggleCard");
        }, 700);
      });
      playerLives--;
      lives.textContent = playerLives;
      if (playerLives === 0) {
        window.alert("Game Over! Press Ok to continue");
        reset();
      }
    }
  }
  if (toggleCard.length === 16) { 
    alert("Congratulations! You have successfully completed the Game")
  }
};

const reset = () => {
  let cardData = randomize();
  let face = document.querySelectorAll(".face");
  let card = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    card[index].classList.remove("toggleCard");
    setTimeout(() => {
      card[index].style.pointerEvents = "all";
      face[index].src = item.imgSrc;
      card[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 6;
  lives.textContent = playerLives;
};
generateCards();
btn.addEventListener("click", () => {
  reset();
});
