import { useState } from 'react';
import { CreditCard, ArrowLeft, Building2, Check, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { COLOMBIAN_BANKS, IDENTIFICATION_TYPES, PAYMENT_CONCEPTS } from '@/lib/data/payment';
import { formatCurrency, notify, validators, getValidationMessage } from '@/lib/utils';
import type { PaymentStep, PaymentFormData } from '@/lib/types';
import { COLORS, FONTS } from '@/lib/constants/theme';

export function FloatingPaymentButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<PaymentStep>('identification');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<PaymentFormData>({
    defaultValues: {
      identificationType: 'CC',
      identification: '',
      name: '',
      email: '',
      phone: '',
      selectedBank: '',
    },
  });

  const identificationType = watch('identificationType');
  const totalAmount = PAYMENT_CONCEPTS.reduce((sum, item) => sum + item.amount, 0);

  const handleIdentificationSubmit = handleSubmit(async (data) => {
    // Validaciones adicionales
    if (!validators.fullName(data.name)) {
      notify.error('Nombre inválido', getValidationMessage.fullName);
      return;
    }

    if (!validators.email(data.email)) {
      notify.error('Email inválido', getValidationMessage.email);
      return;
    }

    if (!validators.phone(data.phone)) {
      notify.error('Teléfono inválido', getValidationMessage.phone);
      return;
    }

    if (!validators.identification(data.identification, data.identificationType)) {
      notify.error('Identificación inválida', getValidationMessage.identification(data.identificationType));
      return;
    }

    setStep('summary');
  });

  const handleBankSelection = () => {
    if (!selectedBank) {
      notify.warning('Seleccione un banco', 'Por favor seleccione un banco para continuar');
      return;
    }
    setValue('selectedBank', selectedBank);
    setStep('pse');
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep('identification');
      reset();
      setSelectedBank('');
    }, 300);
  };

  const handlePaymentSuccess = async () => {
    setIsLoading(true);
    // Simular procesamiento
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const reference = 'PSE-' + Math.random().toString(36).substring(7).toUpperCase();
    notify.success('¡Pago exitoso!', `Referencia: ${reference}`);
    setIsLoading(false);
    handleClose();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 text-white px-6 py-4 shadow-lg shadow-red-900/50 hover:shadow-red-900/80 transition-all duration-300 z-40 flex items-center gap-2 group"
        style={{
          fontFamily: FONTS.heading,
          fontSize: '18px',
          letterSpacing: '1px',
          background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
        }}
        aria-label="Abrir formulario de pago"
      >
        <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
        <span>Pagar Mensualidad</span>
      </button>

      {/* Payment Dialog */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent
          className="bg-[#1A1A1A] border-2 text-white sm:max-w-lg"
          style={{ borderColor: COLORS.primary }}
        >
          {/* Step 1: Identification */}
          {step === 'identification' && (
            <>
              <DialogHeader>
                <DialogTitle
                  className="text-white"
                  style={{ fontFamily: FONTS.heading, fontSize: '28px', letterSpacing: '1px' }}
                >
                  Pago PSE - Datos del Pagador
                </DialogTitle>
                <DialogDescription className="text-white/70" style={{ fontFamily: FONTS.body }}>
                  Ingrese su información para continuar con el pago
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleIdentificationSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <Label htmlFor="idType" className="text-white/80" style={{ fontFamily: FONTS.body }}>
                      Tipo ID
                    </Label>
                    <Select
                      value={identificationType}
                      onValueChange={(value) => setValue('identificationType', value)}
                    >
                      <SelectTrigger
                        className="bg-black border-white/20 text-white mt-1"
                        style={{ borderRadius: '0' }}
                        aria-label="Tipo de identificación"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1A] border-white/20 text-white">
                        {IDENTIFICATION_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="identification" className="text-white/80" style={{ fontFamily: FONTS.body }}>
                      Número de Identificación
                    </Label>
                    <Input
                      id="identification"
                      type="text"
                      {...register('identification', {
                        required: getValidationMessage.required,
                        validate: (value) =>
                          validators.identification(value, identificationType) ||
                          getValidationMessage.identification(identificationType),
                      })}
                      className="bg-black border-white/20 text-white mt-1"
                      style={{ fontFamily: FONTS.body, borderRadius: '0' }}
                      placeholder="1234567890"
                      aria-invalid={errors.identification ? 'true' : 'false'}
                      aria-describedby={errors.identification ? 'identification-error' : undefined}
                    />
                    {errors.identification && (
                      <p
                        id="identification-error"
                        className="text-red-500 text-sm mt-1"
                        role="alert"
                        style={{ fontFamily: FONTS.body }}
                      >
                        {errors.identification.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="name" className="text-white/80" style={{ fontFamily: FONTS.body }}>
                    Nombre Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    {...register('name', {
                      required: getValidationMessage.required,
                      validate: (value) => validators.fullName(value) || getValidationMessage.fullName,
                    })}
                    className="bg-black border-white/20 text-white mt-1"
                    style={{ fontFamily: FONTS.body, borderRadius: '0' }}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                      style={{ fontFamily: FONTS.body }}
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-white/80" style={{ fontFamily: FONTS.body }}>
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: getValidationMessage.required,
                      validate: (value) => validators.email(value) || getValidationMessage.email,
                    })}
                    className="bg-black border-white/20 text-white mt-1"
                    style={{ fontFamily: FONTS.body, borderRadius: '0' }}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                      style={{ fontFamily: FONTS.body }}
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white/80" style={{ fontFamily: FONTS.body }}>
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      required: getValidationMessage.required,
                      validate: (value) => validators.phone(value) || getValidationMessage.phone,
                    })}
                    className="bg-black border-white/20 text-white mt-1"
                    style={{ fontFamily: FONTS.body, borderRadius: '0' }}
                    placeholder="3123456789"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                      style={{ fontFamily: FONTS.body }}
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full text-white py-6"
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '18px',
                      letterSpacing: '1px',
                      borderRadius: '0',
                      background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
                    }}
                  >
                    Continuar
                  </Button>
                </div>
              </form>
            </>
          )}

          {/* Step 2: Summary and Bank Selection */}
          {step === 'summary' && (
            <>
              <DialogHeader>
                <button
                  onClick={() => setStep('identification')}
                  className="absolute left-6 top-6 text-white/60 hover:text-white transition-colors"
                  aria-label="Volver al paso anterior"
                >
                  <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                </button>
                <DialogTitle
                  className="text-white"
                  style={{ fontFamily: FONTS.heading, fontSize: '28px', letterSpacing: '1px' }}
                >
                  Resumen de Pago
                </DialogTitle>
                <DialogDescription className="text-white/70" style={{ fontFamily: FONTS.body }}>
                  Verifique los detalles y seleccione su banco
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                {/* Payment Summary */}
                <div className="bg-black border p-4" style={{ borderColor: `${COLORS.primary}4D` }}>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '18px',
                      letterSpacing: '1px',
                      color: COLORS.primary,
                    }}
                  >
                    Conceptos de Pago
                  </h3>
                  <div className="space-y-2">
                    {PAYMENT_CONCEPTS.map((item, index) => (
                      <div
                        key={`concept-${item.concept}-${index}`}
                        className="flex justify-between text-white/80"
                        style={{ fontFamily: FONTS.body, fontSize: '14px' }}
                      >
                        <span>{item.concept}</span>
                        <span>{formatCurrency(item.amount)}</span>
                      </div>
                    ))}
                    <div
                      className="border-t border-white/20 pt-2 mt-2 flex justify-between text-white"
                      style={{ fontFamily: FONTS.heading, fontSize: '20px' }}
                    >
                      <span>Total</span>
                      <span style={{ color: COLORS.primary }}>{formatCurrency(totalAmount)}</span>
                    </div>
                  </div>
                </div>

                {/* Payer Info */}
                <div className="bg-black border border-white/10 p-4">
                  <h3
                    className="mb-3"
                    style={{ fontFamily: FONTS.heading, fontSize: '18px', letterSpacing: '1px' }}
                  >
                    Datos del Pagador
                  </h3>
                  <div className="space-y-1 text-white/70" style={{ fontFamily: FONTS.body, fontSize: '14px' }}>
                    <p>
                      <span className="text-white/50">Identificación:</span> {watch('identificationType')}{' '}
                      {watch('identification')}
                    </p>
                    <p>
                      <span className="text-white/50">Nombre:</span> {watch('name')}
                    </p>
                    <p>
                      <span className="text-white/50">Email:</span> {watch('email')}
                    </p>
                  </div>
                </div>

                {/* Bank Selection */}
                <div>
                  <Label className="text-white/80 mb-3 block" style={{ fontFamily: FONTS.heading, fontSize: '18px', letterSpacing: '1px' }}>
                    <Building2 className="w-5 h-5 inline mr-2" aria-hidden="true" />
                    Seleccione su Banco
                  </Label>
                  <RadioGroup
                    value={selectedBank}
                    onValueChange={setSelectedBank}
                    className="space-y-2 max-h-64 overflow-y-auto"
                    aria-label="Lista de bancos disponibles"
                  >
                    {COLOMBIAN_BANKS.map((bank) => (
                      <div
                        key={`bank-${bank}`}
                        className={`flex items-center space-x-3 border p-3 cursor-pointer transition-colors ${selectedBank === bank
                          ? 'border-[#D30000] bg-[#D30000]/10'
                          : 'border-white/10 hover:border-white/30'
                          }`}
                      >
                        <RadioGroupItem value={bank} id={bank} className="border-white/40" />
                        <Label
                          htmlFor={bank}
                          className="text-white flex-1 cursor-pointer"
                          style={{ fontFamily: FONTS.body, fontSize: '14px' }}
                        >
                          {bank}
                        </Label>
                        {selectedBank === bank && <Check className="w-4 h-4" style={{ color: COLORS.primary }} aria-hidden="true" />}
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleBankSelection}
                  className="w-full text-white py-6"
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '18px',
                    letterSpacing: '1px',
                    borderRadius: '0',
                    background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
                  }}
                >
                  Pagar con PSE
                </Button>
              </div>
            </>
          )}

          {/* Step 3: PSE Mockup */}
          {step === 'pse' && (
            <>
              <DialogHeader>
                <DialogTitle
                  className="text-white text-center"
                  style={{ fontFamily: FONTS.heading, fontSize: '28px', letterSpacing: '1px' }}
                >
                  Redirigiendo a PSE
                </DialogTitle>
                <DialogDescription className="text-white/70 text-center" style={{ fontFamily: FONTS.body }}>
                  Simulación de redirección a Pagos Seguros en Línea
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* PSE Logo Mockup */}
                <div className="bg-white p-6 text-center">
                  <div
                    className="text-[#003DA5]"
                    style={{ fontFamily: FONTS.heading, fontSize: '48px', letterSpacing: '2px' }}
                  >
                    PSE
                  </div>
                  <p className="text-[#003DA5]" style={{ fontFamily: FONTS.body, fontSize: '12px' }}>
                    Pagos Seguros en Línea
                  </p>
                </div>

                <div className="bg-black border p-4 space-y-3" style={{ borderColor: `${COLORS.primary}4D` }}>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/70" style={{ fontFamily: FONTS.body, fontSize: '14px' }}>
                      Banco seleccionado:
                    </span>
                    <span className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '18px' }}>
                      {selectedBank}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/70" style={{ fontFamily: FONTS.body, fontSize: '14px' }}>
                      Monto a pagar:
                    </span>
                    <span style={{ fontFamily: FONTS.heading, fontSize: '24px', color: COLORS.primary }}>
                      {formatCurrency(totalAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70" style={{ fontFamily: FONTS.body, fontSize: '14px' }}>
                      Beneficiario:
                    </span>
                    <span className="text-white" style={{ fontFamily: FONTS.body, fontSize: '14px' }}>
                      Academia Caucana Taekwondo ITF
                    </span>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 p-4">
                  <p
                    className="text-blue-300 text-center"
                    style={{ fontFamily: FONTS.body, fontSize: '13px', lineHeight: '1.6' }}
                  >
                    <strong>Modo Demo:</strong> En producción, esta ventana redirigiría al portal seguro de su banco para
                    completar la transacción.
                  </p>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={handlePaymentSuccess}
                    disabled={isLoading}
                    className="w-full text-white py-6"
                    style={{
                      fontFamily: FONTS.heading,
                      fontSize: '18px',
                      letterSpacing: '1px',
                      borderRadius: '0',
                      backgroundColor: isLoading ? '#4ade80' : '#16a34a',
                    }}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                        Procesando...
                      </>
                    ) : (
                      'Simular Pago Exitoso'
                    )}
                  </Button>
                  <Button
                    onClick={() => setStep('summary')}
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    style={{ fontFamily: FONTS.heading, fontSize: '16px', letterSpacing: '1px', borderRadius: '0' }}
                  >
                    Volver
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
