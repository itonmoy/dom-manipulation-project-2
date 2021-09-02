const inputField = document.getElementById('input-field');
const button = document.getElementById('button');
const mainDiv = document.getElementById('main-div');


button.addEventListener('click', function () {
    const search = inputField.value;

    const url = `https://openlibrary.org/search.json?q=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.docs));
})

const display = datas => {
    // const length = datas.length;
    // console.log(length);
    datas.forEach(item => {
        // console.log(item.title);
        const divElement = document.createElement('div');
        divElement.classList.add("col-md-3");
        divElement.innerHTML = `
        
                <img src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
        `
        mainDiv.appendChild(divElement);


    })
}