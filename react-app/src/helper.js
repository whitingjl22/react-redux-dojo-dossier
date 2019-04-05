import axios from 'axios';
import { updateTasksList } from './redux';

// v2 
export const retrieveTasksPromise = () => {
    return axios.get(`http://5c992ab94236560014393239.mockapi.io/tasks`);
}

export const updateTasksPromise = (id, task) => {
    return axios.put(`http://5c992ab94236560014393239.mockapi.io/tasks/${id}`, task);
}
