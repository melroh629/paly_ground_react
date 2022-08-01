import './App.css';
import { useState } from 'react';

function App() {
	const TodayDate = new Date();
	const CurrentDate = TodayDate.toLocaleDateString();

	// state 개념 정리
	let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집', '파이썬독학']);
	//글제목 : state에 보관했던 자료
	//글제목변경: state 변경 도와주는 함수!!!!!!
	//useState(보관할 자료)

	// 좋아요 변경 
	let [따봉, 따봉변경] = useState(0);

	// 글제목 변경 하기
	function 글제목변경함수(){
		// 괄호 벗겨주세요!!
		let copy = [...글제목];
		copy[0] = '여자코트추천'
		글제목변경(copy)
	}


	return (
		<div className="App">
			<div className='black-nav'>블로그 by 리액트 </div>
			{/* state변경 활용 예제 */}
			<button className='button' onClick={ 글제목변경함수 }>글제목 변경</button>
			<div className='list'>
				<h4>
					{글제목[0]}
					<button className='button' onClick={ ()=>{따봉변경(따봉+1)}}>따봉버튼</button>
					{/* onClick={ 함수이름만 써야함 } */}
					<span>{따봉}</span>
				</h4>
				<p>발행일: {CurrentDate}</p>
			</div>
			<div className='list'>
				<h4>
					{글제목[1]}
				</h4>
				<p>발행일: {CurrentDate}</p>
			</div>
		</div>
	);
}

export default App;
