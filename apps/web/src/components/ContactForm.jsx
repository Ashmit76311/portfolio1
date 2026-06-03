import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import apiServerClient from '@/lib/apiServerClient.js';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: 'idle', message: '' });
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setSubmitStatus({ type: 'idle', message: '' });
    try {
      const response = await apiServerClient.fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus({ 
        type: 'success', 
        message: "Message sent successfully! I'll get back to you soon." 
      });
      reset();
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'An unexpected error occurred. Please try again.' 
      });
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-card-foreground mb-2">Send Message</h3>
        <p className="text-muted-foreground">Fill out the form below and I'll respond as soon as possible.</p>
      </div>

      {submitStatus.type === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start space-x-3">
          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-green-500 font-medium">{submitStatus.message}</p>
        </div>
      )}

      {submitStatus.type === 'error' && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
          <p className="text-sm text-destructive font-medium">{submitStatus.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className={`w-full bg-background border ${errors.name ? 'border-destructive' : 'border-primary/20'} rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200`}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`w-full bg-background border ${errors.email ? 'border-destructive' : 'border-primary/20'} rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
            Subject
          </label>
          <select
            id="subject"
            className={`w-full bg-background border ${errors.subject ? 'border-destructive' : 'border-primary/20'} rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 appearance-none`}
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register('subject', { required: 'Please select a subject' })}
          >
            <option value="" disabled>Select a subject</option>
            <option value="Internship">Internship</option>
            <option value="Project">Project</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && (
            <p id="subject-error" className="text-sm text-destructive mt-1">{errors.subject.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Enter your message"
            className={`w-full bg-background border ${errors.message ? 'border-destructive' : 'border-primary/20'} rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none`}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' }
            })}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-destructive mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;