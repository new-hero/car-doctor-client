import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext)
    const url = `https://car-doctor-server-five-gamma.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url,{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then((res) => res.json())
            .then((data) => setBookings(data))
    }, [user, bookings]);

    return (
        <div>
            <div className="overflow-x-auto">
                {bookings.length>0?<table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {bookings.map((booking) => <BookingRow booking={booking} key={booking._id}></BookingRow>)}
                    </tbody>
                    {/* foot */}
                    <tfoot>

                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                    
                        </tr>

                    </tfoot>

                </table>:<p className='text-center'>No Booking service</p>}
            </div>

        </div>
    );
};

export default Bookings;