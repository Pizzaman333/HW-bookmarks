const e=document.getElementById("bookmarkList"),t=JSON.parse(localStorage.getItem("bookmarks"));t.forEach(t=>e.innerHTML+=`<li>
    <a href="${t}" target="_blank">${t}</a>
    <button class="delete">X</button>
</li>`),document.querySelectorAll(".delete").forEach(e=>e.addEventListener("click",e=>{e.target.parentNode.remove(),t.splice(t.indexOf(e.target.previousElementSibling.textContent),1),localStorage.setItem("bookmarks",JSON.stringify(t))})),document.getElementById("addBookmarkBtn").addEventListener("click",r=>{let n=document.getElementById("bookmarkInput").value;if(""===n){alert("Неможна додати пустий рядок!");return}if(-1!==t.indexOf(n)){alert("Неможна додати вже існуюче посилання");return}t.push(n),e.innerHTML+=`<li>
                <a href="${n}" target="_blank">${n}</a>
                <button class="delete">X</button>
            </li>`,document.querySelectorAll(".delete").forEach(e=>e.addEventListener("click",e=>{e.target.parentNode.remove(),t.splice(t.indexOf(e.target.previousElementSibling.textContent),1),localStorage.setItem("bookmarks",JSON.stringify(t))})),localStorage.setItem("bookmarks",JSON.stringify(t))});
//# sourceMappingURL=HW-bookmarks.be3eff38.js.map
