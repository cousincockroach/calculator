let result = "";
const buttonsGrid = document.querySelector(".buttons");
const outputBox = document.querySelector(".output-box");
    buttonsGrid.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn')) return;
        const buttonText = e.target.textContent;
        if (buttonText === "C"){
            result = "";
            outputBox.textContent = 0;
            
        }
        else if (buttonText === "="){
            const resultNum = calculateString(result);
            result = resultNum;
            outputBox.textContent = resultNum;
        }
        else {
            result = result + buttonText;
            outputBox.textContent = result;
        }

    })

function calculateString(expr) {

  let cleanExpr = expr.replace(/×/g, '*').replace(/÷/g, '/');
  
  try {

    return Function(`return ${cleanExpr}`)();
  } catch (error) {
    return "Error"; 
  }
}

