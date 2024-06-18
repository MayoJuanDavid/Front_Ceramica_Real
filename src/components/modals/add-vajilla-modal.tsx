import React from "react";
import Modal from "./modal";
import useAddVajillaModal from "../../hooks/use-add-vajilla-modal";
import Input from "../input";

const AddVajillaModal = () => {
  const [isLoading, setIsloading] = React.useState(false);
  const generateID = () => {
    return Math.floor(Math.random() * 1000).toString();
  };

  const [form, setForm] = React.useState({
    id: generateID(),
    nombre: "",
    cantidad: "",
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const vajillaModal = useAddVajillaModal();

  const bodyContent = (
    <form className="flex flex-col gap-3">
      <div className="w-full flex flex-col px-32">
        <Input
          label="Nombre"
          value={form.nombre}
          onChange={handleOnChange}
          name="nombre"
        />
      </div>
      <div className="w-full flex flex-col px-32">
        <Input
          label="Cantidad"
          value={form.cantidad}
          onChange={handleOnChange}
          type="number"
          name="cantidad"
        />
      </div>
    </form>
  );

  const footerContent = <div></div>;

  const handleSubmit = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      vajillaModal.onClose();
    }, 1000);
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={vajillaModal.isOpen}
      title="Agregar Vajilla"
      actionLabel="Agregar"
      onClose={vajillaModal.onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddVajillaModal;
