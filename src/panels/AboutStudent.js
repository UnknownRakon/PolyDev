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

import '../css/AboutStudents.css';
const newDirections = require('../json/new_directions.json');

import router from '../router';

const AboutStudent = ({ id }) => {
    const [level, setLevel] = useState('');
    const [year, setYear] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [group, setGroup] = useState('');
    const [dorm, setDorm] = useState('');
    const [stud, setStud] = useState('');
    const [prof, setProf] = useState('');
    const [dormnum, setDormnum] = useState('');

    const toStorage = () => {
        localStorage.setItem('level', level);
        localStorage.setItem('year', year);
        localStorage.setItem('specialty', specialty);
        localStorage.setItem('group', group);
        localStorage.setItem('dorm', dorm);
        localStorage.setItem('stud', stud);
        localStorage.setItem('prof', prof);
        localStorage.setItem('dormnum', dormnum);
        router.go('home');
    };

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={() => router.back()} />}
            >
                PolyApp
            </PanelHeader>
            <FormItem top="Ступень">
                <Select
                    name="level"
                    value={level}
                    onChange={(event) => setLevel(event.target.value)}
                    placeholder="Не выбран"
                    options={[
                        { value: 'Бакалавриат', label: 'Бакалавриат' },
                        { value: 'Специалитет', label: 'Специалитет' },
                        { value: 'Магистратура', label: 'Магистратура' },
                    ]}
                    renderOption={({ option, ...restProps }) => (
                        <CustomSelectOption {...restProps} />
                    )}
                />
            </FormItem>
            {level === 'Бакалавриат' ? (
                <FormItem top="Курс">
                    <Select
                        name="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        placeholder="Не выбран"
                        options={[
                            { value: 1, label: '1 курс' },
                            { value: 2, label: '2 курс' },
                            { value: 3, label: '3 курс' },
                            { value: 4, label: '4 курс' },
                        ]}
                        renderOption={({ option, ...restProps }) => (
                            <CustomSelectOption {...restProps} />
                        )}
                    />
                </FormItem>
            ) : level === 'Специалитет' ? (
                <FormItem top="Курс">
                    <Select
                        name="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        placeholder="Не выбран"
                        options={[
                            { value: 1, label: '1 курс' },
                            { value: 2, label: '2 курс' },
                            { value: 3, label: '3 курс' },
                            { value: 4, label: '4 курс' },
                            { value: 5, label: '5 курс' },
                        ]}
                        renderOption={({ option, ...restProps }) => (
                            <CustomSelectOption {...restProps} />
                        )}
                    />
                </FormItem>
            ) : level === 'Магистратура' ? (
                <FormItem top="Курс">
                    <Select
                        name="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        placeholder="Не выбран"
                        options={[
                            { value: 1, label: '1 курс' },
                            { value: 2, label: '2 курс' },
                        ]}
                        renderOption={({ option, ...restProps }) => (
                            <CustomSelectOption {...restProps} />
                        )}
                    />
                </FormItem>
            ) : null}

            {level != ''
                ? newDirections.Очная[level].map((directions, index) => {
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
            <FormItem top="Группа">
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
            <FormItem top="Живешь в общежитии">
                <Select
                    value={dorm}
                    onChange={(event) => setDorm(event.target.value)}
                    name="dorm"
                    placeholder="Не выбрано"
                    options={[
                        { value: 'Yes', label: 'Да' },
                        { value: 'No', label: 'Нет' },
                    ]}
                    renderOption={({ option, ...restProps }) => (
                        <CustomSelectOption {...restProps} />
                    )}
                />
            </FormItem>
            {dorm && dorm != 'No' ? (
                <FormItem top="Номер общежития">
                    <Select
                        value={dormnum}
                        onChange={(event) => setDormnum(event.target.value)}
                        name="dormnum"
                        placeholder="Не выбрано"
                        options={[
                            { value: '1', label: 'Общежитие номер 1' },
                            { value: '2', label: 'Общежитие номер 2' },
                            { value: '3', label: 'Общежитие номер 3' },
                            { value: '4', label: 'Общежитие номер 4' },
                            { value: '5', label: 'Общежитие номер 5' },
                            { value: '6', label: 'Общежитие номер 6' },
                            { value: '7', label: 'Общежитие номер 7' },
                            { value: '8', label: 'Общежитие номер 8' },
                            { value: '9', label: 'Общежитие номер 9' },
                            { value: '10', label: 'Общежитие номер 10' },
                        ]}
                        renderOption={({ option, ...restProps }) => (
                            <CustomSelectOption {...restProps} />
                        )}
                    />
                </FormItem>
            ) : null}
            <FormItem top="Номер студенческого(необязательно)">
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
                top="Номер профбилета(необязательно)"
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
                        onClick={() => toStorage()}
                    >
                        Продолжить
                    </Button>
                </Div>
            </FixedLayout>
        </Panel>
    );
};

export default AboutStudent;
