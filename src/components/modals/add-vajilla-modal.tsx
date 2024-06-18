import React from 'react';
import Modal from './modal';
import useAddVajillaModal from '../../hooks/use-add-vajilla-modal';
import Input from '../input';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { baseURL } from '../../contexts/dataContext';

type FormData = {
  nro_v: number;
  nombre: string;
  cant_p: number;
  descripcion: string;
};

interface AddVajillaModalProps {
  vajilla?: FormData;
  setVajilla: React.Dispatch<React.SetStateAction<FormData | undefined>>;
  setVajillas: React.Dispatch<React.SetStateAction<FormData[]>>;
  isUpdate?: boolean;
}

const AddVajillaModal = ({
  vajilla,
  setVajilla,
  setVajillas,
  isUpdate = false,
}: AddVajillaModalProps) => {
  const [isLoading, setIsloading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  React.useEffect(() => {
    if (vajilla) {
      reset(vajilla);
    }
  }, [vajilla, reset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (
      Number(data.cant_p) !== 2 &&
      Number(data.cant_p) !== 4 &&
      Number(data.cant_p) !== 6
    ) {
      toast.error('La cantidad de piezas debe ser 2, 4, 6');
      return;
    }

    setIsloading(true);
    try {
      if (isUpdate) {
        const response = await axios.put(
          `${baseURL}/vajillas/update/${vajilla?.nro_v}`,
          data
        );

        if (response.status !== 200) {
          throw new Error('Error al actualizar la coleccion');
        }

        vajillaModal.onClose();
        setVajillas((prev) =>
          prev.map((v) => (v.nro_v === vajilla?.nro_v ? response.data : v))
        );
        toast.success('Vajilla actualizada');
        setVajilla(undefined);
        return;
      }
      const response = await axios.post(`${baseURL}/vajillas/add`, data);

      if (response.status !== 200) {
        throw new Error('Error al agregar la coleccion');
      }

      vajillaModal.onClose();
      setVajillas((prev) => [...prev, response.data]);
      toast.success('Colección agregada');
    } catch (e) {
      toast.error('Error al agregar la coleccion');
    } finally {
      setIsloading(false);
      reset();
    }
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
          {...register('cant_p', { required: true })}
          type="number"
          min={1}
        />
        {errors.cant_p ? (
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
      title={`${isUpdate ? 'Modificar' : 'Agregar'} Vajilla`}
      actionLabel={isUpdate ? 'Modificar' : 'Agregar'}
      onClose={vajillaModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddVajillaModal;
