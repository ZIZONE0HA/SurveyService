import QuestionItem from "../QuestionItem/QuestionItem";

const QuestionList = ({ questions = [], setQuestions, optionIdRef, isReadOnly = false }) => {
    // 질문 업데이트
    const onUpdateQuestion = (id, updatedQuestion) => {
        if (isReadOnly) return; // 읽기 전용 상태 (수정/삭제 비활)
        setQuestions((prev) =>
            prev.map((q) => (q.id === id ? { ...q, ...updatedQuestion } : q))
        );
    };

    // 질문 삭제
    const onDeleteQuestion = (id) => {
        if (isReadOnly) return;
        setQuestions((prev) => prev.filter((q) => q.id !== id));
    };

    return (
        <div className="QuestionList">
            <div className="question_wrapper">
                {questions.map((question) => (
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
};

export default QuestionList;