import * as yup from "yup";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

brandName.addEventListener('keydown', (e: KeyboardEvent) => {
  const inputVal: string = brandName.value;
  if (e.key === 'Enter') {
    if (!regEX.test(inputVal) || inputVal === '') {
      messageName.textContent = '🔴 Brand name is required';
    } else {
      messageName.textContent = "";
    }
  }
});

website.addEventListener('keydown', (e: KeyboardEvent) => {
  // @ts-ignore
  const inputVal: string = e.target.value;
  if (e.key === 'Enter') {
    if (inputVal === ""  || inputVal.endsWith(gmailSuffix)) {
      messageWeb.textContent = '🔴 Website URL is required';
    } else {
      messageWeb.textContent = "";
    }
  }
});

country.addEventListener('keydown', (e: KeyboardEvent) => {
  const inputVal: string = country.value;
  if (e.key === 'Enter') {
    if (inputVal === '') {
      messageCountry.textContent = '🔴 Country is required';
    } else {
      messageCountry.textContent = "";
    }
  }
});

category.addEventListener('keydown', (e: KeyboardEvent) => {
  const inputVal: string = category.value;
  if (e.key === 'Enter') {
    if (inputVal === '') {
      messageCat.textContent = '🔴 Category is required';
    } else {
      messageCat.textContent = "";
    }
  }
});



btnNext.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = {
    inputVAlue11: brandName.value,
    inputVAlue21: website.value,
    inputVAlue31: country.value,
    inputVAlue41: category.value,
  };

  console.log(formData);

});