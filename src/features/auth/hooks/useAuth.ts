import { useState } from "react";
import { authenticate, logout } from "@/features/auth/services/auth.service";
import type {
  LoginPayload,
  RegisterPayload,
} from "@/features/auth/services/auth.service";
import { clearTokens, setTokens } from "../auth.utils";
import { useRouter } from "next/router";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (credentials: LoginPayload) => {
    setLoading(true);
    try {
      const data = await authenticate(credentials);
      setTokens(data.access_token, data.expires_in);
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (credentials: RegisterPayload) => {
    setLoading(true);
    try {
      const data = await authenticate(credentials);
      setTokens(data.access_token, data.expires_in);
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const data = await logout();
      clearTokens();
      router.push("/login");
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, handleRegister, handleLogout, loading };
};
