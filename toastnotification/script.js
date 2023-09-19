const notificationBtn = document.getElementById('button');
const toastContainer = document.getElementById('toasts');

const messages = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4'
]

function createNotification(){
    const notice = document.createElement('div');
    notice.classList.add('toast');
    notice.innerText = getRandomMessage();

    toastContainer.appendChild(notice);

    setTimeout(() => {
        notice.remove();
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}
notificationBtn.addEventListener('click', () => createNotification());