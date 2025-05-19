let income = 0;
let categories = [];

function setIncome() 
{
  const incomeInput = document.getElementById("income").value;
  income = parseFloat(incomeInput);
  updateUI();
}

document.getElementById("category-form").addEventListener("submit", function(e) 
{
  e.preventDefault();

  const name = document.getElementById("cat-name").value;
  const percent = parseFloat(document.getElementById("cat-percent").value);

  if (percent < 0 || percent > 100) 
    {
    alert("Percentage must be between 0 and 100");
    return;
    }

  categories.push({ name, percent });
  updateUI();

  this.reset();
});

function updateUI() 
{
  const list = document.getElementById("allocations");
  list.innerHTML = "";

  let totalPercent = 0;

  categories.forEach(cat => 
    {
    const amount = income * (cat.percent / 100);
    const li = document.createElement("li");
    li.textContent = `${cat.name} - ${cat.percent}% = $${amount.toFixed(2)}`;
    list.appendChild(li);

    totalPercent += cat.percent;
  });

  document.getElementById("total-percent").textContent = totalPercent + "%";
  document.getElementById("remaining-percent").textContent = (100 - totalPercent) + "%";
}

