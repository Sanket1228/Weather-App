import React from 'react'
import { useAppSelector } from '../../Store/hooks/store.hooks'
import { Container } from './ShowConditionComponent.styled'

const ShowConditionComponent:React.FC = () => {
  const state = useAppSelector(state => state)

  return (
    state?.data.data?.weather.length !== 0 && state?.data.data?.weather.length !== undefined && state.alert.showAlert !== true ?
    <Container>
      {
          <div>
              {state?.data.data?.weather.map((data) => 
                  <>
                      {data.description}
                  </>
              )}
          </div>
      }
    </Container> :
    <></>
  )
}

export default ShowConditionComponent