import React from 'react'
import "../res/css/VolumeResult.css";

function VolumeResult() {
  return (
	
	<ul className="volume__result">
		<li>
			<dl>
				<dt>100<span>kg</span></dt>
				<dd>VOLUME</dd>
			</dl>
		</li>
		
		<li>
			<dl>
				<dt>50<span>세트</span></dt>
				<dd>SETS</dd>
			</dl>
		</li>
		
		<li>
			<dl>
				<dt>200<span>회</span></dt>
				<dd>REPS</dd>
			</dl>
		</li>
			
	</ul>
  )
}

export default VolumeResult