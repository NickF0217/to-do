const addNewBtn = document.querySelector('#add-new');
const modalBg = document.querySelector('#modal-bg');
const modalForm = document.querySelector('#modal');
const modalClose = document.querySelector('#modal-close');

addNewBtn.addEventListener('click', () => {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
})

export {
    addNewBtn, 
    modalClose,
};