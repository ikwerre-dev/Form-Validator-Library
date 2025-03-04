type ValidatorFunction = (value: string, allValues?: Record<string, string>) => string | null;
type ValidationRule = {
    type?: 'email' | 'password' | 'creditCard' | 'cvv' | 'phone' | 'date' | 'postalCode' | 'url' | 'numeric';
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: ValidatorFunction | ValidatorFunction[];
    async?: (value: string, allValues?: Record<string, string>) => Promise<string | null>;
    passwordStrength?: number;
};
export type ValidationRules = Record<string, ValidationRule>;
declare const useFormValidator: (initialValues: Record<string, string>, validationRules: ValidationRules) => {
    values: Record<string, string>;
    errors: Record<string, string>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    handleSubmit: (callback: () => void) => (e: React.FormEvent) => Promise<void>;
    isSubmitting: boolean;
    passwordStrength: number;
};
export default useFormValidator;
