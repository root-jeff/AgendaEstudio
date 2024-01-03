export type DateTypes = 'date' | 'time' | 'datetime';
export const formatDate = (inputDateStr: string, type: DateTypes) => {
  const inputDate = new Date(inputDateStr);
  const pad = (num: number) => num.toString().padStart(2, '0');
  const day = pad(inputDate.getDate());
  const month = pad(inputDate.getMonth() + 1); // Se suma 1 porque los meses en JavaScript van de 0 a 11.
  const year = inputDate.getFullYear();
  const hours = pad(inputDate.getHours());
  const minutes = pad(inputDate.getMinutes());
  return inputDateStr.length > 0
    ? {
        datetime: `${day}/${month}/${year} ${hours}:${minutes}`,
        date: `${day}/${month}/${year}`,
        time: `${hours}:${minutes}`,
      }[type] || ''
    : '';
};
