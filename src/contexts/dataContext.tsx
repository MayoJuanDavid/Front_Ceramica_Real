import React from 'react';

type Vajilla = {
  id: number;
  nombre: string;
  cantidad: number;
  descripcion: string;
};

interface Coleccion {
  id: number;
  nombre: string;
  categoria: number;
  descripcion: string;
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
