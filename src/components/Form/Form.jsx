import { getTodayDate } from '../../utils/getTodayDate';
import Button from '../Button/Button';
import './Form.css'
import { onDateInputChange } from '../../utils/onDateInputChange';
import QuestionList from '../QuestionList/QuestionList';

const Form = ({ surveyData, setSurveyData, onAddQuestion, optionIdRef, isReadOnly = false}) =>{
    
    //제목
    const onChangeTitle = (e) =>{
        if (isReadOnly) return;//읽기전용이면 변경 불가
        setSurveyData((prev)=>({...prev, title: e.target.value})
        );
    };
    //설문조사 기간
    const onChangeDate = (key) => (e) => {
        if (isReadOnly) return;
        onDateInputChange(e, (value) =>
            setSurveyData((prev) => ({ ...prev, [key]: value }))
        );
    };
    //질문
    const setQuestions = (updateQuestions) => {
        setSurveyData((prev) => {
            const updatedQuestions =
                typeof updateQuestions === "function"
                    ? updateQuestions(prev.questions)
                    : updateQuestions;
    
            if (!Array.isArray(updatedQuestions)) {
                console.error(
                    "Invalid questions value, resetting:",
                    updatedQuestions
                );
                return { ...prev, questions: [] };
            }
            return { ...prev, questions: updatedQuestions };
        });
    };

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
                    onChange={onChangeDate("startDate")}
                    readOnly={isReadOnly}
                    />
                    <input type="text" 
                    placeholder={getTodayDate(30)} //오늘+30일 뒤를 palceholder로
                    value={surveyData.endDate}
                    onChange={onChangeDate("endDate")}
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