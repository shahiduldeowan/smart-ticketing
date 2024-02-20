const selectedSeats = [];
const couponCodes = { NEW15: 15, "Couple 20": 20 };

function scrollToSectionHandler() {
  const scrollSectionId = "seat-booking-section-id";
  scrollToSectionById(scrollSectionId);
}

function updateSeats(operation) {
  // Update seats ticket seats left
  updateSeatsCountById("seats-left-id", operation);

  // Update price section seats
  updateSeatsCountById("seats-add-id", operation === "add" ? "sub" : "add");
}

function handleSeatClicks(event) {
  const clickedId = event.target.id;

  if (selectedSeats.includes(clickedId)) {
    selectedSeats.splice(selectedSeats.indexOf(clickedId), 1);
    updateSeatColorsById(clickedId);
    updateSeats("add");

    // Remove table row from table body
    removeTableRowFromTableBodyById(clickedId, "table-body-id");
  } else {
    if (selectedSeats.length < 4) {
      selectedSeats.push(clickedId);
      updateSeatColorsById(clickedId);
      updateSeats("sub");

      // Append table row to table body
      appendTableRowToTableBodyById(clickedId, "table-body-id");
    }
  }
  // Handle Apply button enable disabled
  enableDisableButtonById("apply-button", selectedSeats.length === 4);

  // Update Total Price
  updatePriceById("total-price", selectedSeats.length);
  updatePriceById("grand-total", selectedSeats.length);

  if (selectedSeats.length === 0) {
    enableDisableButtonById("next-button");
  }
}

function handleApplyButton(event) {
  event.preventDefault();
  const couponCodeInputElement = document.getElementById("coupon-code");
  let discount = couponCodes[couponCodeInputElement.value];
  if (discount) {
    doHtmlElementDisplayFlexHiddenById("coupon-error-message", true);
    updateTextById("discount-id-for-coupon", discount);
    doHtmlElementDisplayFlexHiddenById("coupon-form");
    doHtmlElementDisplayFlexHiddenById("coupon-success-message");
    updatePriceById("grand-total", selectedSeats.length, discount);
  } else {
    // Show coupon code error
    doHtmlElementDisplayFlexHiddenById("coupon-error-message");
  }
}

function handlePassengerNameInput(event) {
  let inputValue = event.target.value;
  const isPassengerNameEmpty = isEmptyInputValueById("phone-number");

  if (selectedSeats.length > 0 && !isPassengerNameEmpty && inputValue.length > 0) {
    enableDisableButtonById("next-button", true);
  } else {
    enableDisableButtonById("next-button");
  }
}

function handlePhoneNumberInput(event) {
  let inputValue = event.target.value;
  const isPassengerNameEmpty = isEmptyInputValueById("passenger-name");

  if (selectedSeats.length > 0 && !isPassengerNameEmpty && inputValue.length > 0) {
    enableDisableButtonById("next-button", true);
  } else {
    enableDisableButtonById("next-button");
  }
}

function handleNextButton(event) {
  event.preventDefault();
}

document.getElementById("seats-container-id").addEventListener("click", handleSeatClicks);
document.getElementById("apply-button").addEventListener("click", handleApplyButton);
document.getElementById("passenger-name").addEventListener("keyup", handlePassengerNameInput);
document.getElementById("phone-number").addEventListener("keyup", handlePhoneNumberInput);
document.getElementById("next-button").addEventListener("keyup", handleNextButton);
