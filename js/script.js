const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=spring,nature&tag_mode=all&extras=url_m&format=json&nojsoncallback=1"

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.photos.photo[0]);
    for (let i = 0; i < data.photos.photo.length; i++) {
        var tag = document.createElement("img");
        var title = document.createElement("div");
        tag.src = data.photos.photo[i].url_m;
        var element = document.getElementById("flex");
        element.appendChild(tag);
    }

}
getData();


