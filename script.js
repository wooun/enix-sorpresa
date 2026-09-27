const openButton = document.getElementById("openButton");
const surprise = document.getElementById("surprise");
const continueButton = document.getElementById("continueButton");
const secondScene = document.getElementById("secondScene");
const firstScene = document.getElementById("firstScene");
const kawaiiButton = document.getElementById("kawaiiButton");
const kawaiiMessage =  document.getElementById("kawaiiMessage");
const yupiButton = document.getElementById("yupiButton");
const yupiMessage = document.getElementById("yupiMessage");
const tristeButton = document.getElementById("tristeButton");
const tristeMessage = document.getElementById("tristeMessage");
const finalScene = document.getElementById("finalScene");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const dateInput = document.getElementById("dateInput");
const dateLabel = document.getElementById("dateLabel");
const finalMessage = document.getElementById("finalMessage");
const messageContinueButton = document.getElementById("messageContinueButton"); 
let messageClicks = 0;
const messageContinueArea = document.getElementById("messageContinueArea");
const hearts = [];

openButton.addEventListener("click", function() {
    surprise.textContent = "You are very special to me";
    surprise.style.opacity = "1";
    continueButton.style.display = "inline-block";
});

continueButton.addEventListener("click", function() {
    firstScene.style.display = "none";
    secondScene.style.display = "block";
});

function showMessage(message) {
    kawaiiMessage.style.display = "none";
    yupiMessage.style.display = "none";
    tristeMessage.style.display = "none";

    message.style.display = "block";
    message.style.opacity = "1";

    messageClicks++;
    
    if (messageClicks === 3) {
        messageContinueArea.appendChild(messageContinueButton);
        messageContinueButton.style.display = "block";
    }
}

kawaiiButton.addEventListener("click", function() {
    showMessage(kawaiiMessage);
});

yupiButton.addEventListener("click", function() {
    showMessage(yupiMessage);

    setTimeout(function() {
        const centerX = 50;
        const centerY = 50;

        for (let i = 0; i < hearts.length; i++) {
            const angle = (i / hearts.length) * Math.PI * 2;
            const radius = Math.sqrt(Math.random());

            const x = 16 * Math.sin(angle) ** 3;
            const y = 13 * Math.cos(angle) 
            - 5 * Math.cos(2 * angle) 
            - 2 * Math.cos(3 * angle) 
            - Math.cos(4 * angle);
            
            const finalX = centerX + x * radius * 2.0;
            const finalY = centerY - y * radius * 2.0;
            

            hearts[i].style.left = finalX + "%";
            hearts[i].style.top = finalY + "%";

            setTimeout(function() {
            hearts[i].style.opacity = "1";
        }, i * 4);
    }

        setTimeout(function() {
            document.getElementById("enixName").style.opacity = "1";
        }, 4500);

    }, 500);
});

tristeButton.addEventListener("click", function() {
    showMessage(tristeMessage);
});

messageContinueButton.addEventListener("click", function() {
    secondScene.style.display = "none";
    finalScene.style.display = "block";
        
    finalScene.style.opacity = "1";
});

for (let i = 0; i < 750; i++) {
    const heart = document.createElement("span");
    heart.textContent = "♥︎";
    heart.classList.add("heart");

    const size = Math.random() * 15 + 15; 
    heart.style.fontSize = size + "px";

    heart.style.left = Math.random() * 90 + "%";
    heart.style.top = Math.random() * 200 + "%";

    yupiMessage.appendChild(heart);
    hearts.push(heart);
};

yesButton.addEventListener("click", function() {
    yesButton.style.display = "none";
    noButton.style.display = "none";
    dateLabel.style.display = "inline-block";
    dateInput.style.display = "inline-block";
});

dateInput.addEventListener("change", function() {
     const chosenDate = dateInput.value;

    const date = new Date(chosenDate + "T00:00:00");

    const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    finalMessage.textContent = "I can't wait to see you on " 
    + formattedDate + " ♡";

    finalMessage.style.display = "block";

    setTimeout(function() {
        finalMessage.style.opacity = "1";
    }, 100);
});
const noMessages = [
    "Nice try!",
    "mmm... ",
    "Seriously? :(",
    "Are you sure?",
    "Really ˊᴖˋ",
    "You're breaking my heart...",
    "WAAAAAAAA"
];

let noClicks = 0;

noButton.addEventListener("click",function() {
    noButton.textContent =  noMessages[noClicks % noMessages.length];

    noClicks++; 

    yesButton.style.fontSize = (15 + noClicks * 5) + "px";

    noButton.style.position = "absolute";

    const x = Math.random() * 70;
    const y = Math.random() * 60;

    noButton.style.left = x + "%";
    noButton.style.top = y + "%";
});