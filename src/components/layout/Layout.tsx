import * as React from 'react';

import BaseDialog from '@/components/dialog/BaseDialog';
import Footer from '@/components/layout/Footer';

import useDialogStore from '@/store/useDialogStore';

import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here

  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  return (
    <>
      <Header mode='' />
      <section className='min-h-full font-primary'>{children}</section>
      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
      <Footer />
    </>
  );
}
