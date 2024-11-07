import { useQuery } from "@tanstack/react-query";
import { getAllScopes } from "../project.service";

export const useScopes = () => {
  // useQuery
  return useQuery({
    queryKey: ["scopes"],
    queryFn: async () => {
      const { data } = await getAllScopes();
      return data?.parameters[0];
    },

    enabled: true,
  });
};
