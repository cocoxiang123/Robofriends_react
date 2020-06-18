import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ContactForm() {
    const [name, setName] = useState('');
    const history = useHistory();

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onSubmit() {
        history.push('/contact/' + name);
    }

    return (
        <>
            <input placeholder="Name" value={name} onChange={onNameChange} />
            <button onClick={onSubmit}>SUBMIT</button>
        </>
    );
}

export default ContactForm;
