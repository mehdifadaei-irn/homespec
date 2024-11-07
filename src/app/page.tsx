import DefaultLayout from "@/components/layouts/DefaultLayout";
import HomePage from "@/features/homepage/HomePage";
//font-[family-name:var(--font-geist-sans)]
export default function Home() {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}
