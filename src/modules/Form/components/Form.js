import React, { useState } from 'react'
import './form.scss';
import CustomButton from '../../../common/CustomButton';
import { Paper, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { handleSaveUser } from '../../../store/users/actions';
import { useHistory } from 'react-router';

function Form({user, handleSaveUser}) {

    let history = useHistory();

    let handleCloseForm = () => {
        history.push('/');
    }
   
    const [userState, setUserState] = useState(
        user || {
            name: '',
            surname: '',
            phone: ''
        }
    );

    let handleSubmit = (e) => {
        e.preventDefault();
        handleSaveUser(userState);
        handleCloseForm();
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
                <TextField label="Фамилия" type="text" name="surname" className="form__input" value={userState.surname} onChange={onInputChange}></TextField>
                <TextField label="Телефон" type="text" name="phone" className="form__input" value={userState.phone} onChange={onInputChange}></TextField>
                <CustomButton title="Сохранить" type="submit" />
                <CustomButton title="Отмена" type="button" handleClick={handleCloseForm} />
            </form>
            <div className="background"></div>
        </Paper>
    );
}

function mapStateToProps(state) {
    return { user: state.user }
}

let mapDispatchToProps = {
    handleSaveUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
