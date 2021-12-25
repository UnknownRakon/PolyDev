import React, { useEffect, useState } from 'react';

import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { FormItem } from '@vkontakte/vkui/dist/components/FormItem/FormItem';
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox';
import List from '@vkontakte/vkui/dist/components/List/List';
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import { Icon20Info } from '@vkontakte/icons';
import * as styles from '../css/PickDirections.module.css';
import { PanelHeaderBack, Group } from '@vkontakte/vkui';

const newDirections = require('../json/new_directions.json');

import router from '../router';

const PickDirections = ({ id }) => {
    const [counter, setCounter] = useState(5);
    const initialArray = [];
    const [selectedGroups, setSelectedGroups] = useState(
        localStorage.getItem('selectedGroups') != []
            ? JSON.parse(localStorage.getItem('selectedGroups'))
            : initialArray
    );
    const handleInfoClick = (value) => (event) => {
        if (value) {
            localStorage.setItem('interestedDirection', JSON.stringify(value));
            router.go('about-direction');
        }
    };
    useEffect(() => {
        localStorage.removeItem('interestedDirection');
        if (localStorage.getItem('selectedGroups') != []) {
            setCounter(counter - selectedGroups.length);
            document
                .querySelectorAll('input[type=checkbox]')
                .forEach((element) => {
                    selectedGroups.forEach((name) => {
                        if (element.value == name) element.checked = true;
                    });
                });
        }
    }, []);
    useEffect(() => {
        return () => {
            localStorage.setItem(
                'selectedGroups',
                JSON.stringify(selectedGroups)
            );
        };
    });

    const handleCheckClick = (event) => {
        let value;
        if (event.target != null) {
            value = event.target.getAttribute('value');
        }
        if (event.target.checked === true) {
            setCounter(counter - 1);
            if (value) {
                setSelectedGroups((prevArray) => [...prevArray, value]);
            }
        } else {
            setCounter(counter + 1);
            if (value) {
                setSelectedGroups(
                    selectedGroups.filter((item) => item !== value)
                );
                console.log(selectedGroups);
            }
        }
    };

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.back()} />}
            >
                PolyApp
            </PanelHeader>
            <Title className={styles.pickDirections__title}>
                Для{' '}
                {localStorage.getItem('wantStudyForm') == 'Очная'
                    ? 'очной формы обучения'
                    : 'заочной формы обучени'}{' '}
                {localStorage.getItem('wantStudyLevel') == 'Бакалавриат'
                    ? 'бакалавриата'
                    : localStorage.getItem('wantStudyLevel') == 'Специалитет'
                    ? 'специалитета'
                    : 'магистратуры'}{' '}
                у нас есть такие направления: <br />
                <i style={{ fontSize: 12, lineHeight: 0.9 }}>
                    Чтобы узнать подробнее про каждое, нажми на значок
                    информации.
                </i>
            </Title>
            <Div style={{ marginLeft: 'auto' }}>
                <List>
                    <Div className={styles.pickDirection__counter}>
                        Доступно для выбора
                        <Counter className="pickDirection__counter__num">
                            {counter >= 0 ? counter : 0}
                        </Counter>
                    </Div>
                </List>
            </Div>
            <Div className={styles.pickDirections__fit}>ФИТ</Div>
            {newDirections[localStorage.getItem('wantStudyForm')][
                localStorage.getItem('wantStudyLevel')
            ].map((faculty, index) => {
                return (
                    <Div key={index} className={styles.pickDirections__direction}>
                        <Title
                            style={{
                                marginLeft: 16,
                                padding: 16,
                                marginRight: 16,
                                marginTop: 16,
                                borderRadius: 7,
                                textAlign: 'center',
                                fontSize: '1.2rem',
                                margin: '0 auto',
                            }}
                        >
                            {faculty.name}
                        </Title>
                        <Group>
                            <FormItem>
                                {faculty.directions.map((direction, idx) => {
                                    return (
                                        <Div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Checkbox
                                                style={{ position: 'relative' }}
                                                key={idx}
                                                value={direction.name}
                                                onClick={(event) =>
                                                    handleCheckClick(event)
                                                }
                                            >
                                                {direction.name}
                                            </Checkbox>
                                            <Icon20Info
                                                style={{
                                                    position: 'relative',
                                                    zIndex: 1000,
                                                }}
                                                onClick={handleInfoClick(
                                                    direction
                                                )}
                                            />
                                        </Div>
                                    );
                                })}
                            </FormItem>
                        </Group>
                    </Div>
                );
            })}
            <FixedLayout
                filled
                className={styles.pickDirections__fixed}
                vertical="bottom"
            >
                <Div>
                    <Button
                        stretched
                        size="l"
                        mode="primary"
                        onClick={() => router.go('choosed-directions-info')}
                        disabled={counter < 5 && counter >= 0 ? false : true}
                    >
                        Продолжить
                    </Button>
                </Div>
            </FixedLayout>
        </Panel>
    );
};

export default PickDirections;
