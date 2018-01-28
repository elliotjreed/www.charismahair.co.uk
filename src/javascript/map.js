export const mapIframe = () => {
  const mapIframe = document.createElement('iframe')
  mapIframe.setAttribute('src', 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJA9mlvQWw2UcR4iDFUMKisF4&key=AIzaSyBHRxTUDZhmWPzu2ftODJ7lX4A_xmtlUxQ')
  mapIframe.setAttribute('allowfullscreen', 'true')
  mapIframe.setAttribute('title', 'Map of the location of Charisma Hair')
  mapIframe.style.width = '100%'
  mapIframe.style.height = '300px'
  return mapIframe
}
