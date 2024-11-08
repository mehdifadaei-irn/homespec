import { useRouter } from "next/navigation";

export const useGoToPrevStep = () => {
  const router = useRouter();

  const goToPrevStep = (page: string) => {
    router.push(page);
  };

  return {
    goToPrevStep,
  };
};
