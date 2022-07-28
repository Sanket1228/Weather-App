import React from 'react'
import { useAppDispath, useAppSelector } from '../../Store/hooks/store.hooks'
import { DismissAlertAction } from '../../Store/Slices/ShowAlertSlice';
import { Closebutton, ErrorTag } from './AlertComponent.styled'

const AlertComponent: React.FC = ()  => {

  const dispath = useAppDispath();

  const state = useAppSelector(state => state.alert)

  const handleOnClick = () => {
    dispath(DismissAlertAction());
  }

  return (
        state.showAlert ?    
        <ErrorTag>
          {state.alertText}
          <Closebutton onClick={handleOnClick}>X</Closebutton>
        </ErrorTag>
        :
        <></>    
    )
}

export default AlertComponent