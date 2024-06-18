import Table from '../components/Table';
import Vajilla from '../components/icons/vajilla';
import AddVajillaModal from '../components/modals/add-vajilla-modal';
import useAddVajillaModal from '../hooks/use-add-vajilla-modal';
import Layout from '../layout';
import { Edit, Trash } from 'lucide-react';
import { baseURL, useData } from '../contexts/dataContext';
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

type FormData = {
  nro_v: number;
  nombre: string;
  cant_p: number;
  descripcion: string;
};

export default function Dashboard() {
  const addVajillaModal = useAddVajillaModal();
  const { vajillas, setVajillas } = useData();

  const [vajilla, setVajilla] = React.useState<FormData | undefined>(undefined);

  const VAJILLAS_DATA = vajillas.map((vajilla: FormData) => ({
    nro_v: vajilla.nro_v,
    nombre: (
      <div className="flex gap-2 items-center">
        <Vajilla className="size-8" />
        <span>{vajilla.nombre}</span>
      </div>
    ),
    descripcion: vajilla.descripcion,
    cant_p: vajilla.cant_p,
    acciones: (
      <div className="flex gap-4 text-primary">
        <Edit
          className="size-4 cursor-pointer"
          id={vajilla.nro_v.toString()}
          onClick={() => {
            setVajilla(vajilla);
            addVajillaModal.onOpen();
          }}
        />
        <Trash
          className="size-4 text-rose-600 cursor-pointer"
          id={vajilla.nro_v.toString()}
          onClick={() => handleDeleteVajilla(vajilla.nro_v)}
        />
      </div>
    ),
  }));

  const handleDeleteVajilla = async (nro_v: number) => {
    try {
      await axios.delete(`${baseURL}/vajillas/delete/${nro_v}`);
      setVajillas((prev) => prev.filter((v) => v.nro_v !== nro_v));
      toast.success('Vajilla eliminada');
    } catch (e) {
      console.error(e);
      toast.error('Error al eliminar la vajilla');
    }
  };

  return (
    <Layout>
      <AddVajillaModal
        vajilla={vajilla}
        setVajillas={setVajillas}
        isUpdate={vajilla !== undefined}
        setVajilla={setVajilla}
      />
      <div className="w-4/5 p-8 bg-white flex flex-col gap-4">
        <div className="flex justify-between items-center border border-b-zinc-300 border-t-0 border-l-0 border-r-0">
          <h1 className="text-3xl font-bold mb-4  pb-4">Lista de Vajillas</h1>
          <button
            className="bg-primary text-white px-2 rounded-lg text-xs h-7 mt-2"
            type="button"
            onClick={addVajillaModal.onOpen}
          >
            + Agregar
          </button>
        </div>
        {VAJILLAS_DATA?.length > 0 ? (
          <Table
            data={VAJILLAS_DATA}
            columns={[
              { text: 'Id', accessor: 'nro_v' },
              { text: 'Nombre', accessor: 'nombre' },
              { text: 'Cantidad', accessor: 'cant_p' },
              { text: 'Descripcion', accessor: 'descripcion' },
              { text: 'Acciones', accessor: 'acciones' },
            ]}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <Vajilla className="size-12 text-zinc-500" />
            <span className="text-xl text-zinc-500">No hay Vajillas</span>
          </div>
        )}
      </div>
    </Layout>
  );
}
