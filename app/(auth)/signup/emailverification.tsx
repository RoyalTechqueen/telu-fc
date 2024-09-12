// pages/email-verification.tsx
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const EmailVerificationPage: React.FC = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <div className="bg-yellow-100 min-h-screen pt-8 flex flex-col items-center">
      <div className="w-[90%] max-w-[400px] mx-auto p-6 border border-gray-200 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Verify Your Email
        </h2>
        <p className="text-center mb-4">
          We have sent an email to <strong>{email}</strong>. Click on the link
          in your inbox to continue with the account creation process.
        </p>
        <p className="text-center">
          If you don&apos;t see the email, please check your spam folder or{" "}
          <Link href="/signup" className="text-orange-400 font-medium">
            try signing up again
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
