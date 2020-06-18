import React from 'react';
import { useParams } from 'react-router-dom';

function ContactComplete() {
    const params = useParams();

    return (
        <>
            Thank you, {params.name}!
        </>
    );
}

export default ContactComplete;
