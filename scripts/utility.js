/**
 * The scrollToSection function scrolls the webpage smoothly to a specified section based on its ID.
 * @param id - The `id` parameter in the `scrollToSection` function is the ID of the section you want
 * to scroll to on the webpage. This function will find the element with the specified ID and smoothly
 * scroll the page to bring that element into view.
 */
function scrollToSectionById(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/**
 * The function `updateSeatColorsById` toggles between primary and secondary background colors and text
 * colors for an element with a specific id.
 * @param id - The `id` parameter in the `updateSeatColorsById` function is used to identify the HTML
 * element that needs to have its colors updated. This function toggles between two sets of CSS classes
 * to change the background and text colors of the specified element.
 */
function updateSeatColorsById(id) {
  const element = document.getElementById(id);
  const cssClassList = element.classList;
  const primaryCssColorClass = "bg-primary-color";
  const secondaryCssColorClass = "bg-secondary-background-color";
  const textWhiteCssColorClass = "text-white";
  const textGrayCssColorClass = "text-gray-text-color";

  if (cssClassList.contains(secondaryCssColorClass)) {
    cssClassList.remove(secondaryCssColorClass, textGrayCssColorClass);
    cssClassList.add(primaryCssColorClass, textWhiteCssColorClass);
  } else {
    cssClassList.remove(primaryCssColorClass, textWhiteCssColorClass);
    cssClassList.add(secondaryCssColorClass, textGrayCssColorClass);
  }
}

/**
 * The function `updateSeatsCountById` updates the seat count displayed in an HTML element based on the
 * specified operation.
 * @param id - The `id` parameter is the unique identifier of the HTML element whose seat count needs
 * to be updated.
 * @param operation - The `operation` parameter in the `updateSeatsCountById` function is used to
 * determine whether to subtract or add a seat count. If the `operation` is "sub", it subtracts 1 from
 * the current seat count. If the `operation` is anything else, it adds 1
 */
function updateSeatsCountById(id, operation) {
  const element = document.getElementById(id);
  const seats = parseInt(element.innerText);
  if (operation === "sub") {
    element.innerText = seats - 1;
  } else {
    element.innerText = seats + 1;
  }
}

function enableDisableButtonById(id, isVisible) {
  const element = document.getElementById(id);
  if (!isVisible) {
    element.disabled = true;
  } else {
    element.removeAttribute("disabled");
  }
}

function appendTableRowToTableBodyById(seatNumber, id) {
  const tableBody = document.getElementById(id);

  // Create the new row element
  const newRow = document.createElement("tr");
  newRow.id = `${seatNumber}-row`;
  newRow.classList.add("border-0");

  // Create and append cells with their content and classes
  const seatCell = document.createElement("td");
  seatCell.classList.add("text-left");
  seatCell.textContent = seatNumber.toUpperCase();
  newRow.appendChild(seatCell);

  const classCell = document.createElement("td");
  classCell.classList.add("text-center");
  classCell.textContent = "Economy";
  newRow.appendChild(classCell);

  const priceCell = document.createElement("td");
  priceCell.classList.add("text-right");
  priceCell.textContent = "550";
  newRow.appendChild(priceCell);

  // Append the new row to the table body
  tableBody.appendChild(newRow);
}

function removeTableRowFromTableBodyById(seatNumber, id) {
  const tableBody = document.getElementById(id);
  const oldRow = document.getElementById(`${seatNumber}-row`);
  tableBody.removeChild(oldRow);
}

function updatePriceById(id, quantity, discount = 0) {
  const element = document.getElementById(id);
  let price = parseInt(element.innerText);
  price = 550 * quantity;
  if (discount && discount > 0) {
    const discount = (price * discount) / 100;
    price = price + discount;
  }
  element.innerText = price;
}
