const list = document.getElementById("bookmarkList");
const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
bookmarks.forEach(
  (link) =>
    (list.innerHTML += `<li>
    <a href="${link}" target="_blank">${link}</a>
    <button class="delete">X</button>
</li>`)
);
document.querySelectorAll(".delete").forEach((el) =>
  el.addEventListener("click", (event) => {
    event.target.parentNode.remove();
    bookmarks.splice(
      bookmarks.indexOf(event.target.previousElementSibling.textContent),
      1
    );
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  })
);

document.getElementById("addBookmarkBtn").addEventListener("click", (event) => {
  const link = document.getElementById("bookmarkInput").value;

  if (link === "") {
    alert("Неможна додати пустий рядок!");
    return;
  } else if (bookmarks.indexOf(link) !== -1) {
    alert("Неможна додати вже існуюче посилання");
    return;
  }

  bookmarks.push(link);

  list.innerHTML += `<li>
                <a href="${link}" target="_blank">${link}</a>
                <button class="delete">X</button>
            </li>`;

  document.querySelectorAll(".delete").forEach((el) =>
    el.addEventListener("click", (event) => {
      event.target.parentNode.remove();
      bookmarks.splice(
        bookmarks.indexOf(event.target.previousElementSibling.textContent),
        1
      );
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    })
  );

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
});
