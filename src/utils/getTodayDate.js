import { formatDate } from './formatDate';

// export const getTodayDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0');
//     const day = String(today.getDate()).padStart(2, '0');
//     return formatDate(`${year}${month}${day}`);
// };

export const getTodayDate = (daysToAdd = 0) => {
    const today = new Date();
    const targetDate = new Date(today);

    targetDate.setDate(today.getDate() + daysToAdd); // daysToAdd 만큼 날짜를 더함
    
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
};

