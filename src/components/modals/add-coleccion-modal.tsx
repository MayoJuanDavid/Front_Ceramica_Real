import React from 'react';
import Modal from './modal';
import useAddColeccionModal from '../../hooks/use-add-coleccion-modal';
import Input from '../input';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { baseURL } from '../../contexts/dataContext';
import axios from 'axios';

type FormData = {
  id_coleccion: number;
  nombre: string;
  categoria: string;
  desc_mot_col: string;
};

interface AddColeccionModalProps {
  coleccion?: FormData;
  setColecciones: React.Dispatch<React.SetStateAction<FormData[]>>;
  setColeccion: React.Dispatch<React.SetStateAction<FormData | undefined>>;
  isUpdate?: boolean;
}

const AddColeccionModal = ({
  coleccion,
  setColecciones,
  setColeccion,
  isUpdate = false,
}: AddColeccionModalProps) => {
  const [isLoading, setIsloading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  React.useEffect(() => {
    if (coleccion) {
      reset(coleccion);
    }
  }, [reset, coleccion]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsloading(true);
    try {
      if (isUpdate) {
        const response = await axios.put(
          `${baseURL}/colecciones/update/${coleccion?.id_coleccion}`,
          data
        );

        if (response.status !== 200) {
          throw new Error('Error al actualizar la coleccion');
        }

        setColecciones((prev) =>
          prev.map((c) =>
            c.id_coleccion === coleccion?.id_coleccion ? response.data : c
          )
        );

        toast.success('Colección actualizada');
        setColeccion(undefined);
        coleccionModal.onClose();
        return;
      }

      const response = await axios.post(`${baseURL}/colecciones/add`, data);

      if (response.status !== 200) {
        throw new Error('Error al agregar la coleccion');
      }

      coleccionModal.onClose();
      setColecciones((prev) => [...prev, response.data]);
      toast.success('Colección agregada');
    } catch (e) {
      toast.error('Error al agregar la coleccion');
    } finally {
      setIsloading(false);
      reset();
    }
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
      title={`${isUpdate ? 'Modificar' : 'Agregar'} colección`}
      actionLabel={`${isUpdate ? 'Modificar' : 'Agregar'}`}
      onClose={coleccionModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddColeccionModal;
