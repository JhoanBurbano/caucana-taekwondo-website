import { useState } from 'react';
import { CreditCard, ArrowLeft, Building2, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const colombianBanks = [
  'Bancolombia',
  'Banco de Bogotá',
  'Davivienda',
  'BBVA Colombia',
  'Banco de Occidente',
  'Banco Popular',
  'Banco AV Villas',
  'Banco Caja Social',
  'Colpatria',
  'Itaú',
  'Scotiabank Colpatria',
  'Banco Agrario',
  'Banco Falabella',
  'Nequi',
  'Daviplata',
];

type PaymentStep = 'identification' | 'summary' | 'pse';

export function FloatingPaymentButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<PaymentStep>('identification');
  const [formData, setFormData] = useState({
    identificationType: 'CC',
    identification: '',
    name: '',
    email: '',
    phone: '',
    selectedBank: '',
  });

  const paymentConcepts = [
    { concept: 'Mensualidad Taekwondo ITF', amount: 120000 },
    { concept: 'Seguro deportivo', amount: 15000 },
  ];

  const totalAmount = paymentConcepts.reduce((sum, item) => sum + item.amount, 0);

  const handleIdentificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('summary');
  };

  const handleBankSelection = () => {
    if (!formData.selectedBank) {
      alert('Por favor seleccione un banco');
      return;
    }
    setStep('pse');
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep('identification');
      setFormData({
        identificationType: 'CC',
        identification: '',
        name: '',
        email: '',
        phone: '',
        selectedBank: '',
      });
    }, 300);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#C00000] to-[#FF0000] hover:from-[#FF0000] hover:to-[#C00000] text-white px-6 py-4 shadow-lg shadow-red-900/50 hover:shadow-red-900/80 transition-all duration-300 z-40 flex items-center gap-2 group"
        style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px' }}
      >
        <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span>Pagar Mensualidad</span>
      </button>

      {/* Payment Dialog */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="bg-[#1A1A1A] border-2 border-[#D30000] text-white sm:max-w-lg">
          {/* Step 1: Identification */}
          {step === 'identification' && (
            <>
              <DialogHeader>
                <DialogTitle
                  className="text-white"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '1px' }}
                >
                  Pago PSE - Datos del Pagador
                </DialogTitle>
                <DialogDescription className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Ingrese su información para continuar con el pago
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleIdentificationSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <Label htmlFor="idType" className="text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Tipo ID
                    </Label>
                    <Select
                      value={formData.identificationType}
                      onValueChange={(value) => setFormData({ ...formData, identificationType: value })}
                    >
                      <SelectTrigger className="bg-black border-white/20 text-white mt-1" style={{ borderRadius: '0' }}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1A] border-white/20 text-white">
                        <SelectItem value="CC">CC</SelectItem>
                        <SelectItem value="CE">CE</SelectItem>
                        <SelectItem value="NIT">NIT</SelectItem>
                        <SelectItem value="TI">TI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-2">
                    <Label htmlFor="identification" className="text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Número de Identificación
                    </Label>
                    <Input
                      id="identification"
                      type="text"
                      value={formData.identification}
                      onChange={(e) => setFormData({ ...formData, identification: e.target.value })}
                      className="bg-black border-white/20 text-white mt-1"
                      style={{ fontFamily: 'Inter, sans-serif', borderRadius: '0' }}
                      placeholder="1234567890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="name" className="text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Nombre Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-white/20 text-white mt-1"
                    style={{ fontFamily: 'Inter, sans-serif', borderRadius: '0' }}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black border-white/20 text-white mt-1"
                    style={{ fontFamily: 'Inter, sans-serif', borderRadius: '0' }}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-black border-white/20 text-white mt-1"
                    style={{ fontFamily: 'Inter, sans-serif', borderRadius: '0' }}
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C00000] to-[#FF0000] hover:from-[#FF0000] hover:to-[#C00000] text-white py-6"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px', borderRadius: '0' }}
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
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <DialogTitle
                  className="text-white"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '1px' }}
                >
                  Resumen de Pago
                </DialogTitle>
                <DialogDescription className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Verifique los detalles y seleccione su banco
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                {/* Payment Summary */}
                <div className="bg-black border border-[#D30000]/30 p-4">
                  <h3
                    className="text-[#D30000] mb-3"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px' }}
                  >
                    Conceptos de Pago
                  </h3>
                  <div className="space-y-2">
                    {paymentConcepts.map((item, index) => (
                      <div key={index} className="flex justify-between text-white/80" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                        <span>{item.concept}</span>
                        <span>{formatCurrency(item.amount)}</span>
                      </div>
                    ))}
                    <div className="border-t border-white/20 pt-2 mt-2 flex justify-between text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px' }}>
                      <span>Total</span>
                      <span className="text-[#D30000]">{formatCurrency(totalAmount)}</span>
                    </div>
                  </div>
                </div>

                {/* Payer Info */}
                <div className="bg-black border border-white/10 p-4">
                  <h3
                    className="text-white mb-3"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px' }}
                  >
                    Datos del Pagador
                  </h3>
                  <div className="space-y-1 text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                    <p><span className="text-white/50">Identificación:</span> {formData.identificationType} {formData.identification}</p>
                    <p><span className="text-white/50">Nombre:</span> {formData.name}</p>
                    <p><span className="text-white/50">Email:</span> {formData.email}</p>
                  </div>
                </div>

                {/* Bank Selection */}
                <div>
                  <Label className="text-white/80 mb-3 block" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px' }}>
                    <Building2 className="w-5 h-5 inline mr-2" />
                    Seleccione su Banco
                  </Label>
                  <RadioGroup
                    value={formData.selectedBank}
                    onValueChange={(value) => setFormData({ ...formData, selectedBank: value })}
                    className="space-y-2 max-h-64 overflow-y-auto"
                  >
                    {colombianBanks.map((bank) => (
                      <div
                        key={bank}
                        className={`flex items-center space-x-3 border p-3 cursor-pointer transition-colors ${
                          formData.selectedBank === bank
                            ? 'border-[#D30000] bg-[#D30000]/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <RadioGroupItem value={bank} id={bank} className="border-white/40" />
                        <Label
                          htmlFor={bank}
                          className="text-white flex-1 cursor-pointer"
                          style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                        >
                          {bank}
                        </Label>
                        {formData.selectedBank === bank && <Check className="w-4 h-4 text-[#D30000]" />}
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleBankSelection}
                  className="w-full bg-gradient-to-r from-[#C00000] to-[#FF0000] hover:from-[#FF0000] hover:to-[#C00000] text-white py-6"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px', borderRadius: '0' }}
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
                  style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', letterSpacing: '1px' }}
                >
                  Redirigiendo a PSE
                </DialogTitle>
                <DialogDescription className="text-white/70 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Simulación de redirección a Pagos Seguros en Línea
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* PSE Logo Mockup */}
                <div className="bg-white p-6 text-center">
                  <div
                    className="text-[#003DA5]"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '48px', letterSpacing: '2px' }}
                  >
                    PSE
                  </div>
                  <p className="text-[#003DA5]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
                    Pagos Seguros en Línea
                  </p>
                </div>

                <div className="bg-black border border-[#D30000]/30 p-4 space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                      Banco seleccionado:
                    </span>
                    <span className="text-white" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px' }}>
                      {formData.selectedBank}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                      Monto a pagar:
                    </span>
                    <span className="text-[#D30000]" style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '24px' }}>
                      {formatCurrency(totalAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                      Beneficiario:
                    </span>
                    <span className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                      Academia Caucana Taekwondo ITF
                    </span>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 p-4">
                  <p className="text-blue-300 text-center" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: '1.6' }}>
                    <strong>Modo Demo:</strong> En producción, esta ventana redigiría al portal seguro de su banco para completar la transacción.
                  </p>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={() => {
                      alert('¡Pago simulado exitosamente!\n\nReferencia: PSE-' + Math.random().toString(36).substring(7).toUpperCase());
                      handleClose();
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '18px', letterSpacing: '1px', borderRadius: '0' }}
                  >
                    Simular Pago Exitoso
                  </Button>
                  <Button
                    onClick={() => setStep('summary')}
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '16px', letterSpacing: '1px', borderRadius: '0' }}
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
