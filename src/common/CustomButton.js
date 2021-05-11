import { Button } from '@material-ui/core';
import React from 'react';

export default function CustomButton ({type, handleClick, title}) {

    return <Button type = {type} variant="contained" className='button' color="primary" onClick={handleClick} >{title}</Button>;
}