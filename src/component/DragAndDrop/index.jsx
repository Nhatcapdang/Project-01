import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Tab, Tabs } from 'react-bootstrap';
import './styles.scss'
import G1 from '../../img/g1.jpg'
import G2 from '../../img/g2.jpg'
import G3 from '../../img/g3.JPG'
import G4 from '../../img/g4.JPG'
import G5 from '../../img/g5.JPG'
import G6 from '../../img/g6.JPG'
import G7 from '../../img/g7.JPG'
import G8 from '../../img/g8.JPG'
import G9 from '../../img/g9.png'
import G10 from '../../img/g10.jpg'
import G11 from '../../img/g11.JPG'

const array1 = [
	{
		id: 20,
		text1: 'Mauris Vel Tellus',
		text2: 'Fruits',
		text3: '$48.00',
		text4: '$345.00',
		bgImg: 'bgImg',
		hinh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF8ItvZTZ2rFqDedQ3Ri6jh7PlmJjyKXNMjqJqFQ9aHByiMYqz',
		quantity: 1


	},
	{

		id: 21,
		text1: 'Nunc Neque Eros',
		text2: 'Fruits',
		text3: '$45.00',
		text4: '$245.00',
		bgImg: 'bgImg2',
		hinh: 'https://xuannong.vn/files/sanpham/239/2/jpg/rau-ma.jpg',
		quantity: 1



	},
	{

		id: 22,
		text1: 'Proin Lectus Ipsum',
		text2: 'Fruits',
		text3: '$35.00',
		text4: '$145.00',
		bgImg: 'bgImg3',
		hinh: 'https://znews-photo.zadn.vn/w660/Uploaded/ywfau/2014_12_21/2_1.jpg',
		quantity: 1



	},
	{

		id: 23,
		text1: 'Proin Lectus Ipsum',
		text2: 'Fruits',
		text3: '$35.00',
		text4: '$145.00',
		bgImg: 'bgImg4',
		hinh: 'https://vietnamnongnghiepsach.com.vn/wp-content/uploads/2018/02/mong-toi-1.jpg',
		quantity: 1



	},
	{

		id: 24,
		text1: 'Proin Lectus Ipsum',
		text2: 'Fruits',
		text3: '$35.00',
		text4: '$145.00',
		bgImg: 'bgImg5',
		hinh: 'https://csfood.vn/wp-content/uploads/2018/04/c%E1%BA%A3i-b%C3%B3-x%C3%B4i-%C4%91%C3%A0-l%E1%BA%A1t.png',
		quantity: 1



	}
]

const array2 = [
	{
		id: 11,
		text1: 'Mauris Vel Tellus',
		text2: 'Fruits',
		text3: '48.00',
		text4: '$345.00',
		bgImg: 'bgImg',
		hinh: 'https://www.safefruits.vn/upload/sanpham/lychee.jpg',
		quantity: 1


	}
	,
	{

		id: 17,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg7',
		hinh: 'https://cdn.muabannhanh.com/asset/frontend/img/gallery/2018/12/19/5c19ad60e7e7a_1545186656.jpg',
		quantity: 1


	},
	{

		id: 19,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg9',
		hinh: 'https://hanhphucgiadinh.vn/wp-content/uploads/2013/07/tao1.jpg',
		quantity: 1


	},
	{

		id: 13,
		text1: 'Proin Lectus Ipsum',
		text2: 'Fruits',
		text3: '35.00',
		text4: '$145.00',
		bgImg: 'bgImg3',
		hinh: 'https://vinfruits.com/wp-content/uploads/2017/02/Luu-do-My-vinfruits.com-1-546x546.jpg',
		quantity: 1
	},
	{

		id: 14,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg4',
		hinh: 'https://d3kg1kmrau77q0.cloudfront.net/food/1022/054c__dua-hau-khong-hat.jpg',
		quantity: 1
	},
	{

		id: 16,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg6',
		hinh: 'https://product.hstatic.net/1000191320/product/man_an_phuoc_bac_tom-08.jpg',
		quantity: 1


	}
]


const array3 = [
	{
		id: 111,
		text1: 'Mauris Vel Tellus',
		text2: 'Fruits',
		text3: '48.00',
		text4: '$345.00',
		bgImg: 'bgImg',
		hinh: G1,
		quantity: 1


	}
	,
	{

		id: 171,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg7',
		hinh: G2,
		quantity: 1


	},
	{

		id: 191,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg9',
		hinh: G3,
		quantity: 1


	},
	{

		id: 131,
		text1: 'Proin Lectus Ipsum',
		text2: 'Fruits',
		text3: '35.00',
		text4: '$145.00',
		bgImg: 'bgImg3',
		hinh: G4,
		quantity: 1
	},
	{

		id: 141,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg4',
		hinh: G5,
		quantity: 1
	},
	{

		id: 161,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg6',
		hinh: G6,
		quantity: 1


	},
	{
		id: 112,
		text1: 'Mauris Vel Tellus',
		text2: 'Fruits',
		text3: '48.00',
		text4: '$345.00',
		bgImg: 'bgImg',
		hinh: G7,
		quantity: 1


	}
	,
	{

		id: 172,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg7',
		hinh: G8,
		quantity: 1


	},
	{

		id: 192,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg9',
		hinh: G9,
		quantity: 1


	},
	{

		id: 132,
		text1: 'Proin Lectus Ipsum',
		text2: 'Fruits',
		text3: '35.00',
		text4: '$145.00',
		bgImg: 'bgImg3',
		hinh: G10,
		quantity: 1
	},
	{

		id: 142,
		text1: 'Quisque In Arcu',
		text2: 'Fruits',
		text3: '25.00',
		text4: '$235.00',
		bgImg: 'bgImg4',
		hinh: G11,
		quantity: 1
	}

]
const TeamSelection = () => {
	// const [players, setPlayers] = useState(() => playersJSON);
	// const [team, setTeam] = useState([]);
	const [key, setKey] = useState('home');

	// const [{ isOver }, addToTeamRef] = useDrop({
	// 	accept: ['player', 'nothing'],
	// 	collect: (monitor) => ({
	// 		isOver: !!monitor.isOver(),
	// 	}),
	// });

	// const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
	// 	accept: ['team', 'nothing'],
	// 	collect: (monitor) => ({
	// 		isOver: !!monitor.isOver(),
	// 	}),
	// });


	// const movePlayer = (item) => {
	// 	console.log(item);
	// 	if (item && item.playerType === 'player') {
	// 		//Accepting player into the team
	// 		setTeam((_team) => [..._team, players[item.index]]);
	// 		setPlayers((_players) => _players.filter((_, idx) => idx !== item.index));
	// 	}
	// 	if (item && item.playerType === 'team') {
	// 		//Removing a player from team
	// 		setPlayers((_players) => [..._players, team[item.index]]);
	// 		setTeam((_team) => _team.filter((_, idx) => idx !== item.index));
	// 	}
	// };

	// const dragHoverTeamBG = isOver ? 'bg-black' : 'bg-info';
	// const dragHoverPlayerBG = isPlayerOver ? 'bg-warning' : 'bg-light';



	const [Buy, setBuy] = useState(() => array1);
	const [Buy2, setBuy2] = useState(() => array2);
	const [gai, setGai] = useState(() => array3);
	const [Sell, setSell] = useState([]);

	const [{ isBuy }, buyRef] = useDrop({
		accept: ['sell'],
		collect: (monitor) => ({
			isBuy: !!monitor.isOver(),
		}),
	});

	const [{ isBuy2 }, buyRef2] = useDrop({
		accept: ['sell'],
		collect: (monitor) => ({
			isBuy: !!monitor.isOver(),
		}),
	});

	const [{ isSell }, sellRef] = useDrop({
		accept: ['buy', 'buy2', 'gai'],
		collect: (monitor) => ({
			isSell: !!monitor.isOver(),
		}),
	});
	const [{ isGai }, gaiRef] = useDrop({
		accept: ['sell'],
		collect: (monitor) => ({
			isGai: !!monitor.isOver(),
		}),
	});


	const moveProduct = (item) => {
		if (item && item.typeDrag === 'buy') {
			setSell((_team) => [..._team, Buy[item.index]]);
			setBuy((buy) => buy.filter((_, idx) => idx !== item.index));
		}
		if (item && item.typeDrag === 'buy2') {
			setSell((_team) => [..._team, Buy2[item.index]]);
			setBuy2((buy) => buy.filter((_, idx) => idx !== item.index));
		}
		if (item && item.typeDrag === 'gai') {
			setSell((_team) => [..._team, gai[item.index]]);
			setGai((buy) => buy.filter((_, idx) => idx !== item.index));
		}
		if (item && item.typeDrag === 'sell') {
			setSell((buy) => buy.filter((_, idx) => idx !== item.index));
			const id = [11, 17, 19, 13, 14, 16,]
			const idGai = [111, 171, 191, 131, 141, 161, 112, 172, 192, 132, 142,]
			if (id.some(val => val === Sell[item.index].id)) {
				setBuy2((sell) => [...sell, Sell[item.index]]);
			} else {
				if (idGai.some(val => val === Sell[item.index].id)) {
					setGai((gai2) => [...gai2, Sell[item.index]]);
				} else {
					setBuy((sell) => [...sell, Sell[item.index]]);
				}
			}
		}
	};
	return (
		<>
			{/* <div className="row">
				<div className="col text-center">
					<h2>Team Selection Component</h2>
					<p>Demonstrating react-dnd by implementing team selection UI</p>
					<div className="row justify-content-md-center">
						<div className={`col-5 border m-2 ${dragHoverPlayerBG}`}>
							<div className="bg-info row text-white">
								<div className="col font-weight-bold">Available Players</div>
							</div>
							<ul className="list-group py-2 h-100" ref={removeFromTeamRef}>
								{players.map((player, idx) => (
									<Player
										{...player}
										key={idx}
										index={idx}
										playerType="player"
										onDropPlayer={movePlayer}
									/>
								))}
							</ul>
						</div>
						<div className={`col-5 border m-2 ${dragHoverTeamBG}`}>
							<div className="bg-success row text-white">
								<div className="col font-weight-bold">THE A-TEAM</div>
							</div>
							<ul className="list-group py-2 h-100" ref={addToTeamRef}>
								{team.map((player, idx) => (
									<Player
										{...player}
										key={idx}
										index={idx}
										playerType="team"
										onDropPlayer={movePlayer}
									/>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div> */}


			<div className="row justify-content-md-center QuicklyOrder">
				<div className={`col-5 border p-0`}>
					<Tabs
						id="controlled-tab-example"
						activeKey={key}
						onSelect={(k) => setKey(k)}
						className="mb-3"
					>
						<Tab eventKey="home" title="Vegeteable" >
							<div className={`row m-1`} style={{ minHeight: "150px" }} ref={buyRef}>
								{Buy.map((item, idx) => (
									<Product item={item} key={idx} index={idx} typeDrag="buy" onDropProduct={moveProduct} />
								))}
							</div>
						</Tab>
						<Tab eventKey="profile" title="Fruist">
							<div div className="row m-1" style={{ minHeight: "150px" }} ref={buyRef2} >
								{
									Buy2.map((item, idx) => (
										<Product item={item} key={idx} index={idx} typeDrag="buy2" onDropProduct={moveProduct} />
									))
								}
							</div>
						</Tab>
						<Tab eventKey="contact" title="Nothing" >
							<div div className="row m-1" style={{ minHeight: "150px" }} ref={gaiRef} >
								{
									gai.map((item, idx) => (
										<Product item={item} key={idx} index={idx} typeDrag="gai" onDropProduct={moveProduct} />
									))
								}
							</div>
						</Tab>
					</Tabs>
				</div>
				<div className={`col-5 border  p-0 ml-3`}>
					<h4 className="text-center bg-success" style={{ height: '42px' }}>Place Order</h4>
					<div className="row m-1 h-100" ref={sellRef}>
						{Sell.map((item, idx) => (
							<Product item={item} key={idx} index={idx} typeDrag="sell" onDropProduct={moveProduct} />
						))}
					</div>
				</div>
			</div>

		</>
	);
};

const Player = ({
	name,
	age,
	nationality,
	photo,
	index,
	id,
	playerType,
	onDropPlayer,
}) => {
	const [{ isDragging }, dragRef] = useDrag({
		type: playerType,
		item: () => ({ index, playerType }),
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				onDropPlayer(item);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const Dragging = isDragging ? 'bg-success' : 'bg-danger';

	return (
		<li className={`list-group-item my-1 p-2 ${Dragging} `} ref={dragRef}>
			<div className="card border-0">
				<div className="row no-gutters">
					<div className="col-md-1">
						<img alt=''
							src={photo}
							className="img-thumbnail border-secondary rounded-circle"
						/>
					</div>
					<div className="col-md-9">
						<div className="card-body py-1 px-2 text-left">
							<h5 className="card-title d-inline">{name}</h5>
							<p className="card-text d-inline">, {nationality}</p>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};





const Product = ({
	item,
	typeDrag,
	onDropProduct,
	index
}) => {
	const [{ isDragging }, dragProductRef] = useDrag({
		type: typeDrag,
		item: () => ({ index, typeDrag }),
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				onDropProduct(item);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	return (
		<div className="col-4 text-center" key={index} ref={dragProductRef}>
			<img alt=''
				src={item.hinh}
				className="img-thumbnail"
			/>
			<div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
				<p style={{ fontSize: '14px' }}>{item.text1}</p>
				<p>Fruits</p>
				<h6 ><span style={{ color: '#40a944' }}>{item.text3}</span> <span style={{ textDecoration: 'line-through' }}>{item.text4}</span></h6>
			</div>
		</div>
	)
}

export default TeamSelection;
