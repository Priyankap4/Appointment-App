import { useCallback, useEffect, useState } from "react";
import {BiCalendar} from "react-icons/bi";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from "./components/AppointmentInfo";
import Search from "./components/Search";

function App() {
  const [appointmentLists, setAppointmentLists] = useState([]);
  const [query, setQuery] = useState("");
const [sortBy, setSortBy] = useState("petName");
const [orderBy, setorderBy] = useState("asc");

  const filteredAppointments = appointmentLists.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a,b)=>{
    let order = (orderBy ==='asc') ? 1 : -1;
    return(
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      ? -1 * order : 1 * order
    )
  })
    const fetchData= useCallback(()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {setAppointmentLists(data)})
  },[]);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
     <h1 className="text-5xl mb-3">
     <AddAppointments/>
     <BiCalendar className="inline-block text-red-400 align-top"/> Your Appointment</h1>
    <Search query={query}
      onQueryChange = {
        myQuery => setQuery(myQuery)
      }
      orderBy = {orderBy}
      onOrderByChange={ mySort => setorderBy(mySort)}
      sortBy = {sortBy}
      onSortByChange = {mySort => setSortBy(mySort)}
    />

    <ul className="divide-y divide-gray-200">
        {filteredAppointments
          .map(appointment => (
            <AppointmentInfo key={appointment.id}
            appointment = {appointment}
              onDeleteAppointment = {
                (appointmentId)=>{
                  setAppointmentLists(appointmentLists.filter(
                   appointment =>
                    appointment.id !== appointmentId
                  ))
                }
              }
            />
          ))
        }
      </ul>

    </div>

  );
}

export default App;
