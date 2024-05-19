
    let btn = document.getElementById("submitButton");

    btn.addEventListener("click", function(e) {
    val = document.getElementById("location-now").value;
    val1 = document.getElementById("location-then").value;
    val2 = document.getElementById("route-date").value;
    localStorage.setItem("locationValue", val);
    localStorage.setItem("location-thenValue", val1);
    localStorage.setItem("routeValue", val2);
});

/*     btn.addEventListener("click", function(s) {
    val1 = document.getElementById("location-then").value;
    localStorage.setItem("location-thenValue", val1);
});

    btn.addEventListener("click", function(x) {
    val2 = document.getElementById("route-date").value;
    localStorage.setItem("routeValue", val2);
});*/
