import React, { useState } from 'react'
import Button from './Button';
import styled from 'styled-components';
import Model from './model/Model';
import Wrapper from './helper/Wrapper';

const FormControl = styled.form`
    width : 100%;
    border: 1px solid ${props =>props.invalid ?'black' : 'red'};
    border-radius: 4px;
    padding: 4vh;
    
    & input{
        width : 40vw;
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
    <Wrapper>
        {!flag && <Model setFlag = {setFlag}/>}

        <FormControl style={{ width: '50vw' }} invalid={flag}>
            <label style={{color : flag ? 'black':'red'}}>Course Goal:</label><br/>
            <input 
                className= {`${flag ?'':'invalid'}`}
                type='text'
                value={tempGoal}
                onChange={changeHandler}
            /><br/><br/>
            <Button onClick={submitHandler}>Add Goal</Button>
        </FormControl>
    </Wrapper>
  )
}
