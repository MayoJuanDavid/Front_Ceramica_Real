import { Boxes, Edit, Trash } from 'lucide-react';
import Layout from '../layout';
import Table from '../components/Table';
import AddPiezaModal from '../components/modals/add-pieza-modal';
import { baseURL, useData } from '../contexts/dataContext';
import useAddPiezaModal from '../hooks/use-add-pieza-modal';
import axios from 'axios';
import toast from 'react-hot-toast';
import React from 'react';

type FormData = {
  id_coleccion: number;
  coleccion: string;
  nro_p: number;
  id_molde: number;
  molde: string;
  descripcion: string;
  precio: number;
};

export default function Piezas() {
  const { piezas, setPiezas } = useData();

  const addPiezaModal = useAddPiezaModal();

  const [pieza, setPieza] = React.useState<FormData | undefined>(undefined);

  const PIEZAS_DATA = piezas.map((pieza) => ({
    nro_p: pieza.nro_p,
    coleccion: (
      <div className="flex gap-4 items-center text-zinc-800">
        <Boxes className="size-5" />
        <span>{pieza.coleccion}</span>
      </div>
    ),
    descripcion: pieza.descripcion,
    molde: pieza.molde,
    acciones: (
      <div className="flex gap-4 text-primary">
        <Edit
          className="size-4 cursor-pointer"
          onClick={() => {
            setPieza(pieza);
            addPiezaModal.onOpen();
          }}
        />
        <Trash
          className="size-4 text-rose-600 cursor-pointer"
          onClick={() => handleDeletePieza(pieza.nro_p)}
        />
      </div>
    ),
  }));

  const handleDeletePieza = async (nro_p: number) => {
    try {
      await axios.delete(`${baseURL}/piezas/delete/${nro_p}`);
      setPiezas((prev) => prev.filter((pieza) => pieza.nro_p !== nro_p));
      toast.success('Pieza eliminada');
    } catch (e) {
      console.error(e);
      toast.error('Ocurrió un error');
    }
  };

  return (
    <Layout>
      <AddPiezaModal
        setPiezas={setPiezas}
        pieza={pieza}
        isUpdate={pieza !== undefined}
        setPieza={setPieza}
      />
      <div className="w-4/5 p-8 bg-white flex flex-col gap-4 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center border border-b-zinc-300 border-t-0 border-l-0 border-r-0">
          <h1 className="text-3xl font-bold mb-4  pb-4">Lista de Piezas</h1>
          <button
            className="bg-primary text-white px-2 rounded-lg text-xs h-7 mt-2"
            type="button"
            onClick={addPiezaModal.onOpen}
          >
            + Agregar
          </button>
        </div>
        {PIEZAS_DATA?.length > 0 ? (
          <Table
            data={PIEZAS_DATA}
            columns={[
              {
                text: 'Id',
                accessor: 'nro_p',
              },
              {
                text: 'Colección',
                accessor: 'coleccion',
              },
              {
                text: 'Descripcion',
                accessor: 'descripcion',
              },
              {
                text: 'molde',
                accessor: 'molde',
              },
              {
                text: 'Acciones',
                accessor: 'acciones',
              },
            ]}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <Boxes className="size-12 text-zinc-500" />
            <span className="text-xl text-zinc-500">No hay Piezas</span>
          </div>
        )}
      </div>
    </Layout>
  );
}
