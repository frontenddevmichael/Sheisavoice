"use client";

import { useState, useCallback } from "react";

export interface ValidationErrors {
  [key: string]: string;
}

export interface ValidationRules {
  [key: string]: {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => string | null;
  };
}

export function useFormValidation(rules: ValidationRules) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = useCallback(
    (data: { [key: string]: string }) => {
      const newErrors: ValidationErrors = {};

      for (const [field, fieldRules] of Object.entries(rules)) {
        const value = data[field] || "";

        if (fieldRules.required && !value.trim()) {
          newErrors[field] = "This field is required";
          continue;
        }

        if (fieldRules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[field] = "Please enter a valid email address";
          continue;
        }

        if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
          newErrors[field] = `Minimum ${fieldRules.minLength} characters`;
          continue;
        }

        if (fieldRules.maxLength && value && value.length > fieldRules.maxLength) {
          newErrors[field] = `Maximum ${fieldRules.maxLength} characters`;
          continue;
        }

        if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
          newErrors[field] = "Please enter a valid value";
          continue;
        }

        if (fieldRules.custom && value) {
          const customError = fieldRules.custom(value);
          if (customError) {
            newErrors[field] = customError;
          }
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [rules]
  );

  const clearError = useCallback((field: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const clearAllErrors = useCallback(() => setErrors({}), []);

  return { errors, validate, clearError, clearAllErrors };
}
