import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Form from "./utilities/Form";


window.Vue = Vue;
Vue.use(VueRouter);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Form = Form;
