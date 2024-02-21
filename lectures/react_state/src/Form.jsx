import {useState} from 'react';

function Form({setUserData}) {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const initialState = {
        name: '',
        email: '',
    };
    const [formState, setFormState] = useState(initialState);

    // function addName(event) {
    //     setName(event.target.value);
    // }

    // function addEmail(event) {
    //     setEmail(event.target.value);
    // }

    function handleInput(event) {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    function addToList(event) {
        event.preventDefault();
        setUserData((prev) => [
            ...prev,
            {
                name: formState.name,
                email: formState.email,
                id: crypto.randomUUID(),
            },
        ]);
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={addToList}>
                <fieldset>
                    <legend>Formular</legend>
                    <label htmlFor='name'></label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={formState.name}
                        onChange={handleInput}
                    />
                    <label htmlFor='email'></label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        value={formState.email}
                        onChange={handleInput}
                    />
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;
