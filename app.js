const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = [];
  let container = document.createElement("div");
  // push each input element within form into data array
  for (let index = 1; index < e.target.length - 1; index++) {
    data.push(e.target[index]);
  }
  // for each element in data array, create a h5 element and append its value to it. Then, append the h5 to the container div
  data.forEach((element) => {
    let listing = document.createElement("h5");
    listing.append(
      `${element.previousElementSibling.textContent} ${element.value.trim()}`
    );
    container.append(listing);
  });
  // append container div to body
  document.body.append(container);
});
