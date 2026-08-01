const bgMusic = document.getElementById("bgMusic");
const loading = document.getElementById("loading");
const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const finalScreen = document.getElementById("finalScreen");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const message = document.getElementById("message");
const dialogues = [
    "😂 Nice try!",
    "🙄 Nope!",
    "😏 You only have one option.",
    "💜 Friendship can't be cancelled.",
    "🤭 Catch me if you can!",
    "😌 Press YES instead.",
    "🚫 Access Denied.",
    "🤣 Not happening.",
    "💜 Best Friends Forever!",
    "😜 Still trying?"
];
// Loading → Start Screen
setTimeout(() => {
    loading.classList.add("hidden");
    startScreen.classList.remove("hidden");
}, 3000);

// Start Button
startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");

    // Initial position of NO button
    noBtn.style.left = "55%";
    noBtn.style.top = "55%";
});

// Function to move NO button

function moveButton() {
 const card = document.getElementById("questionScreen");

    const rect = card.getBoundingClientRect();

    const x = rect.left + Math.random() * (rect.width - 220);
    const y = rect.top + Math.random() * (rect.height - 120);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.textContent =
        dialogues[Math.floor(Math.random() * dialogues.length)];
 
}


// Desktop
noBtn.addEventListener("mouseover", moveButton);

// Mobile
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

// Click
noBtn.addEventListener("click", moveButton);

startBtn.addEventListener("click", () => {
    noBtn.textContent = "NO 🙄";
});
// YES
yesBtn.addEventListener("click", () => {

    questionScreen.classList.add("hidden");
    finalScreen.classList.remove("hidden");

    message.innerHTML = `
    💜 Thank you for always being there.<br><br>

    Thank you for listening to my bakchodi,
    my random rants,
    my mood swings,
    and every stupid thing I do. 😂<br><br>

    You're genuinely one of the best people in my life.<br><br>

    <b>Happy Best Friends Day! 💜</b><br><br>

    Friendship Status:<br>
    <b>LOCKED FOREVER 🔒</b>
    `;

    confetti({
        particleCount: 250,
        spread: 120,
        origin: { y: 0.6 }
    });
});
