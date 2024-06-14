import { Boxes, Edit } from 'lucide-react';
import Layout from '../layout';
import Table from '../components/Table';

const COLLECCIONES_DATA = [
  {
    id: 1,
    name: (
      <div className="flex gap-4 items-center text-zinc-800">
        <Boxes className="size-5" />
        <span>Amazonica Brasileira</span>
      </div>
    ),
    category: 'Clasica',
    description: 'Admin',
    actions: (
      <div className="flex gap-4 text-primary">
        <Edit className="size-4" />
      </div>
    ),
  },
  {
    id: 2,
    name: (
      <div className="flex gap-4 items-center text-zinc-800">
        <Boxes className="size-5" />
        <span>Lineal Naranja</span>
      </div>
    ),
    category: 'Clasica',
    description: 'Cliente',
    actions: (
      <div className="flex gap-4 text-primary">
        <Edit className="size-4" />
      </div>
    ),
  },
  {
    id: 3,
    name: (
      <div className="flex gap-4 items-center text-zinc-800">
        <Boxes className="size-5" />
        <span>Lineal Cereza</span>
      </div>
    ),
    category: 'Clasica',
    description: 'Admin',
    actions: (
      <div className="flex gap-4 text-primary">
        <Edit className="size-4" />
      </div>
    ),
  },
];

export default function Piezas() {
  return (
    <Layout>
      <div className="w-4/5 p-8">
        <h1 className="text-2xl font-bold mb-4">Lista de Piezas</h1>
        <Table
          data={COLLECCIONES_DATA}
          columns={[
            {
              text: 'Nombre',
              accessor: 'name',
            },
            {
              text: 'Categoria',
              accessor: 'category',
            },
            {
              text: 'Descripcion',
              accessor: 'description',
            },
            {
              text: 'Acciones',
              accessor: 'actions',
            },
          ]}
        />
        <h1 className="text-2xl font-bold mb-4">Agregar Pieza</h1>
        {/* <div className="bg-zinc-100 p-4 flex items-center">
          <img
            src="https://placehold.co/30x30"
            alt="Agregar Icon"
            className="mr-4"
          />
          <input
            type="text"
            placeholder="Nombre"
            className="p-2 mr-4 bg-white border rounded"
          />
          <input
            type="text"
            placeholder="Precio"
            className="p-2 mr-4 bg-white border rounded"
          />
          <input
            type="text"
            placeholder="Descripcion"
            className="p-2 mr-4 bg-white border rounded"
          />
          <input
            type="text"
            placeholder="Coleccion"
            className="p-2 mr-4 bg-white border rounded"
          />
          <button className="bg-yellow-500 text-white p-2 rounded">
            AGREGAR PIEZA
          </button>
        </div> */}
      </div>
    </Layout>
  );
}
