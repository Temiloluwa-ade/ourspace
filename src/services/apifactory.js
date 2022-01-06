import axios from "axios";

const baseUrl = "http://46.101.27.224/api/";

const ApiFactory = {
  $_login(payload) {
    const url = `${baseUrl}admin/login`;
    return axios.post(url, payload);
  },
  $_forgotpassword(payload) {
    const url = `${baseUrl}admin/password/forgot`;
    return axios.post(url, payload);
  },
  $_resetPassword(payload) {
    const url = `${baseUrl}admin/password/reset`;
    return axios.post(url, payload);
  },
  $_resendverification(payload) {
    const url = `${baseUrl}admin/email/resend`;
    return axios.post(url, payload);
  },
  $_verifyEmail(payload) {
    const url = `${baseUrl}admin/email/verify`;
    return axios.get(url, payload);
  },
  $_logout(payload) {
    const url = `${baseUrl}admin/logout`;
    return axios.post(url, payload);
  },
  $_logoutall(payload) {
    const url = `${baseUrl}admin/logout-all`;
    return axios.post(url, payload);
  },
  $_verifyuser(payload) {
    const url = `${baseUrl}admin/verify`;
    return axios.get(url, payload);
  },
  $verify2fa(payload) {
    const url = `${baseUrl}admin/verify`;
    return axios.post(url, payload);
  },
  $_resend2fa(payload) {
    const url = `${baseUrl}admin/verify/resend`;
    return axios.post(url, payload);
  }
}

export default ApiFactory;