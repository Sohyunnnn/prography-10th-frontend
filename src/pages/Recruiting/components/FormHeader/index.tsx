interface FormHeaderProps {
  title: string;
  description: string;
}

const FormHeader = ({ title, description }: FormHeaderProps) => {
  return (
    <div>
      <p className="title1 bold2 mt-2">{title}</p>
      <div className="my-1 h-[1px] w-full bg-gray-400" />
      <p className="caption2 text-gray-200">{description}</p>
    </div>
  );
};

export default FormHeader;
