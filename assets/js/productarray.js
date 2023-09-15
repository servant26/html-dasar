let produk = [
    {
        gambar : "../assets/gambar/zelda.jpg",
        nama : "The Legend of Zelda: Breath of the Wild",
        deskripsi : "Nikmati petualangan didunia yang luas",
        link    : "https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch/"
    },
    
    {
        gambar : "../assets/gambar/nsuns4.jpg",
        nama : "Naruto Ultimate Ninja Storm 4",
        deskripsi : "Bertarung menggunakan karakter favoritmu di game ini",
        link : "https://www.nintendo.com/store/products/naruto-shippuden-ultimate-ninja-storm-4-road-to-boruto-switch/"
    },

    {
        gambar : "../assets/gambar/fifa.jpg",
        nama : "EA FC 24",
        deskripsi : "Bermain game bola, rasakan atmosfer baru dari game EAFC 24 ini",
        link : "https://www.nintendo.com/store/products/ea-sports-fc-24-switch/"
    },
            
    {
        gambar : "../assets/gambar/mario.jpg",
        nama : "Mario Kart 8 Deluxe",
        deskripsi : "Balapan mobil dan adu adrenalin bareng Mario dan teman-teman",
        link : "https://www.nintendo.com/store/products/mario-kart-8-deluxe-switch/"
    },

    {
        gambar : "../assets/gambar/mortal_kombat.jpg",
        nama : "Mortal Kombat 11",
        deskripsi : "Game Fighting dengan mekanik menarik yang tidak kalah epic",
        link : "https://www.nintendo.com/store/products/mortal-kombat-11-switch/"
    },

    {
        gambar : "../assets/gambar/rdr.jpg",
        nama : "Red Dead Redemption",
        deskripsi : "Merupakan series sequel dari Red Dead Redemption 2",
        link : "https://www.nintendo.com/store/products/red-dead-redemption-switch/"
    },
    
    {
        gambar : "../assets/gambar/nier.jpg",
        nama : "NieR:Automata The End of YoRHa Edition",
        deskripsi : "Bermain game action adventure seru bersama Nier Automata",
        link : "https://www.nintendo.com/store/products/nier-automata-the-end-of-yorha-edition-switch/"
    },
    
    {
        gambar : "../assets/gambar/fortnite.jpg",
        nama : "Fortnite",
        deskripsi : "Masuk ke medan tempur, bertahan hidup, dan jadilah pemain terakhir",
        link : "https://www.nintendo.com/store/products/fortnite-switch/"
    }
];

window.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; i++) {
        let slide = slides[i];

        if (i < produk.length) {
            slide.innerHTML = `
                <img src="${produk[i].gambar}" alt="${produk[i].nama}">
                <h2>${produk[i].nama}</h2>
                <p>${produk[i].deskripsi}</p>
                <a href="${produk[i].link}" target="_blank" class="more">Baca Selengkapnya...</a><br><br>
            `;
        } else {
            slide.style.display = 'none';
        }
    }
});

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;
const slideCount = slides.length;
const maxIndex = slideCount - 1;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Inisialisasi awal
updateCarousel();

console.log(produk);
