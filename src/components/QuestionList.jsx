import QuestionItem from "./QuestionItem";

const QuestionList = ({questions=[], setQuestions, optionIdRef, isReadOnly = false}) =>{
    
    //질문 업데이트
    // const onUpdateQuestion = (id,updateQuestion) =>{
    //     setQuestions((prev)=>
    //     prev.map((q)=>(q.id === id
    //         ? {...q, ...updateQuestion}
    //         : q
    //     )));
    // }


    //질문 업데이트
    const onUpdateQuestion = (id, updateQuestion) => {
        if (isReadOnly) return;
        //이전 상태 확인 : 
        console.log("onUpdateQuestion called with id:", id, "and updateQuestion:", updateQuestion);
        setQuestions((prev) => {
            console.log("Previous questions (before map):", prev);
            if (!Array.isArray(prev)) {
                console.error("`prev` is not an array during update:", prev);
                return []; // 문제 상태 복구
            }
    
            const updatedQuestions = prev.map((q) =>
                q.id === id ? { ...q, ...updateQuestion } : q
            );
    
            console.log("Updated questions:", updatedQuestions);
            return updatedQuestions;
        });
    };
    
    //질문 삭제
    const onDeleteQuestion = (id) =>{
        setQuestions((prev)=>
        prev.filter((q) => q.id !== id));
    }   

    // console.log(Array.isArray(questions));

    return(
        <div className="QuestionList">
            <div className="question_wrapper">
                {questions.map((question)=>(
                    <QuestionItem  
                    key={question.id}
                    question={question}
                    onUpdateQuestion={onUpdateQuestion}
                    onDeleteQuestion={onDeleteQuestion}
                    optionIdRef={optionIdRef}
                    isReadOnly={isReadOnly}
                    />
                ))}
            </div>
        </div>
    );
}

export default QuestionList;