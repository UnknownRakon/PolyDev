import React, { Component, useEffect, useState } from 'react';

import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { PanelHeaderBack } from '@vkontakte/vkui';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import router from '../router';

import * as styles from '../css/ChoosedDirectionsInfo.module.css';

const ChoosedDirectionsInfo = ({ id }) => {
    const [messageDirectionsArray, setArray] = useState([]);
    const requiredPoint = {
        Математика: '39',
        'Русский язык': '40',
        'Информатика и ИКТ/Физика': '44/39',
    };

    useEffect(() => {
        let arr = localStorage.getItem('selectedGroups');
        setArray(JSON.parse(arr));
    }, [id]);

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.back()} />}
            >
                PolyApp
            </PanelHeader>
            <Title className={styles.choosedDirectionInfo_title}>
                Отлично! Ты выбрал:
                <ul className={styles.directionsList}>
                    {messageDirectionsArray.map((unit, index) => {
                        return (
                            <li style={{ fontSize: '1.2rem' }} key={index}>
                                {unit}
                            </li>
                        );
                    })}
                </ul>
            </Title>

            <Title className={styles.choosedDirectionInfo_title}>
                Чтобы участвовать в конкурсе на поступление тебе нужно набрать
                минимум по профильным предметам и пройти конкурс:
                <ul className={styles.directionsList}>
                    {' '}
                    {localStorage.getItem('wantStudyLevel') == 'magistracy' ? (
                        <Text>- Междисциплинарный экзамен — 40</Text>
                    ) : (
                        Object.keys(requiredPoint).map((key, index) => {
                            return (
                                <li key={index}>
                                    {' '}
                                    {key} {requiredPoint[key]}
                                </li>
                            );
                        })
                    )}
                </ul>
            </Title>
            <Title className={styles.choosedDirectionInfo_title}>
                Как подать документы?
                <ul className={styles.directionsList}>
                    <li>
                        Через{' '}
                        <a
                            className="link-dir"
                            href="https://lk.mospolytech.ru/user/sign-in/login"
                            target="blank"
                        >
                            личный кабинет абитуриента Московского Политеха
                        </a>
                    </li>
                    <li>
                        Через{' '}
                        <a
                            className="link-dir"
                            href="https://www.gosuslugi.ru/10077/1"
                            target="blank"
                        >
                            портал Госуслуг
                        </a>
                    </li>
                    <li>Лично в университете</li>
                </ul>
            </Title>
            <Title className={styles.choosedDirectionInfo_title}>
                Подготовить документы:
                <ul className={styles.directionsList}>
                    <li>Копия паспорта</li>
                    <li>Аттестат или диплом СПО</li>
                    <li>Копия СНИЛС</li>
                    <li>Заявление на поступление</li>
                    <li>Документы подтверждающие льготы (при наличии)</li>
                    <li>2 матовые фотографии 3X4 (для поступающих по ВИ)</li>
                    <li>
                        Документы подтвержающие участие в олимпиадах (при
                        наличии)
                    </li>
                </ul>
            </Title>
            <Title className={styles.choosedDirectionInfo_title}>
                Приём документов начинается 20 июня. Ждём тебя!
            </Title>

            <FixedLayout
                className={styles.choosedDirectionInfo__fixed}
                filled
                vertical="bottom"
            >
                <Div>
                    <Button
                        stretched
                        size="l"
                        mode="primary"
                        onClick={() => router.go('dorms')}
                    >
                        Общежития
                    </Button>
                </Div>
            </FixedLayout>
        </Panel>
    );
};

export default ChoosedDirectionsInfo;
