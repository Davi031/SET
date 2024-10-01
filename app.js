document.addEventListener("DOMContentLoaded", () => {
    const containerBackground = document.querySelector('.containerBackground');
    const mainBackground = document.querySelector('.mainBackground');
    const traceContainer = document.querySelector('.traceContainer');
    const navBar = document.querySelector('.navBar');

    function checkScrollPosition() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 300) {
            containerBackground.classList.add('hidden');
            mainBackground.classList.remove('hidden');
        } else {
            containerBackground.classList.remove('hidden');
            mainBackground.classList.add('hidden');
        }
    }

    checkScrollPosition();

    window.addEventListener('scroll', checkScrollPosition);

    const slides = document.querySelectorAll('.carouselItem')
    const nextButton = document.querySelector('#nextBtn')
    const prevButton = document.querySelector('#prevBtn')

    let currentSlideIndex = 0;

    nextButton.addEventListener('click', () => {
        if (currentSlideIndex === slides.length - 1) {
            currentSlideIndex = 0
        } else {
            currentSlideIndex++
        }

        updateSlides()
    })

    prevButton.addEventListener('click', () => {
        if (currentSlideIndex === 0) {
            currentSlideIndex = slides.length - 1
        } else {
            currentSlideIndex--
        }

        updateSlides()
    })

    function updateSlides() {
        slides.forEach(slide => {
            slide.classList.remove('carouselItem--visible')
        })

        slides[currentSlideIndex].classList.add('carouselItem--visible')
    }

    traceContainer.addEventListener('click', () => {
        traceContainer.classList.toggle('change')
        navBar.classList.toggle('show')
    })

    const btnLerMais = document.querySelector('.btnLerMais')

    btnLerMais.addEventListener('click', () => {
      
        const invisibleParagraphs = document.querySelectorAll('.invisibleParagraphContainr')
        const textInsideContainer = document.querySelector('.textInsideContainer')
        const sobreNosBackground = document.querySelector('.sobreNosBackground')


        invisibleParagraphs.forEach(paragraph => {
            paragraph.style.display = "block"
            sobreNosBackground.style.height = "auto"
        })
        textInsideContainer.style.height = "auto"
    })
})
