// Form anchor
const targetForScroll = "form_form";
const allATags = document.querySelectorAll("a");
for (const aTag of allATags) {
  if (aTag.id != "exception") {
    aTag.href = "#" + targetForScroll;
    aTag.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById(targetForScroll).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

// Set site icon
document
  .querySelector("head")
  .insertAdjacentHTML(
    "beforeEnd",
    '<link rel="shortcut icon" href="prod.png" type="image/png">'
  );

// Set attribute for img
const allImgTags = document.querySelectorAll("img");
for (const imgTag of allImgTags) {
  imgTag.loading = "lazy";
  imgTag.decoding = "async";
}

// Set attributes for inputs name
const nameInputTags = document.querySelectorAll('input[name="name"]');
for (const nameInputTag of nameInputTags) {
  nameInputTag.required = true;
  nameInputTag.minLength = "1";
  nameInputTag.maxLength = "32";
}

// Set attributes for inputs phone number
const phoneInputTags = document.querySelectorAll('input[name="phone"]');
for (const phoneInputTag of phoneInputTags) {
  phoneInputTag.required = true;
  phoneInputTag.minLength = "6";
  phoneInputTag.maxLength = "18";
  phoneInputTag.dir = "ltr";
  phoneInputTag.style.textAlign = "left";
  phoneInputTag.type = "tel";
}

// Validation inputs phone number
// Set max length for inputs name and phone
document.addEventListener("input", function (event) {
  if (event.target instanceof HTMLInputElement) {
    if (event.target.name == "name") {
      event.target.value = event.target.value.slice(0, 32);
    } else if (event.target.name == "phone") {
      event.target.value = event.target.value.replace(/[^\d()+-]/gi, "");
      event.target.value = event.target.value.slice(0, 18);
    }
  }
});
