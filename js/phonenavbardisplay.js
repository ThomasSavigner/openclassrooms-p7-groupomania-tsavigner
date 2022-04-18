const mosaikButton = document.getElementById("mosaiklink");
const notificationsButton = document.getElementById("notificationslink");

mosaikButton.addEventListener('click', displayFlow);

function displayFlow() {
    document.getElementById("asidecontainer").classList.add("d-none");
    document.getElementById("flowcontainer").classList.remove("d-none");
}


notificationsButton.addEventListener('click', displayNotifications);

function displayNotifications() {
    document.getElementById("flowcontainer").classList.add("d-none");
    document.getElementById("asidecontainer").classList.remove("d-none");
}
