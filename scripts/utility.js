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
