import { createNavigator } from '@vkontakte/router';

const routes = [
    {
        name: 'acquaintance',
        children: [
            { name: 'pick-directions' },
            { name: 'about-direction' },
            { name: 'choosed-directions-info' },
            { name: 'dorms' },
            { name: 'dorm-page' },
        ],
    },
    {
        name: 'home',
        children: [
            { name: 'student-form-filling' },
            { name: 'edit' },
            { name: 'questions' },
            { name: 'questions-list' },
            { name: 'instruction' },
            { name: 'calendar' },
        ],
    },
];

const config = {
    defaultRoute: localStorage.getItem('validation') ? 'home' : 'acquaintance',
};

const router = createNavigator(routes, config);
router.start();
export default router;
