import {FormInputLabel, FromInput, Group} from "./form-input.styles";

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <FromInput {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>);
};

export default FormInput;
