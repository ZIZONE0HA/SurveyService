import { formatDate } from "./formatDate";

export const validateSurvey = (surveyData) =>{

   // 제목 검사
    if (!surveyData.title.trim()) {
    return "설문조사 제목을 입력해 주세요.";
}

    // 날짜 검사
    const { isValid: isStartValid } = formatDate(surveyData.startDate);
    if (!isStartValid) {
        return "시작일을 입력해주세요.";
    }

    const { isValid: isEndValid } = formatDate(surveyData.endDate);
    if (!isEndValid) {
        return "종료일을 입력해주세요.";
    }

    // 질문, 옵션 검사
    for (let qid = 0; qid < surveyData.questions.length; qid++) {
        const question = surveyData.questions[qid];
        if (!question.questionText.trim()) {
            return `${qid + 1}번 질문의 내용을 입력해주세요.`;
        }

        const options = question.options || [];
        if (options.length === 0) {
            return `${qid + 1}번 질문에 최소 하나의 옵션을 추가해주세요.`;
        }

        for (let oid = 0; oid < options.length; oid++) {
            if (!options[oid].optionText.trim()) {
                return `${qid + 1}번 질문의 옵션 ${oid + 1}의 내용을 입력해주세요.`;
            }
        }
    }

    return null; // 에러가 없을 경우
}