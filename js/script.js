const link = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=spring,nature&tag_mode=all&extras=url_m&format=json&nojsoncallback=1"

async function loadData(url) {
    const res = await fetch(url);
    const data = await res.json();
    var flex = document.getElementById("flex");
    flex.innerHTML = "";
    for (let i = 0; i < data.photos.photo.length; i++) {
        var img = document.createElement("img");
        var div = document.createElement("div");
        var title = document.createElement("div");
        img.addEventListener("click", function (event) {
            document.getElementById("image_box").style.display = "block";
            document.getElementById('img_box').src = event.target.src;
        });
        img.src = data.photos.photo[i].url_m;
        title.innerHTML = data.photos.photo[i].title;
        div.appendChild(title);
        flex.appendChild(div);
        div.appendChild(img);
    }

}
loadData(link);
image_box.addEventListener("click", function (event) {
    document.getElementById("image_box").style.display = "none";
});

const input = document.querySelector("#input");
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        search();
    }
});

const buttom = document.querySelector("#search_button");
buttom.addEventListener("click", function (event) {
    search();
});
function search() {
    loadData(link + '&text=' + input.value);
}

// сперва надо что ?
//     1 - сделать при нажатии элемент видимым,то есть сделать display = block
// 2 - надо чтобы определяло картинку по которой нажали и увеличить ее
// 3 - надо чтобы при втором нажатии картинка закрывалась
