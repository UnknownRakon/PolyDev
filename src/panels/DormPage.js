import React, { Component } from 'react';

import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import '../css/PickDirections_v2.css';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import { Gallery, Group, PanelHeaderBack } from '@vkontakte/vkui';
let dorms = require('../json/dorms.json');
import '../css/dorm.css';

const DormPage = ({ id, back, dorm, setdorm }) => {
    const createMarkup = (text) => {
        return { __html: text };
    };
    const goNextPageHandler = () => {
        dorm === dorms['Общежития'].length - 1 ? setdorm(0) : setdorm(dorm + 1);
    };
    const goBackPageHandler = () => {
        dorm === 0 ? setdorm(dorms['Общежития'].length - 1) : setdorm(dorm - 1);
    };
    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={back} />}>
                PolyApp
            </PanelHeader>
            <Title level="1" weight="regular" className="dorm__title">
                Общежитие {dorms.Общежития[`${dorm}`].Номер}{' '}
            </Title>
            <Group>
                <Gallery
                    slideWidth="90%"
                    style={{ height: 300 }}
                    bullets="dark"
                    showArrows={true}
                    isDraggable={true}
                >
                    {dorms.Общежития[dorm].Фотографии.map((photo, index) => {
                        return (
                            <div
                                style={{
                                    backgroundImage: `url(${photo})`,
                                    backgroundSize: 'cover',
                                }}
                                key={index}
                            />
                        );
                    })}
                </Gallery>
            </Group>
            <Div
                style={{
                    margin: '0 16px 8px 16px',
                    lineHeight: '1.4rem',
                    marginBlockEnd: 70,
                }}
            >
                <Text
                    dangerouslySetInnerHTML={createMarkup(
                        dorms.Общежития[dorm].Описание
                    )}
                />
            </Div>
            <FixedLayout filled vertical="bottom">
                <Div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Button
                        style={{ width: '40%' }}
                        size="l"
                        onClick={goBackPageHandler}
                        data-to="choosed-directions-info"
                    >
                        Предыдущее
                    </Button>
                    <Button
                        style={{ width: '40%' }}
                        size="l"
                        onClick={goNextPageHandler}
                        data-to="choosed-directions-info"
                    >
                        Следующее
                    </Button>
                </Div>
            </FixedLayout>
        </Panel>
    );
};

export default DormPage;
