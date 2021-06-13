import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Caption from '@vkontakte/vkui/dist/components/Typography/Caption/Caption';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio';
import { FormItem } from '@vkontakte/vkui/dist/components/FormItem/FormItem';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import { Cell } from '@vkontakte/vkui/dist/components/Cell/Cell';
import Subhead from '@vkontakte/vkui/dist/components/Typography/Subhead/Subhead';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { Icon20QuestionOutline } from '@vkontakte/icons';

import '../css/Radio.css';
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';
import { Title } from '@vkontakte/vkui';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const Acquaintance = ({ id, go, fetchedUser, setActiveModal, MODAL_CARD_ONE, MODAL_CARD_TWO}) => {

	const [want, setWant] = useState(false)
	const [wantStudyForm, setForm] = useState('Очная')
	const [wantStudyLevel, setLevel] = useState('Бакалавриат')

	useEffect(() => {
		localStorage.setItem('selectedGroups', []);
	});

	const handleNextClick = (event) => {
		localStorage.setItem('wantStudyForm', wantStudyForm);
		localStorage.setItem('wantStudyLevel', wantStudyLevel);
		go(event)
	};
	const scrollToSection = () => {
		setWant(true)
		scroll.scrollToBottom();
	};
	return (
		<Panel id={id}>
			<PanelHeader>PolyApp</PanelHeader>
			{fetchedUser &&
				<Group header={<Header mode="primary">Приветствуем тебя</Header>}>
					<Div className="homepage-subhead">
						<Subhead weight="semibold">Это мобильное приложение Московского Политеха</Subhead>
					</Div>
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
						description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>}
			<Group>
				<Div>
					<FormLayout>
						<FormItem top="Анкета">
							<Radio name="radio" onClick={() => setWant(false)} value="already" defaultChecked>Я уже учусь в Московском Политехе</Radio>
							<Radio name="radio" onClick={() => scrollToSection()} value="newStudent">Я только собираюсь поступить</Radio>
						</FormItem>
					</FormLayout>
				</Div>
				{want ?
					<Div style={{ marginBlockEnd: 50 }}>
						<Caption className="captionCaps" level="1" weight="semibold" caps >
							Круто! Мы рады, что тебя привлёк наш университет. Расскажи, какая форма обучения тебя интересует?
					</Caption>
						<FormLayout>
							<Header mode="primary" aside={<Icon20QuestionOutline onClick={() => setActiveModal(MODAL_CARD_ONE)} />} style={{ marginBottom: 10 }}>Форма обучения</Header>
							<Div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
								<FormItem className="radio"><Radio name="radio" value="Очная" onClick={() => setForm('Очная')} defaultChecked>Очная</Radio></FormItem>
							</Div>
							<Div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0, marginBottom: 10 }}>
								<FormItem className="radio"><Radio name="radio" value="Заочная" onClick={() => setForm('Заочная')}>Заочная</Radio></FormItem>
							</Div>
						</FormLayout>
						{wantStudyForm == 'Очная' ?
							<FormLayout>
								<Header mode="primary" style={{ marginBottom: 10 }} aside={	<Icon20QuestionOutline onClick={() => setActiveModal(MODAL_CARD_TWO)} />}>Ступень образования</Header>
								<Div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0, marginBlockEnd: 3 }}>
									<FormItem className="radio"><Radio name="radio" value="Бакалавриат" onClick={() => setLevel('Бакалавриат')} defaultChecked>Бакалавриат</Radio></FormItem>
								</Div>
								<Div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0, marginBlockEnd: 3 }}>
									<FormItem className="radio"><Radio name="radio" value="Специалитет" onClick={() => setLevel('Специалитет')} >Специалитет</Radio></FormItem>
								</Div>
								<Div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0, marginBlockEnd: 3 }}>
									<FormItem className="radio"><Radio name="radio" value="Магистаратура" onClick={() => setLevel('Магистаратура')} >Магистратура</Radio></FormItem>
								</Div>
							</FormLayout>
							:
							<FormLayout>
								<Header mode="primary" style={{ marginBottom: 10 }} aside={<Icon20QuestionOutline onClick={() => setActiveModal(MODAL_CARD_TWO)} />}>Ступень образования</Header>
									<FormItem><Radio name="radio" value="Бакалавриат" onClick={() => setLevel('Бакалавриат')} defaultChecked>Бакалавриат</Radio></FormItem>
							</FormLayout>
						}
					</Div>
					: null
				}
				<FixedLayout filled vertical="bottom">
					<Div>
						<Button stretched size="l" mode="primary" onClick={(event) => handleNextClick(event)} data-to={want ? 'pick-directions' : 'student-form-filling'} >
							Далее
							</Button>
					</Div>
				</FixedLayout>
			</Group>
		</Panel>
	);
}

Acquaintance.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Acquaintance;