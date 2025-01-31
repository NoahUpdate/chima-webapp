import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptPolicy: false
  })

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    acceptPolicy: false
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      phone: !formData.phone,
      acceptPolicy: !formData.acceptPolicy
    }

    setErrors(newErrors)

    if (!Object.values(newErrors).some((error) => error)) {
      // Enviar formulario
      console.log('Formulario enviado:', formData)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

        // Acceder a checked solo si es un checkbox
        const newValue = type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked // Type assertion
        : value;

    setFormData((prev) => ({
        ...prev,
        [name]: newValue
    }));

    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className=" p-6 max-sm:mb-2.5 mb-4.5 lg:mb-10 bg-white rounded-lg ">
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Tu nombre*
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 py-1.5 px-3 block w-full rounded-md border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
          />
        </label>
        {errors.name && <p className="text-red-500 text-xs mt-1">El campo es obligatorio.</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Tu correo electrónico*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 py-1.5 px-3 block w-full rounded-md border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
          />
        </label>
        {errors.email && <p className="text-red-500 text-xs mt-1">El campo es obligatorio.</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Teléfono*
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 py-1.5 px-3 block w-full rounded-md border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
          />
        </label>
        {errors.phone && <p className="text-red-500 text-xs mt-1">El campo es obligatorio.</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Tu mensaje
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 py-1.5 px-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12.5"
          />
        </label>
      </div>

      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="acceptPolicy"
            checked={formData.acceptPolicy}
            onChange={handleChange}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Acepto política de tratamiento de datos</span>
        </label>
        {errors.acceptPolicy && <p className="text-red-500 text-xs mt-1">Debes aceptar la política</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-pink text-white py-2 px-4 rounded-md hover:bg-black transition-colors duration-200"
      >
        Enviar
      </button>
    </form>
  )
}
