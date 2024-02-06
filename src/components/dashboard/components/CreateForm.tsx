"use client";

import React, { useState } from "react";
import FormInput from "@/components/common/input/FormInput";
import TextButton from "@/components/common/button/TextButton";
import { usePathname } from "next/navigation";
import { IProductFormInputs } from "@/components/dashboard/types/productForm.types";
import Rate from "@/components/common/product/Rate";

const CreateForm = () => {
  const currentPathname = usePathname().split("/");
  const lastDirectory = currentPathname[currentPathname.length - 1];
  const [productInputs, setProductInputs] = useState<IProductFormInputs>([
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      required: true,
      autoFocus: true,
      value: "",
      customStyles: "col-span-2",
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

  if (lastDirectory == "category") {
    return (
      <form className="w-full max-w-[400px] flex flex-col gap-2">
        <h1 className="font-bold text-5xl mb-4 capitalize">
          Create {lastDirectory}
        </h1>

        <FormInput
          type="text"
          name="name"
          placeholder={`Name of the ${lastDirectory}`}
          required
          autoFocus={true}
        />

        <TextButton
          text="Create"
          customStyles="mt-2 font-semibold text-xl bg-primary"
        />
      </form>
    );
  }

  return (
    <form className="w-full max-w-[600px] mx-auto flex flex-col gap-2">
      <h1 className="font-bold text-5xl mb-4 capitalize">
        Create {lastDirectory}
      </h1>

      <div className="grid grid-cols-2 gap-2">
        {productInputs.map(
          ({
            name,
            type,
            placeholder,
            value,
            required,
            autoFocus,
            customStyles,
          }) =>
            type == "textarea" ? (
              <textarea
                key={name}
                className={customStyles}
                name={name}
                placeholder={placeholder}
                id={name}
                onChange={(e) =>
                  handleChangeInput(name, e.target.value, productInputs)
                }
                value={value}
              />
            ) : (
              <input
                key={name}
                className={`w-full h-[50px] min-h-[50px] border shadow-cmd rounded-full px-4 justify-between gap-2 text-xl bg-white outline-none focus:border-primary ${customStyles}`}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                autoFocus={autoFocus}
                onChange={(e) =>
                  handleChangeInput(name, e.target.value, productInputs)
                }
                value={value}
              />
            ),
        )}
      </div>

      <TextButton
        text="Create"
        customStyles="mt-2 font-semibold text-xl bg-primary"
      />
    </form>
  );
};

export default CreateForm;
