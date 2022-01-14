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
import { useStore } from 'effector-react';
import { $user, deleteUser } from '../store';

const HomePage = ({ id, fetchedUser }) => {
    const user = useStore($user);
    useEffect(() => {
        localStorage.setItem('validation', 'set');
        localStorage.removeItem('category');
        router.stop();
        router.start();
    }, []);
    const deleteAccount = () => {
        deleteUser(fetchedUser.id);
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
                            aside={
                                <Icon16Clear onClick={() => deleteAccount()} />
                            }
                        >
                            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                        </Header>
                        <Text style={{ color: 'var(--text_secondary)' }}>
                            {fetchedUser.city && fetchedUser.city.title
                                ? fetchedUser.city.title
                                : ''}
                        </Text>
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>
                            {user.$speciality}
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
                <Header mode="secondary" aside={<Text>{user.$level}</Text>}>
                    Ступень:
                </Header>
                <Header mode="secondary" aside={<Text>{user.$group}</Text>}>
                    Группа:
                </Header>
                <Header mode="secondary" aside={<Text>{user.$year}</Text>}>
                    Курс:
                </Header>
                {user.$dorm == 'Yes' ? (
                    <Header
                        mode="secondary"
                        aside={<Text>{user.$dormnum}</Text>}
                    >
                        Общежитие №:
                    </Header>
                ) : null}
                {user.$stud != '' ? (
                    <Header mode="secondary" aside={<Text>{user.$stud}</Text>}>
                        Студенческий:
                    </Header>
                ) : null}
                {user.$prof != '' ? (
                    <Header mode="secondary" aside={<Text>{user.$prof}</Text>}>
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
