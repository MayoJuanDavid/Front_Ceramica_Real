import React from 'react';
import Table from '../components/Table';
import Vajilla from '../components/icons/vajilla';
import AddVajillaModal from '../components/modals/add-vajilla-modal';
import useAddVajillaModal from '../hooks/use-add-vajilla-modal';
import Layout from '../layout';
import { Edit } from 'lucide-react';

type FormData = {
  id: number;
  nombre: string;
  cantidad: number;
  descripcion: string;
};

// const VAJILLAS_DATA = [
//   {
//     id: 1,
//     name: (
//       <div className="flex gap-2 items-center">
//         <Vajilla className="size-8" />
//         <span>Vaso</span>
//       </div>
//     ),
//     price: 'Clasica',
//     description: 'Vaso mediano',
//     collection: 'Lineal Naranja',
//     quantity: 10,
//     actions: (
//       <div className="flex gap-4 text-primary">
//         <Edit className="size-4" />
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     name: (
//       <div className="flex gap-2 items-center">
//         <Vajilla className="size-8" />
//         <span>Taza</span>
//       </div>
//     ),
//     price: 'Clasica',
//     description: 'Taza cafe pequena',
//     collection: 'Lineal Naranja',
//     quantity: 10,
//     actions: (
//       <div className="flex gap-4 text-primary">
//         <Edit className="size-4" />
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     name: (
//       <div className="flex gap-2 items-center">
//         <Vajilla className="size-8" />
//         <span>Plato</span>
//       </div>
//     ),
//     price: 'Clasica',
//     description: 'Plato taza cafe',
//     collection: 'Lineal Naranja',
//     quantity: 10,
//     actions: (
//       <div className="flex gap-4 text-primary">
//         <Edit className="size-4" />
//       </div>
//     ),
//   },
// ];

export default function Dashboard() {
  const addVajillaModal = useAddVajillaModal();
  const [vajillas, setVajillas] = React.useState<FormData[]>([]);

  const VAJILLAS_DATA = React.useMemo(
    () =>
      vajillas.map((vajilla: FormData) => ({
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
      })),
    [vajillas]
  );

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
          <div>No hay vajillas</div>
        )}
      </div>
    </Layout>
  );
}
