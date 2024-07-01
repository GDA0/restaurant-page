import food1ImgSrc from '../assets/dev-images/jollof.jpg'
import food2ImgSrc from '../assets/dev-images/waakye.jpg'
import food3ImgSrc from '../assets/dev-images/banku.jpg'
import food4ImgSrc from '../assets/dev-images/fufu.jpg'
import food5ImgSrc from '../assets/dev-images/gob3.jpg'
import food6ImgSrc from '../assets/dev-images/kenkey.jpg'
import food7ImgSrc from '../assets/dev-images/tilapia.jpg'
import food8ImgSrc from '../assets/dev-images/omotuo.jpg'
import food9ImgSrc from '../assets/dev-images/kelewele.jpg'

const foods = [
  {
    name: 'Jollof Rice',
    imgSrc: food1ImgSrc,
    price: 'GH₵134',
    alt: 'Jollof Rice'
  },
  { name: 'Waakye', imgSrc: food2ImgSrc, price: 'GH₵107', alt: 'Waakye' },
  {
    name: 'Banku with Tilapia',
    imgSrc: food3ImgSrc,
    price: 'GH₵161',
    alt: 'Banku with Tilapia'
  },
  {
    name: 'Fufu with Light Soup',
    imgSrc: food4ImgSrc,
    price: 'GH₵148',
    alt: 'Fufu with Light Soup'
  },
  { name: 'Gobɛ', imgSrc: food5ImgSrc, price: 'GH₵121', alt: 'Gobɛ' },
  {
    name: 'Kenkey with Fish and Pepper',
    imgSrc: food6ImgSrc,
    price: 'GH₵174',
    alt: 'Kenkey with Fish and Pepper'
  },
  {
    name: 'Grilled Tilapia',
    imgSrc: food7ImgSrc,
    price: 'GH₵201',
    alt: 'Grilled Tilapia'
  },
  {
    name: 'Omotuo with Groundnut Soup',
    imgSrc: food8ImgSrc,
    price: 'GH₵188',
    alt: 'Omotuo with Groundnut Soup'
  },
  { name: 'Kelewele', imgSrc: food9ImgSrc, price: 'GH₵67', alt: 'Kelewele' }
]

export default function loadMenuPage () {
  const content = document.getElementById('content')
  content.innerHTML = ''

  const headlineDiv = document.createElement('div')
  const headline = document.createElement('h2')
  headline.classList.add('text-center')
  headline.textContent = 'Our Menu'
  headlineDiv.appendChild(headline)

  const cardDeck = document.createElement('div')
  cardDeck.classList.add('card-deck', 'mb-3')

  foods.forEach((food) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const cardImg = document.createElement('img')
    cardImg.src = food.imgSrc
    cardImg.alt = food.alt
    cardImg.classList.add('card-img-top')
    card.appendChild(cardImg)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = food.name
    cardBody.appendChild(cardTitle)

    const cardText = document.createElement('p')
    cardText.classList.add('card-text', 'fw-bold', 'fst-italic')
    cardText.textContent = `Price: ${food.price}`
    cardBody.appendChild(cardText)

    card.appendChild(cardBody)
    cardDeck.appendChild(card)
  })

  content.appendChild(headlineDiv)
  content.appendChild(cardDeck)
}
