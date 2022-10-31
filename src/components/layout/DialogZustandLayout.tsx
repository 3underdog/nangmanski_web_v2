import * as React from 'react';

import BaseDialog from '@/components/dialog/BaseDialog';

import useDialogStore from '@/store/useDialogStore';

export default function Layout({ children }: { children: React.ReactNode }) {
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();

  return (
    <div>
      {children}
      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
    </div>
  );
}
