const API_KEY = "AIzaSyAnKqYw1jssiP8LR9H-WncPohIHMUxBdDI";


function search() {
    const input_text = document.getElementById("textbox").value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${input_text}&key=${API_KEY}`;
    //console.log(input_text);

    fetch(url).then((response) => { 
    return response.json();
    })
    .then(data => {
        console.log(data);
        render(data);
    }).catch(console.error());

}

function render(data) {
    var detail = '';
    data.items.forEach(item => {
        detail += `
        <div id="row">
            <div>
                <iframe src = "https://www.youtube.com/embed/${item.id.videoId}" frameborder='0' allowfullscreen></iframe>
            </div>
            <div id="details">
                ${item.snippet.title}<br>
                ${item.snippet.channelTitle}<br>
                <p style="font-size:15px">${item.snippet.description}</p>
            </div>
        </div>
    `;
    });
    document.getElementById('card').innerHTML = detail;

}