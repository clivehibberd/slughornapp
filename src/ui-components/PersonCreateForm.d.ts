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
    haircolor?: string;
    hairstyle?: string;
    facialhair?: string;
    ethnicity?: string;
    glasses?: string;
    dress?: string;
    persontype?: string;
    image?: string;
    uri?: string;
    constituency?: string;
};
export declare type PersonCreateFormValidationValues = {
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
    haircolor?: ValidationFunction<string>;
    hairstyle?: ValidationFunction<string>;
    facialhair?: ValidationFunction<string>;
    ethnicity?: ValidationFunction<string>;
    glasses?: ValidationFunction<string>;
    dress?: ValidationFunction<string>;
    persontype?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    uri?: ValidationFunction<string>;
    constituency?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonCreateFormOverridesProps = {
    PersonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    haircolor?: PrimitiveOverrideProps<SelectFieldProps>;
    hairstyle?: PrimitiveOverrideProps<SelectFieldProps>;
    facialhair?: PrimitiveOverrideProps<SelectFieldProps>;
    ethnicity?: PrimitiveOverrideProps<SelectFieldProps>;
    glasses?: PrimitiveOverrideProps<SelectFieldProps>;
    dress?: PrimitiveOverrideProps<SelectFieldProps>;
    persontype?: PrimitiveOverrideProps<SelectFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    uri?: PrimitiveOverrideProps<TextFieldProps>;
    constituency?: PrimitiveOverrideProps<TextFieldProps>;
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
