document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/meme1.jpeg',
        'assets/meme2.jpeg',
        'assets/meme3.jpeg',
        'assets/meme4.jpeg'
    ];

    const texts = [
        'When you ask a person to comply with a requirement during cross-check review when you did not comply with it yourself.',
        'My shelter page after adding stylesheet',
        'When you underestimate the complexity of a task',
        'Me when submitting the task to cross-check even though it is not completed'
    ];

    let currentIndex = 0;
    const totalSlides = images.length;

    const imageContainer = document.querySelector('.content');
    const textContainer = document.querySelector('.text');

    function createSlides() {
        imageContainer.innerHTML = '';
        textContainer.innerHTML = '';

        images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.position = 'absolute';
            img.style.top = '0';
            img.style.left = '0';
            img.style.zIndex = totalSlides - index; // DID not Work here, need to change!
            img.style.transition = 'transform 0.5s ease-in-out';
            img.style.transform = `translateX(${index === currentIndex ? '0' : '100%'})`;
            imageContainer.appendChild(img);
        });

        texts.forEach((text, index) => {
            const p = document.createElement('p');
            p.textContent = text;
            p.style.position = 'absolute';
            p.style.top = '0';
            p.style.left = '0';
            p.style.width = '100%';
            p.style.transition = 'transform 0.5s ease-in-out';
            p.style.transform = `translateX(${index === currentIndex ? '0' : '100%'})`;
            textContainer.appendChild(p);
        });

        imageContainer.style.position = 'relative';
        imageContainer.style.overflow = 'hidden';
        imageContainer.style.width = '100%';
        imageContainer.style.height = '100%';

        textContainer.style.position = 'relative';
        textContainer.style.overflow = 'hidden';
        textContainer.style.width = '100%';
        textContainer.style.height = '100%';
    }

    function updateSlider(index) {
        const imgs = imageContainer.querySelectorAll('img');
        const ps = textContainer.querySelectorAll('p');

        imgs.forEach((img, i) => {
            img.style.transform = `translateX(${i === index ? '0' : '100%'})`;
        });

        ps.forEach((p, i) => {
            p.style.transform = `translateX(${i === index ? '0' : '100%'})`;
        });

        setTimeout(() => {
            imgs[index].style.transform = 'translateX(0)';
            ps[index].style.transform = 'translateX(0)';
        }, 50);
    }

    function goToSlide(index) {
        if (index >= 0 && index < totalSlides) {
            updateSlider(index);
            currentIndex = index;
        }
    }

    const buttons = document.querySelectorAll('.button-container button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => goToSlide(index));
    });

    createSlides();
    updateSlider(currentIndex);
});
