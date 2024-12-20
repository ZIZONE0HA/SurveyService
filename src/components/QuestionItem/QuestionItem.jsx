import Button from "../Button/Button";
import OptionList from "../OptionList/OptionList";
import './QuestionItem.css'

const QuestionItem = ({question, onUpdateQuestion, onDeleteQuestion, optionIdRef, isReadOnly = false}) =>{

    const {id, questionText, type, required, options} = question;

    //질문 텍스트
    const onChangeQuestionText = (e) => {
        if (isReadOnly) return;
        const newQuestionText = e.target.value;
        onUpdateQuestion(id, { questionText: newQuestionText });
    }
    //질문타입
    const onChangeType = (e) =>{
        if (isReadOnly) return;
        onUpdateQuestion(id,{type:e.target.value});
    }
    //필수여부토글
    const onToggleRequired = () =>{
        if (isReadOnly) return;
        onUpdateQuestion(id,{required:!required});
    }
    //옵션 업데이트
    const setOptions = (updateOptions) => {
        onUpdateQuestion(id, {
            options:
                typeof updateOptions === "function"
                    ? updateOptions(question.options || [])
                    : updateOptions,
        });
    };
    
    
    
    
    
    return(
        <div className="QuestionItem">

            <input
                type="text"
                placeholder="설문조사 질문 입력"
                value={questionText}
                onChange={onChangeQuestionText}
                readOnly={isReadOnly}
            />

            <select value={type} onChange={onChangeType} disabled={isReadOnly}>
                <option value="radio">radio button</option>
                <option value="checkbox">checkbox</option>
            </select>

            <OptionList options={options} 
            setOptions={setOptions} 
            optionIdRef={optionIdRef} 
            isReadOnly={isReadOnly}/>
            

            <div className="footer_section">
                {!isReadOnly ? (
                    <Button text={'삭제'} 
                type={'DELETE'}
                onClick={() => onDeleteQuestion(id)}/>
                ) : (
                    // SurveyView page 에서 필수항목 위치 고정위한 삭제버튼위치 고정
                    <div className="button_place"></div>
                )}
                <div className="switch_container">
                    <span className="switch_label">필수항목</span>
                    <label className="switch">
                        <input
                        type="checkbox"
                        checked={required}
                        onChange={onToggleRequired}
                        readOnly={isReadOnly}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            
        </div>
    );
}

export default QuestionItem;