import React, { useEffect, useState } from 'react';

import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import List from '@vkontakte/vkui/dist/components/List/List';
import { Cell } from '@vkontakte/vkui/dist/components/Cell/Cell';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import { PanelHeaderBack } from '@vkontakte/vkui';

import '../css/aboutDirection.css';

const AboutDirection = ({ id, go }) => {
    const [interestedDirection, setDirection] = useState({
        name: String,
        code: String,
        years: String,
        budget: String,
        commerce: String,
        details: String,
        description: String,
        plan: String,
        map: String,
    });
    useEffect(() => {
        setDirection(JSON.parse(localStorage.getItem('interestedDirection')));
    }, []);
    const createMarkup = (text) => {
        return { __html: text };
    };
    return (
        <Panel id={id}>
            <PanelHeader
                left={
                    <PanelHeaderBack onClick={go} data-to="pick-directions" />
                }
            >
                PolyApp
            </PanelHeader>
            <Title
                style={{
                    marginLeft: 16,
                    marginRight: 16,
                    marginTop: 16,
                    padding: 16,
                    background: 'var(--content_tint_background)',
                    borderRadius: 7,
                    fontSize: '1.2rem',
                    textAlign: 'center',
                }}
            >
                {interestedDirection.name}
            </Title>
            <Title
                level="2"
                weight="regular"
                style={{
                    marginLeft: 16,
                    marginRight: 16,
                    marginTop: 16,
                    padding: '16 0 16 0',
                    borderRadius: 7,
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                }}
            >
                о направлении:
            </Title>
            <List>
                <Cell indicator={interestedDirection.code}>Код</Cell>
                <Cell indicator={interestedDirection.years}>Срок обучения</Cell>
                <Cell indicator={interestedDirection.budget}>
                    Бюджетных мест
                </Cell>
                <Cell indicator={interestedDirection.commerce}>
                    Платных мест
                </Cell>
            </List>
            <Text
                weight="medium"
                style={{ marginBottom: 0, padding: 16, paddingBottom: 0 }}
                dangerouslySetInnerHTML={createMarkup(
                    interestedDirection.description
                )}
            ></Text>
            <Div style={{ paddingBlockEnd: 0, paddingBlockStart: 0 }}>
                <Link
                    className="link-instruction"
                    href={interestedDirection.plan}
                    target="_blank"
                >
                    Учебный план
                </Link>
            </Div>
            <Div
                style={{
                    paddingBlockEnd: 0,
                    paddingBlockStart: 0,
                    marginBlockEnd: 70,
                }}
            >
                <Link
                    className="link-instruction"
                    href={interestedDirection.map}
                    target="_blank"
                >
                    Карта направления
                </Link>
            </Div>
            <FixedLayout filled vertical="bottom">
                <Div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center!important',
                    }}
                >
                    <Link
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            color: 'var(--button_primary_foreground)',
                            background: 'var(--button_primary_background)',
                            borderRadius: 8,
                            minHeight: 44,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: '500',
                        }}
                        href={interestedDirection.details}
                        target="_blank"
                    >
                        {' '}
                        Подробнее
                    </Link>
                </Div>
            </FixedLayout>
        </Panel>
    );
};

export default AboutDirection;
