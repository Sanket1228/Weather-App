import React, { KeyboardEvent, useState } from 'react'
import { useAppDispath } from '../../Store/hooks/store.hooks'
import { FetchWeatherDataThunk } from '../../Store/ThunkActions/FetcheWeatherData';
import { Input, InputButton } from './InputComponent.styled'

const InputComponent:React.FC = () =>  {

    const dispath = useAppDispath();

    const [inputVal, setInputVal] = useState<string>('')

    const handleOnChange = (e:KeyboardEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    }
    
    const handleOnClick = () => {
        dispath(FetchWeatherDataThunk(inputVal));
        setInputVal("");
    }

    return (
        <>
            <Input type="text" value={inputVal} onChange={handleOnChange}>
            </Input>
            <InputButton onClick={handleOnClick}>Enter</InputButton>
        </>
        
    )
}

export default InputComponent