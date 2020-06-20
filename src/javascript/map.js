export const mapIframe = () => {
  const mapIframe = document.createElement("iframe");
  mapIframe.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9782.040816969156!2d0.9567005!3d52.1977752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5eb0a2c250c520e2!2sCharisma%20Hair!5e0!3m2!1sen!2suk!4v1592678826513!5m2!1sen!2suk"
  );
  mapIframe.setAttribute("allowfullscreen", "true");
  mapIframe.setAttribute("title", "Map of the location of Charisma Hair");
  mapIframe.style.width = "100%";
  mapIframe.style.height = "300px";
  return mapIframe;
};
