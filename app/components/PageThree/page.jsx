import React from 'react';
import './pageThree.css';
import Link from 'next/link';

function PageThree() {
  const project = ({ imgSrc, projectName, projectSubject, year, link }) => {
    return (
      <Link href={link} target='_blank'>
        <div className="project">
            <img className="projectImage" src={imgSrc} alt={projectName} />
          <div className="projectInfo">
            <div className='info'>
              <h3>{projectName}</h3>
              <p>{projectSubject}</p>
            </div>
            <p className='year'>{year}</p>
          </div>
        </div>
      </Link>
    );
  };

  const projectData1 = {imgSrc: './landingImages/image1.png', projectName: 'Resn', projectSubject: 'Playground website', year: 'Highlighted', link: "https://resn.co.nz/"};
  const projectData2 = {imgSrc: './landingImages/image2.png', projectName: 'Get Unity', projectSubject: 'Tech Company', year: '2023', link: "https://www.getunity.com/"};
  const projectData3 = {imgSrc: './landingImages/image3.png', projectName: 'Tao Tajima', projectSubject: 'Filmmaker', year: '2024', link: "http://taotajima.jp/"};

  return (
    <section className="pageThree" id='pageThree'>
      <h1 className="featuredText">Featured work</h1>
      {project(projectData1)}
      {project(projectData2)}
      {project(projectData3)}
    </section>
  );
}

export default PageThree;
