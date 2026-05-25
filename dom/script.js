let provinces = [
  {
    image: "https://asset.ams.com.kh/central/media/2021/05/photo_2021-05-09_17-35-00.jpg",
    province: "Banteay Meanchey",
    district: [
      "Mongkol Borei",
      "Malai",
      "Poipet",
      "Ou Chrov",
      "Preah Netr Preah",
      "Srei Snam",
      "Thmar Puok",
      "Svay Chek"
    ]
  },
  {
    image: "https://www.shutterstock.com/image-illustration/battambang-symbolize-statue-illustration-vector-600nw-2435050667.jpg",
    province: "Battambang",
    district: [
      "Banan",
      "Thma Koul",
      "Batdambang",
      "Bavel",
      "Ek Phnom",
      "Kamrieng",
      "Koas Kralor",
      "Moung Ruessei",
      "Phnum Proek",
      "Rottanak Mondol",
      "Sangkae",
      "Samlout",
      "Sampov Loun",
      "Srei Snam"
    ]
  }
];

// Get parent div from HTML
const provinceCards = document.getElementById("provinceCards");

// Loop province data
provinces.forEach(function (item) {
  let districtHTML = "";

  // Loop district data
  item.district.forEach(function (districtName) {
    districtHTML += `
      <span class="district">${districtName}</span>
    `;
  });

  // Create card
  provinceCards.innerHTML += `
    <div class="card">
      <img src="${item.image}" alt="${item.province}">

      <div class="card-content">
        <h2>${item.province}</h2>

        <div class="district-title">Districts:</div>

        <div class="districts">
          ${districtHTML}
        </div>
      </div>
    </div>
  `;
});