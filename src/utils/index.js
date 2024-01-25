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
