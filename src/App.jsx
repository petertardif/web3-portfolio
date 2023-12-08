// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/*'
					element={
						<>
							<Header />
							<div style={{ display: 'flex' }}>
								<Sidebar />
								<main style={{ flex: 1 }}>
									<Routes>
										<Route path='/' element={<Dashboard />} />
										{/* Other routes */}
									</Routes>
								</main>
							</div>
							<Footer />
						</>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
