const selectedSeats = [];

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
}

document.getElementById("seats-container-id").addEventListener("click", handleSeatClicks);
document.getElementById("apply-button").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("object :>> Apply Button Clicked");
});
