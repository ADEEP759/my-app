import React from 'react'
import moment from "moment";
const Header = () => {
    let date_create= moment().format("DD MMMM YYYY ")
  return (
    <div id='Header'>
    <p id='Date_On_Header'>{date_create}</p>
    <p id="Tittle_on_Header">Ab-Ok-Terminal</p>
    <button className="NGLogsButton" >NG Logs</button>
</div>
  )
}

export default Header