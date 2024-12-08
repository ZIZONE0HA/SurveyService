import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useContext, useRef, useState } from "react";
import { DispatchContext } from "../App";

const SurveyCreate = () => {   

    const nav = useNavigate();
    const questionIdRef = useRef(1);  //질문 id
    const optionIdRef = useRef(1);  //옵션 id
    const { onCreateSurvey } = useContext(DispatchContext);

    const [surveyData, setSurveyData] = useState({
        title: "",
        startDate: "",
        endDate: "",
        questions: [
            {
                id: 1,
                questionText: "",
                type: "radio",
                required: true,
                options: [
                    { id: 1, optionText: "" },
                ],
            },
            {
                id: 2,
                questionText: "",
                type: "checkbox",
                required: true,
                options: [
                    { id: 1, optionText: "" },
                    { id: 2, optionText: "" },
                ],
            },
        ],
    });

    //등록하기
    const onSubmitSurvey = () =>{
        onCreateSurvey(surveyData); 
        nav("/");
    }

    //질문추가
    const onAddQuestion = () =>{
        setSurveyData((prev)=>({
            ...prev,
            questions:[
                ...prev.questions,
                {
                    id:questionIdRef.current++,
                    questionText:"",
                    type:"radio",
                    required:true,
                    options:[
                        {
                            id:optionIdRef.current++,
                            optionText:"",
                        },
                    ],
                },
            ],
        }));
    }

    return (
        <div>
        <Header title={"설문조사 등록"} leftChild={<Button
            text={<span className="material-symbols-outlined">
                arrow_back
                </span>}
            type={"ICON"} 
        onClick={()=>{nav(-1);}}/>}/>

        <Form
            surveyData={surveyData}
            setSurveyData={setSurveyData}
            onAddQuestion={onAddQuestion}
            optionIdRef={optionIdRef}
        />

        <div className="submit_button">
            <Button text="등록하기"
            type={"SUBMIT"}
            onClick={onSubmitSurvey}/>
        </div>

        </div>
    );
};

export default SurveyCreate;
