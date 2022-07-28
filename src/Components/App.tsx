// import {  useAppSelector } from "../Store/hooks/store.hooks";
import AlertComponent from "./AlertComponent/AlertComponent";
import InputComponent from "./InputComponent/InputComponent";
import ShowConditionComponent from "./ShowConditionComponent/ShowConditionComponent";

const App:React.FC = () => {

    // const state = useAppSelector(state => state)
   
    return (
        <div className="App">
            <InputComponent/>
            <AlertComponent/>
            <ShowConditionComponent/>
        </div>
    )
    
}
    
export default App;
