import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';
const AboutSection = () => {
    return (
        <div>
            <div className="py-6">
                <div className="flex">
                    <div className="w-1/2 relative">
                        <img src={person} className=" rounded-lg w-3/4 shadow-2xl " />
                        <img src={parts} className=" absolute right-2 w-1/2 top-1/2 rounded-lg  shadow-2xl " />
                    </div>
                    <div className="w-1/2 p-4 flex justify-center items-center">
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;