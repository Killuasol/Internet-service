
    window.addEventListener("load", function(j) {
    val = localStorage.getItem("locationValue");
    val1 = localStorage.getItem("location-thenValue");
    val2 = localStorage.getItem("routeValue");
    localStorage.removeItem("locationValue");
    localStorage.removeItem("location-thenValue");
    localStorage.removeItem("routeValue");
    document.getElementById("now").value = val;
    document.getElementById("then").value = val1;
    document.getElementById("date").value = val2;
})
    /*window.addEventListener("load", function(k) {
    val1 = localStorage.getItem("location-thenValue");
    localStorage.removeItem("location-thenValue");
    document.getElementById("then").value = val1;


})
    window.addEventListener("load", function(l) {
    val2 = localStorage.getItem("routeValue");
    localStorage.removeItem("routeValue");
    document.getElementById("date").value = val2;


})*/
