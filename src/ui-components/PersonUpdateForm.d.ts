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
    first_name?: string;
    last_name?: string;
    person_id?: string;
    external_id?: string;
    gender?: string;
    party?: string;
    eyecolor?: string;
    agegroup?: string;
    height?: string;
    build?: string;
    hair?: string;
    hairstyle?: string;
    facialhair?: string;
    ethnicity?: string;
    glasses?: string;
    dress?: string;
    persontype?: string;
    image?: string;
    uri?: string;
};
export declare type PersonUpdateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    person_id?: ValidationFunction<string>;
    external_id?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    party?: ValidationFunction<string>;
    eyecolor?: ValidationFunction<string>;
    agegroup?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    build?: ValidationFunction<string>;
    hair?: ValidationFunction<string>;
    hairstyle?: ValidationFunction<string>;
    facialhair?: ValidationFunction<string>;
    ethnicity?: ValidationFunction<string>;
    glasses?: ValidationFunction<string>;
    dress?: ValidationFunction<string>;
    persontype?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    uri?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonUpdateFormOverridesProps = {
    PersonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    person_id?: PrimitiveOverrideProps<TextFieldProps>;
    external_id?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<SelectFieldProps>;
    party?: PrimitiveOverrideProps<SelectFieldProps>;
    eyecolor?: PrimitiveOverrideProps<SelectFieldProps>;
    agegroup?: PrimitiveOverrideProps<SelectFieldProps>;
    height?: PrimitiveOverrideProps<SelectFieldProps>;
    build?: PrimitiveOverrideProps<SelectFieldProps>;
    hair?: PrimitiveOverrideProps<SelectFieldProps>;
    hairstyle?: PrimitiveOverrideProps<SelectFieldProps>;
    facialhair?: PrimitiveOverrideProps<SelectFieldProps>;
    ethnicity?: PrimitiveOverrideProps<SelectFieldProps>;
    glasses?: PrimitiveOverrideProps<SelectFieldProps>;
    dress?: PrimitiveOverrideProps<SelectFieldProps>;
    persontype?: PrimitiveOverrideProps<SelectFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    uri?: PrimitiveOverrideProps<TextFieldProps>;
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
