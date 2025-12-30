"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from '@/components/ui/card'
import { useSearchParams } from 'next/navigation'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import { motion } from "framer-motion"  // ← هنا

const formSchema = z.object({
  email: z.string().email('Invalid email').nonempty('Email is required'),
  password: z.string().nonempty('Password is required').min(8, 'Password must be at least 8 characters'),
})

type FormFields = z.infer<typeof formSchema>

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: FormFields) {
    setIsLoading(true)
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/products',
      redirect: true
    })
    setIsLoading(false)
  }

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}       // البداية: شفاف ومتحرك للأعلى
        animate={{ opacity: 1, y: 0 }}        // النهاية: ظاهر بمكانه
        transition={{ duration: 0.7, ease: "easeOut" }}  // مدة ونعومة الحركة
        className="w-full max-w-md"
      >
        <Card className="overflow-hidden rounded-3xl shadow-2xl">
          {/* Card Header */}
          <div className="bg-gray-900 text-white text-center py-6">
            <h1 className="text-3xl font-extrabold tracking-wide">Login</h1>
          </div>

          <div className="p-8 bg-white">
            <Form {...form}>
              {searchParams.get('error') && (
                <p className="text-red-500 text-center mb-4 font-medium">
                  {searchParams.get('error')}
                </p>
              )}

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
                          {...field}
                          className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                          className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Forgot Password */}
                <div className="text-left">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-lg flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg transition-all"
                >
                  {isLoading && <Loader className="animate-spin w-5 h-5" />}
                  Login
                </Button>
              </form>

              {/* Register */}
              <p className="text-center mt-6 text-gray-700 text-sm">
                Don&lsquo;t have an account?{" "}
                <Link href="/register" className="text-blue-600 hover:underline font-medium">
                  Register
                </Link>
              </p>
            </Form>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
