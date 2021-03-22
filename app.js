let titleEl = document.querySelector(".title");
let authorEl = document.querySelector(".author");
let bookNoEl = document.querySelector(".book-no");
let btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function() {
    let tableEl = document.querySelector(".table")
    tableEl.innerHTML = ` <tbody>
<tr>
    <th scope="row">1</th>
    <td>${titleEl.value}</td>
    <td>${authorEl.value}</td>
    <td>${bookNoEl.value}</td>
</tr>
</tbody>`
})
titleEl.value = "";
authorEl.value = "";
bookNoEl.value = "";