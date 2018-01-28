import eyebrowImage from '../images/eyebrow-service.jpg'
import hairStyleImage from '../images/hair-style-service.jpg'
import mensHairStyle from '../images/mens-hair-service.jpg'
import weddingHairImage from '../images/wedding-hair-service.jpg'
import nailImage from '../images/nail-service.jpg'

export const images = () => {
  const photos = [
    eyebrowImage,
    hairStyleImage,
    mensHairStyle,
    weddingHairImage,
    nailImage
  ]

  const imagesContainer = document.createElement('div')
  imagesContainer.classList.add('columns')

  photos.forEach(photo => {
    let imageContainer = document.createElement('div')
    imageContainer.classList.add('column')

    let figure = document.createElement('figure')
    figure.classList.add('image')
    figure.classList.add('is-4by3')

    let image = document.createElement('img')
    image.setAttribute('src', photo)
    image.setAttribute('alt', '')

    figure.appendChild(image)
    imageContainer.appendChild(figure)
    imagesContainer.appendChild(imageContainer)
  })

  return imagesContainer
}
