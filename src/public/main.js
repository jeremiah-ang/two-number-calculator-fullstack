window.addEventListener("DOMContentLoaded", function () {
  const aInput = document.getElementById("number1");
  const bInput = document.getElementById("number2");
  const operatorSelect = document.getElementById("operators");
  const submitButton = document.getElementById("submit");
  const resultField = document.getElementById("result");
  submitButton.addEventListener("click", function () {
    if (!aInput.reportValidity() || !bInput.reportValidity()) {
      return;
    }
    const aValue = aInput.value;
    const bValue = bInput.value;
    const operator = operatorSelect.value;
    let fetchPromise;
    submitButton.disabled = true;
    // TODO: Implement "multiply" and "divide"
    if (operator === "add") {
      fetchPromise = fetch(`/${operator}?a=${aValue}&b=${bValue}`);
    } else if (operator === "minus") {
      fetchPromise = fetch(`/${operator}/${bValue}?a=${aValue}`, {
        method: "delete"
      });
    } else {
      submitButton.disabled = false;
      return alert("Operator not implemented!");
    }
    fetchPromise
      .finally(function () {
        submitButton.disabled = false;
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        if (json.error) {
          return alert(json.error);
        }
        resultField.textContent = json.result;
      });
  });
});
