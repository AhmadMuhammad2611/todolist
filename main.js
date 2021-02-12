    userinput = document.getElementById('userinput');
    table = document.getElementsByTagName('table')[0];

/****************** Read From LocalStorage ****************/

function readlocalfun() {

    document.getElementById("tbody").innerHTML = localStorage.getItem("key");

}
readlocalfun();

/***********************************************************/

function addtodo() {
    var createdrow = document.createElement('tr');
    var createtdstatus = document.createElement('td');
    var createstatuscheckbox = document.createElement('input');
    createstatuscheckbox.setAttribute('type', 'checkbox');
    createstatuscheckbox.addEventListener('click', checkedfun);
    createtdstatus.appendChild(createstatuscheckbox);
    var createtdtodo = document.createElement('td');
    createtdtodo.innerText = userinput.value;

    var createtdelete = document.createElement('td');
    var createdeleteicon = document.createElement('img');
    createdeleteicon.src = "images/delete.jpg";
    createdeleteicon.addEventListener('click', deletefunction);
    createtdelete.appendChild(createdeleteicon);



    createdrow.appendChild(createtdstatus);
    createdrow.appendChild(createtdtodo);
    createdrow.appendChild(createtdelete);
    document.getElementById("tbody").appendChild(createdrow);
    
    /****************** Save To From LocalStorage ****************/

    function savelocalfun() {

    localStorage.setItem("key", document.getElementById("tbody").innerHTML);

    }
    savelocalfun();
    
    /**************************************************************/

}
function deletefunction(e) {
    if (confirm("R U Sure to delete this task")) {
        document.getElementById("tbody").removeChild(e.target.parentNode);
    } else {
        e.preventDefault();
    }
    //target = e.target;
}
function checkedfun(e) {
    //console.log(e.target.parent.nextElements[0.nodeName);
    e.target.parentElement.nextElementSibling.style.textDecoration === "line-through" ?
        e.target.parentElement.nextElementSibling.style.textDecoration = "none" :
        e.target.parentElement.nextElementSibling.style.textDecoration = "line-through";
}

/************** Clear Local Storage ************/

function clearLocalStorage() {
    localStorage.clear();
    location.reload();
}