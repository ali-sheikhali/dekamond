"use client";
import React, { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { loginUser } from "../lib/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from "./AuthPage.module.scss"
export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const validatePhone = (phone: string) => {
    return /^09\d{9}$/.test(phone);
  };

  const enterHandleClick = async () => {
    if (!validatePhone(phone)) {
      toast.error("موبایل معتبر نیست.");
      return;
    }

    const success = await loginUser(phone);
    if (success) {
      router.push("/dashboard");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Login</h1>
        <div className={styles.form}>
          <Input
            placeholder="رمز عبور"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button text="ورود" onClick={enterHandleClick} />
        </div>
      </div>
    </div>
  );
}
