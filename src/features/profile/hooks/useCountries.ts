import { useQuery } from "@tanstack/react-query";
import { getCountries } from "@/features/profile/address.service";

export const useCountries = (searchParams?: any) => {
  return useQuery({
    queryKey: ["countries", searchParams],
    queryFn: async () => {
      const filters = searchParams ? { filters: searchParams } : {};
      const { data } = await getCountries(filters);
      return data.parameters.data;
    },
  });
};
