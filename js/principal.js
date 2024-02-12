document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('isLoggedIn');
    alert('Cerrar sesion');
    window.location.href = '../index.html';
});