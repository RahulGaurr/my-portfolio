import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://avatars.githubusercontent.com/u/86410106?v=4' // my Picture
			: 'https://www.damiestechnologies.com/img/programmer.gif';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://www.damiestechnologies.com/img/programmer.gif"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					Highly skilled and adaptable Frontend Developer with expertise in front-end technologies. Proven
					track record of creating responsive, user-friendly web applications. Strong problem-solving abilities and a dedication
					 to writing clean and maintainable code. Eager to contribute technical prowess to drive the success of innovative projects.
					<span style={{ color: `#00a0a0` }}>
						{' '}
						Looking for an opportunity as a software developer
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
