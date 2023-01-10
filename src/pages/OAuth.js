import axios from "axios";


var temp_access_token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlU3c0dGRldUTzlBekNhSzBqZURRM2dQZXBURVdWN2VhIn0.eyJzY29wZSI6WyJkYXRhOndyaXRlIiwiZGF0YTpjcmVhdGUiLCJkYXRhOnJlYWQiLCJ2aWV3YWJsZXM6cmVhZCJdLCJjbGllbnRfaWQiOiJHMVhDZk44VktCdUdhWGVETGtoWnRGaDBwWFFMVEQ1SCIsImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9hand0ZXhwMTQ0MCIsImp0aSI6IkU0YWRzTm5ZalVOZm9QUEx4dm9YdWdyVEZkSFBjSUl5UHpuTTU4UzVKTUhqWXNNeDZDMzRiUko0UjhZallSa3giLCJ1c2VyaWQiOiJIUkEyTVZMQ042S0pBU05UIiwiZXhwIjoxNjczMzM0MDQzfQ.fWQ_UMdX1_71LprQLo_GM8skP-eEzCqGat3ycDw6PHIUq3A11tUXeDN-hfj96iWUusSHuxnrn-WnPuTYC5FmY80dAVEAJeIVr_drD7aFnRrMuTWIJ5xJ_oIbDe4GG1dDffPgaPSxJNnoQN5MN4PDBY_1tuLICVkkCbKJp1yp_ig81og1pclDi9zkQTGQBSVMWbkbhRbflBk1NOdSsIGpjwkwPiKqBgOW-GaS_4-PdEI0mP4NazE67PYhs9P0Zbv-jxFFw8ge9703k8xF2I0EzyYas0_OqOZ_NAy-nwLdBh57H3MoucV2NGXAwRfaa4aksc_Hf-Mf_AKZ60fsm9nhag';

async function getAccesstoken(){
    return axios.get(temp_access_token)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        console.log(err);
    })
};

const Client = {getAccesstoken};
export default Client;