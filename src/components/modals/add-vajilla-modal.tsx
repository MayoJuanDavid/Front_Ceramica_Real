import React from 'react';
import Modal from './modal';
import useAddVajillaModal from '../../hooks/use-add-vajilla-modal';

const AddVajillaModal = () => {
  const [isLoading, setIsloading] = React.useState(false);

  const vajillaModal = useAddVajillaModal();

  const bodyContent = (
    <form>
      <div className="w-full flex flex-col">
        <label className="text-neutral-900 font-bold">Nombre</label>
        <input className="input" type="text" />
      </div>
      <div className="w-full flex flex-col">
        <label className="text-neutral-900 font-bold">Precio</label>
        <input className="input" type="text" />
      </div>
      <div className="w-full flex flex-col">
        <label className="text-neutral-900 font-bold">Descripción</label>
        <input className="input" type="text" />
      </div>
      <div className="w-full flex flex-col">
        <label className="text-neutral-900 font-bold">Colección</label>
        <input className="input" type="text" />
      </div>
      <div className="w-full flex flex-col">
        <label className="text-neutral-900 font-bold">Cantidad</label>
        <input className="input" type="number" />
      </div>
    </form>
  );

  const footerContent = <div></div>;

  const handleSubmit = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      vajillaModal.onClose();
    }, 1000);
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={vajillaModal.isOpen}
      title="Agregar Vajilla"
      actionLabel="Agregar"
      onClose={vajillaModal.onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddVajillaModal;
