import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {UserContext} from '../context/UserContext.jsx';

function LoginForm() {
    const [newName, setNewName] = useState();

    const {setFirstName} = useContext(UserContext);
    const navigate = useNavigate();

    function changeName(e) {
        setNewName(e.target.value);
    }

    function submitNewName(e) {
        e.preventDefault();
        setFirstName(newName);
        navigate('/');
    }
    return (
        <>
            <div>
                <form onSubmit={submitNewName}>
                    <fieldset>
                        <legend>Login</legend>
                        <input
                            onChange={changeName}
                            type='text'
                            name='firstName'
                        />
                        <button type='submit'>log in</button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
