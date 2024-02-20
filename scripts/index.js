const seatsID = [
  "a1",
  "a2",
  "a3",
  "a4",
  "b1",
  "b2",
  "b3",
  "b4",
  "c1",
  "c2",
  "c3",
  "c4",
  "d1",
  "d2",
  "d3",
  "d4",
  "e1",
  "e2",
  "e3",
  "e4",
  "f1",
  "f2",
  "f3",
  "f4",
  "g1",
  "g2",
  "g3",
  "g4",
  "h1",
  "h2",
  "h3",
  "h4",
  "i1",
  "i2",
  "i3",
  "i4",
  "j1",
  "j2",
  "j3",
  "j4",
];
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
}

document.getElementById("seats-container-id").addEventListener("click", handleSeatClicks);
document.getElementById("apply-button").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("object :>> Apply Button Clicked");
});
