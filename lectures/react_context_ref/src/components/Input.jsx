import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';

function Input() {
    const {firstName} = useContext(UserContext);
    return (
        <div>
            <form>
                <fieldset>
                    <legend>
                        Add something <i>{firstName}</i>
                    </legend>
                    <input type='text' name='title' />
                    <textarea></textarea>
                    <button>Send</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Input;
