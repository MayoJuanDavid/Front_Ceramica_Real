import React from 'react';
import Modal from './modal';
import useAddColeccionModal from '../../hooks/use-add-coleccion-modal';
import Input from '../input';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  id_coleccion: number;
  nombre: string;
  categoria: number;
  desc_mot_col: string;
};

interface AddColeccionModalProps {
  setColecciones: React.Dispatch<React.SetStateAction<FormData[]>>;
}

const AddColeccionModal = ({ setColecciones }: AddColeccionModalProps) => {
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
    // TODO: Agregar conexion con la API se llama aqui
    /**
     * * try {
     * * fetch('url', {...data}) something like this
     * * setColecciones((prev) => [...prev, { ...data, id: generateID() }]);
     * *} catch (error) {
     * * console.error(error)
     * *}
     */
    setIsloading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setColecciones((prev) => [...prev, { ...data, id: generateID() }]);
    setIsloading(false);
    reset();
    coleccionModal.onClose();
  };

  const coleccionModal = useAddColeccionModal();

  const bodyContent = (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col px-32">
        <Input label="Nombre" {...register('nombre', { required: true })} />
        {errors.nombre ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <Input
          label="Cantidad"
          {...register('categoria', { required: true })}
          type="number"
          min={1}
        />
        {errors.categoria ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <Input
          label="Descripción"
          {...register('desc_mot_col', { required: true })}
        />
        {errors.desc_mot_col ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <Input
          label="Categoria"
          {...register('categoria', { required: true })}
        />
        {errors.categoria ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
    </form>
  );

  const footerContent = <div></div>;

  return (
    <Modal
      disabled={isLoading}
      isOpen={coleccionModal.isOpen}
      title="Agregar coleccion"
      actionLabel="Agregar"
      onClose={coleccionModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddColeccionModal;
