import {
  setValue,
  getByLabelText,
  getByText,
  setGender,
  normalizeDob,
  GenderFieldSetType,
} from "./utils";

type WorkersType = {
  dob: string | null;
  experience: string | null;
  firstName: string | null;
  gender: string | null;
  job: string | null;
  lastName: string | null;
};

type DataType = {
  workers: Array<WorkersType> | [];
  desc: string | null;
  email: string | null;
  firstPhone: string | null;
  name: string | null;
  secondaryPhone: string | null;
};

declare global {
  interface Window {
    data: DataType;
  }
}

const { workers, desc, email, firstPhone, name, secondaryPhone } = window.data;

const autoFillForm = (): void => {
  const [
    inputName,
    inputEmail,
    inputFirstPhone,
    inputSecondaryPhone,
    inputDesc,
  ] = Array.from($(".MuiInput-input"));

  setValue(inputName, name);
  setValue(inputEmail, email);
  setValue(inputFirstPhone, firstPhone);
  setValue(inputSecondaryPhone, secondaryPhone);
  setValue(inputDesc, desc?.slice?.(0, 20));
};

const workersCopy = [...workers];

let currentIndex = 0;

$(".MuiTable-root").on("DOMNodeInserted", function () {
  currentIndex = currentIndex < workersCopy.length - 1 ? ++currentIndex : 0;
});

const autoFillModalForm = (): void => {
  const inputFirstName = getByLabelText("First Name");
  const inputLastName = getByLabelText("Last Name");
  const inputJob = getByLabelText("Job");
  const inputDoB = getByLabelText("Birthday");
  const inputFemale = getByText("Female");
  const inputMale = getByText("Male");
  const inputOther = getByText("Other");

  const genderFieldSet: GenderFieldSetType = {
    male: inputMale,
    female: inputFemale,
    other: inputOther,
  };

  const { dob, experience, firstName, gender, job, lastName } = workersCopy[
    currentIndex
  ];

  const dateOfBirth: string | null = normalizeDob(dob);

  $(".MuiDialogContent-root").on("DOMNodeInserted", function (e) {
    if ($(e.target).find(":contains('Work Experience (years)')").length !== 0) {
      const inputExpirience = getByLabelText("Work Experience (years)");
      setTimeout(() => setValue(inputExpirience, experience), 20);
    }
  });

  setValue(inputFirstName, firstName);
  setValue(inputLastName, lastName);
  setValue(inputJob, job);
  setValue(inputDoB, dateOfBirth);
  setGender(gender, genderFieldSet);
};

const fill = (): void => {
  autoFillForm();

  const isModalOpened: boolean =
    $(":contains('Check all fields before click on Save button')").length !== 0;

  if (isModalOpened) {
    autoFillModalForm();
  }
};

export default fill;
