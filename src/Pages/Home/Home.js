import React from 'react';
import resume from '../../Assets/resume/OISHIK_BISWAS_RESUME.pdf'
import '../../../src/App.css'
import pippal from '../../Assets/images/pippal1.png'
import toolWorld from '../../Assets/images/tool-world.png'
import narutoMission from '../../Assets/images/naruto-mission.png'
import miaimiConvention from '../../Assets/images/miami-convention.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-[6rem]'>
            <div className='lg:h-screen'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={pippal} className=" rounded-lg shadow-2xl lg:mt-[-2rem]" />
                    <div className='lg:ml-[8rem] lg:mt-[-7.5rem]'>
                        <h1 className="text-5xl font-bold neon-text">Frontend Developer </h1>
                        <p className="py-6">Hi! I am a Frontend Web Developer who developes according to client's needs and I love what I do. </p>
                        <a className="neon-button" download="OISHIK_BISWAS_RESUME" href={resume}>My Resume</a>
                    </div>
                </div>
            </div>
            <div className='lg:h-screen lg:mt-[-4rem] '>
                <h1 className='text-4xl text-center '>Projects</h1>
                <div className='grid lg:grid-cols-3 mx-[1rem] mt-[8rem] gap-4'>
                    <div class="card  bg-base-100 shadow-xl image-full">
                        <figure><img src={toolWorld} alt="Tool World" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Tool World</h2>
                            <p>Fullstack Website</p>
                            <div class="card-actions justify-end">
                            <Link to="/projects" className="neon-button">See Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card  bg-base-100 shadow-xl image-full">
                        <figure><img src={narutoMission} alt="naruto" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Naruto's Mission</h2>
                            <p>Normal Website</p>
                            <div class="card-actions justify-end">
                            <Link to="/projects" className="neon-button">See Details</Link>
                            </div>
                        </div>
                    </div>
                    <div class="card  bg-base-100 shadow-xl image-full">
                        <figure><img src={miaimiConvention} alt="convention" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Miami Beach  Convention Center</h2>
                            <p>Conventional Website</p>
                            <div class="card-actions justify-end">
                            <Link to="/projects" className="neon-button">See Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;