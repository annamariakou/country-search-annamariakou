document.addEventListener("DOMContentLoaded", function(){
document.getElementById("searchBar").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        window.location.href = "country.html";
    }
});
});
