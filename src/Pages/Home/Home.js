import React from 'react';
import resume from '../../Assets/resume/OISHIK_BISWAS_RESUME.pdf'
import '../../../src/App.css'


const Home = () => {
    return (
        <div>
            <p className='neon-text'>This is home</p>
            Download
            <a className='neon-btn' href={resume} download="OISHIK_BISWAS_RESUME">Download</a>
        </div>
    );
};

export default Home;