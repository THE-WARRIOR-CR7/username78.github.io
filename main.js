var images = ["1.jpg", "shinchan.png", "doraemon.jpg", "pokemon.jpg", "mickeymouse.jpg", "spongebob.jpg"];
var names = ["MY CARTOON BOOK", "SHIN CHAN", "DORAEMON", "POKEMON", "MICKEY MOUSE CLUBHOUSE", "SPONGEBOB"];
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 5
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}