function errorTemplate(msg) {
    return `
    <div class="invalid-feedback" style="color: red;">${msg}</div>
    `
};

/**
 * Function showError. Returns krasivy error message.
 * @param {HTMLInputElement} el 
 */
export function showError(el) {
    const parent = el.parentElement;
    const msg = el.getAttribute('data-invalid-message') || 'Input is not correct';
    el.classList.add('is-invalid')
    const template = errorTemplate(msg);
    parent.insertAdjacentHTML('beforeend', template)
    // document.body.innerHTML = template;
};