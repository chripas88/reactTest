import React from 'react';
import NavigationItems from './NavigationItems';
import Backdrop from '../ui/Backdrop';
import classes from '../../stylesheets/components/navigation/SideDrawer.module.css';

const sideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if(props.open){
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	
	return(
		<React.Fragment>
			<Backdrop show={props.open} clicked={props.closed}/>
			<div className={attachedClasses.join(' ')}>				
				<nav>
					<NavigationItems menu={props.menu}/>
				</nav>
			</div>	
		</React.Fragment>		
	);
}

export default sideDrawer;