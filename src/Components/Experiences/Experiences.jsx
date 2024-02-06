import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
				Front-End Developer{' '} <br />
                
					<a href=''> Pragra</a>
				</div>
				<div className={styles.date}>August 2022 - Present</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
						Develop and implement user interfaces using frameworks like React js and Next js, ensuring cross-browser compatibility and responsiveness.
                           </li>
						<li>
						Collaborate with UX/UI designers to translate wireframes into functional and visually appealing web applications.
						</li>
						<li>
						Optimize website performance and loading times through efficient code and image optimization techniques.
						</li>
						<li>Integrate front-end applications with back-end APIs to facilitate seamless data exchange and real-time functionality.
</li>
						<li>Conduct thorough testing and debugging of front-end elements to identify and resolve any issues or inconsistencies.</li>
						<li>Developed an internally-used admin panel for streamlining operations.</li>

							
					
					</ul>
				</fieldset>
			</div>

			

            <br/>

<div className={styles.container}>
    <div className={styles.position}>
    Graphic Designer{' '}
    <br />
        <a href='/'>KEC Group </a>
        
    </div>
    
    <div className={styles.date}>October 2016 - July 2022</div>
    <fieldset className={styles.responsibilites}>
        <legend>
            <h3> Roles & responsibilites </h3>
        </legend>
        <ul>
            <li>
            DesignedCreate visually compelling designs for various digital and print materials, 
			including websites, social media, marketing collateral, and presentations.
            </li>
			<li>Collaborate with clients and the printing press team to understand design requirements and 
				objectives for various print materials, such as brochures, flyers, banners, and packaging.</li>
			<li>Produce high-quality graphics, illustrations, and layouts using software tools, such as Adobe Photoshop and Corel Draw.</li>
			
            
            
        
        </ul>
    </fieldset>
</div>


		</div>
	);
};

export default Experiences;
