export default function hideEmail(email) {
  const emailSplit = email.split('@');
  const emailName = emailSplit[0];
  const emailDomain = emailSplit[1];
  let _maskedEmailName = '';
  for (let i = 1; i < emailName.length - 1; i++) {
    _maskedEmailName = `${_maskedEmailName}•`;
  }
  return `${emailName[0]}${_maskedEmailName}${
    emailName[emailName.length - 1]
  }@${emailDomain}`;
}
