const playerList = [];

function displayList(list){
    const nameList = document.getElementById("player-name-list");
    nameList.innerHTML= '';
    for(let i=0; i < list.length; i++){
        const name = list[i];

        const li = document.createElement('li');
        li.innerText = name;
        nameList.appendChild(li);

    }
}

function addToList(element){

    const playerName = element.parentNode.children[0].innerText;
    playerList.push(playerName);
    const numOfList = playerList.length;
    document.getElementById("num-of-selected-players").innerText = numOfList;

    displayList(playerList);
}