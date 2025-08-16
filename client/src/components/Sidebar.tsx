import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  LayoutDashboard, Users, Building, Calendar, TrendingUp, 
  CreditCard, Bell, Star, Settings, BookOpen, Trophy,
  MessageCircle, User, CalendarDays, LogOut, GraduationCap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const navigationConfig = {
  admin: [
    { icon: LayoutDashboard, text: 'Dashboard', active: true },
    { icon: Users, text: 'User Management' },
    { icon: Building, text: 'Classes & Sections' },
    { icon: Calendar, text: 'Attendance' },
    { icon: TrendingUp, text: 'Academic Reports' },
    { icon: CreditCard, text: 'Fee Management' },
    { icon: Bell, text: 'Notifications' },
    { icon: Star, text: 'Teacher Reviews' },
    { icon: Settings, text: 'Settings' }
  ],
  teacher: [
    { icon: LayoutDashboard, text: 'Dashboard', active: true },
    { icon: Users, text: 'My Classes' },
    { icon: Calendar, text: 'Attendance' },
    { icon: BookOpen, text: 'Gradebook' },
    { icon: Trophy, text: 'Scoreboard' },
    { icon: MessageCircle, text: 'Messages' },
    { icon: Star, text: 'My Reviews' },
    { icon: User, text: 'Profile' }
  ],
  student: [
    { icon: LayoutDashboard, text: 'Dashboard', active: true },
    { icon: CalendarDays, text: 'My Schedule' },
    { icon: TrendingUp, text: 'My Grades' },
    { icon: Calendar, text: 'Attendance' },
    { icon: Trophy, text: 'Leaderboard' },
    { icon: CreditCard, text: 'Fees & Payments' },
    { icon: MessageCircle, text: 'Messages' },
    { icon: User, text: 'Profile' }
  ],
  parent: [
    { icon: LayoutDashboard, text: 'Dashboard', active: true },
    { icon: User, text: "Child's Profile" },
    { icon: TrendingUp, text: 'Academic Progress' },
    { icon: Calendar, text: 'Attendance' },
    { icon: CreditCard, text: 'Fee Payments' },
    { icon: MessageCircle, text: 'Teacher Communication' },
    { icon: Bell, text: 'Notifications' },
    { icon: Settings, text: 'Settings' }
  ]
};

export default function Sidebar() {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Logged out successfully",
        description: "See you next time!"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive"
      });
    }
  };

  const navItems = navigationConfig[user?.role as keyof typeof navigationConfig] || [];

  const getUserInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getRoleDisplay = (role: string) => {
    switch (role) {
      case 'admin':
      case 'super_admin':
        return 'Administrator';
      case 'teacher':
        return 'Teacher';
      case 'student':
        return 'Student';
      case 'parent':
        return 'Parent';
      default:
        return role;
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-600 via-purple-600 to-purple-700 text-white shadow-2xl z-50 lg:block hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">SchoolPro</h2>
            <p className="text-sm text-white/70">Greenwood High School</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start text-white hover:bg-white/20 transition-all duration-200 ${
                item.active ? 'bg-white/20 transform translate-x-1' : ''
              }`}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.text}
            </Button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-white/20 text-white">
              {user?.name ? getUserInitials(user.name) : 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {user?.name || 'Unknown User'}
            </p>
            <p className="text-xs text-white/70">
              {user?.role ? getRoleDisplay(user.role) : 'User'}
            </p>
          </div>
        </div>
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-white hover:bg-red-500/20 transition-colors"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
