import React from 'react'
import style from "./index.module.scss"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function CalendarContainer(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={style.container}>
        <DateCalendar className={style.calendar} defaultValue={dayjs(props.date ? props.date : Date.now())} readOnly />
      </div>
    </LocalizationProvider>
  )
}

export default CalendarContainer
