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
    }
  });
}

$(".avtoCategorylinskWrapp").addEventListener("click", (e) => {
  // let categoryName=e.target.textContent.toLowerCase()
  // console.log(e.target.textContent.toLowerCase())
  $(".avtoCardsWrapp").innerHTML = "";
  renderData(e.target.textContent.toLowerCase());
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
