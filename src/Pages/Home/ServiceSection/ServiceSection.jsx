import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-five-gamma.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center my-10">
                <h3 className="text-2xl">Our Services</h3>
                <h2 className="text-4xl">Our Services Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aut excepturi atque dolorum porro! Corporis saepe aliquam mollitia provident delectus!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard> )
                }
            

            </div>

        </div>
    );
};

export default ServiceSection;