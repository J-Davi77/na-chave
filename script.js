// Adiciona os tooltips do Bootstrap depois que o DOM for carregado
window.addEventListener("DOMContentLoaded", () => {
    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
        (el) => new bootstrap.Tooltip(el)
    );
});
