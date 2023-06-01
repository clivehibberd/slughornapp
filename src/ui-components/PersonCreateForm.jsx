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
    first_name: "",
    last_name: "",
    person_id: "",
    external_id: "",
    gender: "",
    party: "",
    eyecolor: "",
    agegroup: "",
    height: "",
    build: "",
    hair: "",
    hairstyle: "",
    facialhair: "",
    ethnicity: "",
    glasses: "",
    dress: "",
    persontype: "",
    image: "",
    uri: "",
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [person_id, setPerson_id] = React.useState(initialValues.person_id);
  const [external_id, setExternal_id] = React.useState(
    initialValues.external_id
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [party, setParty] = React.useState(initialValues.party);
  const [eyecolor, setEyecolor] = React.useState(initialValues.eyecolor);
  const [agegroup, setAgegroup] = React.useState(initialValues.agegroup);
  const [height, setHeight] = React.useState(initialValues.height);
  const [build, setBuild] = React.useState(initialValues.build);
  const [hair, setHair] = React.useState(initialValues.hair);
  const [hairstyle, setHairstyle] = React.useState(initialValues.hairstyle);
  const [facialhair, setFacialhair] = React.useState(initialValues.facialhair);
  const [ethnicity, setEthnicity] = React.useState(initialValues.ethnicity);
  const [glasses, setGlasses] = React.useState(initialValues.glasses);
  const [dress, setDress] = React.useState(initialValues.dress);
  const [persontype, setPersontype] = React.useState(initialValues.persontype);
  const [image, setImage] = React.useState(initialValues.image);
  const [uri, setUri] = React.useState(initialValues.uri);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setPerson_id(initialValues.person_id);
    setExternal_id(initialValues.external_id);
    setGender(initialValues.gender);
    setParty(initialValues.party);
    setEyecolor(initialValues.eyecolor);
    setAgegroup(initialValues.agegroup);
    setHeight(initialValues.height);
    setBuild(initialValues.build);
    setHair(initialValues.hair);
    setHairstyle(initialValues.hairstyle);
    setFacialhair(initialValues.facialhair);
    setEthnicity(initialValues.ethnicity);
    setGlasses(initialValues.glasses);
    setDress(initialValues.dress);
    setPersontype(initialValues.persontype);
    setImage(initialValues.image);
    setUri(initialValues.uri);
    setErrors({});
  };
  const validations = {
    first_name: [],
    last_name: [],
    person_id: [],
    external_id: [],
    gender: [],
    party: [],
    eyecolor: [],
    agegroup: [],
    height: [],
    build: [],
    hair: [],
    hairstyle: [],
    facialhair: [],
    ethnicity: [],
    glasses: [],
    dress: [],
    persontype: [],
    image: [],
    uri: [],
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
          first_name,
          last_name,
          person_id,
          external_id,
          gender,
          party,
          eyecolor,
          agegroup,
          height,
          build,
          hair,
          hairstyle,
          facialhair,
          ethnicity,
          glasses,
          dress,
          persontype,
          image,
          uri,
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
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Person id"
        isRequired={false}
        isReadOnly={false}
        value={person_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id: value,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
            };
            const result = onChange(modelFields);
            value = result?.person_id ?? value;
          }
          if (errors.person_id?.hasError) {
            runValidationTasks("person_id", value);
          }
          setPerson_id(value);
        }}
        onBlur={() => runValidationTasks("person_id", person_id)}
        errorMessage={errors.person_id?.errorMessage}
        hasError={errors.person_id?.hasError}
        {...getOverrideProps(overrides, "person_id")}
      ></TextField>
      <TextField
        label="External id"
        isRequired={false}
        isReadOnly={false}
        value={external_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id: value,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
            };
            const result = onChange(modelFields);
            value = result?.external_id ?? value;
          }
          if (errors.external_id?.hasError) {
            runValidationTasks("external_id", value);
          }
          setExternal_id(value);
        }}
        onBlur={() => runValidationTasks("external_id", external_id)}
        errorMessage={errors.external_id?.errorMessage}
        hasError={errors.external_id?.hasError}
        {...getOverrideProps(overrides, "external_id")}
      ></TextField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender: value,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
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
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "genderoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "genderoption1")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "genderoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Party"
        placeholder="Please select an option"
        isDisabled={false}
        value={party}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party: value,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
            };
            const result = onChange(modelFields);
            value = result?.party ?? value;
          }
          if (errors.party?.hasError) {
            runValidationTasks("party", value);
          }
          setParty(value);
        }}
        onBlur={() => runValidationTasks("party", party)}
        errorMessage={errors.party?.errorMessage}
        hasError={errors.party?.hasError}
        {...getOverrideProps(overrides, "party")}
      >
        <option
          children="Tory"
          value="TORY"
          {...getOverrideProps(overrides, "partyoption0")}
        ></option>
        <option
          children="Labour"
          value="LABOUR"
          {...getOverrideProps(overrides, "partyoption1")}
        ></option>
        <option
          children="Libdem"
          value="LIBDEM"
          {...getOverrideProps(overrides, "partyoption2")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "partyoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Eyecolor"
        placeholder="Please select an option"
        isDisabled={false}
        value={eyecolor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor: value,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
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
      <SelectField
        label="Agegroup"
        placeholder="Please select an option"
        isDisabled={false}
        value={agegroup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup: value,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
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
      >
        <option
          children="Young"
          value="YOUNG"
          {...getOverrideProps(overrides, "agegroupoption0")}
        ></option>
        <option
          children="Thirties"
          value="THIRTIES"
          {...getOverrideProps(overrides, "agegroupoption1")}
        ></option>
        <option
          children="Forties"
          value="FORTIES"
          {...getOverrideProps(overrides, "agegroupoption2")}
        ></option>
        <option
          children="Fifties"
          value="FIFTIES"
          {...getOverrideProps(overrides, "agegroupoption3")}
        ></option>
        <option
          children="Sixties"
          value="SIXTIES"
          {...getOverrideProps(overrides, "agegroupoption4")}
        ></option>
        <option
          children="Old"
          value="OLD"
          {...getOverrideProps(overrides, "agegroupoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Height"
        placeholder="Please select an option"
        isDisabled={false}
        value={height}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height: value,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
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
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build: value,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
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
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair: value,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
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
      </SelectField>
      <SelectField
        label="Hairstyle"
        placeholder="Please select an option"
        isDisabled={false}
        value={hairstyle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle: value,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
            };
            const result = onChange(modelFields);
            value = result?.hairstyle ?? value;
          }
          if (errors.hairstyle?.hasError) {
            runValidationTasks("hairstyle", value);
          }
          setHairstyle(value);
        }}
        onBlur={() => runValidationTasks("hairstyle", hairstyle)}
        errorMessage={errors.hairstyle?.errorMessage}
        hasError={errors.hairstyle?.hasError}
        {...getOverrideProps(overrides, "hairstyle")}
      >
        <option
          children="Bald"
          value="BALD"
          {...getOverrideProps(overrides, "hairstyleoption0")}
        ></option>
        <option
          children="Short"
          value="SHORT"
          {...getOverrideProps(overrides, "hairstyleoption1")}
        ></option>
        <option
          children="Bob"
          value="BOB"
          {...getOverrideProps(overrides, "hairstyleoption2")}
        ></option>
        <option
          children="Shoulder"
          value="SHOULDER"
          {...getOverrideProps(overrides, "hairstyleoption3")}
        ></option>
        <option
          children="Long"
          value="LONG"
          {...getOverrideProps(overrides, "hairstyleoption4")}
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
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair: value,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri,
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
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity: value,
              glasses,
              dress,
              persontype,
              image,
              uri,
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
          children="Black"
          value="BLACK"
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
          children="Apac"
          value="APAC"
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
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses: value,
              dress,
              persontype,
              image,
              uri,
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
          children="Yes"
          value="YES"
          {...getOverrideProps(overrides, "glassesoption0")}
        ></option>
        <option
          children="No"
          value="NO"
          {...getOverrideProps(overrides, "glassesoption1")}
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
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress: value,
              persontype,
              image,
              uri,
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
      <SelectField
        label="Persontype"
        placeholder="Please select an option"
        isDisabled={false}
        value={persontype}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype: value,
              image,
              uri,
            };
            const result = onChange(modelFields);
            value = result?.persontype ?? value;
          }
          if (errors.persontype?.hasError) {
            runValidationTasks("persontype", value);
          }
          setPersontype(value);
        }}
        onBlur={() => runValidationTasks("persontype", persontype)}
        errorMessage={errors.persontype?.errorMessage}
        hasError={errors.persontype?.hasError}
        {...getOverrideProps(overrides, "persontype")}
      >
        <option
          children="Mp"
          value="MP"
          {...getOverrideProps(overrides, "persontypeoption0")}
        ></option>
        <option
          children="Lord"
          value="LORD"
          {...getOverrideProps(overrides, "persontypeoption1")}
        ></option>
        <option
          children="Msp"
          value="MSP"
          {...getOverrideProps(overrides, "persontypeoption2")}
        ></option>
        <option
          children="Mla"
          value="MLA"
          {...getOverrideProps(overrides, "persontypeoption3")}
        ></option>
        <option
          children="Mwa"
          value="MWA"
          {...getOverrideProps(overrides, "persontypeoption4")}
        ></option>
      </SelectField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image: value,
              uri,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Uri"
        isRequired={false}
        isReadOnly={false}
        value={uri}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              person_id,
              external_id,
              gender,
              party,
              eyecolor,
              agegroup,
              height,
              build,
              hair,
              hairstyle,
              facialhair,
              ethnicity,
              glasses,
              dress,
              persontype,
              image,
              uri: value,
            };
            const result = onChange(modelFields);
            value = result?.uri ?? value;
          }
          if (errors.uri?.hasError) {
            runValidationTasks("uri", value);
          }
          setUri(value);
        }}
        onBlur={() => runValidationTasks("uri", uri)}
        errorMessage={errors.uri?.errorMessage}
        hasError={errors.uri?.hasError}
        {...getOverrideProps(overrides, "uri")}
      ></TextField>
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
