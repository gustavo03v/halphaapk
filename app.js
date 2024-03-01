// app.js
document.addEventListener("DOMContentLoaded", () => {
    const appList = document.getElementById("app-list");

    // Fetch app data from apps.json
    fetch("apps.json")
        .then(response => response.json())
        .then(apps => {
            apps.forEach(app => {
                const appItem = document.createElement("div");
                appItem.innerHTML = `
                    <h2>${app.name}</h2>
                    <p>${app.description}</p>
                    <a href="${app.downloadUrl}" download>Download</a>
                `;
                appList.appendChild(appItem);
            });
        })
        .catch(error => console.error("Error fetching app data:", error));
});
