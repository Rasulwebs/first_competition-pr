// I'm started Abduhamid
let LogoutBtn = document.querySelector(".logoutbtn");
LogoutBtn.addEventListener("click", () => {});
let eye = document.querySelector(".bi-eye");
let cloceEye = document.querySelector(".bi-eye-slash");
let closeModal = document.querySelector(".modalClose");
let Modal = document.querySelector(".WindowModal");
let Logout = document.querySelector(".logoutbtn");
let Logout2 = document.querySelector(".logoutbtn2");
let EmailInput = document.querySelector(".emailInput");
let PasswordInput = document.querySelector(".passwordInput");
let InputWrapperEmail = document.querySelector(".input-wrap1");
let InputWrapperPassword = document.querySelector(".input-wrap2");
let fill = document.querySelector(".fill");
let Dark = document.querySelector(".moon");
let Sun = document.querySelector(".sun");
let p = document.querySelectorAll("p");
let h2 = document.querySelectorAll("h2");
let h3 = document.querySelectorAll("h3");
let h4 = document.querySelectorAll("h4");
let bodyD = document.querySelector("body");
// InputWrapperEmail.style.border="1px solid red"
Dark.addEventListener("click", () => {
  bodyD.classList.add("bg-dark");
  bodyD.classList.remove("bg-light");

  Sun.style.display = "block";
  Dark.style.display = "none";
  p.forEach((el) => {
    el.classList.toggle("white");
  });
  h4.forEach((el) => {
    el.classList.toggle("white");
  });
  h2.forEach((el) => {
    el.classList.toggle("white");
  });
  h3.forEach((el) => {
    el.classList.toggle("white");
  });
});
Sun.addEventListener("click", () => {
  bodyD.classList.add("bg-light");
  bodyD.classList.remove("bg-dark");

  Sun.style.display = "none";
  Dark.style.display = "block";
  h4.forEach((el) => {
    el.classList.toggle("dark");
  });
  p.forEach((el) => {
    el.classList.toggle("dark");
  });
  h2.forEach((el) => {
    el.classList.toggle("dark");
  });
  h3.forEach((el) => {
    el.classList.toggle("dark");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (PasswordInput.value.length < 6) {
    InputWrapperPassword.style.border = "1px solid red";
    fill.innerHTML = "please! there should be at least 6";
  } else {
    InputWrapperPassword.style.border = "1px solid green";
  }
  if (EmailInput.value.length === 0) {
    InputWrapperEmail.style.border = "1px solid red";
  } else {
    InputWrapperEmail.style.border = "1px solid green";
  }
  if (
    InputWrapperEmail.style.border == "1px solid green" &&
    InputWrapperPassword.style.border == "1px solid green"
  ) {
    setTimeout(() => {
      Modal.style.display = "none";
      alert("Ro'yxatdan muvofiyaqatli o'tinngiz");
    }, 2000);
  }
});

Logout.addEventListener("click", () => {
  Modal.style.display = "block";
});
Logout2.addEventListener("click", () => {
  alert(1);
  Modal.style.display = "block";
});
closeModal.addEventListener("click", () => {
  Modal.style.display = "none";
});
cloceEye.style.display = "none";
eye.addEventListener("click", () => {
  eye.style.display = "none";
  cloceEye.style.display = "block";
  pas.type = "text";
});
cloceEye.addEventListener("click", () => {
  eye.style.display = "block";
  cloceEye.style.display = "none";
  pas.type = "password";
});

function renderData(categoryName) {
  avto.map((item) => {
    if (item.categoryAvto == categoryName) {
      const avtoCard = crElement(
        "div",
        "col-lg-3 col-md-6 col-sm-6 mx-auto avtoCard",
        `
            <h4 class="avtoTitle">${item.title}</h4>
            <p class="avtoStyle">${item.carStyle}</p>
            <div class="cardImgWrapp">
              <img
                src="${item.avtoImg}"
                alt="Ford Fiesta"
                class="cardImg"
              />
            </div>
            <div class="avtiInfoWrapp">
              <div class="leftInfoAvtoCard">
                <span class="cardInfoSteps cardInfoStylee">
                  <i class="bi bi-person-fill carInfoIcon"></i>
                  <p class="cardInfotext">5 Seats</p>
                </span>
                <span class="cardInfoContact cardInfoStylee">
                  <i class="fa-solid fa-address-book carInfoIcon"></i>
                  <p class="cardInfotext">21+ Years</p>
                </span>
              </div>
              <div class="rightInfoAvtoCard">
                <span class="cardInfoTech cardInfoStylee">
                  <i class="fa-solid fa-gears carInfoIcon"></i>
                  <p class="cardInfotext">Automatic</p>
                </span>
                <span class="cardInfoContact cardInfoStylee">
                  <i class="fa-solid fa-droplet carInfoIcon"></i>
                  <p class="cardInfotext">1-lit / 2.5 km</p>
                </span>
              </div>
            </div>`
      );

      $(".avtoCardsWrapp").appendChild(avtoCard);
      console.log($(".avtoCardsWrapp"))
    }
  });
}

$(".avtoCategorylinskWrapp").addEventListener("click", (e) => {
  // let categoryName=e.target.textContent.toLowerCase()
  // console.log(e.target.textContent.toLowerCase())
  $(".avtoCardsWrapp").innerHTML = "";

  renderData(e.target.textContent.toLowerCase());
  let TargetValue = e.target.textContent;
  if (TargetValue == "Compact") {
    $(".avtoCardsWrapp").innerHTML = "";
    renderData(TargetValue.toLowerCase());
  }
  if (TargetValue == "Sports cars") {
    $(".avtoCardsWrapp").innerHTML = "";
    renderData(TargetValue.toLowerCase());
  }
  if (TargetValue == "Vans") {
    $(".avtoCardsWrapp").innerHTML = "";
    renderData(TargetValue.toLowerCase());
  }

});
renderData("compact");

$(".ctegorLink2").addEventListener("click", (e) => {
  if ($(".ctegorLink1").classList.contains("titleActiveLink")) {
    $(".ctegorLink1").classList.remove("titleActiveLink");
    $(".ctegorLink3").classList.remove("titleActiveLink");
    $(".ctegorLink2").classList.add("titleActiveLink");
  }
  if ($(".ctegorLink3").classList.contains("titleActiveLink")) {
    $(".ctegorLink3").classList.remove("titleActiveLink");
    $(".ctegorLink1").classList.remove("titleActiveLink");
    $(".ctegorLink2").classList.add("titleActiveLink");
  }
});

$(".ctegorLink1").addEventListener("click", (e) => {
  if ($(".ctegorLink2").classList.contains("titleActiveLink")) {
    $(".ctegorLink2").classList.remove("titleActiveLink");
    $(".ctegorLink3").classList.remove("titleActiveLink");
    $(".ctegorLink1").classList.add("titleActiveLink");
  }
  if ($(".ctegorLink3").classList.contains("titleActiveLink")) {
    $(".ctegorLink3").classList.remove("titleActiveLink");
    $(".ctegorLink2").classList.remove("titleActiveLink");
    $(".ctegorLink1").classList.add("titleActiveLink");
  }
});
$(".ctegorLink3").addEventListener("click", (e) => {
  if ($(".ctegorLink2").classList.contains("titleActiveLink")) {
    $(".ctegorLink2").classList.remove("titleActiveLink");
    $(".ctegorLink1").classList.remove("titleActiveLink");
    $(".ctegorLink3").classList.add("titleActiveLink");
  }
  if ($(".ctegorLink1").classList.contains("titleActiveLink")) {
    $(".ctegorLink1").classList.remove("titleActiveLink");
    $(".ctegorLink2").classList.remove("titleActiveLink");
    $(".ctegorLink3").classList.add("titleActiveLink");
  }
});
