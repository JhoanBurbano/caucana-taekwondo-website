/**
 * Validadores para formularios colombianos
 */

export const validators = {
  /**
   * Valida formato de email
   */
  email: (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  /**
   * Valida teléfono colombiano (10 dígitos, puede empezar con +57)
   */
  phone: (value: string): boolean => {
    const cleaned = value.replace(/\s+/g, '').replace(/[-\+]/g, '');
    const phoneRegex = /^(\+57)?[0-9]{10}$/;
    return phoneRegex.test(cleaned);
  },

  /**
   * Valida número de identificación colombiana
   */
  identification: (value: string, type: string): boolean => {
    const cleaned = value.replace(/\s+/g, '');

    switch (type) {
      case 'CC': // Cédula de Ciudadanía (8-10 dígitos)
        return /^[0-9]{8,10}$/.test(cleaned);
      case 'CE': // Cédula de Extranjería (8-10 dígitos)
        return /^[0-9]{8,10}$/.test(cleaned);
      case 'TI': // Tarjeta de Identidad (7-10 dígitos)
        return /^[0-9]{7,10}$/.test(cleaned);
      case 'NIT': // NIT (9-11 dígitos)
        return /^[0-9]{9,11}$/.test(cleaned);
      default:
        return false;
    }
  },

  /**
   * Valida que el campo no esté vacío
   */
  required: (value: string): boolean => {
    return value.trim().length > 0;
  },

  /**
   * Valida nombre completo (mínimo 2 palabras, solo letras y espacios)
   */
  fullName: (value: string): boolean => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    const words = value.trim().split(/\s+/);
    return words.length >= 2 && nameRegex.test(value);
  },
};

export const getValidationMessage = {
  email: 'Por favor ingrese un email válido',
  phone: 'Por favor ingrese un teléfono válido (10 dígitos)',
  identification: (type: string) => {
    const messages: Record<string, string> = {
      CC: 'La cédula debe tener entre 8 y 10 dígitos',
      CE: 'La cédula de extranjería debe tener entre 8 y 10 dígitos',
      TI: 'La tarjeta de identidad debe tener entre 7 y 10 dígitos',
      NIT: 'El NIT debe tener entre 9 y 11 dígitos',
    };
    return messages[type] || 'Número de identificación inválido';
  },
  required: 'Este campo es obligatorio',
  fullName: 'Por favor ingrese su nombre completo (mínimo 2 palabras)',
};
