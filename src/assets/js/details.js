document.querySelectorAll("a").forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location = this.href;
    }, 200);
  };
});

function toggleColor() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("btn");
    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// 1. យក id ពី URL
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

// 2. fetch data
fetch("../assets/js/json/data.json")
.then(res => res.json())
.then(data => {

    // 3. រក item តាម id
    let item = data.find(x => x.id == id);

    // 4. បង្ហាញ data
    document.getElementById("title").innerText = item.cardTitle;
    document.getElementById("desc").innerText = item.cardDesc;
    document.getElementById("img").src = item.img;

});

fetch("src/components/details.html")
.then(res => res.json())
.then(data => {

    // 3. រក item តាម id
    let item = data.find(x => x.id == id);

    // 4. បង្ហាញ data
    document.getElementById("title").innerText = item.cardTitle;
    document.getElementById("desc").innerText = item.cardDesc;
    document.getElementById("img").src = item.img;

});


