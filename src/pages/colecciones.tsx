import Layout from '../layout';

export default function Colecciones() {
  return (
    <Layout>
      <div className="w-4/5 p-8">
        <h1 className="text-2xl font-bold mb-4">Lista de Colecciones</h1>
        <div className="mb-8">
          <div className="flex justify-between bg-zinc-200 p-4 rounded-t">
            <span>Nombre</span>
            <span>Categoria</span>
            <span>Descripcion</span>
          </div>
          <div className="bg-white p-4 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/20"
                  alt="User"
                  className="mr-2"
                />
                <span>Amazonica Brasileira</span>
              </div>
              <span>Clasica</span>
              <span>Admin</span>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/20"
                  alt="Edit"
                  className="mr-2"
                />
                <img src="https://placehold.co/20" alt="Delete" />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 border-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/20"
                  alt="User"
                  className="mr-2"
                />
                <span>Lineal Naranja</span>
              </div>
              <span>Clasica</span>
              <span>Cliente</span>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/20"
                  alt="Edit"
                  className="mr-2"
                />
                <img src="https://placehold.co/20" alt="Delete" />
              </div>
            </div>
          </div>
          <div className="bg-white p-4 border-b rounded-b">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/20"
                  alt="User"
                  className="mr-2"
                />
                <span>Lineal Cereza</span>
              </div>
              <span>Clasica</span>
              <span>Admin</span>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/20"
                  alt="Edit"
                  className="mr-2"
                />
                <img src="https://placehold.co/20" alt="Delete" />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">Agregar Coleccion</h2>
        <div className="bg-zinc-200 p-4 rounded">
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
            <button className="bg-yellow-500 text-white p-2 rounded">
              AGREGAR COLECCION
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
