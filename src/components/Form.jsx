import { getTodayDate } from '../utils/getTodayDate';
import Button from './Button';
import './Form.css'
import { onDateInputChange } from '../utils/onDateInputChange';
import QuestionList from './QuestionList';
import { useEffect } from 'react';



const Form = ({ surveyData, setSurveyData, onAddQuestion, optionIdRef, isReadOnly = false}) =>{
    
    //제목
    const onChangeTitle = (e) =>{
        if (isReadOnly) return;//읽기전용이면 변경 불가
        setSurveyData((prev)=>({...prev, title: e.target.value})
        );
    };
    //시작일
    const onChangeStartDate = (e) => {
        if (isReadOnly) return;
        onDateInputChange(e, (value) =>
            setSurveyData((prev) => ({ ...prev, startDate: value }))
        );
    };
    //종료일
    const onChangeEndDate = (e) => {
        if (isReadOnly) return;
        onDateInputChange(e, (value) =>
            setSurveyData((prev) => ({ ...prev, endDate: value }))
        );
    };
    //질문
    // const setQuestions = (questions) =>{
    //     setSurveyData((prev)=> ({...prev, questions}));
    // };
    const setQuestions = (questions) => {
        //!!!함수가 전달됨!!!? ::
        console.log("Updating questions to:", questions);
        if (!Array.isArray(questions)) {
            console.error("Invalid questions value during setQuestions, resetting:", questions);
            questions = []; // 잘못된 상태 복구
        }
        setSurveyData((prev) => ({ ...prev, questions }));
    };
    
    useEffect(() => {
        //surveyData.questions 최신상태
        //배열형태 데이터 정상 출력
        console.log("surveyData.questions updated to:", surveyData.questions);
        //surveyData.questions의 데이터 타입
        //object :: 정상
        console.log("Type of surveyData.questions:", typeof surveyData.questions);
        // surveyData.questions가 배열인지
        //true :: 정상
        console.log("Is surveyData.questions array:", Array.isArray(surveyData.questions));
    }, [surveyData.questions]);
    

    return(
        <div className='Form'>

            <section className='title_section'>
                <h4>설문조사 제목</h4>
                <input type="text" 
                placeholder='제목을 입력해주세요' 
                value={surveyData.title}
                onChange={onChangeTitle}
                readOnly={isReadOnly}
                />
            </section>

            <section className='period_section'>
                <h4>설문조사 기간</h4>
                <div className='input_box'>
                    <input type="text" 
                    placeholder={getTodayDate()} //오늘 날짜를 palceholder로
                    value={surveyData.startDate}
                    onChange={onChangeStartDate}
                    readOnly={isReadOnly}
                    />
                    <input type="text" 
                    placeholder={getTodayDate(30)} //오늘+30일 뒤를 palceholder로
                    value={surveyData.endDate}
                    onChange={onChangeEndDate}
                    readOnly={isReadOnly}
                    />
                </div>
            </section>

            <section className='question_section'>
                <QuestionList
                    questions={surveyData.questions}
                    setQuestions={setQuestions}
                    optionIdRef={optionIdRef}
                    isReadOnly={isReadOnly}/>

                {!isReadOnly && (   
                    <Button 
                    text={<span className="material-symbols-outlined">
                        add
                        </span>}
                    type={'PLUS'}
                    onClick={onAddQuestion}/>
                )}
            </section>

        </div>
    );
}

export default Form;