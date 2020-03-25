import React from 'react';
import NavigationItem from './NavigationItem';
import classes from '../../stylesheets/components/navigation/NavigationItems.module.css';

const navigationItems = (props) => {
	let home;
	let page;
	if(props.menu){
		home = props.menu[0].title;
		page = props.menu[1].title;
	}
	return <ul className={classes.NavigationItems}>
		<NavigationItem link="/home">{home}</NavigationItem>
		<NavigationItem link="/page">{page}</NavigationItem>
	</ul>
};

export default React.memo(navigationItems,(prevProps, nextProps) => nextProps.menu === prevProps.menu);