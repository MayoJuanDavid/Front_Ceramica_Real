import React from 'react';
import Modal from './modal';
import Input from '../input';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAddPiezaModal from '../../hooks/use-add-pieza-modal';
import { baseURL, useData } from '../../contexts/dataContext';
import axios from 'axios';
import toast from 'react-hot-toast';

type FormData = {
  id_coleccion: number;
  coleccion: string;
  nro_p: number;
  id_molde: number;
  molde: string;
  descripcion: string;
  precio: number;
};

interface AddPiezaModalProps {
  pieza?: FormData;
  setPiezas: React.Dispatch<React.SetStateAction<FormData[]>>;
  setPieza: React.Dispatch<React.SetStateAction<FormData | undefined>>;
  isUpdate?: boolean;
}

const AddPiezaModal = ({
  pieza,
  setPiezas,
  setPieza,
  isUpdate,
}: AddPiezaModalProps) => {
  const [isLoading, setIsloading] = React.useState(false);

  const { moldes, colecciones } = useData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  React.useEffect(() => {
    if (pieza) {
      reset(pieza);
    }
  }, [reset, pieza]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (isUpdate) {
        const response = await axios.put(
          `${baseURL}/piezas/update/${pieza?.nro_p}`,
          data
        );

        if (response.status !== 200) {
          throw new Error('Error al actualizar la pieza');
        }

        setPiezas((prev) =>
          prev.map((p) => (p.nro_p === pieza?.nro_p ? response.data : p))
        );

        toast.success('Pieza actualizada');
        setPieza(undefined);
        return;
      }

      const response = await axios.post(`${baseURL}/piezas/add`, {
        ...data,
        id_coleccion: Number(data.id_coleccion),
        id_molde: Number(data.id_molde),
      });

      if (response.status !== 200) {
        throw new Error('Error al agregar la pieza');
      }

      setPiezas((prev) => [...prev, response.data]);

      toast.success('Pieza agregada');
    } catch (error) {
      toast.error('Error al agregar la pieza');
    } finally {
      setIsloading(false);
      reset();
      piezaModal.onClose();
    }
  };

  const piezaModal = useAddPiezaModal();

  const bodyContent = (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col px-32">
        <label>Colección</label>
        <select
          {...register('id_coleccion', { required: true })}
          className="border border-zinc-300 rounded-lg p-2"
        >
          <option value="">Selecciona una colección</option>
          {colecciones.map((coleccion) => (
            <option key={coleccion.id_coleccion} value={coleccion.id_coleccion}>
              {coleccion.nombre}
            </option>
          ))}
        </select>
        {errors.id_coleccion ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <select
          {...register('id_molde', { required: true })}
          className="border border-zinc-300 rounded-lg p-2"
        >
          <option value="">Selecciona un molde</option>
          {moldes.map((molde) => (
            <option key={molde.id_molde} value={molde.id_molde}>
              {`${molde.tipo} ${molde.volumen ?? ''}`}
            </option>
          ))}
        </select>
        {errors.id_molde ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <Input
          label="Descripción"
          {...register('descripcion')}
        />
        {errors.descripcion ? (
          <span className="text-xs text-rose-600">Este campo es requerido</span>
        ) : null}
      </div>
      <div className="w-full flex flex-col px-32">
        <Input label="Precio" {...register('precio')} type="number" />
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
      title={`${isUpdate ? 'Modificar' : 'Agregar'}Pieza`}
      actionLabel={`${isUpdate ? 'Modificar' : 'Agregar'}`}
      onClose={piezaModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddPiezaModal;
