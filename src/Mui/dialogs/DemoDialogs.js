import React from 'react';
import AlertDialog from './AlertDialog';
import AlertDialogSlide from './AlertDialogSlide';
import ConfirmationDialog from './ConfirmationDialog';
import FullScreenDialog from './FullScreenDialog';
import SimpleDialog from './SimpleDialog';

const DemoDialogs = () => {
  return (
    <div>
      <br />
      <AlertDialog />
      <br /> <br />
      <AlertDialogSlide />
      <br /> <br />
      <ConfirmationDialog />
      <br /> <br />
      <FullScreenDialog />
      <br /> <br />
      <SimpleDialog />
    </div>
  );
};

export default DemoDialogs;
