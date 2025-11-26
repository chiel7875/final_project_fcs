document.addEventListener("DOMContentLoaded", function () {

  const darkModeBtn = document.getElementById("dark-mode");
  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerText = "Light Mode";}
         else {
        darkModeBtn.innerText = "Dark Mode";}});
    }

  const addform = document.getElementById("addBookmark");
  if (addform) {
    addform.addEventListener("submit", function (event) {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const desc = document.getElementById("description").value;
      const url = document.getElementById("bkmurl").value;
      const output = document.getElementById("bkm-output");
      if (url === "") {
        alert("Please enter a URL!");
        return;}
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${url}" target="_blank">${title || "No Title"}</a>
        <button class="got-to-website" onclick="window.open('${url}', '_blank')" title="Go to website"> Go to website ${desc}</button>
        <button class="small-btn golden-star" onclick="movetofavorites(this)" title="Add to Favorites">★</button>
        <button class="remove_btn small-btn" onclick="deleteitem(this)" title="Delete">x</button> `;

        // ik enu kn fine hutu bl html w a3mlu hidden bl css to show on click bs u roasted us with time <3 so mnetkhata xD
     
        document.getElementById("bookmarks").appendChild(li);
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("bkmurl").value = "";  });
    }

  const favorite = document.getElementById("favorites");
  if (favorite && favorite.tagName === "FORM") {
    favorite.addEventListener("submit", function (event) {
      event.preventDefault();
      const url = document.getElementById("bkmurl").value;
      if (url === "") {
        alert("Please enter a valid URL!");
        return;}});
  }

  const removefavorite = document.getElementById("remove-favorite");
  if (removefavorite) {
    removefavorite.addEventListener("submit", function (event) {
      event.preventDefault();
      if (confirm("Clear all favorites?")) {
        document.getElementById("favoriteBookmarks").innerHTML = "";}});
  }

  const deleteBtn = document.getElementById("delete-btn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
      if (confirm("Delete all main bookmarks?")) {
        document.getElementById("bookmarks").innerHTML = "";}});
  }
});
 

function movetofavorites(btn) {
  const parentLi = btn.parentElement;
  const originalLink = parentLi.querySelector("a");
  const title = originalLink.innerText;
  const url = originalLink.href;
  const favList = document.getElementById("favoriteBookmarks");
  if (favList.querySelector(`a[href="${url}"]`)) {
    alert("Already in favorites!"); return;} //krmel ma yetkarar nafsu w ysiru kaza wehde saved

  const li = document.createElement("li");  
  li.innerHTML =
     `<a href="${url}" target="_blank">${title}</a>
      <button class="got-to-website" onclick="window.open('${url}', '_blank')">Go to website</button>
      <button class="small-btn hollow-star" onclick="deleteitem(this)" title="Remove from Favorites">☆</button>`;
  favList.appendChild(li);} // kmn kenu byn7tu bl html la ykun more clean.. but again.. TIMEEE..

function deleteitem(btn) {
  btn.parentElement.remove();}