import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '@/hooks/useAuth';
import { Bell, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { user } = useAuth();

  const getDashboardTitle = () => {
    switch (user?.role) {
      case 'admin':
      case 'super_admin':
        return 'Administrator Dashboard';
      case 'teacher':
        return 'Teacher Dashboard';
      case 'student':
        return 'Student Dashboard';
      case 'parent':
        return 'Parent Dashboard';
      default:
        return 'Dashboard';
    }
  };

  const getDashboardSubtitle = () => {
    switch (user?.role) {
      case 'admin':
      case 'super_admin':
        return "Welcome back! Here's what's happening at your school today.";
      case 'teacher':
        return 'Ready to inspire young minds? Check your classes and assignments.';
      case 'student':
        return 'Track your progress and stay on top of your studies.';
      case 'parent':
        return "Stay connected with your child's educational journey.";
      default:
        return 'Welcome to SchoolPro';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 lg:ml-64">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold mb-2">{getDashboardTitle()}</h1>
                <p className="text-blue-100 opacity-90">{getDashboardSubtitle()}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Bell className="h-5 w-5" />
                  </Button>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <div className="relative">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Mail className="h-5 w-5" />
                  </Button>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    7
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
