interface FormWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
export default function FormWrapper({
  title,
  description,
  children,
}: FormWrapperProps) {
  return (
    <div className="w-[23rem] rounded-3xl bg-black/30 p-6 backdrop-blur-sm">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1.5">
          <h1 className="text-3xl text-background dark:text-foreground font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
