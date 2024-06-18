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
  coleccion: number;
  id: number;
  molde: number;
  descripcion: string;
  precio: number;
}

interface DataContextProps {
  vajillas: Vajilla[];
  setVajillas: React.Dispatch<React.SetStateAction<Vajilla[]>>;
  colecciones: Coleccion[];
  setColecciones: React.Dispatch<React.SetStateAction<Coleccion[]>>;
  piezas: Pieza[];
  setPiezas: React.Dispatch<React.SetStateAction<Pieza[]>>;
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

  React.useEffect(() => {
    fetchColecciones();
    fetchVajillas();
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
