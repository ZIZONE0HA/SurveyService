//입력받은 날짜 유효성 검증 및 포맷
export const formatDate = (value) =>{
    const cleanValue = value.replace(/\D/g, ''); // 숫자만 허용
    
    // 8자리가 되기 전까지는 그대로 반환
    if (cleanValue.length < 8) {
        return { isValid: false, formatted: cleanValue };
    }

    if (cleanValue.length === 8) {
        const year = cleanValue.slice(0, 4);
        const month = cleanValue.slice(4, 6);
        const day = cleanValue.slice(6, 8);

        const date = new Date(Number(year), Number(month) - 1, Number(day));

        const isValid =
        date.getFullYear() === Number(year) &&
        date.getMonth() + 1 === Number(month) &&
        date.getDate() === Number(day);

        // 유효하면 포맷 적용
        return {
            isValid,
            formatted: isValid 
            ? `${year}.${month.padStart(2, '0')}.${day.padStart(2, '0')}` 
            : cleanValue, 
        };
    }

    return { isValid: false, formatted: cleanValue };
}