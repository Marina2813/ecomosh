import { useField } from 'formik';
import Select from 'react-select';
import Boundary from '../Common/Boundary';

const CustomSelect = (props) => {
  const [field, meta, helpers] = useField(props);
  const {
    options, defaultValue, label, placeholder, isMulti, type, iid, containerClass
  } = props;
  const { touched, error } = meta;
  const { setValue } = helpers;

  const handleChange = (newValue) => {
    if (Array.isArray(newValue)) {
      const arr = newValue.map((fieldKey) => fieldKey.value);
      setValue(arr);
    } else {
      setValue(newValue.value);
    }
  };

  const handleKeyDown = (e) => {
    if (type === 'number') {
      const { key } = e.nativeEvent;
      if (/\D/.test(key) && key !== 'Backspace') {
        e.preventDefault();
      }
    }
  };
  return (
    <Boundary>
      <div className={`${containerClass} flex flex-col gap-1`}>
        {label && <label className="text-sm font-bold text-textColorPrimary" htmlFor={field.name}>{label}</label>}
        <Select
          isMulti={isMulti}
          placeholder={placeholder}
          name={field.name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={defaultValue}
          options={options}
          instanceId={iid}
          styles={{
            menu: (provided) => ({
              ...provided,
              zIndex: 10
            }),
            // container: (provided) => ({
            //   ...provided, marginBottom: '1.2rem'
            // }),
            control: (provided) => ({
              ...provided,
              border: error ? '1px solid rgb(220, 38, 38)' : '1px solid rgb(209, 213, 219)',
              padding: '2px 4px 2px 4px',
              background: 'transparent',
              outline: 'none',
              color: 'rgb(9, 38, 53)',
              width: '100%',
            })
          }}
        />
        {(error &&
          <span className="text-sm font-bold text-red-700">{error}</span>
        )}
      </div>
    </Boundary>
  );
};

export default CustomSelect;
