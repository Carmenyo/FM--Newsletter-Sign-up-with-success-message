
  const form = document.querySelector(".cardFormJS");
  const successMessage = document.querySelector(".cardSuccessJS");
  const mainCard = document.querySelector(".cardJS");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    successMessage.classList.remove("hide");
    mainCard.classList.add("hide");

  });
