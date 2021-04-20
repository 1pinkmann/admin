import React, { useContext, useState } from 'react'
import './form.scss';
import { userContext } from './../../../contexts/userContext';
import CustomButton from '../../../common/CustomButton';
import { Paper, TextField } from '@material-ui/core';

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
        <Paper className='form' elevation={3}>
            <form className='form__wrapper' onSubmit={handleSubmit}>
                <TextField label="Имя" type="text" name="name" className="form__input" value={userState.name} onChange={onInputChange}></TextField>
                <TextField label="Телефон" type="text" name="phone" className="form__input" value={userState.phone} onChange={onInputChange}></TextField>
                <TextField label="Email" type="text" name="email" className="form__input" value={userState.email} onChange={onInputChange}></TextField>
                <CustomButton title="Сохранить" type="submit" />
                <CustomButton title="Отмена" type="button" handleClick={handleCloseForm} />
            </form>
            <div className="background"></div>
        </Paper>
    );
}
