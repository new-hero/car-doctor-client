import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData()
    const { user, loading } = useContext(AuthContext)


    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const email = user?.email
        const phone = form.phone?.value
        const order = {
            customerName: name,
            serviceTitle: service.title,
            price: service.price,
            img: service?.img,
            serviceId: service._id,
            date,
            email,
            phone,
            status: "Pending"

        }
        fetch('https://car-doctor-server-five-gamma.vercel.app/bookings',{
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        } )
            .then((res) => res.json())
            .then((data) => {
                if(data.insertedId){
                    alert("Added successful")
                }
            });


    }
    return (

        <div className="flex">

            <div className="w-1/2">
                <h2>{service?.title} </h2>
                <img className="w-[400px]" src={service?.img} alt="" />
                <p className="text-2xl">$ {service?.price} tk </p>
            </div>
            <div className="w-1/2 shadow-2xl bg-base-100">
                <form onSubmit={handleFormSubmit} className="card-body">
                    <div className="flex gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name"
                                name="name"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date"
                                name="date"
                                defaultValue={new Date().getDate()}
                                className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email}
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="tel"
                                name="phone"
                                placeholder="Phone"
                                className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default CheckOut;