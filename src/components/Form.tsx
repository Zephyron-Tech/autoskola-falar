"use client";

import { useState, useEffect } from "react";
import { DownloadButton } from "./DownloadButton";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Auto-fill course from URL parameter
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.split('?')[1]);
      const courseParam = params.get('course');
      
      if (courseParam) {
        setFormData(prev => ({
          ...prev,
          course: courseParam
        }));
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', course: '', message: '' });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // Log the error for debugging and retain user-facing error state
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Přihlášení do kurzu
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-3 sm:mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Stáhněte si potřebné dokumenty pro registraci do kurzu.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="bg-gray-50 rounded-xl p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {/* Přihláška do autoškoly */}
              <div className="flex-1 max-w-md">
                <DownloadButton
                  fileUrl="/documents/prihlaska_do_autoskoly.pdf"
                  fileName="prihlaska_do_autoskoly.pdf"
                  label="Přihláška do autoškoly"
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                  className="w-full"
                />
              </div>

              {/* Lékařský posudek */}
              <div className="flex-1 max-w-md">
                <DownloadButton
                  fileUrl="/documents/lekarsky_posudek.pdf"
                  fileName="lekarsky_posudek.pdf"
                  label="Lékařský posudek"
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                  className="w-full"
                />
              </div>
            </div>

            <p className="text-sm text-gray-600 text-center mt-8">
              Po vyplnění dokumentů nás kontaktujte telefonicky nebo e-mailem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
