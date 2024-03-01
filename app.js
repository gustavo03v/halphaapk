// app.js
function shortenLink() {
    const originalLink = document.getElementById("original-link").value;
    // Aqui você pode implementar a lógica de encurtamento do link (por exemplo, usando um serviço como Bitly ou TinyURL)
    const shortenedLink = "https://seu-site.com/" + Math.random().toString(36).substring(7);
    document.getElementById("shortened-link").textContent = shortenedLink;
}
