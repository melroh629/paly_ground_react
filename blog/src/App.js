import './App.css';
import {useState} from 'react'

function App() {
	// let post = '오늘의 일기';
	let [title, setTitle] = useState(['quiz: state 언제 써야하지?', 'js Destructuring (디스트럭처링)', 'state를 배열로도 가능', 'JS Destructuring']);
	let [따봉, 따봉변경] = useState(0);
	

	return (
		<div className="App">
			<div class="nav">
				<h2 style={ {color: 'blue'} }>리액트로 만든 블로그임</h2>
			</div>

			<button onClick={ ()=>{
				let titleCopy = [...title];
				titleCopy.sort();
				setTitle(titleCopy) 
			} }>가나다 정렬</button>

			<div class="list">
				<h4>{ title[0] }</h4>
				<p>5월 14일 발행</p>
				<p>변경시 자동으로 html에 반영하게 되도록 하고 싶으면 좋은 말 할때 state 쓰자</p>
				<b class="like" onClick={ ()=>{따봉변경(따봉++)} }>🥳 : { 따봉 }</b>
			</div>
			<div class="list">
				<h4>{ title[1] }</h4>
				<p>5월 14일 발행</p>
				<p>구조 분해 분법(Destructuring)</p>
			</div>
			<div class="list">
				<h4>{ title[2] }</h4>
				<p>5월 14일 발행</p>
				<p>useState([배열1, 배열2, 배열3])</p>
			</div>
		</div>
	);
}

// 변수와 state 차이점
/*
일반 변수는 html에 자동으로 변경 안됨
state는 변경 되면 자동으로 재렌더링 됨 
변경시 자동으로 html에 반영하게 되도록 하고 싶으면 좋은 말 할때 state 쓰자
*/

export default App;
