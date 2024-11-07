import HInput from "@/components/ui-kit/form/HInput";
import HBtn from "@/components/ui-kit/HBtn";
import { HCombobox, OptionType } from "@/components/ui-kit/HCombobox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/shadcn/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { roomFunctionalityFormSchema } from "../schemaValidator";
import { PenClose } from "iconsax-react";

const ModifyRoomDialog = () => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(roomFunctionalityFormSchema),
  });

  const functionalityOptions: OptionType[] = [
    { label: "Kitchen", value: 1 },
    { label: "Bedroom", value: 2 },
    { label: "Living Room", value: 3 },
    { label: "Bathroom", value: 4 },
    { label: "Dining Room", value: 5 },
    { label: "Garage", value: 6 },
  ];

  const functionalityLoading = false;

  const handleFunctionalitySearch = (query: string) => {
    console.log(query);

    // Handle search functionality
  };

  const handleFunctionalitySelect = (option: OptionType) => {
    // Handle select functionality
    setValue("functionality", option.value);
  };

  return (
    <div>
      <Dialog modal={true}>
        <DialogTrigger>
          <HBtn variant="secondary" styleType="outline">
            <div className="flex items-center gap-x-2.5">
              <PenClose height={18} width={18} />
              <span>Rename</span>
            </div>
          </HBtn>
        </DialogTrigger>
        <DialogContent>
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-12">
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <HInput
                    {...field}
                    label="What is the name of this room?"
                    error={fieldState.error}
                    ui={{ label: "text-black" }}
                  />
                )}
              />

              <HCombobox
                name="functionality"
                label="What is the room's functionality?"
                options={functionalityOptions}
                control={control}
                placeholder="e.g. Living Room, Kitchen, Bedroom..."
                onSearch={handleFunctionalitySearch}
                onChange={handleFunctionalitySelect}
                loading={functionalityLoading}
                ui={{ label: "text-black" }}
              />
            </div>
            <HBtn variant="secondary" label="Save" size="large" type="submit" />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModifyRoomDialog;
