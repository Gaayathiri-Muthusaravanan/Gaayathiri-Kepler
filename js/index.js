const footer = document.getElementById("footer");
const container = document.querySelector(".container");
container.appendChild(footer);
footer.style.textAlign="center";
footer.style.backgroundColor="#2c3e50";
footer.style.color="white";
footer.style.padding = "20px";
footer.innerHTML = "Copyrights";
const today = new Date();
const thisYear = today.getFullYear();
footer.innerHTML = `&copy; Gaayathiri Muthusaravanan ${thisYear} — All rights reserved.`;
const skillArray = ["Java", "Java script", "HTML", "CSS", "Github"];
const skillSection = document.getElementById("skills");
const skillList = document.getElementById("skillList");s
for(let i=0; i<skillArray.length; i++){
    const skillItem = document.createElement("li");
    skillItem.className = "skill-item";
    skillItem.textContent = skillArray[i];
    skillList.appendChild(skillItem);
}
skillSection.appendChild(skillList);