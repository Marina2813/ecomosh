import { useField } from 'formik';
import PI from "react-phone-input-2";
import Boundary from '../Common/Boundary';

const ReactPhoneInput = PI.default ? PI.default : PI;

const CustomMobileInput = (props) => {
  const [field, meta, helpers] = useField(props);
  const { label, placeholder, defaultValue, containerClass } = props;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const handleChange = (value, data) => {
    const mob = {
      dialCode: data.dialCode,
      countryCode: data.countryCode,
      country: data.name,
      value
    };

    setValue(mob);
  };

  return (
    <Boundary>
      <div className={`${containerClass} flex flex-col gap-1`}>
        {label && <label className="text-sm font-bold text-textColorPrimary" htmlFor={field.name}>{label}</label>}

        <ReactPhoneInput
          name={field.name}
          country="in"
          inputClass={`px-4 py-2 border border-gray-300 rounded-sm bg-transparent outline-none text-textColorPrimary w-full ${(touched && error) && 'border border-red-700'}`}
          inputExtraProps={{ required: true }}
          onChange={handleChange}
          placeholder={placeholder}
          value={defaultValue?.value}
        />

        {touched && error && (
          <span className="text-sm font-bold text-red-700">{error?.value || error?.dialCode}</span>
        )}
      </div>
    </Boundary>
  );
};

export default CustomMobileInput;
