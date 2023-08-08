console.log("Let's get this party started!");
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#text-input');
const gifList = document.querySelector('#gif-list');



searchForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    if (searchInput.value === "")
    { 
        console.log("youou");
        return; 
    }
    if (this.id === "clearb" )
    {
        console.log("meeee");
        return;
    }
    const result = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { api_key: "psFrGvwewNkza2DO3DmUee0eMJ6l6CrH", q: searchInput.value } });
    if (result.data.data[0] === undefined)
    {
        return;
    }
    searchInput.value = "";
    const url = result.data.data[0].images.original.url;
    appendToList(url);
})

 function appendToList(url)
 {
    let gifImage = document.createElement("img");
    gifImage.src =  url;
    gifImage.classList.add("images");
    gifList.appendChild(gifImage);
 }

$("#clearb").on("click", function(evt) {
    evt.preventDefault();
    gifList.innerHTML = "";
  });
