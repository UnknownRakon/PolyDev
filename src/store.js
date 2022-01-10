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
    fetch(
        `https://prisma-poly.netlify.app/.netlify/functions/getUser?id=${id}`,
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(JSON.parse(result)))
        .catch((error) => console.log('error', error));
});
