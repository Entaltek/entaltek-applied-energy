import { useTranslation } from "@/lib/i18n";

const NotFound = () => {
  const { isEnglish } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F9FC] text-[#013762] dark:bg-[#091D2C] dark:text-[#E7F2F7]">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-[#365872] dark:text-[#B6CEDC]">{isEnglish ? "We could not find this page." : "No encontramos esta página."}</p>
        <a href={isEnglish ? "/en/" : "/"} className="text-[#004C7A] underline hover:text-[#0179B1] dark:text-[#8DDDDC]">
          {isEnglish ? "Back to home" : "Volver al inicio"}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
