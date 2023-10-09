
import "./main.css";

const applicationForm: HTMLDivElement = document.querySelector(".application_forms__gCHho") as HTMLDivElement;
const businessForm: HTMLDivElement = document.querySelector(".bank_account_details") as HTMLDivElement;
const brandName: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
const website: HTMLInputElement = document.getElementById("website") as HTMLInputElement;
const country: HTMLInputElement = document.getElementById("country") as HTMLInputElement;
const category: HTMLInputElement = document.getElementById("category") as HTMLInputElement;
const messageName: HTMLElement = document.querySelector('.message-name') as HTMLElement;
const messageWeb: HTMLElement = document.querySelector('.message-website') as HTMLElement;
const messageCountry: HTMLElement = document.querySelector('.message-country') as HTMLElement;
const messageCat: HTMLElement = document.querySelector('.message-category') as HTMLElement;
const btnNext: HTMLElement = document.querySelector('.btn') as HTMLButtonElement;
const regEX: RegExp = /^[A-Za-z0-9]+$/;
const gmailSuffix: string = "@gmail.com";


// --------------Business Owner------------

const BussinesOwner: HTMLDivElement = document.querySelector(".BussinesOwner") as HTMLDivElement;
const firstName: HTMLInputElement = document.getElementById("firstName") as HTMLInputElement;
const lastName: HTMLInputElement = document.getElementById("lastName") as HTMLInputElement;
const gmail: HTMLInputElement = document.getElementById("gmail") as HTMLInputElement;
const messageFirstName: HTMLElement = document.querySelector('.message-name') as HTMLElement;
const messagelastName: HTMLElement = document.querySelector('.message-lastName') as HTMLElement;
const messageGmail: HTMLElement = document.querySelector('.message-gmail') as HTMLElement;
const ownerBtn: HTMLElement = document.querySelector('#ownerButton') as HTMLButtonElement;

import * as Yup from 'yup';

const ownerschema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  Gmail: Yup.string()
    .required('Website URL is required')
    .matches(/@gmail\.com$/, 'Website URL must end with "@gmail.com"'),
    lastName: Yup.string().required('lastName is required'),
});


ownerBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const OwnerData = {
    firstName: firstName.value,
    Gmail: website.value,
    lastName: country.value,
    Category: category.value,
  };

  try {
    await ownerschema.validate(OwnerData, { abortEarly: false });
    console.log(OwnerData);
    messageFirstName.textContent = '';
    messagelastName.textContent = '';
    messageGmail.textContent = '';
  } catch (error) {
    // @ts-ignore
    error.inner.forEach((err) => {
      if (err.path === 'First-name') {
        messageFirstName.textContent =` 🔴 ${err.message}`;
      } else if (err.path === 'lastName') {
        messagelastName.textContent = `🔴 ${err.message}`;
      } else if (err.path === 'Gamil') {
        messageGmail.textContent = `🔴 ${err.message}`;
      }
    });
  }
  BussinesOwner.style.display = "none";
  applicationForm.style.display = "block"

});


// Bank details form

const schema = Yup.object().shape({
  Brand: Yup.string().required('Brand name is required'),
  Gmail: Yup.string()
    .required('Website URL is required')
    .matches(/@gmail\.com$/, 'Website URL must end with "@gmail.com"'),
  Country: Yup.string().required('Country is required'),
  Category: Yup.string().required('Category is required'),
});


btnNext.addEventListener('click', async (e) => {
  e.preventDefault();

  const formData = {
    Brand: brandName.value,
    Gmail: website.value,
    Country: country.value,
    Category: category.value,
  };

  try {
    await schema.validate(formData, { abortEarly: false });
    console.log(formData);
    messageName.textContent = '';
    messageWeb.textContent = '';
    messageCountry.textContent = '';
    messageCat.textContent = '';
  } catch (error) {
    // @ts-ignore
    error.inner.forEach((err) => {
      if (err.path === 'Brand') {
        messageName.textContent = `🔴 ${err.message}`;
      } else if (err.path === 'Gmail') {
        messageWeb.textContent = `🔴 ${err.message}`;
      } else if (err.path === 'Country') {
        messageCountry.textContent = `🔴 ${err.message}`;
      } else if (err.path === 'Category') {
        messageCat.textContent = `🔴 ${err.message}`;
      }
    });
  }
  applicationForm.style.display = "none";
  businessForm.style.display = "block"

});




// Bank Acoount form

const beneficiaryName: HTMLInputElement = document.getElementById("beneficiaryName") as HTMLInputElement;
const iban: HTMLInputElement = document.getElementById("iban") as HTMLInputElement;
const bankName: HTMLInputElement = document.getElementById("bankName") as HTMLInputElement;
const swift: HTMLInputElement = document.getElementById("swift") as HTMLInputElement;
const bankCurrency: HTMLInputElement = document.getElementById("bankCurrency") as HTMLInputElement;
const messageBeneficiaryName: HTMLElement = document.querySelector('.message-bankName') as HTMLElement;
const messageIban: HTMLElement = document.querySelector('.message-iban') as HTMLElement;
const messagebankName: HTMLElement = document.querySelector('.message-bankName') as HTMLElement;
const messageswift: HTMLElement = document.querySelector('.message-swift') as HTMLElement;
const messagebankCurrency: HTMLElement = document.querySelector('.message-bankCurrency') as HTMLElement;
const submitBankButton: HTMLElement = document.querySelector('#submitBankButton') as HTMLButtonElement;


const bankAccountSchema = Yup.object().shape({
  beneficiaryName: Yup.string().required('Beneficiary name is required'),
  IBAN: Yup.string().matches(/^[A-Z]{2}[0-9]{2}[0-9]{3}[0-9]{16}$/, 'IBAN is required'),
  bankName: Yup.string().required('Bank name is required'),
  swift: Yup.string().matches(/^[A-Z]{6}[0-9]{2}[A-Z]{3}$/, 'SWIFT is required'),
  bankCurrency: Yup.string().required('Bank currency is required'),
});

submitBankButton.addEventListener('click', async (e) => {
  e.preventDefault();

const bankFormData = {
    beneficiaryName: beneficiaryName.value,
    IBAN: iban.value,
    bankName: bankName.value,
    swift: swift.value,
    bankCurrency: bankCurrency.value,
  };

  try {
    await bankAccountSchema.validate(bankFormData, { abortEarly: false });
    console.log(bankFormData);
    messageBeneficiaryName.textContent = '';
    messageIban.textContent = '';
    messagebankName.textContent = '';
    messageswift.textContent = '';
    messagebankCurrency.textContent = '';
  } catch (error) {
    // @ts-ignore
    error.inner.forEach((err) => {
      if (err.path === 'beneficiaryName') {
        messageBeneficiaryName.textContent =` 🔴 ${err.message}`;
      } else if (err.path === 'iban') {
        messageIban.textContent =` 🔴 ${err.message}`;
      } else if (err.path === 'bankName') {
        messagebankName.textContent =` 🔴 ${err.message}`;
      } else if (err.path === 'swift') {
        messageswift.textContent = `🔴 ${err.message}`;
      } else if (err.path === 'bankCurrency') {
        messagebankCurrency.textContent =` 🔴 ${err.message}`;
      }
    });
  }
});