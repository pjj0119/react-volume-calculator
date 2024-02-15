import React from 'react'
import "../res/css/VolumeTop.css";

function VolumeTop() {
	
	// 현재 날짜를 얻습니다.
	const today = new Date();

	// 년, 월, 일을 추출합니다.
	const year = today.getFullYear();
	const month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
	const day = today.getDate();

	// 날짜를 문자열로 조합합니다.
	const formattedDate = `${year}.${month < 10 ? '0' + month : month}.${day < 10 ? '0' + day : day}`;
 
  return (
	<div className="volume__top">
		<p className='volume__top--tit'>오늘의 운동</p>
		<p className='volume__top--date'>{formattedDate}</p>
	</div>
  )
}

export default VolumeTop