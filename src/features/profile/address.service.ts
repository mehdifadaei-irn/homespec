import qs from "qs";
import { api } from "@/lib/api";

export interface CountriesPayload {
  filters?: {
    id?: { $eq?: string; $in?: string };
    name?: { $contains?: string; $eq?: string; $in?: string };
    latitude?: { $between?: string; $eq?: string; $in?: string };
    longitude?: { $between?: string; $eq?: string; $in?: string };
  };
  orders?: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
  };
  per_page?: number;
  paginated?: boolean;
}
export interface StatesPayload {
  filters?: {
    id?: { $eq?: number; $in?: number };
    country_id?: { $eq?: number; $in?: number };
    name?: { $contains?: string; $eq?: string; $in?: string };
    latitude?: { $between?: string; $eq?: string; $in?: string };
    longitude?: { $between?: string; $eq?: string; $in?: string };
  };
  orders?: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
  };
  per_page?: number;
  paginated?: boolean;
}
export interface CitiesPayload {
  filters?: {
    id?: { $eq?: number; $in?: number };
    country_id?: { $eq?: number; $in?: number };
    state_id?: { $eq?: number; $in?: number };
    name?: { $contains?: string; $eq?: string; $in?: string };
    latitude?: { $between?: string; $eq?: string; $in?: string };
    longitude?: { $between?: string; $eq?: string; $in?: string };
  };
  orders?: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
  };
  per_page?: number;
  paginated?: boolean;
}

export const getCountries = (payload?: CountriesPayload) => {
  const query = qs.stringify(payload, { encodeValuesOnly: true });
  return api.get(`/world/countries?${query}`);
};

export const getStatesByCountry = (payload?: StatesPayload) => {
  const query = qs.stringify(payload, { encodeValuesOnly: true });
  return api.get(`/world/states?${query}`);
};

export const getCitiesByState = (payload?: CitiesPayload) => {
  const query = qs.stringify(payload, { encodeValuesOnly: true });
  return api.get(`/world/cities?${query}`);
};

export const createUserAddress = (payload) => {
  return api.post(`/users/addresses`, payload);
};
