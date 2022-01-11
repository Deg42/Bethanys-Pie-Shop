
// --- Contact toast when sumbmit ---
document.getElementById("submit").onclick = function () {
    var alert = document.getElementById('toast'); //select id of toast
    var bsAlert = new bootstrap.Toast(alert); //inizialize it
    bsAlert.show(); //show it
};
// --- ////////////////////////// ---

