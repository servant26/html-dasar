function fetchData() {
    fetch('https://650e4b88a8b42265ec2d00ef.mockapi.io/api/v1/nintendo')
        .then(response => response.json())
        .then(data => {
            const gameList = data;

            const carouselContainer = document.querySelector('.carousel-container');
            const carousel = document.createElement('div');
            carousel.classList.add('carousel');
            carouselContainer.appendChild(carousel);

            for (var i = 0; i < gameList.length; i++) {
                const slide = document.createElement('div');
                slide.classList.add('slide');
                slide.innerHTML = `
                    <img src="${gameList[i].gambar}" alt="${gameList[i].nama_game}">
                    <h2>${gameList[i].nama_game}</h2>
                    <p>${gameList[i].deskripsi}</p>
                    <a href="${gameList[i].link}" target="_blank" class="more">More...</a><br><br>
                    `;
                    carousel.appendChild(slide);
                }

            const prevBtn = document.createElement('button');
            prevBtn.id = 'prevBtn';
            prevBtn.classList.add('nav-btn');
            prevBtn.innerText = 'Previous';
            carouselContainer.appendChild(prevBtn);

            const nextBtn = document.createElement('button');
            nextBtn.id = 'nextBtn';
            nextBtn.classList.add('nav-btn');
            nextBtn.innerText = 'Next';
            carouselContainer.appendChild(nextBtn);

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

            // Initialize the carousel
            updateCarousel();
            })
            
            .catch(error => {
                console.error('Terjadi Kesalahan :', error);
            })
    }

    fetchData();