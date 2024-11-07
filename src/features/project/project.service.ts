import { httpService } from "@/lib/httpService";
import qs from "qs";
import type { scopeParameters, scopes } from "./types/scope.type";

interface GetAllScopesParamsInterface {
  filters: {
    title: {
      $eq: string;
      $in: string;
    };
  };

  orders: {
    title: string;
    id: number;
    created_at: string;
  };
}

export const getAllScopes = (params?: GetAllScopesParamsInterface) => {
  const query = qs.stringify(params, { encodeValuesOnly: true });
  return httpService.get<scopes<scopeParameters>>(`/projects/scopes?${query}`);
};
