/* eslint-disable */
const email = /^[\w.!#$%&'*+/=?^-`{|}~-]+@[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?(?:\.[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z0-9])?)+$/;

const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*()-+_={}[\]~^?]).{8,}$/;

const date = /^(([1-9]|0[1-9])|1\d|2\d|3[01])\/((\d|0\d)|1[0-2])\/((19|20)\d{2})$/;

module.exports = {
  email,
  password,
  date,
};