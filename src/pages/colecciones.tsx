import { Boxes, Edit, Trash } from 'lucide-react';
import Layout from '../layout';
import Table from '../components/Table';
import { baseURL, useData } from '../contexts/dataContext';
import useAddColeccionModal from '../hooks/use-add-coleccion-modal';
import AddColeccionModal from '../components/modals/add-coleccion-modal';
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

type FormData = {
  id_coleccion: number;
  nombre: string;
  categoria: string;
  desc_mot_col: string;
};

export default function Colecciones() {
  const { colecciones, setColecciones } = useData();

  const addColeccionModal = useAddColeccionModal();

  const [coleccion, setColeccion] = React.useState<FormData | undefined>(
    undefined
  );

  const COLECCIONES_DATA = colecciones?.map((coleccion) => ({
    id_coleccion: coleccion.id_coleccion,
    nombre: (
      <div className="flex gap-4 items-center text-zinc-800">
        <Boxes className="size-5" />
        <span>{coleccion.nombre}</span>
      </div>
    ),
    categoria: coleccion.categoria,
    desc_mot_col: coleccion.desc_mot_col,
    acciones: (
      <div className="flex gap-4 text-primary">
        <Edit
          className="size-4 cursor-pointer"
          onClick={() => {
            setColeccion(coleccion);
            addColeccionModal.onOpen();
          }}
        />
        <Trash
          className="size-4 text-rose-600 cursor-pointer"
          onClick={() => handleDeleteColeccion(coleccion.id_coleccion)}
        />
      </div>
    ),
  }));

  const handleDeleteColeccion = async (id_coleccion: number) => {
    try {
      await axios.delete(`${baseURL}/colecciones/delete/${id_coleccion}`);
      setColecciones((prev) =>
        prev.filter((coleccion) => coleccion.id_coleccion !== id_coleccion)
      );
      toast.success('Colección eliminada');
    } catch (e) {
      console.error(e);
      toast.error('Error al eliminar la colección');
    }
  };

  return (
    <Layout>
      <AddColeccionModal
        setColecciones={setColecciones}
        coleccion={coleccion}
        setColeccion={setColeccion}
        isUpdate={coleccion !== undefined}
      />
      <div className="w-4/5 p-8 bg-white flex flex-col gap-4">
        <div className="flex justify-between items-center border border-b-zinc-300 border-t-0 border-l-0 border-r-0">
          <h1 className="text-3xl font-bold mb-4  pb-4">
            Lista de Colecciones
          </h1>
          <button
            className="bg-primary text-white px-2 rounded-lg text-xs h-7 mt-2"
            type="button"
            onClick={addColeccionModal.onOpen}
          >
            + Agregar
          </button>
        </div>
        {COLECCIONES_DATA?.length > 0 ? (
          <Table
            data={COLECCIONES_DATA}
            columns={[
              {
                text: 'Id',
                accessor: 'id_coleccion',
              },
              {
                text: 'Nombre',
                accessor: 'nombre',
              },
              {
                text: 'Categoria',
                accessor: 'categoria',
              },
              {
                text: 'Descripcion',
                accessor: 'desc_mot_col',
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
            <span className="text-xl text-zinc-500">No hay colecciones</span>
          </div>
        )}
      </div>
    </Layout>
  );
}
