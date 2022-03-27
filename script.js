let contact = false;

const toogleContact = () => {
  let contactElement = document.getElementById("contact");
  let contactUsLabelElement = document.getElementById("contactUsLabel");
  let contactButtonElement = document.getElementById("contactButton");

  if (!contact) {
    contactElement.style.display = "flex";

    if (window.innerWidth > 900) {
      contactButtonElement.style.animation =
        "contactButtonAnimActive 0.5s forwards";
      contactUsLabelElement.style.animation =
        "contactlabelAnimActive 0.3s forwards";
    }

    contactElement.classList.remove("off");
    contact = true;
  } else {
    contactElement.classList.add("off");

    if (window.innerWidth > 900) {
      contactButtonElement.style.animation =
        "contactButtonAnimNormal 0.5s forwards";
      contactUsLabelElement.style.animation =
        "contactlabelAnimNormal 1s forwards";
    } else {
      contactButtonElement.style.animation =
        "footer 1s ease-in-out infinite alternate";
    }

    contact = false;
    setTimeout(() => {
      contactElement.style.display = "none";
    }, 480);
  }
};
