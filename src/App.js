import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import {
    ScreenSpinner,
    AdaptivityProvider,
    AppRoot,
    ModalCard,
    ModalRoot,
    Text,
    Div,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import router from './router';

import Acquaintance from './panels/Acquaintance';
import PickDirections from './panels/PickDirections';
import AboutDirection from './panels/AboutDirection';
import ChoosedDirectionsInfo from './panels/ChoosedDirectionsInfo';
import AboutStudent from './panels/AboutStudent-demo';
import HomePage from './panels/HomePage';
import Questions from './panels/Questions';
import QuestionsList from './panels/QustionList';
import Instruction from './panels/Instruction';
import CalendarPanel from './panels/Calendar';
import Dorms from './panels/Dorms';
import DormPage from './panels/DormPage';
import EditStudent from './panels/EditStudent';
import './css/gilroy.css';
import './css/main.css';
import { Icon56QuestionOutline } from '@vkontakte/icons';
import { Icon56GhostOutline } from '@vkontakte/icons';

const MODAL_CARD_ONE = 'modal-one';
const MODAL_CARD_TWO = 'modal-two';
const MODAL_CARD_THREE = 'modal-three';

const App = () => {
    const [activePanel, setActivePanel] = useState('acquaintance');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
    const [category, setCategory] = useState('');
    const [question, setQuestion] = useState(null);
    const [dorm, setdorm] = useState(0);
    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        bridge.subscribe(({ detail: { type, data } }) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme
                    ? data.scheme
                    : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }
        fetchData();

        // ЧЁТА ДОБАВИЛ

        const routerUnsubscribe = router.subscribe(({ toState }) => {
            let routerStatePage = toState.page;

            let index = routerStatePage.indexOf('.');
            if (index > -1) {
                routerStatePage = routerStatePage.substring(0, index);
            }

            setActivePanel(routerStatePage);
        });

        return () => {
            routerUnsubscribe();
        };
    }, []);

    const updateData = (value) => {
        setCategory(value);
    };
    const updateQuestion = (value) => {
        setQuestion(value);
    };
    const modal = (
        <ModalRoot activeModal={activeModal}>
            <ModalCard
                id={MODAL_CARD_ONE}
                onClose={() => setActiveModal(null)}
                icon={<Icon56QuestionOutline />}
                header="Какие бывают формы обучения?"
            >
                <Div>
                    <Text>
                        Очная - занятия проводятся по будням, и на некоторых
                        направлениях по субботам. Если не посещать пары можно
                        получить недопуск или даже отчислится.
                        <br />
                        <br />
                        Заочная - вы встречаетесь с преподавателями вживую
                        только два раза в году - на сессии. Объем программы
                        такой же как и на очной, но большую часть студент
                        изучает самостоятельно.
                    </Text>
                </Div>
            </ModalCard>
            <ModalCard
                id={MODAL_CARD_TWO}
                onClose={() => setActiveModal(null)}
                icon={<Icon56QuestionOutline />}
                header="Какие бывают ступени образования?"
            >
                <Div>
                    <Text>
                        Бакалавриат - базовый уровень высшего образования.
                        Поступать на бакалавриат имеют право выпускники 11
                        класса, сдавшие егэ или выпускники колледжей по конкурсу
                        внутренних экзаменов ВУЗа. Обучение длится 4 года.
                        <br />
                        <br />
                        Специалитет - тоже высшее образование, но выпускники
                        получают конкретную профессию и возможность преподавать.
                        Обучение длится 5 лет.
                        <br />
                        <br />
                        Магистратура - второй этап высшего образования. Для
                        поступления необходимо иметь диплом бакалавра или
                        специалитета. Обучение длится 2 года
                    </Text>
                </Div>
            </ModalCard>
            <ModalCard
                id={MODAL_CARD_THREE}
                onClose={() => setActiveModal(null)}
                icon={<Icon56GhostOutline />}
                header="Просим прощения"
            >
                <Div>
                    <Text>
                        К сожалению, страница календаря ещё находится в
                        разработке.
                    </Text>
                </Div>
            </ModalCard>
        </ModalRoot>
    );
    return (
        <AdaptivityProvider>
            <AppRoot>
                <View activePanel={activePanel} popout={popout} modal={modal}>
                    <Acquaintance
                        setActiveModal={setActiveModal}
                        fetchedUser={fetchedUser}
                        MODAL_CARD_ONE={MODAL_CARD_ONE}
                        MODAL_CARD_TWO={MODAL_CARD_TWO}
                        id="acquaintance"
                    />
                    <PickDirections id="pick-directions" />
                    <AboutDirection id="about-direction" />
                    <ChoosedDirectionsInfo id="choosed-directions-info" />
                    <DormPage dorm={dorm} setdorm={setdorm} id="dorm-page" />
                    <Dorms setdorm={setdorm} id="dorms" choosedDorm={0} />
                    {/* Ветка два */}
                    <AboutStudent id="student-form-filling" />
                    <EditStudent id="edit" setActivePanel={setActivePanel} />
                    <HomePage
                        MODAL_CARD_THREE={MODAL_CARD_THREE}
                        setActiveModal={setActiveModal}
                        id="home"
                        setActivePanel={setActivePanel}
                        fetchedUser={fetchedUser}
                    />
                    <Questions
                        MODAL_CARD_THREE={MODAL_CARD_THREE}
                        setActiveModal={setActiveModal}
                        updateData={updateData}
                        id="questions"
                    />
                    <QuestionsList
                        updateQuestion={updateQuestion}
                        category={category}
                        id="questions-list"
                    />
                    <Instruction
                        question={question}
                        category={category}
                        id="instruction"
                    />
                    <CalendarPanel fetchedUser={fetchedUser} id="calendar" />
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
};

export default App;
