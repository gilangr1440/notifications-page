let button = document.querySelector(".main-card__mark-button");
let list = document.getElementsByClassName("main-card__list");
let unread = document.querySelector(".main-card__count");
let unreadCount = 0;

function countTheUnread() {
  let unreadCounted = 0;

  for (let listItem of list) {
    if (listItem.className.split(" ").includes("unread")) {
      unreadCounted++;
    }
  }

  return unreadCounted;
}

function readNotif() {
  for (let listItem of list) {
    if (listItem.className.split(" ").includes("unread")) {
      listItem.classList.remove("unread");
    }
  }

  unread.innerText = countTheUnread();
}

button.onclick = readNotif;

unread.innerText = countTheUnread();
