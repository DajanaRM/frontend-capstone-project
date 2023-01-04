import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'


import Heather from './heather'
require("flatpickr/dist/themes/material_green.css")
const BookForm = () => {
    const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a) => <option value={a}>{a}</option>)
return(
    <>
       <div className='columns' >
       <div  >
                <Calendar size={17} id="calendar-icon" />
                <Flatpickr
                    title= 'Select Date'
                    className='form-control flat-picker bg-transparent border-0 shadow-none'
                    options={{
                        inline:true,
                        defaultDate: 'today',
                        minDate: 'today',                        
                        dateFormat: "m-d-y",
                        
                    }}
                    style={{textIndent: '15px' }}
                     />
                
           </div>
           <div>
           <label>
           Number of tables
           <select>
           {tables}
           </select>
           </label>
           </div>
            <div >
            <Flatpickr
                    placeholder= 'From'
                   // className='form-control flat-picker bg-transparent border-0 shadow-none'
                    options={{
                        mode: "range",
                        inline:true,
                        noCalendar: true,
                        enableTime: true,
                        time_24hr: true,
                        minDate: "14:00",
                        maxDate: "20:00"
                      
                    }}
                    style={{textIndent: '15px'}}
                     />
              
             <p>To </p>
             
            <Flatpickr
                    placeholder= 'To'
                   // className='form-control flat-picker bg-transparent border-0 shadow-none'
                    options={{
                        mode: "range",
                        inline:true,
                        noCalendar: true,
                        enableTime: true,
                        time_24hr: true,
                        minDate: "16:00",
                        maxDate: "22:00"
                      
                    }}
                    style={{textIndent: '15px' }}
                     />
             </div> 
             </div>
            
             <button>Confirm</button>
             </>
        )
}

export default BookForm       