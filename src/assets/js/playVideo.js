let params = new URLSearchParams(window.location.search);
let id = params.get("id");

console.log("ID:", id);

fetch("../assets/js/json/video.json")
  .then(res => res.json())
  .then(data => {

    console.log("DATA:", data);

    let container = document.getElementById("videoDetail");

    let item = data.find(v => v.id == id);

    console.log("ITEM:", item);

    if(item){
      container.innerHTML = `
        <div class="card card1 p-0">
          <iframe id="playVideo"  class="w-100 rounded-2 mb-3"
            src="${item.video}"
            allowfullscreen>
          </iframe>
          <h6 class="title">${item.text}</h6>
        </div>
      `;
    } else {
      container.innerHTML = "<p>Video not found</p>";
    }

  });

 let allData = [];

fetch("../assets/js/json/video.json")
  .then(res => res.json())
  .then(data => {
    allData = data;
    displayData(data); // show all first
  });

function displayData(data){
  let container = document.getElementById("videoCard");
  container.innerHTML = "";

  data.forEach(item => {
    let card = `
    <a href="playVideo.html?id=${item.id}" class="text-decoration-none text-dark">
      <div class="card mt-2 p-0">
        <div class="row g-0">
          <div class="col-5">
            <iframe class="w-100 hvideo rounded-2"
              src="${item.video}"
              frameborder="0"
              allowfullscreen>
            </iframe>
          </div>
          <div class="col-7">
            <div class="card-body p-2">
              <p class="card-text videoText">${item.text}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    `;
    container.innerHTML += card;
  });
}

function filterCategory(category){
  if(category === "all"){
    displayData(allData);
  }else{
    let filtered = allData.filter(item => item.category === category);
    displayData(filtered);
  }
}

  function toggleColor() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("btn");
    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}
