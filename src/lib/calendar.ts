// Mock disponibilidade — substituir pela integração com Google Calendar.
export type DayInfo = { date: Date; available: boolean; inMonth: boolean };

export function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

export function buildMonthGrid(month: Date): DayInfo[] {
  const first = startOfMonth(month);
  const firstWeekday = first.getDay(); // 0 = Sun
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();

  const cells: DayInfo[] = [];
  // padding from previous month
  for (let i = 0; i < firstWeekday; i++) {
    const d = new Date(month.getFullYear(), month.getMonth(), i - firstWeekday + 1);
    cells.push({ date: d, available: false, inMonth: false });
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(month.getFullYear(), month.getMonth(), day);
    const wd = d.getDay();
    const isWeekday = wd >= 1 && wd <= 5;
    const future = d.getTime() >= today.getTime();
    cells.push({ date: d, available: isWeekday && future, inMonth: true });
  }
  // trail to complete weeks
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date;
    const d = new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1);
    cells.push({ date: d, available: false, inMonth: false });
  }
  return cells;
}

const ALL_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

export function slotsForDate(date: Date): { time: string; available: boolean }[] {
  // deterministic mock: certain slots "ocupados" based on weekday + date.
  const seed = (date.getDate() + date.getMonth()) % 7;
  return ALL_SLOTS.map((time, idx) => ({
    time,
    available: (idx + seed) % 3 !== 0,
  }));
}

export const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
export const WEEKDAY_SHORT = ["D", "S", "T", "Q", "Q", "S", "S"];
