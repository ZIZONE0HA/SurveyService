import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../App";
import Form from "../components/Form/Form";

const SurveyView = () => {
    const params = useParams();
    const nav = useNavigate();
    const surveys = useContext(StateContext);

    const surveyData = surveys.find((survey)=>
    survey.id.toString() === params.id);

    return(
    <div>
        <Header 
        title={"설문조사 상세"} 
        leftChild={<Button
            text={<span className="material-symbols-outlined">
                arrow_back
                </span>}
            type={"ICON"} 
        onClick={()=>{nav(-1);}}/>}/>

        {/* Form 을 읽기전용으로 */}
        <Form surveyData={surveyData} 
        setSurveyData={() => {}} 
        isReadOnly={true} />
    </div>);
};

export default SurveyView;
