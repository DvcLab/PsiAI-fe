const categories = [
  {
    name: 'Danger',
    value: 'bg-danger',
  },
  {
    name: 'Success',
    value: 'bg-success',
  },
  {
    name: 'Primary',
    value: 'bg-primary',
  },
  {
    name: 'Info',
    value: 'bg-info',
  },
  {
    name: 'Dark',
    value: 'bg-dark',
  },
  {
    name: 'Warning',
    value: 'bg-warning',
  },
]

const calendarEvents = [
  {
    id: 1,
    title: 'Meeting with Mr. Shreyu',
    start: new Date().setDate(new Date().getDate() + 1),
    end: new Date().setDate(new Date().getDate() + 2),
    className: 'bg-warning text-white',
  },
  {
    id: 2,
    title: 'Interview - Backend Engineer',
    start: new Date(),
    end: new Date(),
    className: 'bg-success text-white',
  },
  {
    id: 3,
    title: 'Phone Screen - Frontend Engineer',
    start: new Date().setDate(new Date().getDate() + 8),
    className: 'bg-info text-white',
  },
  {
    id: 4,
    title: 'Buy Design Assets',
    start: new Date().setDate(new Date().getDate() + 7),
    className: 'bg-primary text-white',
  },
]

export { categories, calendarEvents }
