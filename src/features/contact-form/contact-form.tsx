'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})
type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const send = useMutation(async (data: FormValues) => {
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  })

  return (
    <form
      onSubmit={handleSubmit((d) => send.mutate(d))}
      className="grid gap-4 max-w-lg"
    >
      <input placeholder="Name" {...register('name')} />
      {errors.name && <span>{errors.name.message}</span>}

      <input placeholder="Email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <textarea rows={4} placeholder="Message" {...register('message')} />
      {errors.message && <span>{errors.message.message}</span>}

      <Button disabled={send.isPending}>Send</Button>
      {send.isSuccess && <p>Thank you! We’ll reply soon.</p>}
    </form>
  )
}
