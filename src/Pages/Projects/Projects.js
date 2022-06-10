import React from 'react';
import toolWorld from '../../Assets/images/tool-world.png'
import narutoMission from '../../Assets/images/naruto-mission.png'
import miaimiConvention from '../../Assets/images/miami-convention.png'

const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-4xl m-8'>My Projects</h1>
            <div className='grid md:grid-cols-2'>
                <div>
                    <p className='text-center'><span className='neon-text'>Project Name:</span> Tool World</p>
                    <figure className='m-8'>
                        <img className='w-[500px] h-[250px] rounded' src={toolWorld} alt="Tool World Image" />
                    </figure>
                </div>
                <div className='mr-8'>
                    <p className='neon-text'>Project Details:</p>
                    <p className='text overflow-auto h-[16rem] mt-6'>
                        <span className='neon-text-static'>Live Site:</span> <a href="https://tools-manufacturers.web.app/" target="_blank" >https://tools-manufacturers.web.app/</a><br />
                        <span className='neon-text-static'>Git Repo Client:</span> <a href="https://github.com/pippal5536/manufacturer-website-client-side" target="_blank" >https://github.com/pippal5536/manufacturer-website-client-side</a><br/>
                        <span className='neon-text-static'>Git Repo Server:</span> <a href="https://github.com/pippal5536/manufacturer-website-server" target="_blank" >https://github.com/pippal5536/manufacturer-website-server</a>
                        <p><span className='neon-text-static'>Features, Technologies and Tools:</span>
                       Using VS code,  I made this fullstack website  where I used react for frontend and express app for backend. Tool World is a manufacturer type website. Here a user can buy tools, review tools, and can update his/her profile. I used firebase authentication for sign up, sign in and social login. To authorize, I used JWT . While purchasing a tool, user will be redirected to secured payment page and can pay with credit card. I used stripe to initialize payment system. After purchasing a tool, the transaction id will be saved in the database(MongoDB). A user can also delete a unpurchased tool. An admin can make another user admin, add a tool to database, delete tools,and  change payment status. Lastly, I deployed to firebase.
                        </p>
                    </p>
                </div>
                <div>
                    <p className='text-center'><span className='neon-text'>Project Name:</span> Naruto's Mission</p>
                    <figure className='m-8'>
                        <img className='w-[500px] h-[250px] rounded' src={narutoMission} alt="Naruto Image" />
                    </figure>
                </div>
                <div className='mr-8'>
                    <p className='neon-text'>Project Details:</p>
                    <p className='text overflow-auto h-[16rem] mt-6'>
                        <span className='neon-text-static'>Live Site:</span> <a href="https://cheery-entremet-4f28b7.netlify.app/" target="_blank" >https://cheery-entremet-4f28b7.netlify.app/</a><br />
                        <span className='neon-text-static'>Git Repo</span> <a href="https://github.com/pippal5536/naruto-mission" target="_blank" >https://github.com/pippal5536/naruto-mission</a>
                        <p><span className='neon-text-static'>Features, Technologies and Tools:</span>
                        This is a normal website where I used basic HTML and CSS using VS code. The website is an advertisement on behalf of Naruto's Jonnin hunting mission. 
                        </p>
                    </p>
                </div>
                <div>
                    <p className='text-center'><span className='neon-text'>Project Name:</span> Miami Beach  Convention Center</p>
                    <figure className='m-8'>
                        <img className='w-[500px] h-[250px] rounded' src={miaimiConvention} alt="Miami Convention Image" />
                    </figure>
                </div>
                <div className='mr-8'>
                    <p className='neon-text'>Project Details:</p>
                    <p className='text overflow-auto h-[16rem] mt-6'>
                        <span className='neon-text-static'>Live Site:</span> <a href="https://assignment-3-miamiconvention-pippal5536.netlify.app/" target="_blank" >https://assignment-3-miamiconvention-pippal5536.netlify.app/</a><br />
                        <span className='neon-text-static'>Git Repo</span> <a href="https://github.com/pippal5536/miami-convention" target="_blank" >https://github.com/pippal5536/miami-convention</a>
                        <p><span className='neon-text-static'>Features, Technologies and Tools:</span>
                        This is a conventional website where I used  HTML and CSS using VS code. I used bootstrap as CSS framework.  
                        </p>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Projects;