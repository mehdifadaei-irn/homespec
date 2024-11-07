import { useQuery } from "@tanstack/react-query";
import { getStatesByCountry } from "@/features/profile/address.service";

export const useStates = (
  selectedCountry: number | null,
  searchParams?: any,
) => {
  return useQuery({
    queryKey: ["states", selectedCountry, searchParams],
    queryFn: async () => {
      const filters = {
        country_id: { $eq: selectedCountry },
        ...(searchParams || {}),
      };
      const { data } = await getStatesByCountry({ filters });
      return data.parameters.data;
    },
    enabled: !!selectedCountry,
  });
};
