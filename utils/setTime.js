import { toJalaali } from 'jalaali-js';


export function setTime(time) {  

    const expirationDate = new Date(time);
    const now = new Date();
    let diffMs = expirationDate - now;
    const totalSeconds = Math.floor(diffMs / 1000);

    return totalSeconds ; 
}


export const convertToJalali = (dateString) => {
    const date = new Date(dateString);
    const jalaaliDate = toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
    return `${jalaaliDate.jy}/${jalaaliDate.jm}/${jalaaliDate.jd}`;
      }


export const convertToShamsi = (dateString) => {
    const parts = dateString?.split('/'); 
    
    const [year, month, day] = parts.map(part => parseInt(part, 10));

    const jalaaliDate = toJalaali(year, month, day);
    return `${jalaaliDate.jy}/${jalaaliDate.jm}/${jalaaliDate.jd}`;
  };

export const convertToTime = (dateString) => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}