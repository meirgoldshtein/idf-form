import { useState } from 'react';


export const useFormValidation = () => {
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateFormData = (formData: IMilitaryForm): boolean => {

    if (!formData.name || formData.name.trim() === '') {
      setValidationError('אנא הזן שם מלא');
      return false;
    }

    const combatPreferences = Object.values(formData.combatPreferences);
    if (!combatPreferences.every(pref => pref > 0)) {
      setValidationError('אנא מלא את  כל העדפות ביחידה קרבית');
      return false;
    }

    const supportPreferences = Object.values(formData.supportPreferences);
    if (!supportPreferences.every(pref => pref > 0)) {
      setValidationError('אנא מלא את  כל העדפות  ביחידת תמיכה');
      return false;
    }

    const techPreferences = Object.values(formData.techPreferences);
    if (!techPreferences.every(pref => pref > 0)) {
      setValidationError('אנא מלא את  כל העדפות  בתחום הטכנולוגי');
      return false;
    }

    setValidationError(null);
    return true;
  };

  return { validateFormData, validationError };
};