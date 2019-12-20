import React, { useEffect, useState} from 'react';
import axios from 'axios';

const handleSubmit = (values, tools) => {
    const [user, setUser] = useState({ values });

    axios.post('https://reqres.in/api/users', values)
        .then((res) => {
            setUser(res.data);
            console.log(user);
            tools.resetForm();
        })
        .catch((res) => {
            console.log(res);
        })
};

export default handleSubmit;