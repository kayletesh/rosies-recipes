//buttons

const aboutButton = document.querySelector("#about-tab__button");
aboutButton.addEventListener("click", () => {
  toggleAboutTab();
});

function toggleAboutTab() {
  const aboutButtonSpan = aboutButton.querySelector("span");
  const accordionId = aboutButton.getAttribute("aria-controls");
  const aboutCard = document.querySelector(`#${accordionId}`);
  const isOpen = aboutButton.getAttribute("aria-expanded") === "true";
  console.log(isOpen);
  if (isOpen) {
    aboutButton.setAttribute("aria-expanded", false);
    aboutCard.setAttribute("hidden", "");
    aboutButtonSpan.innerText = "About Rosie's Recipes";
  } else {
    aboutButton.setAttribute("aria-expanded", true);
    aboutCard.removeAttribute("hidden");
    aboutButtonSpan.innerText = "Hide";
  }

  const accordionContent = document.querySelector(`#${accordionId}`);
  console.log(accordionContent);
}

// select all accordion h3
// class Accordion {
//   constructor(aboutTab) {
//     this.rootEl = aboutTab;
//   }
// }

// set a function to each accordion h3
// get each accordion button
// get the aria-controls for each button
// get the div where id matches the button's aria-controls
// check to see if div is opened or closed
// do the opposite of what it currently is

// const accHeaders = document.querySelectorAll(".accordion h3");
// accHeaders.forEach((header) => {
//   header.addEventListener("click", (e) => {
//     const accContent = document.querySelector(
//       `#${header.getAttribute("aria-controls")}`
//     );
//     // jk aria-expanded is on button not content
//     const isOpen = accContent.getAttribute("aria-expanded") === "true";
//     if (isOpen) {
//       accContent.removeAttribute("hidden");
//     } else {
//       accContent.setAttribute("hidden", "");
//     }
//   });
// });
