import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from '../stylesheets/containers/Slider.module.css';
import Slide from '../components/slider/Slide';
import * as actions from '../store/actions/index';

class Slider extends Component {
	state={
		current: 0,
		interval: null
	};

	componentDidMount(){
		this.props.initSliderData();
		
		const interval = this.setSlideInterval();
		this.setState({interval: interval}); 
	}

	componentWillUnmount(){
		clearInterval(this.state.interval)
	}

	setSlideInterval(){
		return setInterval(() => {
				this.nextSlideHandler();
			}, 3000);
	}

	nextSlideHandler(){
		let newCurrent = this.state.current;
		newCurrent = (newCurrent === this.props.slider.length - 1) ? 0 : ++newCurrent;
		clearInterval(this.state.interval);
		const interval = this.setSlideInterval();
		this.setState({current: newCurrent, interval: interval});
	}

	prevSlideHandler(){
		let newCurrent = this.state.current;
		newCurrent = newCurrent === 0  ? this.props.slider.length - 1 : --newCurrent;
		clearInterval(this.state.interval);
		const interval = this.setSlideInterval();
		this.setState({current: newCurrent, interval: interval});
	}

	render(){		
		let slider = this.props.slider ?
			<React.Fragment>
				{this.props.slider.map(slide => (					
					this.props.slider.indexOf(slide) === this.state.current ?
						<Slide key={slide.title} className={classes.Slide} title={slide.title} subtitle={slide.subtitle} image={slide.image}/> : ''
				))}
				<div className={classes.SliderButtons}>
						<button onClick={() => this.prevSlideHandler()}>Prev</button>
						<button onClick={() => this.nextSlideHandler()}>Next</button>
				</div>
			</React.Fragment>		
		: '';
		return	<div className={classes.Slider}>
							{slider}
						</div>
	};	
};

const mapStateToProps = state => {
	return{
		slider: state.slider.slider,
		error: state.slider.error
	};
}

const mapDispatchToProps = dispatch => {
	return{
		initSliderData: () => dispatch(actions.initSliderData())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Slider,(prevProps, nextProps) => nextProps.slider === prevProps.slider));