import { useQuery } from "@tanstack/react-query";
import { getCitiesByState } from "@/features/profile/address.service";

export const useCities = (
  selectedCountry: number | null,
  selectedState: number | null,
  searchParams?: any,
) => {
  return useQuery({
    queryKey: ["cities", selectedCountry, selectedState, searchParams],
    queryFn: async () => {
      const filters = {
        country_id: { $eq: selectedCountry },
        state_id: { $eq: selectedState },
        ...(searchParams || {}),
      };
      const { data } = await getCitiesByState({ filters });
      return data.parameters.data;
    },
    enabled: !!selectedState,
  });
};
