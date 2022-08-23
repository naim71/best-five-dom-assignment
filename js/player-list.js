const playerList = [];
function addToList(element){
    const playerName = element.parentNode.children[0].innerText;
    playerList.push(playerName);
    // console.log(playerList);
    // console.log(playerList.length)
    const numOfList = playerList.length;
    document.getElementById("num-of-selected-players").innerText = numOfList;
}