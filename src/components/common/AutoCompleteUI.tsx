"use client";

import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { animals } from "@/lib/data/data";

const AutoCompleteUI = () => {
  return (
    <>
      <Autocomplete label="Select an animal" size="sm">
        {animals.map((animal) => (
          <AutocompleteItem key={animal.value} value={animal.value}>
            {animal.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </>
  );
};

export default AutoCompleteUI;
