"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HCombobox } from "@/components/ui-kit/HCombobox";
import { useMutation } from "@tanstack/react-query";
import { createUserAddress } from "@/features/profile/address.service";
import PageTitle from "@/features/project/components/PageTitle";
import HInput from "@/components/ui-kit/form/HInput";
import { locationFormSchema } from "@/features/project/schemaValidator";
import dynamic from "next/dynamic";
import { useCountries } from "@/features/profile/hooks/useCountries";
import { useCities } from "@/features/profile/hooks/useCities";
import { useStates } from "@/features/profile/hooks/useStates";
import ProjectPageWrapper from "@/features/project/components/ProjectPageWrapper";
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
});

const mapOptions = (data: any, labelKey = "name", valueKey = "id") => {
  return data.map((item: any) => ({
    label: item[labelKey],
    value: item[valueKey],
    ...item,
  }));
};

const ProjectLocation = () => {
  const { control, handleSubmit, setValue, getValues } = useForm({
    resolver: zodResolver(locationFormSchema),
  });

  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedState, setSelectedState] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  const [countrySearchValue, setCountrySearchValue] = useState("");
  const [stateSearchValue, setStateSearchValue] = useState("");
  const [citySearchValue, setCitySearchValue] = useState("");

  const { data: countryData, isLoading: countryLoading } = useCountries(
    countrySearchValue ? { name: { $contains: countrySearchValue } } : undefined
  );
  const countryOptions = mapOptions(countryData || []);

  const {
    data: stateData,
    isLoading: stateLoading,
    refetch: refetchStates,
  } = useStates(
    selectedCountry?.value,
    stateSearchValue ? { name: { $contains: stateSearchValue } } : undefined
  );
  const stateOptions = mapOptions(stateData || []);

  const {
    data: cityData,
    isLoading: cityLoading,
    refetch: refetchCities,
  } = useCities(
    selectedCountry?.value,
    selectedState?.value,
    citySearchValue ? { name: { $contains: citySearchValue } } : undefined
  );
  const cityOptions = mapOptions(cityData || []);

  const handleCountrySelect = (value: any) => {
    setSelectedCountry(value);
    setValue("state", "");
    setSelectedState(null);
    refetchStates();
  };

  const handleStateSelect = (value: any) => {
    setSelectedState(value);
    setValue("city", "");
    setSelectedCity(null);
    refetchCities();
  };

  const handleCitySelect = (value: any) => {
    setSelectedCity(value);
  };

  const mutation = useMutation({
    mutationFn: createUserAddress,
  });

  const onSubmit = async () => {
    const formValues = getValues();
    await mutation.mutateAsync({
      country_id: formValues.country,
      state_id: formValues.state,
      city_id: formValues.city,
      address: formValues.address,
      postal_code: formValues.zip,
    });
  };

  const handleCountrySearch = (value: any) => {
    setCountrySearchValue(value);
  };

  const handleStateSearch = (value: any) => {
    setStateSearchValue(value);
  };

  const handleCitySearch = (value: any) => {
    setCitySearchValue(value);
  };
  return (
    <ProjectPageWrapper
      submit={handleSubmit(onSubmit)}
      isLoading={mutation.isPending}
    >
      <PageTitle title="Please Enter Your Project Location." />
      <div className="mt-7 flex max-w-[906px] gap-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
          <HCombobox
            name="country"
            label="Country"
            options={countryOptions}
            control={control}
            placeholder="Search for a country..."
            onSearch={handleCountrySearch}
            onChange={handleCountrySelect}
            loading={countryLoading}
          />

          <HCombobox
            name="state"
            label="State"
            options={stateOptions}
            control={control}
            placeholder="Select Your State"
            onSearch={handleStateSearch}
            onChange={handleStateSelect}
            loading={stateLoading}
            disabled={!selectedCountry}
          />

          <HCombobox
            name="city"
            label="City"
            options={cityOptions}
            control={control}
            placeholder="Select Your City"
            onSearch={handleCitySearch}
            onChange={handleCitySelect}
            loading={cityLoading}
            disabled={!selectedState}
          />

          <Controller
            name="address"
            control={control}
            render={({ field, fieldState }) => (
              <HInput
                {...field}
                label="Address*"
                placeholder="Enter Address"
                error={fieldState.error}
              />
            )}
          />
          <Controller
            name="zip"
            control={control}
            render={({ field, fieldState }) => (
              <HInput
                {...field}
                label="Zip*"
                placeholder="Enter Zip Code"
                error={fieldState.error}
              />
            )}
          />
        </form>
        <div className="h-[288px] w-[354px] flex-shrink-0 self-end">
          <LeafletMap
            lat={selectedCity?.latitude}
            lng={selectedCity?.longitude}
          />
        </div>
      </div>
    </ProjectPageWrapper>
  );
};

export default ProjectLocation;
