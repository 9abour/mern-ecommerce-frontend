import { useState } from "react";
import { IProductFormInputs } from "@/components/dashboard/types/productForm.types";

const useCreateProduct = () => {
  const [productInputs, setProductInputs] = useState<IProductFormInputs>([
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      required: true,
      autoFocus: true,
      value: "",
      customStyles: "col-span-3",
    },
    {
      type: "number",
      name: "price",
      placeholder: "Price",
      required: true,
      value: "",
    },
    {
      type: "number",
      name: "count",
      placeholder: "Stock count",
      required: true,
      value: "",
    },
    {
      type: "textarea",
      name: "description",
      placeholder: "Description",
      required: true,
      value: "",
      customStyles:
        "w-full h-[100px] min-h-[100px] border shadow-cmd rounded-xl py-2 px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary col-span-2",
    },
  ]);

  const handleChangeInput = (
    name: string,
    value: string,
    productInputs: IProductFormInputs,
  ) => {
    const updated: IProductFormInputs = productInputs.map((inputInfo) => {
      if (inputInfo.name == name) {
        return {
          ...inputInfo,
          value,
        };
      } else {
        return inputInfo;
      }
    });

    setProductInputs(updated);
  };

  return {
    productInputs,
    handleChangeInput,
  };
};

export default useCreateProduct;
