//buttons

const aboutButton = document.querySelector("#about-button");

aboutButton.addEventListener("click", () => {
  toggleAboutTab();
});

function toggleAboutTab() {
  console.log("about tab toggled");
  if (aboutButton.innerText === "About Rosie's Recipes") {
    aboutButton.innerText = "Back to Recipes";
  } else {
    aboutButton.innerText = "About Rosie's Recipes";
  }
}
