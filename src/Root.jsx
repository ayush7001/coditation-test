import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './shared/components/errorBoundary/errorBoundary';
import App from './App';
import store from './store';
import WithErrorHandler from './hoc/withErrorHandler/withErrorHandler';

const Root = props => {
	
	return (
		<Provider store={store}>
				<ErrorBoundary>
					<div className='app-main'>
						<WithErrorHandler>
							<BrowserRouter>
								<App {...props} />
							</BrowserRouter>
						</WithErrorHandler>
					</div>
				</ErrorBoundary>
		</Provider>
	);
};

export default Root;
