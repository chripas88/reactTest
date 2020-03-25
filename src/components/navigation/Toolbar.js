import React from 'react';
import classes from '../../stylesheets/components/navigation/Toolbar.module.css';
import NavigationItems from './NavigationItems';
import DrawerToggle from './DrawerToggle';

const Toolbar = (props) =>(
	<header className={classes.Toolbar}>
		<DrawerToggle clicked={props.drawerToggleClicked}/>
		<nav className={classes.DesktopOnly}>
			<NavigationItems menu={props.menu}/>
		</nav>
	</header>
);

export default React.memo(Toolbar,(prevProps, nextProps) => nextProps.menu === prevProps.menu);