"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";

const formSchema = z.object({
  resetCode: z.string().nonempty("Reset code is required"),
});

type FormFields = z.infer<typeof formSchema>;

export default function VerifyResetCode() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: { resetCode: "" },
  });

  async function onSubmit(values: FormFields) {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resetCode: values.resetCode }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Code verified successfully");
        router.push("/reset-password");
      } else {
        toast.error(data.message || "Invalid reset code");
      }
    } catch (err: unknown) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="rounded-3xl shadow-2xl overflow-hidden p-6">

          <h1 className="text-3xl font-extrabold text-center mb-6">
            Verify Reset Code
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              <FormField
                control={form.control}
                name="resetCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reset Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter reset code" {...field} />
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
                Verify Code
              </Button>

              <p className="text-center mt-4 text-gray-700 text-sm">
                Didn’t receive a code?{" "}
                <span
                  onClick={() => router.push("/forgot-password")}
                  className="text-blue-600 font-medium cursor-pointer hover:underline"
                >
                  Resend
                </span>
              </p>

            </form>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
}
