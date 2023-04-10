import React from 'react';
import { toast } from 'react-toastify';
import { CustomBody } from 'Components/Atoms/ToastProvider/ToastProvider';

const toastLogin = {
  success: (message) =>
    toast(<CustomBody message={message} />, {
      containerId: 'login',
      autoClose: 3000
    }),
  error: (message) =>
    toast(<CustomBody message={message} error />, {
      containerId: 'login',
      autoClose: 6000
    })
};

const toastMain = {
  Completed: (message, bold) =>
    toast(<CustomBody message={message} bold={bold} Completed />, {
      containerId: 'main',
      autoClose: 3000
    }),
  success: (message, bold) =>
    toast(<CustomBody message={message} bold={bold} />, {
      containerId: 'main',
      autoClose: 3000
    }),
  error: (message) =>
    toast(<CustomBody message={message} error />, {
      containerId: 'main',
      autoClose: 6000
    }),
  scheduled: (message) =>
    toast(<CustomBody message={message} scheduled />, {
      containerId: 'main',
      autoClose: 3000
    }),
  cancelled: (message) =>
    toast(<CustomBody message={message} cancelled />, {
      containerId: 'main',
      autoClose: 3000
    }),
  ProcessorAdd: (message) =>
    toast(<CustomBody message={message} ProcessorAdd />, {
      containerId: 'main',
      autoClose: 3000
    }),
  ProcessorActivated: (message) =>
    toast(<CustomBody message={message} ProcessorActivated />, {
      containerId: 'main',
      autoClose: 3000
    }),
  ProcessorDeactivated: (message) =>
    toast(<CustomBody message={message} ProcessorDeactivated />, {
      containerId: 'main',
      autoClose: 3000
    }),
  MIDActivate: (message) =>
    toast(<CustomBody message={message} MIDActivate />, {
      containerId: 'main',
      autoClose: 3000
    }),
  MIDDeactivate: (message) =>
    toast(<CustomBody message={message} MIDDeactivate />, {
      containerId: 'main',
      autoClose: 3000
    }),
  MIDCreate: (message) =>
    toast(<CustomBody message={message} MIDCreate />, {
      containerId: 'main',
      autoClose: 3000
    }),
  MIDSave: (message) =>
    toast(<CustomBody message={message} MIDSave />, {
      containerId: 'main',
      autoClose: 3000
    }),
  changesSaved: (message) =>
    toast(<CustomBody message={message} changesSaved />, {
      containerId: 'main',
      autoClose: 3000
    }),
  deactivated: (message) =>
    toast(<CustomBody message={message} deactivated />, {
      containerId: 'main',
      autoClose: 3000
    }),
  active: (message) =>
    toast(<CustomBody message={message} active />, {
      containerId: 'main',
      autoClose: 3000
    })
};

export { toastLogin };
export default toastMain;
