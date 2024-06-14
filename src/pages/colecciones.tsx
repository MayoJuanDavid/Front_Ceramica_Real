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

export default function Colecciones() {
  return (
    <Layout>
      <div className="w-4/5 p-8">
        <h1 className="text-3xl font-bold mb-4 border border-b-zinc-300 border-t-0 border-l-0 border-r-0 pb-4">
          Lista de Colecciones
        </h1>
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
        <h2 className="text-xl font-bold mb-4">Agregar Coleccion</h2>
        {/* <div className="bg-zinc-200 p-4 rounded">
          <div className="flex justify-between bg-zinc-200 p-4 rounded-t">
            <span>Nombre</span>
            <span>Categoria</span>
            <span>Descripcion</span>
          </div>
          <div className="bg-white p-4 flex justify-between items-center rounded-b">
            <div className="flex items-center">
              <img src="https://placehold.co/20" alt="User" className="mr-2" />
              <input
                type="text"
                className="border p-2 rounded"
                placeholder="Nombre"
              />
            </div>
            <input
              type="text"
              className="border p-2 rounded"
              placeholder="Categoria"
            />
            <input
              type="text"
              className="border p-2 rounded"
              placeholder="Descripcion"
            />
            <button className="bg-primary text-white p-2 rounded">
              AGREGAR COLECCION
            </button>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}
