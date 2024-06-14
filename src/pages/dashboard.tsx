import Table from '../components/Table';
import Vajilla from '../components/icons/vajilla';
import Layout from '../layout';
import { Edit } from 'lucide-react';

const VAJILLAS_DATA = [
  {
    id: 1,
    name: (
      <div className="flex gap-2">
        <Vajilla className="size-10" />
        <span>Vaso</span>
      </div>
    ),
    price: 'Clasica',
    description: 'Vaso mediano',
    collection: 'Lineal Naranja',
    quantity: 10,
    actions: (
      <div className="flex gap-4 text-yellow-500">
        <Edit className="size-4" />
      </div>
    ),
  },
  {
    id: 2,
    name: (
      <div className="flex gap-2">
        <Vajilla className="size-10" />
        <span>Taza</span>
      </div>
    ),
    price: 'Clasica',
    description: 'Taza cafe pequena',
    collection: 'Lineal Naranja',
    quantity: 10,
    actions: (
      <div className="flex gap-4 text-yellow-500">
        <Edit className="size-4" />
      </div>
    ),
  },
  {
    id: 3,
    name: (
      <div className="flex gap-2">
        <Vajilla className="size-10" />
        <span>Plato</span>
      </div>
    ),
    price: 'Clasica',
    description: 'Plato taza cafe',
    collection: 'Lineal Naranja',
    quantity: 10,
    actions: (
      <div className="flex gap-4 text-yellow-500">
        <Edit className="size-4" />
      </div>
    ),
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="w-4/5 p-8 bg-white flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-4 border border-b-zinc-300 border-t-0 border-l-0 border-r-0 pb-4">
          Lista de Vajillas
        </h1>
        <Table
          data={VAJILLAS_DATA}
          columns={[
            { text: 'Nombre', accessor: 'name' },
            { text: 'Precio', accessor: 'price' },
            { text: 'Descripción', accessor: 'description' },
            { text: 'Colleción', accessor: 'collection' },
            { text: 'Cantidad', accessor: 'quantity' },
            { text: 'Acciones', accessor: 'actions' },
          ]}
        />
        <h1 className="text-2xl font-bold mb-4">Agregar Vajilla</h1>
        {/* <table className="w-full">
          <thead className="bg-white">
            <tr className="bg-zinc-200">
              <th className="p-2 text-left">Nombre</th>
              <th className="p-2 text-left">Cantidad de Personas</th>
              <th className="p-2 text-left">Descripcion</th>
              <th className="p-2 text-left">Pieza</th>
              <th className="p-2 text-left">Cantidad</th>
              <th className="p-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-E5E5E5">
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="Agregar"
                  className="mr-2"
                />
                <input
                  type="text"
                  className="border rounded p-1"
                  placeholder="Nombre"
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="border rounded p-1"
                  placeholder="Cantidad de Personas"
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="border rounded p-1"
                  placeholder="Descripcion"
                />
              </td>
              <td className="p-2">
                <button className="bg-yellow-500 text-white rounded p-2 text-sm">
                  Seleccionar Pieza
                </button>
              </td>
              <td className="p-2">
                <input
                  type="text"
                  className="border rounded p-1"
                  placeholder="Cantidad"
                />
              </td>
              <td className="p-2">
                <button className="bg-yellow-500 text-white rounded p-2 text-sm">
                  Agregar Vajilla
                </button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </Layout>
  );
}
