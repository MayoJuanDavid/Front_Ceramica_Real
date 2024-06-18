import Table from '../components/Table';
import Vajilla from '../components/icons/vajilla';
import AddVajillaModal from '../components/modals/add-vajilla-modal';
import useAddVajillaModal from '../hooks/use-add-vajilla-modal';
import Layout from '../layout';
import { Edit } from 'lucide-react';
import { useData } from '../contexts/dataContext';

type FormData = {
  id: number;
  nombre: string;
  cantidad: number;
  descripcion: string;
};

export default function Dashboard() {
  const addVajillaModal = useAddVajillaModal();
  const { vajillas, setVajillas } = useData();

  const VAJILLAS_DATA = vajillas.map((vajilla: FormData) => ({
    id: vajilla.id,
    nombre: (
      <div className="flex gap-2 items-center">
        <Vajilla className="size-8" />
        <span>{vajilla.nombre}</span>
      </div>
    ),
    descripcion: vajilla.descripcion,
    cantidad: vajilla.cantidad,
    acciones: (
      <div className="flex gap-4 text-primary">
        <Edit className="size-4" id={vajilla.id.toString()} />
      </div>
    ),
  }));

  return (
    <Layout>
      <AddVajillaModal setVajillas={setVajillas} />
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
              { text: 'Id', accessor: 'id' },
              { text: 'Nombre', accessor: 'nombre' },
              { text: 'Cantidad', accessor: 'cantidad' },
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
