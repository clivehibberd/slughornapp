/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonCreateFormInputValues = {
    firstname?: string;
    lastname?: string;
    externalid?: string;
    gender?: string;
    eyecolor?: string;
    agegroup?: string;
    height?: string;
    build?: string;
    hair?: string;
    facialhair?: string;
    ethnicity?: string;
};
export declare type PersonCreateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    externalid?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    eyecolor?: ValidationFunction<string>;
    agegroup?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    build?: ValidationFunction<string>;
    hair?: ValidationFunction<string>;
    facialhair?: ValidationFunction<string>;
    ethnicity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonCreateFormOverridesProps = {
    PersonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    externalid?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    eyecolor?: PrimitiveOverrideProps<SelectFieldProps>;
    agegroup?: PrimitiveOverrideProps<SelectFieldProps>;
    height?: PrimitiveOverrideProps<SelectFieldProps>;
    build?: PrimitiveOverrideProps<SelectFieldProps>;
    hair?: PrimitiveOverrideProps<SelectFieldProps>;
    facialhair?: PrimitiveOverrideProps<SelectFieldProps>;
    ethnicity?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PersonCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonCreateFormInputValues) => PersonCreateFormInputValues;
    onSuccess?: (fields: PersonCreateFormInputValues) => void;
    onError?: (fields: PersonCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonCreateFormInputValues) => PersonCreateFormInputValues;
    onValidate?: PersonCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonCreateForm(props: PersonCreateFormProps): React.ReactElement;
