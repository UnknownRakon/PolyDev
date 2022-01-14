import axios from 'axios';
import { combine, createEffect, createEvent, createStore } from 'effector';

export const $user_id = createStore('');
export const $group = createStore('');
export const $level = createStore('');
export const $year = createStore('');
export const $speciality = createStore('');
export const $dorm = createStore('');
export const $stud = createStore('');
export const $prof = createStore('');
export const $dormnum = createStore('');

export const $user = combine({
    $user_id,
    $group,
    $level,
    $year,
    $speciality,
    $dorm,
    $stud,
    $prof,
    $dormnum,
});

export const setID = createEvent();
export const setGroup = createEvent();
export const setLevel = createEvent();
export const setYear = createEvent();
export const setSpecialty = createEvent();
export const setDorm = createEvent();
export const setStud = createEvent();
export const setProf = createEvent();
export const setDormnum = createEvent();

$user_id.on(setID, (_, data) => data);
$group.on(setGroup, (_, data) => data);
$level.on(setLevel, (_, data) => data);
$year.on(setYear, (_, data) => data);
$speciality.on(setSpecialty, (_, data) => data);
$dorm.on(setDorm, (_, data) => data);
$stud.on(setStud, (_, data) => data);
$prof.on(setProf, (_, data) => data);
$dormnum.on(setDormnum, (_, data) => data);

export const getUser = createEffect(async (id) => {
    var requestOptions = {
        method: 'GET',
    };
    fetch(`https://herokypolyapi.herokuapp.com/api/user/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .then((user) => {
            if (user != null) {
                setGroup(user.group);
                setLevel(user.level);
                setYear(user.year);
                setSpecialty(user.speciality);
                setDorm(user.dorm);
                setProf(user.prof ? user.prof : '');
                setStud(user.stud ? user.stud : '');
                setDormnum(user.dormnum ? user.dormnum : '');
            }
        });
});
export const createUser = createEffect(
    async ({
        user,
        level,
        year,
        specialty,
        group,
        dorm,
        stud,
        prof,
        dormnum,
    }) => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        var raw = JSON.stringify({
            id: String(user),
            group: String(group),
            level: String(level),
            year: Number(year),
            speciality: String(specialty),
            dorm: String(dorm),
            stud: String(stud),
            prof: Number(prof),
            dormnum: Number(dormnum),
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch(
            'https://herokypolyapi.herokuapp.com/api/createUser',
            requestOptions
        );
    }
);
export const updateUser = createEffect(
    async ({
        user,
        level,
        year,
        specialty,
        group,
        dorm,
        stud,
        prof,
        dormnum,
    }) => {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        var raw = JSON.stringify({
            group: String(group),
            level: String(level),
            year: Number(year),
            speciality: String(specialty),
            dorm: String(dorm),
            stud: String(stud),
            prof: Number(prof),
            dormnum: Number(dormnum),
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch(
            `https://herokypolyapi.herokuapp.com/api/updateUser/${String(
                user
            )}`,
            requestOptions
        );
    }
);
export const deleteUser = createEffect(async (id) => {
    var requestOptions = {
        method: 'DELETE',
    };
    fetch(
        `https://herokypolyapi.herokuapp.com/api/delete/${String(id)}`,
        requestOptions
    );
    setDorm($dorm.defaultState);
    setDormnum($dormnum.defaultState);
    setGroup($group.defaultState);
    setLevel($level.defaultState);
    setProf($prof.defaultState);
    setSpecialty($speciality.defaultState);
    setStud($stud.defaultState);
    setYear($year.defaultState);
});
