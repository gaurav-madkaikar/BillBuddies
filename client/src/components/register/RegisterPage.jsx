import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../services/auth';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string(),
    emailId: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password should be 8 characters minimum'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailId: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await register(values, setShowAlert, setAlertMessage);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Left Side - Illustration (Hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-1 architectural-gradient items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10 text-center max-w-lg">
          <h2 className="text-5xl font-headline font-extrabold text-white mb-6 tracking-tight">
            Why Ledger?
          </h2>
          <p className="text-xl font-body text-primary-fixed-dim mb-12 leading-relaxed">
            Track, split, and settle group expenses effectively
            Join now to know more!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-headline font-extrabold text-primary-fixed mb-2">10K+</p>
              <p className="text-sm font-body text-primary-fixed-dim">Active Users</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-headline font-extrabold text-primary-fixed mb-2">$2M+</p>
              <p className="text-sm font-body text-primary-fixed-dim">Tracked</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-4xl font-headline font-extrabold text-primary-fixed mb-2">99%</p>
              <p className="text-sm font-body text-primary-fixed-dim">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Logo and Header */}
          <div>
            <h1 className="text-4xl font-headline font-extrabold tracking-tighter text-primary">
              Ledger
            </h1>
            <p className="mt-2 text-sm font-body text-on-surface/60">
            Split smarter, track better
            </p>
          </div>

          {/* Welcome Message */}
          <div className="mt-8">
            <h2 className="text-3xl font-headline font-bold text-on-surface">
              Get Started
            </h2>
            <p className="mt-2 text-base font-body text-on-surface/70">
              Create your account and start managing expenses
            </p>
          </div>

          {/* Alert Message */}
          {showAlert && (
            <div className="bg-error/10 border border-error/20 text-error px-4 py-3 rounded-lg font-body text-sm">
              {alertMessage}
            </div>
          )}

          {/* Register Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-label font-medium text-on-surface mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-surface-container border rounded-lg font-body text-on-surface placeholder-on-surface/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                      touched.firstName && errors.firstName ? 'border-error' : 'border-outline-variant'
                    }`}
                    placeholder="John"
                  />
                  {touched.firstName && errors.firstName && (
                    <p className="mt-1 text-sm text-error font-body">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-label font-medium text-on-surface mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-surface-container border border-outline-variant rounded-lg font-body text-on-surface placeholder-on-surface/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="emailId" className="block text-sm font-label font-medium text-on-surface mb-2">
                  Email Address
                </label>
                <input
                  id="emailId"
                  name="emailId"
                  type="email"
                  autoComplete="email"
                  value={values.emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-surface-container border rounded-lg font-body text-on-surface placeholder-on-surface/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                    touched.emailId && errors.emailId ? 'border-error' : 'border-outline-variant'
                  }`}
                  placeholder="john.doe@example.com"
                />
                {touched.emailId && errors.emailId && (
                  <p className="mt-1 text-sm text-error font-body">{errors.emailId}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-label font-medium text-on-surface mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-surface-container border rounded-lg font-body text-on-surface placeholder-on-surface/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                      touched.password && errors.password ? 'border-error' : 'border-outline-variant'
                    }`}
                    placeholder="Minimum 8 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface/60 hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
                {touched.password && errors.password && (
                  <p className="mt-1 text-sm text-error font-body">{errors.password}</p>
                )}
                <p className="mt-2 text-xs font-body text-on-surface/50">
                  Must be at least 8 characters long
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full architectural-gradient text-white py-3 px-4 rounded-lg font-headline font-bold text-base shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm font-body text-on-surface/70">
                Already have an account?{' '}
                <RouterLink
                  to="/"
                  className="font-semibold text-primary hover:text-primary-container transition-colors"
                >
                  Sign in
                </RouterLink>
              </p>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-8 border-t border-outline-variant">
            <p className="text-center text-xs font-body text-on-surface/50">
              © 2026 Ledger. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
