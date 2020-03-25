import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../stylesheets/components/home/Section2.module.css';
import UserInfo from '../../containers/UserInfo';
import Section2Item from './Section2Item';

const section2 = (props)=>{
		let section2data = props.sectionData ?
				<React.Fragment>
					<NavLink to={'/home/section1'}>{props.sectionData.title}</NavLink>
					<div className={classes.col_2}>
						<h3>{props.sectionData.graphText}</h3>
						{props.sectionData.stats.map(stat =>(
							<Section2Item key={stat.title} title={stat.title} amount={stat.amount}></Section2Item>
						))}
						<UserInfo formLabels={props.sectionData.formLabels} buttonText={props.sectionData.buttonText} formText={props.sectionData.formText}/>
					</div>
				</React.Fragment> : '';
	
		return(
			<React.Fragment>
				<div className={classes.Section}>
					{section2data}
				</div>
			</React.Fragment>
		);		
}

export default section2;