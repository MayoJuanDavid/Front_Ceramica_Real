import axios from 'axios';
import React from 'react';

export const baseURL = 'http://localhost:8000';

type Vajilla = {
  nro_v: number;
  nombre: string;
  cant_p: number;
  descripcion: string;
};

interface Coleccion {
  id_coleccion: number;
  nombre: string;
  categoria: number;
  desc_mot_col: string;
}

interface Pieza {
  id_coleccion: number;
  coleccion: string;
  nro_p: number;
  id_molde: number;
  molde: string;
  descripcion: string;
  precio: number;
}

interface Molde {
  id_molde: number;
  tipo: string;
  forma?: string;
  t_plato?: string;
  t_taza?: string;
  tamano?: string;
  volumen: string;
  cant_p?: number;
}

interface DataContextProps {
  vajillas: Vajilla[];
  setVajillas: React.Dispatch<React.SetStateAction<Vajilla[]>>;
  colecciones: Coleccion[];
  setColecciones: React.Dispatch<React.SetStateAction<Coleccion[]>>;
  piezas: Pieza[];
  setPiezas: React.Dispatch<React.SetStateAction<Pieza[]>>;
  moldes: Molde[];
}

export const DataContext = React.createContext<DataContextProps | undefined>(
  undefined
);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error('useVajilla must be used within a VajillaProvider');
  }
  return context;
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [vajillas, setVajillas] = React.useState<Vajilla[]>([]);
  const [colecciones, setColecciones] = React.useState<Coleccion[]>([]);
  const [piezas, setPiezas] = React.useState<Pieza[]>([]);
  const [moldes, setMoldes] = React.useState<Molde[]>([]);

  // Fetch colecciones

  const fetchColecciones = async () => {
    try {
      const response = await axios.get(`${baseURL}/colecciones`);
      const { data } = response;

      setColecciones(data);
    } catch (error) {
      console.log(error);
    }
  };

  // vajillas

  const fetchVajillas = async () => {
    try {
      const response = await axios.get(`${baseURL}/vajillas`);
      const { data } = response;

      setVajillas(data);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch piezas

  const fetchPiezas = async () => {
    try {
      const response = await axios.get(`${baseURL}/piezas`);
      const { data } = response;
      setPiezas(data);
    } catch (error) {
      console.log(error);
    }
  };

  // fetch moldes

  const fetchMoldes = async () => {
    try {
      const response = await axios.get(`${baseURL}/moldes`);
      const { data } = response;
      setMoldes(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchColecciones();
    fetchVajillas();
    fetchPiezas();
    fetchMoldes();
  }, []);

  return (
    <DataContext.Provider
      value={{
        vajillas,
        setVajillas,
        colecciones,
        setColecciones,
        piezas,
        setPiezas,
        moldes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
