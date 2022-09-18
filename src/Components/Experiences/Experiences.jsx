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
				Froent-End Developer{' '} <br />
                
					<a href=''> Pragra</a>
				</div>
				<div className={styles.date}>March 2019 - November 2021</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							My role was to  Developed front-end web pages with HTML5, CSS3, JavaScript. 
                           </li>
						<li>
						Designed web pages and applications. 
						</li>
						<li>
						Developed the single page application.
							</li>
							
					
					</ul>
				</fieldset>
			</div>

			

            <br/>

<div className={styles.container}>
    <div className={styles.position}>
    Creative Coordinator{' '}
    <br />
        <a href='/'>Khushi Eventt Creations </a>
        
    </div>
    
    <div className={styles.date}>November 2015 - January 2019</div>
    <fieldset className={styles.responsibilites}>
        <legend>
            <h3> Roles & responsibilites </h3>
        </legend>
        <ul>
            <li>
            It is an event management company where, I worked on managing events.
            </li>
			<li>
			basic working experience with Adobe Photoshop and Corel Draw
			</li>
            
            
        
        </ul>
    </fieldset>
</div>


		</div>
	);
};

export default Experiences;
