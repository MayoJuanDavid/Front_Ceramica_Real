import React from 'react';
import Modal from './modal';
import Input from '../input';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAddPiezaModal from '../../hooks/use-add-pieza-modal';

type FormData = {
  coleccion: number;
  id: number;
  molde: number;
  descripcion: string;
  precio: number;
};

interface AddPiezaModalProps {
  setPiezas: React.Dispatch<React.SetStateAction<FormData[]>>;
}

const AddPiezaModal = ({ setPiezas }: AddPiezaModalProps) => {
  const [isLoading, setIsloading] = React.useState(false);
  const generateID = () => {
    return Math.floor(Math.random() * 1000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsloading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setPiezas((prev) => [...prev, { ...data, id: generateID() }]);
    setIsloading(false);
    reset();
    piezaModal.onClose();
  };

  const piezaModal = useAddPiezaModal();

  const bodyContent = (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col px-32">
        <Input
          label="Colección"
          {...register('coleccion', { required: true })}
          type="number"
        />
        {errors.coleccion ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <Input
          label="Molde"
          {...register('molde', { required: true })}
          type="number"
          min={1}
        />
        {errors.molde ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <Input
          label="Descripción"
          {...register('descripcion', { required: true })}
        />
        {errors.descripcion ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <Input label="Categoria" {...register('precio', { required: true })} />
        {errors.precio ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
    </form>
  );

  const footerContent = <div></div>;

  return (
    <Modal
      disabled={isLoading}
      isOpen={piezaModal.isOpen}
      title="Agregar Pieza"
      actionLabel="Agregar"
      onClose={piezaModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddPiezaModal;
