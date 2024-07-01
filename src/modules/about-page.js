export default function loadAboutPage () {
  const content = document.getElementById('content')
  content.innerHTML = ''

  const containerDiv = document.createElement('div')
  containerDiv.classList.add('container')

  const headline = document.createElement('h2')
  headline.textContent = 'About Us'
  containerDiv.appendChild(headline)

  const introduction = document.createElement('p')
  introduction.textContent =
    'Welcome to Strange World Restaurant, where we serve a delightful array of traditional Ghanaian dishes with a modern twist. Established in strange year, our restaurant has become a favorite spot for locals and visitors alike, offering a warm and welcoming atmosphere with a touch of elegance.'
  containerDiv.appendChild(introduction)

  const storyHeading = document.createElement('h3')
  storyHeading.textContent = 'Our Story'
  containerDiv.appendChild(storyHeading)

  const storyParagraph = document.createElement('p')
  storyParagraph.textContent =
    'Our journey began with a passion for authentic African cuisine and a dream to create a space where people could enjoy the rich flavors of Ghana. From humble beginnings, we have grown into a beloved dining destination known for our dedication to quality and excellence.'
  containerDiv.appendChild(storyParagraph)

  const missionHeading = document.createElement('h3')
  missionHeading.textContent = 'Our Mission'
  containerDiv.appendChild(missionHeading)

  const missionParagraph = document.createElement('p')
  missionParagraph.textContent =
    'At Strange World Restaurant, our mission is to provide an unforgettable dining experience by blending traditional recipes with contemporary flavors. We are committed to using fresh, locally-sourced ingredients to ensure every dish is both delicious and sustainable.'
  containerDiv.appendChild(missionParagraph)

  const chefHeading = document.createElement('h3')
  chefHeading.textContent = 'Meet Our Chef'
  containerDiv.appendChild(chefHeading)

  const chefParagraph = document.createElement('p')
  chefParagraph.textContent =
    'Chef Stranger brings years of culinary expertise and a passion for Ghanaian cuisine to our kitchen. With a background in strange experience, Chef Stranger crafts each dish with precision and creativity, ensuring a memorable experience for every guest.'
  containerDiv.appendChild(chefParagraph)

  const joinUsHeading = document.createElement('h3')
  joinUsHeading.textContent = 'Join Us'
  containerDiv.appendChild(joinUsHeading)

  const joinUsParagraph = document.createElement('p')
  joinUsParagraph.textContent =
    'We invite you to visit us and experience the taste of Ghana like never before. Whether you’re here for a casual meal, a special occasion, or simply to enjoy great food and company, we look forward to welcoming you to Strange World Restaurant.'
  containerDiv.appendChild(joinUsParagraph)

  const contactHeading = document.createElement('h3')
  contactHeading.textContent = 'Contact Us'
  containerDiv.appendChild(contactHeading)

  const address = document.createElement('p')
  address.innerHTML = '<strong>Address:</strong> 123 Main Street, Accra, Ghana'
  containerDiv.appendChild(address)

  const phone = document.createElement('p')
  phone.innerHTML = '<strong>Phone:</strong> +233 30 222 3333'
  containerDiv.appendChild(phone)

  const email = document.createElement('p')
  email.innerHTML = '<strong>Email:</strong> info@strangeworldrestaurant.com'
  containerDiv.appendChild(email)

  const socialMedia = document.createElement('p')
  socialMedia.innerHTML =
    '<strong>Follow us:</strong> ' +
    "<a href='https://facebook.com/strangeworldrestaurant' target='_blank'>Facebook</a> | " +
    "<a href='https://instagram.com/strangeworldrestaurant' target='_blank'>Instagram</a>"
  containerDiv.appendChild(socialMedia)

  content.appendChild(containerDiv)
}
