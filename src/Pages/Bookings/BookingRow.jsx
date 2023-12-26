import React from 'react';

const BookingRow = ({ booking }) => {
    const { customerName, price, email, serviceTitle, img, date, _id, status } = booking
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            fetch(`https://car-doctor-server-five-gamma.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => { console.log(data) })
        }
    }
    const handleConfirm = (id) => {
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            fetch(`https://car-doctor-server-five-gamma.vercel.app/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ status: "confirm" })
            })
                .then(res => res.json())
                .then(data => { console.log(data) })
        }
    }
    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceTitle}</div>

                    </div>
                </div>
            </td>
            <td>{customerName}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                {status === 'confirm' ? <p className='text-bold'>Confirmed</p> : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Update</button>}
            </th>
        </tr>


    );
};

export default BookingRow;