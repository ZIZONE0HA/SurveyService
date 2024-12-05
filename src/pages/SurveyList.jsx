import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";


const SurveyList = () => {
    const nav = useNavigate();

    return(
        <>
            <Header 
    title={"설문조사 목록"} 
    rightChild={<Button text={'신규'} type={"NEW"} onClick={()=>{nav("/survey-form");}}/>}/>
        </>
    );
};

export default SurveyList;
