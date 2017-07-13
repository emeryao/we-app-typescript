import { HttpClient } from '../../utils/http-client';

let indexPage: WeApp.Page;

Page({
    data: {
        message: 'Hello World',
    },
    onLoad: function (): void {
        indexPage = this as WeApp.Page;
    },
});
