import { formatDate } from './formatDate';

export const onDateInputChange = (e, setter) => {
    
    const value = e.target.value;
    // 숫자 외 제거
    const {isValid, formatted} = formatDate(value.replace(/\D/g, ''));
    
    if (value.length === 8) {
        if (!isValid) {
            alert("날짜 형식이 유효하지 않습니다!");
            setter(""); // 입력값을 빈 문자열로 초기화
            return;
        }
        setter(formatted); // 유효하면 포맷된 값 설정
    } else {
        setter(value.replace(/\D/g, '')); // 숫자만 입력
    }
};

