const e=document.getElementById("bookmarkList");let t=JSON.parse(localStorage.getItem("bookmarks"));null!==t?(t.forEach(t=>e.innerHTML+=`<li>
          <a href="${t}" target="_blank">${t}</a>
          <button class="delete">X</button>
      </li>`),document.querySelectorAll(".delete").forEach(e=>e.addEventListener("click",e=>{e.target.parentNode.remove(),t.splice(t.indexOf(e.target.previousElementSibling.textContent),1),localStorage.setItem("bookmarks",JSON.stringify(t))}))):t=[],document.getElementById("addBookmarkBtn").addEventListener("click",a=>{let o=document.getElementById("bookmarkInput").value;if(""===o){alert("Неможна додати пустий рядок!");return}if(-1!==t.indexOf(o)){alert("Неможна додати вже існуюче посилання");return}t.push(o),e.innerHTML+=`<li>
                <a href="${o}" target="_blank">${o}</a>
                <button class="delete">X</button>
            </li>`,document.querySelectorAll(".delete").forEach(e=>e.addEventListener("click",e=>{e.target.parentNode.remove(),t.splice(t.indexOf(e.target.previousElementSibling.textContent),1),localStorage.setItem("bookmarks",JSON.stringify(t))})),localStorage.setItem("bookmarks",JSON.stringify(t))});const a=document.getElementById("username"),o=document.getElementById("password");a.value=localStorage.getItem("username"),o.value=localStorage.getItem("password"),document.getElementById("formApp").addEventListener("submit",function(e){e.preventDefault(),localStorage.setItem("username",a.value),localStorage.setItem("password",o.value)});
//# sourceMappingURL=HW-bookmarks.5937fdf4.js.map
