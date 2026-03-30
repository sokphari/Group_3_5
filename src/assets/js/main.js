document.querySelectorAll("a").forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location = this.href;
    }, 200);
  };
});


fetch("src/assets/js/json/data.json")
  .then(res => res.json())
  .then(data => {
    // ====== Section 1 ======
    let container = document.getElementById("cardLatestNewsForMohePage");
    let template = document.getElementById("cardLatestNewsForMohePage1");

    let filteredLatestNews = data.filter(item => item.category === "LatestNews");

    filteredLatestNews.forEach(item => {
      let clone = template.content.cloneNode(true);

      clone.querySelector(".cardImg").src = item.img;
      clone.querySelector(".btnText").textContent = item.btnText;
      clone.querySelector(".cardTitle").textContent = item.cardTitle;
      clone.querySelector(".cardDesc").textContent = item.cardDesc;
      clone.querySelector(".cardLink").href = `/src/components/details.html?id=${item.id}`;

      container.appendChild(clone);
    });

    // ====== Section 2 ======
    let container1 = document.getElementById("cardBusinessForMohePage");
    let template1 = document.getElementById("cardBusinessForMohePage1");

    let filteredBusinenn = data.filter(item => item.category === "Business");

    filteredBusinenn.forEach(item => {
      let clone = template1.content.cloneNode(true);

      clone.querySelector(".cardImg").src = item.img;
      clone.querySelector(".btnText").textContent = item.btnText;
      clone.querySelector(".cardTitle").textContent = item.cardTitle;
      clone.querySelector(".cardDesc").textContent = item.cardDesc;
       clone.querySelector(".cardLink").href = `/src/components/details.html?id=${item.id}`;

      container1.appendChild(clone);
    });

    // ====== Section 3 ======
    let container2 = document.getElementById("cardITForHomePage");
    let template2 = document.getElementById("cardITForHomePage1");

    let filteredIT = data.filter(item => item.category === "IT");

    filteredIT.forEach(item => {
      let clone = template2.content.cloneNode(true);

      clone.querySelector(".cardImg").src = item.img;
      clone.querySelector(".btnText").textContent = item.btnText;
      clone.querySelector(".cardTitle").textContent = item.cardTitle;
      clone.querySelector(".cardDesc").textContent = item.cardDesc;
       clone.querySelector(".cardLink").href = `/src/components/details.html?id=${item.id}`;

      container2.appendChild(clone);
    });
    // ====== Section 4 ======
    let container3 = document.getElementById("cardArtForHomePage");
    let template3 = document.getElementById("cardArtForHomePage1");

    let filteredArt = data.filter(item => item.category === "Art");

    filteredArt.forEach(item => {
      let clone = template3.content.cloneNode(true);

      clone.querySelector(".cardImg").src = item.img;
      clone.querySelector(".btnText").textContent = item.btnText;
      clone.querySelector(".cardTitle").textContent = item.cardTitle;
      clone.querySelector(".cardDesc").textContent = item.cardDesc;
       clone.querySelector(".cardLink").href = `/src/components/details.html?id=${item.id}`;

      container3.appendChild(clone);
    });
     // ====== Section 5 ======
    let container4 = document.getElementById("cardSportForHomePage");
    let template4 = document.getElementById("cardSportForHomePage1");

    let filteredSport = data.filter(item => item.category === "Sport");

    filteredSport.forEach(item => {
      let clone = template4.content.cloneNode(true);

      clone.querySelector(".cardImg").src = item.img;
      clone.querySelector(".btnText").textContent = item.btnText;
      clone.querySelector(".cardTitle").textContent = item.cardTitle;
      clone.querySelector(".cardDesc").textContent = item.cardDesc;
       clone.querySelector(".cardLink").href = `/src/components/details.html?id=${item.id}`;

      container4.appendChild(clone);
    });


  });

  
/* change color */
  function toggleColor() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("btn");
    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}