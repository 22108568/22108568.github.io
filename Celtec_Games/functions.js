const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
const banner = document.getElementById('banner');

menuToggle.addEventListener('click', () => {
navigation.classList.toggle('active');
banner.classList.toggle('active');
});