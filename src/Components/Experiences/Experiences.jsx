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
				UI Developer{' '} <br />
                
					<a href=''> Pragra</a>
				</div>
				<div className={styles.date}>March 2019 - September 2021</div>
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
				Management Information System Executive{' '}
					<a href='/'>Bee Aar Controls Engineering Pvt. Ltd </a>
				</div>
				<div className={styles.date}>March 2017 - Febuary 2019</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
						Worked on Flat File Database.

							
						</li>
						<li>Created over 1500 vendor’s database. 
							
						</li>
						
					
					</ul>
				</fieldset>
			</div>


            <br/>

<div className={styles.container}>
    <div className={styles.position}>
    Creative Coordinator{' '}
    <br />
        <a href='/'>KEC Group </a>
        
    </div>
    
    <div className={styles.date}>November 2915 - January 2017</div>
    <fieldset className={styles.responsibilites}>
        <legend>
            <h3> Roles & responsibilites </h3>
        </legend>
        <ul>
            <li>
            It is an event management company where, I worked on managing events.

                
            </li>
            
            
        
        </ul>
    </fieldset>
</div>


		</div>
	);
};

export default Experiences;
