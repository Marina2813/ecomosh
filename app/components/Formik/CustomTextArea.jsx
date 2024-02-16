import Boundary from "../Common/Boundary";

const CustomTextArea = ({
  field, form: { touched, errors }, label, inputRef, containerClass, ...props
}) => (
  <Boundary>
    <div className={`${containerClass} flex flex-col gap-1`}>
      {label && <label className="text-sm font-bold text-textColorPrimary" htmlFor={field.name}>{label}</label>}

      <textarea
        rows={5}
        resiza
        id={field.name}
        ref={inputRef}
        {...field}
        {...props}
        className={`px-4 py-2 border border-gray-300 rounded-sm bg-transparent outline-none text-textColorPrimary resize-none ${(touched[field.name] && errors[field.name]) && 'border border-red-600'}`}
      />

      {(touched[field.name] && errors[field.name] &&
        <span className="text-sm font-bold text-red-700">{errors[field.name]}</span>
      )}
    </div>
  </Boundary>
);

export default CustomTextArea;
