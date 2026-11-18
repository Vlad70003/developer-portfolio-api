export function parseDate(value: string): Date {
    const [day, month, year] = value.split('.').map(Number);

    const date = new Date(Date.UTC(year, month - 1, day));

    if (
        !Number.isInteger(day) ||
        !Number.isInteger(month) ||
        !Number.isInteger(year) ||
        year < 100 ||
        date.getUTCFullYear() !== year ||
        date.getUTCMonth() !== month - 1 ||
        date.getUTCDate() !== day
    ) {
        throw new Error(`Некорректная дата: ${value}. Ожидается dd.mm.yyyy`);
    }

    return date;
}