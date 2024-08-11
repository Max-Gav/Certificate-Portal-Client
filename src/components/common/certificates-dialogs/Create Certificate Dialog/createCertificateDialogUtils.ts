import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import DialogFieldName from "../../../../common/types/Dialog Types/DialogFieldName";
import DialogTextFieldProps from "../../../../common/types/Dialog Types/DialogTextFieldProps";
import { domainRegex, ipRegex } from "../../../../common/utils/regexPatterns";

// Form Text Fields
export const textFields: DialogTextFieldProps[] = [
  { name: "cert_name", label: "שם תעודה", required: true },
  {
    name: "country_name",
    label: "קוד מדינה (קוד באורך 2 תוים)",
    required: true,
  },
  {
    name: "state_or_province_name",
    label: "שם מדינה או מחוז",
    required: true,
  },
  { name: "locality_name", label: "שם מקום (עיר וכו')", required: true },
  { name: "organization_name", label: "שם ארגון", required: true },
  {
    name: "organizational_unit_name",
    label: "שם היחידה בארגון",
    required: true,
  },
  { name: "common_name", label: "Common Name", required: true },
  { name: "email_address", label: "כתובת אימייל", required: true },
];

// Validation functions
export const validateDomainName = (input: string): boolean =>
  domainRegex.test(input);
export const validateIpAddress = (input: string): boolean =>
  ipRegex.test(input);

// Handle input change
export const handleSanInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setDomainNameInput: React.Dispatch<React.SetStateAction<string>>,
  setIpAddressInput: React.Dispatch<React.SetStateAction<string>>
) => {
  const target = event.target as HTMLInputElement;
  const textFieldName = target.name as DialogFieldName;

  if (textFieldName === "domain_names") {
    setDomainNameInput(target.value);
  } else if (textFieldName === "ip_addresses") {
    setIpAddressInput(target.value);
  }
};

// Handle key press
export const handleSanKeyPress = (
  event: React.KeyboardEvent<HTMLInputElement>,
  domainNameInput: string,
  ipAddressInput: string,
  getValues: UseFormGetValues<any>,
  setValue: UseFormSetValue<any>,
  setDomainNameValid: React.Dispatch<React.SetStateAction<boolean>>,
  setIpAddressValid: React.Dispatch<React.SetStateAction<boolean>>,
  setDomainNameInput: React.Dispatch<React.SetStateAction<string>>,
  setIpAddressInput: React.Dispatch<React.SetStateAction<string>>
) => {
  if (event.key === "Enter" && (domainNameInput || ipAddressInput)) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const textFieldName = target.name as DialogFieldName;
    const currentValues = getValues(textFieldName) as string[];
    let currentInput, setCurrentInput;

    if (textFieldName === "domain_names") {
      if (validateDomainName(domainNameInput)) {
        setDomainNameValid(true);
      } else {
        setDomainNameValid(false);
        return;
      }
      currentInput = domainNameInput;
      setCurrentInput = setDomainNameInput;
    } else if (textFieldName === "ip_addresses") {
      if (validateIpAddress(ipAddressInput)) {
        setIpAddressValid(true);
      } else {
        setIpAddressValid(false);
        return;
      }
      currentInput = ipAddressInput;
      setCurrentInput = setIpAddressInput;
    } else {
      return;
    }

    if (!currentValues.includes(currentInput)) {
      setValue(textFieldName, [...currentValues, currentInput]);
      setCurrentInput("");
    }
  }
};

// Handle SAN delete
export const handleSanDelete = (
  textFieldName: DialogFieldName,
  san: string,
  getValues: UseFormGetValues<any>,
  setValue: UseFormSetValue<any>
) => {
  const currentSANs = getValues(textFieldName) as string[];
  setValue(
    textFieldName,
    currentSANs.filter((name) => name !== san)
  );
};
