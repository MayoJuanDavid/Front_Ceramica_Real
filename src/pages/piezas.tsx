import { Boxes, Edit } from 'lucide-react';
import Layout from '../layout';
import Table from '../components/Table';
import AddPiezaModal from '../components/modals/add-pieza-modal';
import { useData } from '../contexts/dataContext';
import useAddPiezaModal from '../hooks/use-add-pieza-modal';

export default function Piezas() {
  const { piezas, setPiezas } = useData();

  const addPiezaModal = useAddPiezaModal();

  const PIEZAS_DATA = piezas.map((pieza) => ({
    id: pieza.id,
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
        <Edit className="size-4" />
      </div>
    ),
  }));

  return (
    <Layout>
      <AddPiezaModal setPiezas={setPiezas} />
      <div className="w-4/5 p-8 bg-white flex flex-col gap-4">
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
                accessor: 'id',
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
