// Event listener for changing pages
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchBar").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            localStorage.setItem('searchInput', e.target.value);
            // Change to country info page
            window.location.href = "country.html";
        }
    });
});
