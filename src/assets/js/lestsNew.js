document.querySelectorAll("a").forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location = this.href;
    }, 200);
  };
});

fetch("../assets/js/json/data.json")
  .then(res => res.json())
  .then(data => {

    let container = document.getElementById("cardLatesNew");
    let template = document.getElementById("cardTemplate");

    let filteredData = data.filter(item => item.category === "LatestNews");

    filteredData.forEach(item => {
      let clone = template.content.cloneNode(true);

      clone.querySelector(".cardImg").src = item.img;
      clone.querySelector(".btnText").textContent = item.btnText;
      clone.querySelector(".cardTitle").textContent = item.cardTitle;
      clone.querySelector(".cardDesc").textContent = item.cardDesc;
      clone.querySelector(".cardLink").href = `/src/components/details.html?id=${item.id}`;

      container.appendChild(clone);
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

// for video

fetch("../assets/js/json/video.json")
  .then(res => res.json())
  .then(data => {

    let container = document.getElementById("videoCard");

    let filteredData = data.filter(item => item.category === "LatestNews");

    filteredData.forEach(item => {

      let card = `
      <a href="playVideo.html?id=${item.id}" class="text-decoration-none text-dark">
        <div class="card mb-3 p-0">
          <div class="row g-0">
            <div class="col-6">
              <iframe class="w-100 rounded-2 video "
                src="${item.video}"
                frameborder="0"
                allowfullscreen>
              </iframe>
            </div>
            <div class="col-6">
              <div class="card-body p-2">
                <p class="card-text videoText ">${item.text}</p>
              </div>
            </div>
          </div>
        </div>
         </a>
      `;

      container.innerHTML += card;
    });

  });