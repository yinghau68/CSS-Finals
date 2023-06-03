
function changeMain(event) {
    for(let i=1; i<4; i++) {
        document.getElementById('main' + i).style.display = 'none';
    }
    document.getElementById('main' + event.target.id).style.display = 'inline';
}