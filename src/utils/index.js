import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";
import imageName from "../assets/Images/cardImage";

export const cardsArray = [
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
	{
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
  {
    name: "imageName",
    imgSrc: imageName,
    isFlipped: false,
  },
];

export let doubleCardsArray = [...cardsArray, ...cardsArray]

doubleCardsArray = doubleCardsArray.map((element, index) => {
	return {
		id: index,
		...element
	}
})

export const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = 0; i < shuffledArray.length; i++) {
    const j = Math.floor(Math.random() * shuffledArray.length);
    const tempItem = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = tempItem;
  }

  return shuffledArray;
};
