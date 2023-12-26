import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'


const Banner = () => {

    return (
        <div>
            <div className="carousel w-full h-[600px] rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
                    <img src={img1} className='w-full' alt="" />

                    <div className="absolute left-0 right-0 bottom-0 flex transform h-full items-center bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='space-y-7 w-1/3 text-white p-3'>
                            <h1 className='text-6xl text-bold'>Afordable price for car serviceing </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div>
                                <button className='btn mr-5 btn-primary '>Discover more</button>
                                <button className='btn btn-secondary btn-outline'>latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end bottom-5 right-5 mr-5 left-0">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className='w-full' alt="" />
                    <div className="absolute left-0 right-0 bottom-0 flex transform h-full items-center bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='space-y-7 w-1/3 text-white p-3'>
                            <h1 className='text-6xl text-bold'>Afordable price for car serviceing </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div>
                                <button className='btn mr-5 btn-primary '>Discover more</button>
                                <button className='btn btn-secondary btn-outline'>latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" /> */}
                    <div className="absolute flex justify-end bottom-5 right-5 mr-5 left-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className='w-full' alt="" />
                    <div className="absolute left-0 right-0 bottom-0 flex transform h-full items-center bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='space-y-7 w-1/3 text-white p-3'>
                            <h1 className='text-6xl text-bold'>Afordable price for car serviceing </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div>
                                <button className='btn mr-5 btn-primary '>Discover more</button>
                                <button className='btn btn-secondary btn-outline'>latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" /> */}
                    <div className="absolute flex justify-end bottom-5 right-5 mr-5 left-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className='w-full' alt="" />
                    <div className="absolute left-0 right-0 bottom-0 flex transform h-full items-center bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='space-y-7 w-1/3 text-white p-3'>
                            <h1 className='text-6xl text-bold'>Afordable price for car serviceing </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div>
                                <button className='btn mr-5 btn-primary '>Discover more</button>
                                <button className='btn btn-secondary btn-outline'>latest Project</button>
                            </div>
                        </div>
                    </div>

                    {/* <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" /> */}
                    <div className="absolute flex justify-end bottom-5 right-5 mr-5 left-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className='w-full' alt="" />
                    <div className="absolute left-0 right-0 bottom-0 flex transform h-full items-center bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='space-y-7 w-1/3 text-white p-3'>
                            <h1 className='text-6xl text-bold'>Afordable price for car serviceing </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div>
                                <button className='btn mr-5 btn-primary '>Discover more</button>
                                <button className='btn btn-secondary btn-outline'>latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" /> */}
                    <div className="absolute flex justify-end bottom-5 right-5 mr-5 left-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className='w-full' alt="" />
                    <div className="absolute left-0 right-0 bottom-0 flex transform h-full items-center bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]">
                        <div className='space-y-7 w-1/3 text-white p-3'>
                            <h1 className='text-6xl text-bold'>Afordable price for car serviceing </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div>
                                <button className='btn mr-5 btn-primary '>Discover more</button>
                                <button className='btn btn-secondary btn-outline'>latest Project</button>
                            </div>
                        </div>
                    </div>
                    {/* <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" /> */}
                    <div className="absolute flex justify-end bottom-5 right-5 mr-5 left-0">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;