const FormInput = ({
  label,
  type = "text",
  placeholder = "",
  name,
  required = false,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-lg border border-muted/30 bg-muted/5 p-3 text-sm backdrop-blur-md focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
          rows={5}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-lg border border-muted/30 bg-muted/5 p-3 text-sm backdrop-blur-md focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
        />
      )}
    </div>
  );
};

export default FormInput;
