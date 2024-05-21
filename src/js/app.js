import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './views/ui';
import { validate } from './helpers/validate';
import { showError } from './views/form';

// const { form, email, password } = UI;
const { form, ...inputs } = UI;

//events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});

//handlers
function onSubmit() {
    const isValid = Object.values(inputs).every(el => {
        const isValidInput = validate(el);
        if (!isValidInput) {
            showError(el);
        }
        return isValidInput;
    });
};