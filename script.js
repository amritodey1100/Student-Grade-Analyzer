let form = document.querySelector(".form-container");
let nameInput = document.querySelector(".student-name");
let gradesInput = document.querySelector(".student-grades");
let resultsContainer = document.querySelector(".results-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let studentName = nameInput.value;

  let gradesArray = gradesInput.value
    .split(",")
    .map((grade) => Number(grade.trim()));

  let sum = 0;
  let count = 0;
  for (let grade of gradesArray) {
    sum += grade;
    if (grade >= 70) {
      count++;
    }
  }
  let average = sum / gradesArray.length;

  console.log(`Average: ${average.toFixed(2)}`);
  if (count >= 3) {
    console.log("Eligible for award");
  } else {
    console.log("Needs improvement");
  }
  resultsContainer.innerHTML += `
<div class="student-result" style="
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  border: 2px solid #d0d0d0;
  border-radius: 12px;
  padding: 24px;
  margin: 16px auto;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
">
  <h3 style="
    margin: 0 0 16px 0;
    font-size: 24px;
    font-weight: 700;
    color: #000000;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #000000;
    padding-bottom: 12px;
  ">${studentName}</h3>
  
  <p style="
    margin: 12px 0;
    font-size: 16px;
    color: #2c2c2c;
    font-weight: 500;
  ">Average: ${average.toFixed(2)}</p>
  
  <p style="
    margin: 12px 0;
    font-size: 16px;
    color: #2c2c2c;
    font-weight: 500;
  ">Grades >= 70: ${count}</p>
  
  <p style="
    margin: 20px 0 0 0;
    font-size: 17px;
    color: ${count >= 3 ? "#000000" : "#666666"};
    font-weight: 700;
    padding: 12px;
    background-color: ${count >= 3 ? "#e8e8e8" : "#f5f5f5"};
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid ${count >= 3 ? "#000000" : "#999999"};
  ">${count >= 3 ? "Eligible for award" : "Needs improvement"}</p>
</div>
`;
});
