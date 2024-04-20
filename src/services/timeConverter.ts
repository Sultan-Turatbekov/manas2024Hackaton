export const convertDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2); // Получаем последние две цифры года
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Получаем месяц, добавляем нули спереди при необходимости
    const day = date.getDate().toString().padStart(2, '0'); // Получаем день месяца, добавляем нули спереди при необходимости
    const hours = date.getHours().toString().padStart(2, '0'); // Получаем часы, добавляем нули спереди при необходимости
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Получаем минуты, добавляем нули спереди при необходимости
    return `${day}.${month}.${year} ${hours}:${minutes}`;
};