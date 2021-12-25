import React, { Component, useState, useEffect } from 'react';

import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Gradient from '@vkontakte/vkui/dist/components/Gradient/Gradient';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import { Button, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { Icon28CalendarOutline } from '@vkontakte/icons';
import { Icon28InfoCircleOutline } from '@vkontakte/icons';
import { Icon20Write } from '@vkontakte/icons';
import { Icon16Clear } from '@vkontakte/icons';
import * as styles from '../css/HomePage.module.css';

import router from '../router';

const HomePage = ({ id, setActivePanel, fetchedUser }) => {
    const [group, setGroup] = useState('');
    const [level, setLevel] = useState('');
    const [stud, setStud] = useState('');
    const [prof, setProf] = useState('');
    const [dorm, setDorm] = useState('');
    const [year, setYear] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [dormnum, setDormnum] = useState('');
    useEffect(() => {
        localStorage.setItem('validation', 'set');
        localStorage.removeItem('category');
        setGroup(localStorage.getItem('group'));
        setLevel(localStorage.getItem('level'));
        setStud(localStorage.getItem('stud'));
        setProf(localStorage.getItem('prof'));
        setDorm(localStorage.getItem('dorm'));
        setYear(localStorage.getItem('year'));
        setSpecialty(localStorage.getItem('specialty'));
        setDormnum(localStorage.getItem('dormnum'));
        router.stop();
        router.start();
    }, []);
    const clearAll = () => {
        window.localStorage.clear();
        router.go('acquaintance');
    };
    return (
        <Panel id={id}>
            <PanelHeader>PolyApp</PanelHeader>
            <Div>
                {fetchedUser && (
                    <Gradient className={styles.avatar}>
                        <Avatar src={fetchedUser.photo_200} size={96} />
                        <Header
                            className={styles.delete}
                            mode="primary"
                            aside={<Icon16Clear onClick={clearAll} />}
                        >
                            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                        </Header>
                        <Text style={{ color: 'var(--text_secondary)' }}>
                            {fetchedUser.city && fetchedUser.city.title
                                ? fetchedUser.city.title
                                : ''}
                        </Text>
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>
                            {specialty}
                        </Text>
                    </Gradient>
                )}
            </Div>
            <Group className={styles.groupAbout} style={{ marginBlockEnd: 70 }}>
                <Header
                    mode="primary"
                    aside={<Icon20Write onClick={() => router.go('edit')} />}
                >
                    Обо мне
                </Header>
                <Header mode="secondary" aside={<Text>{level}</Text>}>
                    Ступень:
                </Header>
                <Header mode="secondary" aside={<Text>{group}</Text>}>
                    Группа:
                </Header>
                <Header mode="secondary" aside={<Text>{year}</Text>}>
                    Курс:
                </Header>
                {dorm == 'Yes' ? (
                    <Header mode="secondary" aside={<Text>{dormnum}</Text>}>
                        Общежитие №:
                    </Header>
                ) : null}
                {stud != '' ? (
                    <Header mode="secondary" aside={<Text>{stud}</Text>}>
                        Студенческий:
                    </Header>
                ) : null}
                {prof != '' ? (
                    <Header mode="secondary" aside={<Text>{prof}</Text>}>
                        Профбилет:
                    </Header>
                ) : null}
            </Group>
            <FixedLayout filled vertical="bottom">
                <Tabbar className={styles.tabbarPadding}>
                    <TabbarItem
                        text="Вопросы"
                        onClick={() => router.go('questions')}
                    >
                        <Icon28InfoCircleOutline />
                    </TabbarItem>
                    <TabbarItem
                        text="Календарь"
                        onClick={() => router.go('calendar')}
                    >
                        <Icon28CalendarOutline />
                    </TabbarItem>
                    <TabbarItem text="Профиль" selected>
                        <Icon28UserCircleOutline />
                    </TabbarItem>
                </Tabbar>
            </FixedLayout>
        </Panel>
    );
};

export default HomePage;
