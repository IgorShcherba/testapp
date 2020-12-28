import {
  setValue,
  getByLabelText,
  getByText,
  setGender,
  normalizeDob,
  waitForElement,
  waitForElementToBeRemoved,
  GenderFieldSetType,
} from "./utils";

type WorkerType = {
  dob: string | null;
  experience: string | null;
  firstName: string | null;
  gender: string | null;
  job: string | null;
  lastName: string | null;
};

type DataType = {
  workers: Array<WorkerType> | [];
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

const MODAL_TITLE_SELECTOR =
  ":contains('Check all fields before click on Save button')";
const addBtn = getByText("Add");

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

const autoFillModalForm = async (worker: WorkerType) => {
  addBtn.click();

  await waitForElement(MODAL_TITLE_SELECTOR);

  const { dob, experience, firstName, gender, job, lastName } = worker;
  const dateOfBirth: string | null = normalizeDob(dob);

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

  setValue(inputFirstName, firstName);
  setValue(inputLastName, lastName);
  setValue(inputJob, job);
  setValue(inputDoB, dateOfBirth);
  setGender(gender, genderFieldSet);

  await waitForElement(":contains('Work Experience (years)')");
  const inputExpirience = getByLabelText("Work Experience (years)");

  setTimeout(() => setValue(inputExpirience, experience), 10);

  return new Promise(async (resolve) => {
    await waitForElementToBeRemoved(".MuiDialog-root");
    resolve(null);
  });
};

const fill = async () => {
  autoFillForm();

  for (const worker of workers) {
    await autoFillModalForm(worker);
  }
};

export default fill;
