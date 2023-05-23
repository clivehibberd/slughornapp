/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Person } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonUpdateFormInputValues = {
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
export declare type PersonUpdateFormValidationValues = {
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
export declare type PersonUpdateFormOverridesProps = {
    PersonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type PersonUpdateFormProps = React.PropsWithChildren<{
    overrides?: PersonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    person?: Person;
    onSubmit?: (fields: PersonUpdateFormInputValues) => PersonUpdateFormInputValues;
    onSuccess?: (fields: PersonUpdateFormInputValues) => void;
    onError?: (fields: PersonUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonUpdateFormInputValues) => PersonUpdateFormInputValues;
    onValidate?: PersonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PersonUpdateForm(props: PersonUpdateFormProps): React.ReactElement;
