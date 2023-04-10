import textEllipsis from './textEllipsis';

export const EmailMask = (email) => {
  if (email?.length >= 15) {
    return `${textEllipsis(email.split('@')[0], 5)}@${email.split('@')[1]}`;
  } else {
    return email;
  }
};
