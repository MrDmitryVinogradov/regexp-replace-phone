export default function parsePhone(phone) {
  let clearPhone = "";
  if (!/^\+/.test(phone)) {
  clearPhone = (phone.replace(/[\(\)\+\-\_\s]/g, '' ))
  clearPhone = '+' + clearPhone.replace(/^8/, '7');
  }
  else {
    clearPhone = (phone.replace(/[\(\)\-\_\s]/g, '' ))
  }
  return clearPhone;
}
