import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../services/auth';
import configData from '../../config.json';

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Check if user is already logged in
  const user = JSON.parse(localStorage.getItem('profile'));
  if (user?.accessToken) {
    window.location.href = configData.DASHBOARD_URL;
  }

  const LoginSchema = Yup.object().shape({
    emailId: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      emailId: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await login(values, setShowAlert, setAlertMessage);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Left Side - Form */}
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
              Welcome Back
            </h2>
            <p className="mt-2 text-base font-body text-on-surface/70">
              Sign in to continue managing your expenses
            </p>
          </div>

          {/* Alert Message */}
          {showAlert && (
            <div className="bg-error/10 border border-error/20 text-error px-4 py-3 rounded-lg font-body text-sm">
              {alertMessage}
            </div>
          )}

          {/* Login Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
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
                  placeholder="Enter your email"
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
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-surface-container border rounded-lg font-body text-on-surface placeholder-on-surface/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${
                      touched.password && errors.password ? 'border-error' : 'border-outline-variant'
                    }`}
                    placeholder="Enter your password"
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
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm font-body text-on-surface/70">
                Don't have an account?{' '}
                <RouterLink
                  to="/register"
                  className="font-semibold text-primary hover:text-primary-container transition-colors"
                >
                  Get started
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

      {/* Right Side - Illustration (Hidden on mobile) */}
      <div className="hidden lg:flex lg:flex-1 architectural-gradient items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10 text-center max-w-lg">
          <h2 className="text-5xl font-headline font-extrabold text-white mb-6 tracking-tight">
            Welcome to Ledger
          </h2>
          <p className="text-xl font-body text-primary-fixed-dim mb-8 leading-relaxed">
          Clarity for all your spending, shared or solo
          </p>
          
          {/* Feature List */}
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="material-symbols-outlined text-primary-fixed text-2xl">check_circle</span>
              <div>
                <h3 className="font-headline font-bold text-white mb-1">Smart Splitting</h3>
                <p className="text-sm text-primary-fixed-dim">Automatically calculate fair shares</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="material-symbols-outlined text-primary-fixed text-2xl">analytics</span>
              <div>
                <h3 className="font-headline font-bold text-white mb-1">Detailed Analytics</h3>
                <p className="text-sm text-primary-fixed-dim">Visualize spending patterns</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <span className="material-symbols-outlined text-primary-fixed text-2xl">group</span>
              <div>
                <h3 className="font-headline font-bold text-white mb-1">Group Management</h3>
                <p className="text-sm text-primary-fixed-dim">Organize expenses by project or team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
