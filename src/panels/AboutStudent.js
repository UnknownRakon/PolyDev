import React, { useEffect, useState } from 'react';

import { Panel } from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { FormItem } from '@vkontakte/vkui/dist/components/FormItem/FormItem';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import { Button } from '@vkontakte/vkui';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import CustomSelectOption from '@vkontakte/vkui/dist/components/CustomSelectOption/CustomSelectOption';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { PanelHeaderBack } from '@vkontakte/vkui';
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio';

import InputMask from 'react-input-mask';

import * as styles from '../css/AboutStudent.module.css';
const newDirections = require('../json/new_directions.json');

import router from '../router';
import { useStore } from 'effector-react';
import {
    $dorm,
    $dormnum,
    $group,
    $level,
    $prof,
    $speciality,
    $stud,
    $year,
    createUser,
    setDorm,
    setDormnum,
    setGroup,
    setLevel,
    setProf,
    setSpecialty,
    setStud,
    setYear,
} from '../store';

const AboutStudent = ({ id, fetchedUser }) => {
    const level = useStore($level);
    const year = useStore($year);
    const specialty = useStore($speciality);
    const group = useStore($group);
    const dorm = useStore($dorm);
    const stud = useStore($stud);
    const prof = useStore($prof);
    const dormnum = useStore($dormnum);
    const [user, setUser] = useState('');

    useEffect(() => {
        fetchedUser != null ? setUser(String(fetchedUser.id)) : null;
    }, [fetchedUser]);

    const register = () => {
        createUser({
            user,
            level,
            year,
            specialty,
            group,
            dorm,
            stud,
            prof,
            dormnum,
        });
        router.go('home');
    };

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.back()} />}
            >
                PolyApp
            </PanelHeader>
            <FormItem top="??????????????">
                <Select
                    name="level"
                    value={level}
                    onChange={(event) => setLevel(event.target.value)}
                    placeholder="???? ????????????"
                    options={[
                        { value: '??????????????????????', label: '??????????????????????' },
                        { value: '??????????????????????', label: '??????????????????????' },
                        { value: '????????????????????????', label: '????????????????????????' },
                    ]}
                    renderOption={({ option, ...restProps }) => (
                        <CustomSelectOption {...restProps} />
                    )}
                />
            </FormItem>
            {level === '??????????????????????' ? (
                <FormItem top="????????">
                    <Select
                        name="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        placeholder="???? ????????????"
                        options={[
                            { value: 1, label: '1 ????????' },
                            { value: 2, label: '2 ????????' },
                            { value: 3, label: '3 ????????' },
                            { value: 4, label: '4 ????????' },
                        ]}
                        renderOption={({ option, ...restProps }) => (
                            <CustomSelectOption {...restProps} />
                        )}
                    />
                </FormItem>
            ) : level === '??????????????????????' ? (
                <FormItem top="????????">
                    <Select
                        name="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        placeholder="???? ????????????"
                        options={[
                            { value: 1, label: '1 ????????' },
                            { value: 2, label: '2 ????????' },
                            { value: 3, label: '3 ????????' },
                            { value: 4, label: '4 ????????' },
                            { value: 5, label: '5 ????????' },
                        ]}
                        renderOption={({ option, ...restProps }) => (
                            <CustomSelectOption {...restProps} />
                        )}
                    />
                </FormItem>
            ) : level === '????????????????????????' ? (
                <FormItem top="????????">
                    <Select
                        name="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        placeholder="???? ????????????"
                        options={[
                            { value: 1, label: '1 ????????' },
                            { value: 2, label: '2 ????????' },
                        ]}
                        renderOption={({ option, ...restProps }) => (
                            <CustomSelectOption {...restProps} />
                        )}
                    />
                </FormItem>
            ) : null}

            {level != ''
                ? newDirections.??????????[level].map((directions, index) => {
                      return (
                          <FormItem key={index}>
                              {directions.directions.map((direction, idx) => {
                                  return (
                                      <Radio
                                          key={idx}
                                          onChange={(event) =>
                                              setSpecialty(event.target.value)
                                          }
                                          name="specialty"
                                          value={direction.name}
                                      >
                                          {direction.name}
                                      </Radio>
                                  );
                              })}
                          </FormItem>
                      );
                  })
                : null}
            <FormItem top="????????????">
                <InputMask
                    mask="999-999"
                    type="text"
                    name="group"
                    value={group}
                    onChange={(event) => setGroup(event.target.value)}
                    placeholder="000000"
                >
                    {(inputProps) => <Input {...inputProps} />}
                </InputMask>
            </FormItem>
            <FormItem top="???????????? ?? ??????????????????">
                <Select
                    value={dorm}
                    onChange={(event) => setDorm(event.target.value)}
                    name="dorm"
                    placeholder="???? ??????????????"
                    options={[
                        { value: 'Yes', label: '????' },
                        { value: 'No', label: '??????' },
                    ]}
                    renderOption={({ option, ...restProps }) => (
                        <CustomSelectOption {...restProps} />
                    )}
                />
            </FormItem>
            {dorm && dorm != 'No' ? (
                <FormItem top="?????????? ??????????????????">
                    <Select
                        value={dormnum}
                        onChange={(event) => setDormnum(event.target.value)}
                        name="dormnum"
                        placeholder="???? ??????????????"
                        options={[
                            { value: '1', label: '?????????????????? ?????????? 1' },
                            { value: '2', label: '?????????????????? ?????????? 2' },
                            { value: '3', label: '?????????????????? ?????????? 3' },
                            { value: '4', label: '?????????????????? ?????????? 4' },
                            { value: '5', label: '?????????????????? ?????????? 5' },
                            { value: '6', label: '?????????????????? ?????????? 6' },
                            { value: '7', label: '?????????????????? ?????????? 7' },
                            { value: '8', label: '?????????????????? ?????????? 8' },
                            { value: '9', label: '?????????????????? ?????????? 9' },
                            { value: '10', label: '?????????????????? ?????????? 10' },
                        ]}
                        renderOption={({ option, ...restProps }) => (
                            <CustomSelectOption {...restProps} />
                        )}
                    />
                </FormItem>
            ) : null}
            <FormItem top="?????????? ??????????????????????????(??????????????????????????)">
                <InputMask
                    mask="9999-9999"
                    type="text"
                    name="stud"
                    value={stud}
                    onChange={(event) => setStud(event.target.value)}
                    placeholder="0000-0000"
                >
                    {(inputProps) => <Input {...inputProps} />}
                </InputMask>
            </FormItem>
            <FormItem
                top="?????????? ????????????????????(??????????????????????????)"
                style={{ marginBlockEnd: 70, writingMode: 'horizontal-tb' }}
            >
                <InputMask
                    mask="9999999999999999"
                    type="text"
                    name="prof"
                    value={prof}
                    onChange={(event) => setProf(event.target.value)}
                    placeholder="0000000000000000"
                >
                    {(inputProps) => <Input {...inputProps} />}
                </InputMask>
            </FormItem>
            <FixedLayout filled vertical="bottom">
                <Div>
                    <Button
                        type="submit"
                        stretched
                        size="l"
                        mode="primary"
                        disabled={
                            level == '' ||
                            year == '' ||
                            specialty == '' ||
                            group == '' ||
                            dorm == '' ||
                            (dorm == 'Yes' && dormnum == '')
                                ? true
                                : false
                        }
                        onClick={() => register()}
                    >
                        ????????????????????
                    </Button>
                </Div>
            </FixedLayout>
        </Panel>
    );
};

export default AboutStudent;
