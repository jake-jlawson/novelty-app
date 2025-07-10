/**
 * Main Page - Redirects to Generation
 * 
 * This page automatically redirects users from /main to /main/generation
 */

import { redirect } from 'next/navigation';

export default function MainPage() {
  redirect('/main/generation');
} 