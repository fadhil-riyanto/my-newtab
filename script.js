document.getElementById("tanggal").innerHTML = showdate()
document.body.style.backgroundImage = "url(pic/" + genwallpaper() + ")"

setInterval(() => {
    document.getElementById("timestamp").innerHTML = showtime()
}, 1);



$("#idForm").submit(function(e) {
    e.preventDefault();
    var inputan = $("#inputan").val()
    console.log(inputan[0])

    if (inputan[0] == '@') {
        if(inputan[1] == 'g') {
            window.location.href = "https://www.google.com/search?q=" + inputan.substring(3)
        } else if(inputan[1] == 'd') {
            window.location.href = "https://duckduckgo.com/?q=" + inputan.substring(3)
        } else if(inputan[1] == '@') {
            window.location.href = inputan.substring(3)
        } 
    } else if (inputan[0] == ':') {
        if (inputan.substring(1) == "pma") {
            window.location.href = "http://127.0.0.1:4582/"
        } if (inputan.substring(1) == "laravel") {
            window.location.href = "http://127.0.0.1:8000/"
        }
    }
    else {
        window.location.href = "https://duckduckgo.com/?q=" + inputan
    }
});
