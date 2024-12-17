export const getTodayDate = (daysToAdd = 0) => {
    const today = new Date();
    const targetDate = new Date(today);
    
     // daysToAdd 만큼 날짜를 더함
    targetDate.setDate(today.getDate() + daysToAdd);
    
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
};

