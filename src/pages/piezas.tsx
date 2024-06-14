import Layout from '../layout';

export default function Piezas() {
  return (
    <Layout>
      {' '}
      <div className="w-4/5 p-8">
        <h1 className="text-2xl font-bold mb-4">Lista de Piezas</h1>
        <table className="w-full mb-8">
          <thead>
            <tr className="text-left">
              <th className="p-2">Nombre</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Descripcion</th>
              <th className="p-2">Coleccion</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-zinc-100">
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="Vaso Icon"
                  className="mr-2"
                />
                Vaso
              </td>
              <td className="p-2">Clasica</td>
              <td className="p-2">Vaso mediano</td>
              <td className="p-2">Lineal Naranja</td>
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/20x20"
                  alt="Edit Icon"
                  className="mr-2"
                />
                <img src="https://placehold.co/20x20" alt="Delete Icon" />
              </td>
            </tr>
            <tr className="bg-zinc-100">
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="Taza Icon"
                  className="mr-2"
                />
                Taza
              </td>
              <td className="p-2">Clasica</td>
              <td className="p-2">Taza cafe pequena</td>
              <td className="p-2">Lineal Naranja</td>
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/20x20"
                  alt="Edit Icon"
                  className="mr-2"
                />
                <img src="https://placehold.co/20x20" alt="Delete Icon" />
              </td>
            </tr>
            <tr className="bg-zinc-100">
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="Plato Icon"
                  className="mr-2"
                />
                Plato
              </td>
              <td className="p-2">Clasica</td>
              <td className="p-2">Plato taza cafe</td>
              <td className="p-2">Lineal Naranja</td>
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/20x20"
                  alt="Edit Icon"
                  className="mr-2"
                />
                <img src="https://placehold.co/20x20" alt="Delete Icon" />
              </td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-2xl font-bold mb-4">Agregar Pieza</h1>
        <div className="bg-zinc-100 p-4 flex items-center">
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
        </div>
      </div>
    </Layout>
  );
}
