function day2string(index) {
    let arrday = [
        "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"
    ];

    return arrday[index - 1];
}

function showdate() {
    let now = new Date();
    return day2string(now.getDay()) + ", " + now.getDate() + " / " + now.getMonth() + " / " + now.getFullYear()
}

function showtime() {
    let now = new Date();
    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
}

function gen_by_time(timeku) {
    if (timeku == "subuh") { // 3 - 4
        const img = ["subuh.png", "subuh-1.jpg", "subuh-2.jpg",
                        "subuh-3.jpg", "subuh-4.jpg", "subuh-5.png", 
                        "subuh-6.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } if (timeku == "pagi") { // 5 - 7
        const img = ["pagi.png", "pagi-1.jpg", "pagi-2.jpg", "pagi-3.jpg",
                    "pagi-4.jpg", "pagi-5.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } else if (timeku == "pagi-siang") { // 8 - 10
        const img = ["pagi-siang.webp", "pagi-siang-1.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } else if (timeku == "siang") { // 11 - 14
        const img = ["siang.jpg", "siang-1.jpg", "siang-2.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } else if (timeku == "sore-asar") { // 15 - 16
        const img = ["sore-asar.png", "sore-asar-1.png", "sore-asar-2.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } else if (timeku == "magrib") { // 17 
        const img = ["magrib.webp", "magrib-1.jpg", "magrib-2.jpg", "magrib-3.jpg", "magrib-4.jpg",
                        "magrib-5.webp", "magrib-6.png", "magrib-7.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } else if (timeku == "sore-malam") { // 18
        const img = ["sore-malam.jpg", "sore-malam-1.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } else if (timeku == "malam") { // 19 - 20
        const img = ["malam.jpg", "malam-1.jpg", "malam-2.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } else if (timeku == "tengah-malam") { // 21 - 2 (besok)
        const img = ["tengah-malam.jpg", "tengah-malam-1.jpg", "tengah-malam-2.jpg"];
        const random = Math.floor(Math.random() * img.length);
        return img[random]
    } 
}

function genwallpaper() {
    return gen_by_time("pagi")
    let now = new Date();
    let jam = now.getHours()
    if (jam >= 21) {
        return gen_by_time("tengah-malam")
    } else if (jam >= 19) {
        return gen_by_time("malam")
    } else if (jam >= 18) {
        return gen_by_time("sore-malam")
    } else if (jam >= 17) {
        return gen_by_time("magrib")
    } else if (jam >= 15) {
        return gen_by_time("sore-asar")
    } else if (jam >= 11) {
        return gen_by_time("siang")
    } else if (jam >= 8) {
        return gen_by_time("pagi-siang")
    } else if (jam >= 5) {
        return gen_by_time("pagi")
    } else if (jam >= 3) {
        return gen_by_time("subuh")
    } else if (jam >= 0) {
        return gen_by_time("tengah-malam")
    }
    
}

