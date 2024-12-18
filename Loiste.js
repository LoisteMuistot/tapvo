// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("memory-form");
    const gallery = document.getElementById("photo-gallery");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const imageUrl = document.getElementById("image-url").value;
        const caption = document.getElementById("caption").value;

        if (imageUrl && caption) {
            // Create the new memory card
            const col = document.createElement("div");
            col.className = "col-md-4 mb-4";

            const card = document.createElement("div");
            card.className = "card h-100";

            const img = document.createElement("img");
            img.src = imageUrl;
            img.className = "card-img-top";
            img.alt = caption;

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.textContent = caption;

            // Append elements together
            cardBody.appendChild(cardText);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            gallery.appendChild(col);

            // Clear the form
            form.reset();
        } else {
            alert("Please provide both an image URL and a caption.");
        }
    });
});


