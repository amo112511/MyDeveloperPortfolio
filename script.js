
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const year = document.getElementById("year");

// Show the current year in the footer.
year.textContent = new Date().getFullYear();

// Open or close the navigation menu on small screens.
menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("open");

  const menuIsOpen = navigation.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", menuIsOpen);
  menuToggle.setAttribute(
    "aria-label",
    menuIsOpen ? "Close navigation" : "Open navigation"
  );
});

// Close the menu after someone selects a link.
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});
