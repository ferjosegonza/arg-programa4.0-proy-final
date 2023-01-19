document.getElementById("image-tesis-siglo21").addEventListener("click", function () {
    var modal = document.createElement("div");
    modal.id = "modal";

    var img = document.createElement("img");
    img.src = "imagenes/tesis-siglo21.png";
    modal.appendChild(img);

    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "Cerrar";
    closeBtn.addEventListener("click", function () {
        modal.remove();
    });
    modal.appendChild(closeBtn);

    document.body.appendChild(modal);
});

document.getElementById("image-tesis-incade").addEventListener("click", function () {
    var modal = document.createElement("div");
    modal.id = "modal";

    var img = document.createElement("img");
    img.src = "imagenes/tesis-incade.png";
    modal.appendChild(img);

    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "Cerrar";
    closeBtn.addEventListener("click", function () {
        modal.remove();
    });
    modal.appendChild(closeBtn);

    document.body.appendChild(modal);
});

