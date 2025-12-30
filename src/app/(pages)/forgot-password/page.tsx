"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

/* ---------------- Schema ---------------- */
const formSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
});

type FormFields = z.infer<typeof formSchema>;

/* ---------------- Component ---------------- */
export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  /* ---------------- Submit ---------------- */
  async function onSubmit(values: FormFields) {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: values.email }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Reset code sent to your email!");
        localStorage.setItem("resetEmail", values.email);
        router.push("/verify-reset-code");
      } else {
        toast.error(data.message || "Failed to send reset code");
      }
    } catch (err: unknown) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="rounded-3xl shadow-2xl overflow-hidden relative p-6">

          <h1 className="text-3xl font-extrabold text-center mb-6">
            Forgot Password
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full flex justify-center items-center gap-2 text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
                disabled={isLoading}
              >
                {isLoading && <Loader className="animate-spin w-5 h-5" />}
                Send Reset Code
              </Button>

              {/* -------- Links -------- */}
              <div className="text-center text-sm text-gray-700 space-y-1 mt-4">
                <p>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => router.push("/register")}
                    className="text-blue-600 cursor-pointer hover:underline font-medium"
                  >
                    Register
                  </span>
                </p>
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => router.push("/login")}
                    className="text-blue-600 cursor-pointer hover:underline font-medium"
                  >
                    Login
                  </span>
                </p>
              </div>

            </form>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
}
  