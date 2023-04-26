import React, { useState } from 'react'
import Button from './Button';
import styled from 'styled-components';

const FormControl = styled.form`
    width : 100%;
    border: 1px solid ${props =>props.invalid ?'black' : 'red'};
    border-radius: 4px;
    padding: 4vh;
    
    & input{
        border : 1px solid black;
        background-color: ${props =>props.invalid ?'transparent' : 'red'};
    }
`;

export default function Input({inputData}) {
    const [tempGoal, setTempGoal] = useState('');
    const [flag, setFlag] = useState(true);

    const submitHandler = (event) =>{
        event.preventDefault();
        if(tempGoal.trim().length === 0){
            setFlag(false);
            return;
        }
        inputData(tempGoal);
        setTempGoal('');
    }
    const changeHandler = (event) =>{
        setFlag(true);
        setTempGoal(event.target.value);
    }

  return (
    <div className='border'>
        <FormControl invalid={flag}>
            <label style={{color : flag ? 'black':'red'}}>Course Goal:</label><br/>
            <input 
                className= {`inputField  ${flag ?'':'invalid'}`}
                type='text'
                value={tempGoal}
                onChange={changeHandler}
            /><br/><br/>
            <Button onClick={submitHandler}>Add Goal</Button>
        </FormControl>
    </div>
  )
}
