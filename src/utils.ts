import dayjs from "dayjs";

export type GenderFieldSetType = {
  [key: string]: JQuery<HTMLElement>;
};

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  "value"
).set;

export const setValue = (input: HTMLInputElement, value: string) => {
  if (!value || input.value) return;

  nativeInputValueSetter.call(input, value);
  const event = new Event("input", { bubbles: true });
  input.dispatchEvent(event);
};

export const getByLabelText = (labelText: string): HTMLInputElement | null =>
  $(`label:contains('${labelText}')`).parent().find("input")?.[0] ?? null;

export const getByText = (text: string): JQuery<HTMLElement> =>
  $(`:contains('${text}')`);

export const setGender = (gender: string, genderFields: GenderFieldSetType) => {
  if (!gender) return;
  genderFields[gender].click();
};

export const normalizeDob = (dob: string | null): string | null =>
  dob ? dayjs(dob).format("DD-MM-YYYY") : null;

export const waitForElement = (selector: string) => {
  return new Promise((resolve) => {
    let el = $(selector)?.[0];
    if (el) {
      resolve(el);
    }
    new MutationObserver((mutationRecords, observer) => {
      const element = $(selector)?.[0];
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
};

export const waitForElementToBeRemoved = (selector: string) => {
  return new Promise((resolve) => {
    let el = $(selector).length;
    if (!el) {
      resolve(el);
    }
    new MutationObserver((mutationRecords, observer) => {
      const el = $(selector).length;
      if (!el) {
        resolve(el);

        observer.disconnect();
      }
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
};
