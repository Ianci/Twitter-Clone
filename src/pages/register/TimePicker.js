import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'

export default function TimePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date ('10-22-2020'))

    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            margin="normal"
            id="date-picker"
            label="Selecciona tu fecha de nacimiento"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            name="date"
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
        </MuiPickersUtilsProvider>
    )
}