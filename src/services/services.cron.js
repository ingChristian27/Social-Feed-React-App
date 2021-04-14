import { DELAY_TIME_MILISECONDS } from "../constants";
import * as service from "../services/services.post";
let cronUp = true;
let currentScheduledTask = null;

const processData = async () => {
    return await service.processPost();
};

export const setState = state => (cronUp = state);

const scheduleTask = async callback => {
    return setTimeout(async () => {
        await periodicTask(callback);
    }, DELAY_TIME_MILISECONDS);
};

const periodicTask = async callback => {
    try {
        if (cronUp) {
            // Proccess data logic for update the posts
            const posts = await processData();
            // schedule Task again
            currentScheduledTask = scheduleTask(callback);
            callback(posts);
        }
    } catch (error) {
        console.error(error.message, error);
    }
};

export const initTask = async callback => {
    periodicTask(callback);
};

export const endTask = () => clearTimeout(currentScheduledTask);
