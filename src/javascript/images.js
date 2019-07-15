import eyebrowImageJpg from '../images/eyebrow-service.jpg'
import hairStyleImageJpg from '../images/hair-style-service.jpg'
import mensHairStyleJpg from '../images/mens-hair-service.jpg'
import weddingHairImageJpg from '../images/wedding-hair-service.jpg'
import nailImageJpg from '../images/nail-service.jpg'

import eyebrowImageWebp from '../images/eyebrow-service.webp'
import hairStyleImageWebp from '../images/hair-style-service.webp'
import mensHairStyleWebp from '../images/mens-hair-service.webp'
import weddingHairImageWebp from '../images/wedding-hair-service.webp'
import nailImageWebp from '../images/nail-service.webp'

export const images = () => {
  const photos = [
    [eyebrowImageJpg, eyebrowImageWebp],
    [hairStyleImageJpg, hairStyleImageWebp],
    [mensHairStyleJpg, mensHairStyleWebp],
    [weddingHairImageJpg, weddingHairImageWebp],
    [nailImageJpg, nailImageWebp]
  ]

  const imagesContainer = document.createElement('div')
  imagesContainer.classList.add('columns')
  imagesContainer.classList.add('is-mobile')

  photos.forEach(photo => {
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('column')

    const picture = document.createElement('picture')
    picture.classList.add('image')
    picture.classList.add('is-4by3')
    const source = document.createElement('source')
    source.setAttribute('srcset', photo[1])
    source.setAttribute('type', 'image/webp')

    const image = document.createElement('img')
    image.setAttribute('src', photo[0])
    image.setAttribute('alt', '')

    picture.appendChild(source)
    picture.appendChild(image)

    imageContainer.appendChild(picture)
    imagesContainer.appendChild(imageContainer)
  })

  return imagesContainer
}
