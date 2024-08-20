import './App.css';
import VolumeTop from './component/VolumeTop';
import VolumeTable from './component/VolumeTable'
import "./res/css/VolumeTable.css";
import React from 'react'

function App() {


	return (
		<div className='content'>
			<div className="volume-box">

				<VolumeTop></VolumeTop>
				<VolumeTable></VolumeTable>


			</div>
		</div>
	);
}

export default App;


