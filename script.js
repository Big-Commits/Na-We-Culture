document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const msg = document.createElement('div');
    msg.innerText = "🎉 You have subscribed!";
    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.right = "20px";
    msg.style.padding = "10px 20px";
    msg.style.background = "green";
    msg.style.color = "white";
    msg.style.borderRadius = "8px";
    msg.style.zIndex = "9999";

    document.body.appendChild(msg);

    setTimeout(() => msg.remove(), 3000);

    this.reset();
});
