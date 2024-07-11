import React from 'react';
import './pageThree.css';
import Link from 'next/link';

function PageThree() {
  const project = ({ imgSrc, projectName, projectSubject, year }) => {
    return (
      <Link href="#">
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

  const projectData1 = {imgSrc: './landingImages/image1.webp', projectName: 'Recket', projectSubject: 'Recycling website', year: 'Highlighted',};
  const projectData2 = {imgSrc: './landingImages/image2.webp', projectName: 'Alexander William', projectSubject: 'Private Investments', year: '2023',};
  const projectData3 = {imgSrc: './landingImages/image3.webp', projectName: 'Ultra', projectSubject: 'Online Bank', year: '2024',};

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
