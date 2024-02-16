import { useField } from "formik";
import Boundary from "../Common/Boundary";
import { Kolker_Brush } from "next/font/google";

function CustomPicker(props) {

  const [field, meta, helpers] = useField(props);
  const { label, containerClass, options, multi } = props;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const selectTag = (value) => {
    if (multi) {
      if (field.value) {
        if (isSelected(value)) {
          setValue(field.value.filter(val => (val != value)))
        } else {
          setValue([...field.value, value])
        }
      } else {
        setValue([value])
      }
    } else {
      if (isSelected(value)) return setValue('')
      setValue(value)
    }
  }

  const isSelected = (value) => {
    if (multi) return field.value?.includes(value)
    return field.value === value
  }
  return (
    <Boundary>
      <div className={`${containerClass} flex flex-col gap-1`}>
        {label && <label className="text-sm font-bold text-textColorPrimary" htmlFor={field.name}>{label}</label>}
        <div className="flex gap-2 flex-wrap">
          {options.map(({ label, value }, index) => (
            <p
              key={index}
              onClick={() => { selectTag(value) }}
              className={` border-2 border-textColorPrimary py-2 px-4 rounded-full text-sm font-bold cursor-pointer transition-all 
              ${isSelected(value) ? 'bg-textColorPrimary text-white' : 'bg-transparent text-textColorPrimary'}`}
            >
              {label}
            </p>
          ))}
        </div>
        {(error &&
          <span className="text-sm font-bold text-red-700">{error}</span>
        )}
      </div>
    </Boundary>
  )
}

export default CustomPicker