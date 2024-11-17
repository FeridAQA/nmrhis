import React from 'react';
import style from './index.module.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function CalendarContainer(props) {
  const date = new Date(props.date); // Convert to Date
  const parsedDate = dayjs(date || Date.now()); // Use dayjs

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={style.container}>
        <DateCalendar
          className={style.calendar}
          value={parsedDate.isValid() ? parsedDate : dayjs()}
          readOnly
        />
      </div>
    </LocalizationProvider>
  );
}

export default CalendarContainer;
