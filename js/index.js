document.addEventListener("DOMContentLoaded", function() {
    getBooks()

});

function getBooks() {
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    //.then(res => console.log(res))        you can toggle back and forth to see data in devtools
    .then(books => books.forEach(book => addBooktoDOM(book)))

function addBooktoDOM(book) {
    const listUL = document.querySelector("#list")
    const li = document.createElement("li")
    li.textContent = book.title
    li.addEventListener('click', (e) => renderBook(e, book))
    listUL.append(li)
}

function renderBook(e, book) {
    e.preventDefault()
    const showPanel = document.querySelector("div#show-panel")
    showPanel.innerHTML = ""
    const image = document.createElement("img")
    image.src = book.img_url
    const titleH1 = document.createElement("h1")
    titleH1.textContent = book.title
    const descriptionP = document.createElement("p")
    descriptionP.textContent = book.description
    const userUL = document.createElement("ul")
    book.users.forEach(user => {
        const userLI = document.createElement("li")
        userLI.textContent = user.username
        userUL.append(userLI)
    })

    showPanel.append(image, titleH1, descriptionP, userUL)



}

}