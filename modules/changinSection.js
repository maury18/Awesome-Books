/* eslint-disable linebreak-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const  changingSection = () => {
    const list = document.getElementById('list');
    const booksSection = document.querySelector('.books');
    const add = document.getElementById('add');
    const addSection = document.querySelector('.adding-books');
    const contact = document.getElementById('contact');
    const contactSection = document.querySelector('.contact');
    const footer = document.querySelector('footer');

    list.addEventListener('click', () => {
        booksSection.style.display = 'block';
        addSection.style.display = 'none';
        contactSection.style.display = 'none';
        footer.style.marginTop = '7rem';
    })

    add.addEventListener('click', () => {
        booksSection.style.display = 'none';
        addSection.style.display = 'block';
        contactSection.style.display = 'none';
        footer.style.marginTop = '35.1rem';
    })

    contact.addEventListener('click', () => {
        booksSection.style.display = 'none';
        addSection.style.display = 'none';
        contactSection.style.display = 'flex';
        footer.style.marginTop = '30rem';
    })
}
changingSection();
export default changingSection;