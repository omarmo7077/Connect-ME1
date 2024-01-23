const buttonClose = document.querySelectorAll('[data-dismiss="modal"]');
const modal = document.querySelector(".modal");
const trigger = document.querySelector('[data-toggle="modal"]');

// Static backdrop

function getStaticClass(modal) {
    modal.classList.add("astroui-modal-static");
    document.body.style.overflow = "hidden";
    document.body.classList.add("astroui-modal-open");
    setTimeout(() => {
        modal.classList.remove("astroui-modal-static");
    }, 100);
}

// Show modal

function showModal(modal) {
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 100);
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.body.classList.add("astroui-modal-open");
}

// Remove modal

function dismissModal(modal) {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 200);
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.body.classList.remove("astroui-modal-open");
}

dismissModal(modal);

//
// Function on dismissing modal by button close

const getDismiss = (buttonClose, modal) => {
    buttonClose.addEventListener("click", () => {
        dismissModal(modal);
    });
};

buttonClose.forEach((buttonClose) => {
    getDismiss(buttonClose, modal);
});

// Open modal

trigger.addEventListener("click", () => {
    showModal(modal);
});

// Close modal with press escape

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show")) {
        dismissModal(modal);
    }
});
