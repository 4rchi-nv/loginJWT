import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './views/ui';
import { validate } from './helpers/validate';

const { form, email, password } = UI;

//events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});

//handlers
function onSubmit() {
    
}