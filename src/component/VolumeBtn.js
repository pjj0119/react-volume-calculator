import React from 'react'
import "../res/css/VolumeBtn.css";

function VolumeBtn({addBtn, delteBtn}) {
  return (
	<ul className="volume__btn mt0">
		<li><a href="#" className='volume__btn--add' onClick={addBtn}>+ 운동추가</a></li>
		<li><a href="#" className='volume__btn--delte' onClick={delteBtn}>- 운동삭제</a></li>
		<li><button type='submit' className='volume__btn--finish'>+ 운동완료</button></li>
	</ul>
  )
}

export default VolumeBtn