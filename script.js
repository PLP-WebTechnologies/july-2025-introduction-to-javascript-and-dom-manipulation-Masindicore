// ----------------------------
// Part 1: JavaScript Basics
// ----------------------------
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
    const age = Number(ageInput.value);

    if (!age) {
        ageResult.innerText = "⚠️ Please enter a valid age.";
        console.log("Invalid input for age");
    } else if (age < 18) {
        ageResult.innerText = "You are a minor.";
        console.log("User is under 18.");
    } else {
        ageResult.innerText = "You are an adult.";
        console.log("User is 18 or older.");
    }
});

// ----------------------------
// Part 2: Functions
// ----------------------------
const greetInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetResult = document.getElementById("greetResult");

// Function #1: Greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome 🚀`;
}

greetBtn.addEventListener("click", () => {
    const name = greetInput.value.trim();
    if (name) {
        greetResult.innerText = greetUser(name);
    } else {
        greetResult.innerText = "⚠️ Please enter your name.";
    }
});

// Function #2: Calculate square of a number
function calculateSquare(num) {
    return num * num;
}
console.log("The square of 4 is:", calculateSquare(4));

// ----------------------------
// Part 3: Loops
// ----------------------------
const numbersBtn = document.getElementById("generateNumbersBtn");
const numbersList = document.getElementById("numbersList");

numbersBtn.addEventListener("click", () => {
    numbersList.innerHTML = ""; // Clear previous numbers

    // Loop #1: For loop 1–5
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        li.innerText = i;
        numbersList.appendChild(li);
    }
});

// Loop #2: Iterate through an array
const colors = ["red", "green", "blue"];
colors.forEach(color => {
    console.log("Color:", color);
});

// ----------------------------
// Part 4: DOM Manipulation
// ----------------------------
const toggleBtn = document.getElementById("toggleColorBtn");
const colorBox = document.getElementById("colorBox");

toggleBtn.addEventListener("click", () => {
    colorBox.classList.toggle("active");
});
