export const formatDate = (value) =>{
    if (!/^\d*$/.test(value)) return value; // 숫자만 허용
    if (value.length > 8) return value.slice(0, 8); // 8자리 이상 제한
    if (value.length === 8) {
        return `${value.slice(0, 4)}.${value.slice(4, 6)}.${value.slice(6)}`;
    }
    return value;
}