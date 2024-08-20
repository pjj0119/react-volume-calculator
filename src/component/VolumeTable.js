import React from 'react'
import {  useState, useEffect } from "react";
import "../res/css/VolumeTable.css";
import VolumeTableItem from './VolumeTableItem'
import VolumeBtn from './VolumeBtn'

function VolumeTable() {
	
	// 로컬 스토리지에서 데이터를 불러올 때 초기값을 설정
	
	const initExercise = JSON.parse(localStorage.getItem('ExerciseArry')) || [{ ExerciseNum: 1}];

	// 운동
	const [exercise, setExercise] = useState(initExercise);

	// useEffect를 사용하여 add 상태가 변경될 때마다 로컬 스토리지에 저장
	useEffect(() => {
	  localStorage.setItem('ExerciseArry', JSON.stringify(exercise));
	}, [exercise]);
	

	// 운동추가
	const exerciseAddBtn = (e) => {  
		e.preventDefault();
		const newExercise = { ExerciseNum: exercise.length + 1};
		const newExerciseName = { ['ExerciseName' + (parseInt(exercise.length) + 1)]: "" };  // 초기 값 설정
		setExercise([...exercise, newExercise]);
		setExerciseName([...exerciseName, newExerciseName]);
	  };
	// 운동삭제
	const exerciseDelteBtn = (e) => {
		e.preventDefault();
		//const newDelete = exercise.slice(0, -1);
		if(exercise.length > 1){
			setExercise(exercise.slice(0, -1));
			setExerciseName(exerciseName.slice(0, -1));
			localStorage.removeItem("ExerciseNum" + exercise.length);
			localStorage.removeItem("ExerciseName" + exercise.length);
		}
	}
	// 운동종목입력창
	
	const initExerciseName = JSON.parse(localStorage.getItem('ExerciseNameArry')) || [{ ExerciseName1: ""}];
	

	const [exerciseName, setExerciseName] = useState(initExerciseName);
	
	useEffect(() => {
		localStorage.setItem('ExerciseNameArry', JSON.stringify(exerciseName));
	}, [exerciseName, exercise.length]);

		
	const handleExerciseNameChange = (exerciseNum, newExerciseName) => {
		setExerciseName((prevExerciseName) => {
		  const updatedExerciseName = [...prevExerciseName];
		  updatedExerciseName[exerciseNum - 1] = { ['ExerciseName' + exerciseNum]: newExerciseName };
		  return updatedExerciseName;
		});
	};
	
	

  return (
	<>
		<div className='volume__table'>
			{exercise.map(exercise => (
				<table key={exercise}>
					<caption>세트, KG, 횟수, 완료</caption>
					<colgroup>
						<col/>
						<col style={{width:'30%'}}/>
						<col style={{width:'30%'}}/>
						<col/>
					</colgroup>
					<VolumeTableItem 
						exerciseNum={exercise.ExerciseNum}
						exerciseName={exerciseName[exercise.ExerciseNum - 1]}
						handleExerciseNameChange={handleExerciseNameChange}
					></VolumeTableItem>
				</table>
				
			))}
		</div>
		
		<VolumeBtn
			exerciseAddBtn = {exerciseAddBtn}
			exerciseDelteBtn = {exerciseDelteBtn}
		></VolumeBtn>
	</>
  )
}

export default VolumeTable