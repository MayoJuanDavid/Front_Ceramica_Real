import Layout from "../layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="w-4/5 p-8 bg-white">
        <h1 className="text-2xl font-bold mb-4">Lista de Vajillas</h1>
        <table className="w-full mb-8">
          <thead className="bg-white">
            <tr className="bg-zinc-200">
              <th className="p-2 text-left">Nombre</th>
              <th className="p-2 text-left">Precio</th>
              <th className="p-2 text-left">Descripcion</th>
              <th className="p-2 text-left">Coleccion</th>
              <th className="p-2 text-left">Cantidad</th>
              <th className="p-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-E5E5E5">
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="Vaso"
                  className="mr-2"
                />
                Vaso
              </td>
              <td className="p-2">Clasica</td>
              <td className="p-2">Vaso mediano</td>
              <td className="p-2">Lineal Naranja</td>
              <td className="p-2">10</td>
              <td className="p-2 flex space-x-2">
                <button className="text-yellow-500 text-xs">
                  <img src="https://placehold.co/20x20" alt="Edit" />
                </button>
                <button className="text-yellow-500 text-xs">
                  <img src="https://placehold.co/20x20" alt="Delete" />
                </button>
              </td>
            </tr>
            <tr className="bg-E5E5E5">
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="Taza"
                  className="mr-2"
                />
                Taza
              </td>
              <td className="p-2">Clasica</td>
              <td className="p-2">Taza cafe pequena</td>
              <td className="p-2">Lineal Naranja</td>
              <td className="p-2">10</td>
              <td className="p-2 flex space-x-2">
                <button className="text-yellow-500 text-xs">
                  <img src="https://placehold.co/20x20" alt="Edit" />
                </button>
                <button className="text-yellow-500 text-xs">
                  <img src="https://placehold.co/20x20" alt="Delete" />
                </button>
              </td>
            </tr>
            <tr className="bg-E5E5E5">
              <td className="p-2 flex items-center">
                <img
                  src="https://placehold.co/30x30"
                  alt="Plato"
                  className="mr-2"
                />
                Plato
              </td>
              <td className="p-2">Clasica</td>
              <td className="p-2">Plato taza cafe</td>
              <td className="p-2">Lineal Naranja</td>
              <td className="p-2">10</td>
              <td className="p-2 flex space-x-2">
                <button className="text-yellow-500 text-xs">
                  <img src="https://placehold.co/20x20" alt="Edit" />
                </button>
                <button className="text-yellow-500 text-xs">
                  <img src="https://placehold.co/20x20" alt="Delete" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-2xl font-bold mb-4">Agregar Vajilla</h1>
        <table className="w-full">
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
        </table>
      </div>
    </Layout>
  );
}
