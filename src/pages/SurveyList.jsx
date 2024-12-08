import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SurveyInventory from "../components/SurveyInventory";
import { useContext } from "react";
import { StateContext } from "../App";


const SurveyList = () => {
    const data = useContext(StateContext);
    const nav = useNavigate();

    return(
        <div>
            <Header 
            title={"설문조사 목록"} 
            rightChild={<Button text={'신규'} type={"NEW"} 
            onClick={()=>{nav("/survey-create");}}/>}/>

            <SurveyInventory data={data}/>
        </div>
    );
};

export default SurveyList;
