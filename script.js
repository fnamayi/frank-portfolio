// Typing Effect for Profession
const professionElement = document.getElementById("profession");
const professions = ["Software Engineer", "Developer", "Tech Enthusiast"];
let professionIndex = 0;
let charIndex = 0;
function typeProfession() {
  if (charIndex < professions[professionIndex].length) {
    professionElement.innerHTML +=
      professions[professionIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeProfession, 100);
  } else {
    setTimeout(() => {
      professionElement.innerHTML = "";
      charIndex = 0;
      professionIndex = (professionIndex + 1) % professions.length;
      typeProfession();
    }, 2000);
  }
}
typeProfession();
