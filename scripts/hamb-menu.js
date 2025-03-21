document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.remove('active');
});