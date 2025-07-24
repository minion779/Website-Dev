function answerCheck(selected, correct) {
  const result = document.getElementById("result1");
  if (selected === correct) {
    result.textContent = "Good Job!";
    result.style.color = "green";
  } else {
    result.textContent = "Incorrect. Try Again.";
    result.style.color = "red";
  }
}

function loadQuestion() {
  const level = document.getElementById("difficulty").value;
  const area = document.getElementById("question-area");
  let html = "";

  if (level === "easy") {
    html = `
      <h2>What does it mean to live sustainably?</h2>
      <ul class="options">
        <li><button onclick="answerCheck(0, 0)">Making choices that protect the environment for future generations</button></li>
        <li><button onclick="answerCheck(1, 0)">Only using renewable resources</button></li>
        <li><button onclick="answerCheck(2, 0)">Using as much energy as possible</button></li>
      </ul>
    `;
  } else if (level === "medium") {
    html = `
      <h2>Which is a sustainable farming method?</h2>
      <ul class="options">
        <li><button onclick="answerCheck(0, 1)">Heavy pesticide use</button></li>
        <li><button onclick="answerCheck(1, 1)">Crop rotation and organic fertilization</button></li>
        <li><button onclick="answerCheck(2, 1)">Clear-cutting forests</button></li>
      </ul>
    `;
  } else if (level === "hard") {
    html = `
      <h2>What is a carbon footprint?</h2>
      <ul class="options">
        <li><button onclick="answerCheck(0, 1)">The number of cars you own</button></li>
        <li><button onclick="answerCheck(1, 1)">Your total greenhouse gas emissions</button></li>
        <li><button onclick="answerCheck(2, 1)">Carbon in the soil</button></li>
      </ul>
    `;
  }

  area.innerHTML = html;
  document.getElementById("result1").textContent = ""; // clear previous result
}


