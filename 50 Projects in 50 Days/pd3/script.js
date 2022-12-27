const container = document.querySelector('.container');

const open = document.getElementById('open').addEventListener('click', () => {
    container.classList.add('show-nav');
});

const close = document.getElementById('close').addEventListener('click', () => {
    container.classList.remove('show-nav')
});


