import React, { Component } from 'react';


/**
 * Layout - Base layout of application
 */
class Layout extends Component {
	
	
	render() {
		return (
			<div className='app-container'>
				<div className='app-main-container'>
					<main ref={this.containerRef} className='app-main-content-wrapper'>
						<div className='app-main-content'>
							<div className='app-wrapper'>
								{this.props.children}
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default Layout;
