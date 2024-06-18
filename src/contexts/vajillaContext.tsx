import React from 'react';

type FormData = {
  id: number;
  nombre: string;
  cantidad: number;
  descripcion: string;
};

interface VajillaContextProps {
  vajillas: FormData[];
  setVajillas: React.Dispatch<React.SetStateAction<FormData[]>>;
}

export const VajillaContext = React.createContext<
  VajillaContextProps | undefined
>(undefined);

export const useVajilla = () => {
  const context = React.useContext(VajillaContext);
  if (!context) {
    throw new Error('useVajilla must be used within a VajillaProvider');
  }
  return context;
};

export const VajillaProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [vajillas, setVajillas] = React.useState<FormData[]>([]);

  return (
    <VajillaContext.Provider value={{ vajillas, setVajillas }}>
      {children}
    </VajillaContext.Provider>
  );
};
