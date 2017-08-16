import axios from 'axios';

export function fetchAllContests() {
    return axios.get('api/contests')
        .then(({data}) => data.contests);
}

export function fetchContest(id) {
    return axios.get(`/api/contests/${id}`)
        .then(({data}) => data);
}
