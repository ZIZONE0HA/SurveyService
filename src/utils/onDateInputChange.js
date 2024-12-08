import { formatDate } from './formatDate';

export const onDateInputChange = (e, setter) => {
    // 숫자 외 제거
    const value = e.target.value.replace(/\D/g, ''); 

     // 입력된 값이 존재할 경우 처리
    if (value.length <= 8) {
        // 값이 8자리가 되면 날짜 유효성 검증
        if (value.length === 8) {
            const year = parseInt(value.slice(0, 4), 10);
            const month = parseInt(value.slice(4, 6), 10);
            const day = parseInt(value.slice(6, 8), 10);

            const isValidDate = (year, month, day) => {
                const date = new Date(year, month - 1, day); // month는 0부터 시작
                return (
                    date.getFullYear() === year &&
                    date.getMonth() + 1 === month &&
                    date.getDate() === day
                );
            };

            if (isValidDate(year, month, day)) {
                setter(formatDate(value)); // 유효한 날짜일 경우 포맷 적용
            } else {
                setter(value); // 유효하지 않은 경우 숫자만 그대로 유지
            }
        } else {
            // 8자리가 되지 않았을 경우, 숫자만 그대로 표시
            setter(value);
        }
    }
};

