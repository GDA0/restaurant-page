import homePageImage from '../assets/images/home-page-image.jpg'

export default function loadHomePage () {
  const content = document.querySelector('#content')

  content.innerHTML = ''

  const headlineDiv = document.createElement('div')
  const headline = document.createElement('h2')
  headline.classList.add('text-center')
  headline.textContent = 'Welcome to Strange World Restaurant'
  headlineDiv.appendChild(headline)

  const restaurantImageDiv = document.createElement('div')
  const restaurantImage = document.createElement('img')
  restaurantImage.id = 'restaurant-image'
  restaurantImage.classList.add('img-fluid', 'mb-3')
  restaurantImage.src = homePageImage
  restaurantImage.alt =
    'Spacious restaurant with wooden furniture, hanging lights, large windows, and patrons working or enjoying their food.'
  restaurantImageDiv.appendChild(restaurantImage)

  const restaurantInfoDiv = document.createElement('div')
  const restaurantInfo = document.createElement('p')
  restaurantInfo.classList.add('text-center')
  restaurantInfo.textContent =
    "Experience the finest dining experience at our restaurant. We take pride in offering a diverse menu of high-quality dishes prepared with fresh, locally-sourced ingredients. Whether you're looking for a romantic dinner, a family gathering, or a casual meal with friends, we have something for everyone."
  restaurantInfoDiv.appendChild(restaurantInfo)

  content.appendChild(headlineDiv)
  content.appendChild(restaurantImageDiv)
  content.appendChild(restaurantInfoDiv)
}
