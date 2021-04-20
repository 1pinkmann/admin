import React, { useContext, useState } from 'react'
import './form.scss';
import Button from '../../../common/Button';
import { userContext } from './../../../contexts/userContext';

export default function Form() {
    let { editingUser: user, handleSaveUser, handleCloseForm } = useContext(userContext);

    const [userState, setUserState] = useState(
        user || {
            name: '',
            phone: '',
            email: ''
        }
    );

    let handleSubmit = (e) => {
        e.preventDefault();
        handleSaveUser(userState);
    };

    let onInputChange = (e) => {
        setUserState({
            ...userState, [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="form__input"
                    placeholder="Имя"
                    value={userState.name}
                    onChange={onInputChange}
                />
                <input
                    type="text"
                    name="phone"
                    className="form__input"
                    placeholder="Телефон"
                    value={userState.phone}
                    onChange={onInputChange}
                />
                <input
                    type="text"
                    name="email"
                    className="form__input"
                    placeholder="Email"
                    value={userState.email}
                    onChange={onInputChange}
                />
                <Button title="Сохранить" type="submit"/>
                <Button title="Отмена" type="button" handleClick={handleCloseForm}/>
            </form>
            <div className="background"></div>
        </>
    );
}
