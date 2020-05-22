window.addEventListener("load", function () {
  let img = document.getElementById("img");
  let width = document.getElementById("width");
  let height = document.getElementById("height");
  let border = document.getElementById("border");
  let border_color = document.getElementById("border-color");
  let alt = document.getElementById("alt");
  let form = document.getElementById("form");
  let submit = document.getElementById("submit");
  // var valid;

  function validate(field, regex) {
      var result = field.value.search(regex);
      if (result == -1) {
        field.value = "";
        field.style.borderColor = "red";
      } else {
        field.style.borderColor = "rgb(160, 193, 194)";
      }
  }

  function NUM() {
      var numbers = /^[ 0-9]+$/;
      validate(this, numbers);
  }

  function TEXT() {
      var text = /^[a-zA-Z]+$/;
      validate(this, text);
  }
  width.onchange = NUM;
  height.onchange = NUM;
  border.onchange = NUM;
  border_color.onchange = TEXT;
  alt.onchange = TEXT;




  form.addEventListener("submit", evt => {
      evt.preventDefault();
      img.style.width = width.value + "px";
      img.style.height = height.value + "px";
      img.style.border = border.value + "px solid red";
      img.style.borderColor = border_color.value;
      img.setAttribute("alt", alt.value);
  })
})