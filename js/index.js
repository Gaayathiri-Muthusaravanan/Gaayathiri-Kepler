const footer = document.getElementById("footer");
const container = document.querySelector(".container");
footer.style.textAlign="center";
footer.style.backgroundColor="#2c3e50";
footer.style.color="white";
footer.style.padding = "20px";
footer.innerHTML = "Copyrights";
const today = new Date();
const thisYear = today.getFullYear();
footer.innerHTML = `&copy; Gaayathiri Muthusaravanan ${thisYear} — All rights reserved.`;
const skills = ["Java", "Java script", "HTML", "CSS", "Github"];
const skillsSection = document.getElementById("skills");
const skillsList = document.querySelector(".skillsList");
for(let i=0; i<skills.length; i++){
    const skillsItem = document.createElement("li");
    skillsItem.className = "skillsItem";
    skillsItem.textContent = skills[i];
    skillsList.appendChild(skillsItem);
}
skillsSection.appendChild(skillsList);
const messageForm = document.getElementsByName("leave-message")[0];
messageForm.addEventListener("submit",function(event){
    event.preventDefault();
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const userMessage = event.target.userMessage.value;
    console.log(userName);
    console.log(userEmail);
    console.log(userMessage);
    messageForm.reset();
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = ` 
    <a href="mailto:${userEmail}">${userName}</a> 
     <span>: ${userMessage}</span>`;

    messageList.appendChild(newMessage);
    /*

 Append the newMessage to the messageList element
 Save and refresh your browser (or just check your browser for changes if using live extension)
Style your Message Form
 Open your index.css file
 Style your message form fields and buttons keeping in mind:
 adequate specing so form fields aren't crowded
 appropriate sizing in media queries so a user on a mobile device can easily touch/tap into the fields to type
 button sizing to accomodate click and touch/tap interactions
Stretch Goals
These tasks are entirely optional, but if you'd like a challenge then do your best to complete each item.

 (Optional) Hide the #messages section, including the Messages header, when the list is empty
 (Optional) Create an "edit" button for each message entry that allows the user to input a new/modified message

    */
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click",function(e){
        let entry = removeButton.parentNode;
        entry.remove();
        
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
})

