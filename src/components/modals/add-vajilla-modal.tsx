import React from 'react';
import Modal from './modal';
import useAddVajillaModal from '../../hooks/use-add-vajilla-modal';
import Input from '../input';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  id: number;
  nombre: string;
  cantidad: number;
  descripcion: string;
};

interface AddVajillaModalProps {
  // vajillas: FormData[];
  setVajillas: React.Dispatch<React.SetStateAction<FormData[]>>;
}

const AddVajillaModal = ({ setVajillas }: AddVajillaModalProps) => {
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
    setVajillas((prev) => [...prev, { ...data, id: generateID() }]);
    setIsloading(false);
    reset();
    vajillaModal.onClose();
  };

  const vajillaModal = useAddVajillaModal();

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
          {...register('cantidad', { required: true })}
          type="number"
          min={1}
        />
        {errors.cantidad ? (
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
    </form>
  );

  const footerContent = <div></div>;

  return (
    <Modal
      disabled={isLoading}
      isOpen={vajillaModal.isOpen}
      title="Agregar Vajilla"
      actionLabel="Agregar"
      onClose={vajillaModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddVajillaModal;
