import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { useContext, useRef, useState } from "react";
import { DispatchContext } from "../App";
import Modal from "../components/Modal/Modal";
import { validateSurvey } from "../utils/validateSurvey";

const SurveyCreate = () => {   

    const nav = useNavigate();
    const questionIdRef = useRef(1);  //질문 id
    const optionIdRef = useRef(1);  //옵션 id
    const { onCreateSurvey } = useContext(DispatchContext);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        message: "",
        buttons: [],
    });

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
                    { id: optionIdRef.current++, optionText: "" },
                ],
            },
            {
                id: 2,
                questionText: "",
                type: "checkbox",
                required: true,
                options: [
                    { id: optionIdRef.current++, optionText: "" },
                ],
            },
        ],
    });


    //등록하기
    const onSubmitSurvey = () =>{

        //유효성 검증
        const error = validateSurvey(surveyData);

        //오류
        if (error) {
            alert(error); 
            return; 
        }

        //등록성공
        setModalContent({
            message: "새로운 설문조사가 등록되었습니다.",
            buttons: [
                {
                    text: "확인",
                    onClick: () => {
                        setIsModalOpen(false);
                        onCreateSurvey(surveyData);
                        nav("/");
                    },
                },
            ],
        });
        setIsModalOpen(true);
    }

    //질문추가
    const onAddQuestion = () =>{
        setSurveyData((prev)=>({
            ...prev,
            questions:[
                ...prev.questions,
                {
                    iㅑㅕ:questionIdRef.current++,
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

    // 뒤로가기 
    const onBackClick = () => {
        setModalContent({
            message: "작성 중인 설문조사가 있습니다.\n취소하시겠습니까?",
            buttons: [
                {
                    text: "아니오",
                    onClick: () => {
                        setIsModalOpen(false);
                    },
                },
                {
                    text: "예",
                    onClick: () => {
                        setIsModalOpen(false);
                        nav(-1);
                    },
                },
            ],
        });
        setIsModalOpen(true);
    };

    return (
        <div>
        <Header title={"설문조사 등록"} leftChild={<Button
            text={<span className="material-symbols-outlined">
                arrow_back
                </span>}
            type={"ICON"} 
        onClick={onBackClick}/>}/>

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

        {isModalOpen && (
                <Modal
                message={modalContent.message}
                buttons={modalContent.buttons} 
            />
            )}

        </div>
    );
};

export default SurveyCreate;
