window.addEventListener("load",function(){
    let button = document.getElementById("add");
    let table = document.getElementById('table');
    let del = document.getElementsByClassName("del");
    let diagrama = document.getElementById("diagrama");
    let block_for_diagrama = document.getElementsByClassName("block_for_diagrama");

    
        d1.onmouseover = function(event) {
        let target = event.target;
        target.style.background = 'red';
       
       target.setAttribute("title","80 %");

      };

      d1.onmouseout = function(event) {
        let target = event.target;
        target.style.background = 'rgb(187, 34, 72)';
      
      };
      d2.onmouseover = function(event) {
        let target = event.target;
        target.style.background = 'red';
       
       target.setAttribute("title","60 %");

      };

      d2.onmouseout = function(event) {
        let target = event.target;
        target.style.background = 'rgb(187, 34, 72)';
      
      };
      d3.onmouseover = function(event) {
        let target = event.target;
        target.style.background = 'red';
       
       target.setAttribute("title","100 %");

      };

      d3.onmouseout = function(event) {
        let target = event.target;
        target.style.background = 'rgb(187, 34, 72)';
      
      };

    button.addEventListener('click',function(){
        let fam = prompt("Фамилия студента");
        let ball = +prompt("Средний балл студента");

        let tr = document.createElement('tr');
        table.appendChild(tr);
        tr.classList.add("tr");
        tr.classList.add("tr:nth-child(2n)");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        tr.appendChild(td1);
        td1.classList.add("td");
        td1.innerHTML = "<button class='del'>Удалить</button>";

        tr.appendChild(td2);
        td2.classList.add("td");
        td2.innerHTML = fam;

        tr.appendChild(td3);
        td3.classList.add("td");
        td3.innerHTML = ball;

        

        let block = document.createElement("div");
        diagrama.appendChild(block);
        block.classList.add("block_for_diagrama");
        block.style.height = ball*100/5 + "%";
        

        let p = document.createElement("p");
        block.appendChild(p);
        p.innerText = fam;
        p.classList.add("rotate");

        for(let k=0;k<del.length;k++){
            del[k].addEventListener("click", function(){
                let row = del[k].parentNode.parentNode;
                row.parentNode.removeChild(row);
                diagrama.removeChild(block_for_diagrama[k]);
            })
        }

        block.onmouseover = function(event) {
            let target = event.target;
            target.style.background = 'red';
           
           target.setAttribute("title",ball*100/5 + "%");
    
          };

          block.onmouseout = function(event) {
            let target = event.target;
            target.style.background = 'rgb(187, 34, 72)';
          
          };

         

    })

    

    for(let i=0;i<del.length;i++){
        del[i].addEventListener("click", function(){
            var row = del[i].parentNode.parentNode;
            row.parentNode.removeChild(row);
            diagrama.removeChild(block_for_diagrama[i]);
        })
    }

})