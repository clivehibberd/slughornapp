/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Person } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PersonCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstname: "",
    lastname: "",
    externalid: "",
    gender: "",
    eyecolor: "",
    agegroup: "",
    height: "",
    build: "",
    hair: "",
    facialhair: "",
    ethnicity: "",
    glasses: "",
    dress: "",
  };
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
  const [lastname, setLastname] = React.useState(initialValues.lastname);
  const [externalid, setExternalid] = React.useState(initialValues.externalid);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [eyecolor, setEyecolor] = React.useState(initialValues.eyecolor);
  const [agegroup, setAgegroup] = React.useState(initialValues.agegroup);
  const [height, setHeight] = React.useState(initialValues.height);
  const [build, setBuild] = React.useState(initialValues.build);
  const [hair, setHair] = React.useState(initialValues.hair);
  const [facialhair, setFacialhair] = React.useState(initialValues.facialhair);
  const [ethnicity, setEthnicity] = React.useState(initialValues.ethnicity);
  const [glasses, setGlasses] = React.useState(initialValues.glasses);
  const [dress, setDress] = React.useState(initialValues.dress);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstname(initialValues.firstname);
    setLastname(initialValues.lastname);
    setExternalid(initialValues.externalid);
    setGender(initialValues.gender);
    setEyecolor(initialValues.eyecolor);
    setAgegroup(initialValues.agegroup);
    setHeight(initialValues.height);
    setBuild(initialValues.build);
    setHair(initialValues.hair);
    setFacialhair(initialValues.facialhair);
    setEthnicity(initialValues.ethnicity);
    setGlasses(initialValues.glasses);
    setDress(initialValues.dress);
    setErrors({});
  };
  const validations = {
    firstname: [{ type: "Required" }],
    lastname: [{ type: "Required" }],
    externalid: [],
    gender: [],
    eyecolor: [],
    agegroup: [],
    height: [],
    build: [],
    hair: [],
    facialhair: [],
    ethnicity: [],
    glasses: [],
    dress: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstname,
          lastname,
          externalid,
          gender,
          eyecolor,
          agegroup,
          height,
          build,
          hair,
          facialhair,
          ethnicity,
          glasses,
          dress,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Person(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PersonCreateForm")}
      {...rest}
    >
      <TextField
        label="Firstname"
        isRequired={true}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname: value,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.firstname ?? value;
          }
          if (errors.firstname?.hasError) {
            runValidationTasks("firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("firstname", firstname)}
        errorMessage={errors.firstname?.errorMessage}
        hasError={errors.firstname?.hasError}
        {...getOverrideProps(overrides, "firstname")}
      ></TextField>
      <TextField
        label="Lastname"
        isRequired={true}
        isReadOnly={false}
        value={lastname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname: value,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.lastname ?? value;
          }
          if (errors.lastname?.hasError) {
            runValidationTasks("lastname", value);
          }
          setLastname(value);
        }}
        onBlur={() => runValidationTasks("lastname", lastname)}
        errorMessage={errors.lastname?.errorMessage}
        hasError={errors.lastname?.hasError}
        {...getOverrideProps(overrides, "lastname")}
      ></TextField>
      <TextField
        label="Externalid"
        isRequired={false}
        isReadOnly={false}
        value={externalid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid: value,
              gender,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.externalid ?? value;
          }
          if (errors.externalid?.hasError) {
            runValidationTasks("externalid", value);
          }
          setExternalid(value);
        }}
        onBlur={() => runValidationTasks("externalid", externalid)}
        errorMessage={errors.externalid?.errorMessage}
        hasError={errors.externalid?.hasError}
        {...getOverrideProps(overrides, "externalid")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender: value,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <SelectField
        label="Eyecolor"
        placeholder="Please select an option"
        isDisabled={false}
        value={eyecolor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor: value,
              agegroup,
              height,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.eyecolor ?? value;
          }
          if (errors.eyecolor?.hasError) {
            runValidationTasks("eyecolor", value);
          }
          setEyecolor(value);
        }}
        onBlur={() => runValidationTasks("eyecolor", eyecolor)}
        errorMessage={errors.eyecolor?.errorMessage}
        hasError={errors.eyecolor?.hasError}
        {...getOverrideProps(overrides, "eyecolor")}
      >
        <option
          children="Blue"
          value="BLUE"
          {...getOverrideProps(overrides, "eyecoloroption0")}
        ></option>
        <option
          children="Green"
          value="GREEN"
          {...getOverrideProps(overrides, "eyecoloroption1")}
        ></option>
        <option
          children="Grey"
          value="GREY"
          {...getOverrideProps(overrides, "eyecoloroption2")}
        ></option>
        <option
          children="Brown"
          value="BROWN"
          {...getOverrideProps(overrides, "eyecoloroption3")}
        ></option>
        <option
          children="Hazel"
          value="HAZEL"
          {...getOverrideProps(overrides, "eyecoloroption4")}
        ></option>
      </SelectField>
      <TextField
        label="Agegroup"
        isRequired={false}
        isReadOnly={false}
        value={agegroup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup: value,
              height,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.agegroup ?? value;
          }
          if (errors.agegroup?.hasError) {
            runValidationTasks("agegroup", value);
          }
          setAgegroup(value);
        }}
        onBlur={() => runValidationTasks("agegroup", agegroup)}
        errorMessage={errors.agegroup?.errorMessage}
        hasError={errors.agegroup?.hasError}
        {...getOverrideProps(overrides, "agegroup")}
      ></TextField>
      <SelectField
        label="Height"
        placeholder="Please select an option"
        isDisabled={false}
        value={height}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height: value,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      >
        <option
          children="Short"
          value="SHORT"
          {...getOverrideProps(overrides, "heightoption0")}
        ></option>
        <option
          children="Avg"
          value="AVG"
          {...getOverrideProps(overrides, "heightoption1")}
        ></option>
        <option
          children="Tall"
          value="TALL"
          {...getOverrideProps(overrides, "heightoption2")}
        ></option>
        <option
          children="Giant"
          value="GIANT"
          {...getOverrideProps(overrides, "heightoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Build"
        placeholder="Please select an option"
        isDisabled={false}
        value={build}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height,
              build: value,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.build ?? value;
          }
          if (errors.build?.hasError) {
            runValidationTasks("build", value);
          }
          setBuild(value);
        }}
        onBlur={() => runValidationTasks("build", build)}
        errorMessage={errors.build?.errorMessage}
        hasError={errors.build?.hasError}
        {...getOverrideProps(overrides, "build")}
      >
        <option
          children="Skinny"
          value="SKINNY"
          {...getOverrideProps(overrides, "buildoption0")}
        ></option>
        <option
          children="Slim"
          value="SLIM"
          {...getOverrideProps(overrides, "buildoption1")}
        ></option>
        <option
          children="Avg"
          value="AVG"
          {...getOverrideProps(overrides, "buildoption2")}
        ></option>
        <option
          children="Tubby"
          value="TUBBY"
          {...getOverrideProps(overrides, "buildoption3")}
        ></option>
        <option
          children="Fat"
          value="FAT"
          {...getOverrideProps(overrides, "buildoption4")}
        ></option>
        <option
          children="Huge"
          value="HUGE"
          {...getOverrideProps(overrides, "buildoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Hair"
        placeholder="Please select an option"
        isDisabled={false}
        value={hair}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height,
              build,
              hair: value,
              facialhair,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.hair ?? value;
          }
          if (errors.hair?.hasError) {
            runValidationTasks("hair", value);
          }
          setHair(value);
        }}
        onBlur={() => runValidationTasks("hair", hair)}
        errorMessage={errors.hair?.errorMessage}
        hasError={errors.hair?.hasError}
        {...getOverrideProps(overrides, "hair")}
      >
        <option
          children="Blonde"
          value="BLONDE"
          {...getOverrideProps(overrides, "hairoption0")}
        ></option>
        <option
          children="Brown"
          value="BROWN"
          {...getOverrideProps(overrides, "hairoption1")}
        ></option>
        <option
          children="Black"
          value="BLACK"
          {...getOverrideProps(overrides, "hairoption2")}
        ></option>
        <option
          children="Grey"
          value="GREY"
          {...getOverrideProps(overrides, "hairoption3")}
        ></option>
        <option
          children="Red"
          value="RED"
          {...getOverrideProps(overrides, "hairoption4")}
        ></option>
        <option
          children="Bald"
          value="BALD"
          {...getOverrideProps(overrides, "hairoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Facialhair"
        placeholder="Please select an option"
        isDisabled={false}
        value={facialhair}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              facialhair: value,
              ethnicity,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.facialhair ?? value;
          }
          if (errors.facialhair?.hasError) {
            runValidationTasks("facialhair", value);
          }
          setFacialhair(value);
        }}
        onBlur={() => runValidationTasks("facialhair", facialhair)}
        errorMessage={errors.facialhair?.errorMessage}
        hasError={errors.facialhair?.hasError}
        {...getOverrideProps(overrides, "facialhair")}
      >
        <option
          children="None"
          value="NONE"
          {...getOverrideProps(overrides, "facialhairoption0")}
        ></option>
        <option
          children="Beard"
          value="BEARD"
          {...getOverrideProps(overrides, "facialhairoption1")}
        ></option>
        <option
          children="Moustache"
          value="MOUSTACHE"
          {...getOverrideProps(overrides, "facialhairoption2")}
        ></option>
        <option
          children="Goatee"
          value="GOATEE"
          {...getOverrideProps(overrides, "facialhairoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Ethnicity"
        placeholder="Please select an option"
        isDisabled={false}
        value={ethnicity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              facialhair,
              ethnicity: value,
              glasses,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.ethnicity ?? value;
          }
          if (errors.ethnicity?.hasError) {
            runValidationTasks("ethnicity", value);
          }
          setEthnicity(value);
        }}
        onBlur={() => runValidationTasks("ethnicity", ethnicity)}
        errorMessage={errors.ethnicity?.errorMessage}
        hasError={errors.ethnicity?.hasError}
        {...getOverrideProps(overrides, "ethnicity")}
      >
        <option
          children="White"
          value="WHITE"
          {...getOverrideProps(overrides, "ethnicityoption0")}
        ></option>
        <option
          children="Afrocarr"
          value="AFROCARR"
          {...getOverrideProps(overrides, "ethnicityoption1")}
        ></option>
        <option
          children="Asian"
          value="ASIAN"
          {...getOverrideProps(overrides, "ethnicityoption2")}
        ></option>
        <option
          children="Oriental"
          value="ORIENTAL"
          {...getOverrideProps(overrides, "ethnicityoption3")}
        ></option>
        <option
          children="African"
          value="AFRICAN"
          {...getOverrideProps(overrides, "ethnicityoption4")}
        ></option>
        <option
          children="Seasian"
          value="SEASIAN"
          {...getOverrideProps(overrides, "ethnicityoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Glasses"
        placeholder="Please select an option"
        isDisabled={false}
        value={glasses}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses: value,
              dress,
            };
            const result = onChange(modelFields);
            value = result?.glasses ?? value;
          }
          if (errors.glasses?.hasError) {
            runValidationTasks("glasses", value);
          }
          setGlasses(value);
        }}
        onBlur={() => runValidationTasks("glasses", glasses)}
        errorMessage={errors.glasses?.errorMessage}
        hasError={errors.glasses?.hasError}
        {...getOverrideProps(overrides, "glasses")}
      >
        <option
          children="None"
          value="NONE"
          {...getOverrideProps(overrides, "glassesoption0")}
        ></option>
        <option
          children="Wire"
          value="WIRE"
          {...getOverrideProps(overrides, "glassesoption1")}
        ></option>
        <option
          children="Heavy"
          value="HEAVY"
          {...getOverrideProps(overrides, "glassesoption2")}
        ></option>
        <option
          children="Fancy"
          value="FANCY"
          {...getOverrideProps(overrides, "glassesoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Dress"
        placeholder="Please select an option"
        isDisabled={false}
        value={dress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              externalid,
              gender,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              facialhair,
              ethnicity,
              glasses,
              dress: value,
            };
            const result = onChange(modelFields);
            value = result?.dress ?? value;
          }
          if (errors.dress?.hasError) {
            runValidationTasks("dress", value);
          }
          setDress(value);
        }}
        onBlur={() => runValidationTasks("dress", dress)}
        errorMessage={errors.dress?.errorMessage}
        hasError={errors.dress?.hasError}
        {...getOverrideProps(overrides, "dress")}
      >
        <option
          children="Corporate"
          value="CORPORATE"
          {...getOverrideProps(overrides, "dressoption0")}
        ></option>
        <option
          children="Slick"
          value="SLICK"
          {...getOverrideProps(overrides, "dressoption1")}
        ></option>
        <option
          children="Fancy"
          value="FANCY"
          {...getOverrideProps(overrides, "dressoption2")}
        ></option>
        <option
          children="Scruffy"
          value="SCRUFFY"
          {...getOverrideProps(overrides, "dressoption3")}
        ></option>
        <option
          children="Hippy"
          value="HIPPY"
          {...getOverrideProps(overrides, "dressoption4")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
