import React, { useState, useEffect } from 'react';
import { BarChart3, Users, CheckSquare, FolderOpen, Calendar, Plus, Filter, Search, Bell, Settings, Star, TrendingUp, Award, Zap, Globe, Target, Menu, X, ChevronRight, Clock, Activity } from 'lucide-react';

const ProjectManagementWireframes = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const projects = [
    { id: 1, name: 'تطوير تطبيق الجوال', status: 'قيد التنفيذ', progress: 75, team: 5, tasks: 23, completed: 17, priority: 'عالي', deadline: '2025-07-15' },
    { id: 2, name: 'موقع الشركة الجديد', status: 'مكتمل', progress: 100, team: 3, tasks: 15, completed: 15, priority: 'متوسط', deadline: '2025-06-01' },
    { id: 3, name: 'نظام إدارة المخزون', status: 'قيد التنفيذ', progress: 45, team: 4, tasks: 30, completed: 13, priority: 'عالي', deadline: '2025-08-20' },
    { id: 4, name: 'منصة التجارة الإلكترونية', status: 'قيد التنفيذ', progress: 62, team: 6, tasks: 28, completed: 17, priority: 'متوسط', deadline: '2025-09-10' }
  ];
  
  const employees = [
    { id: 1, name: 'أحمد محمد', role: 'مطور واجهات أمامية', tasksCompleted: 23, tasksInProgress: 5, performance: 92, efficiency: 88 },
    { id: 2, name: 'سارة أحمد', role: 'مصممة تجربة المستخدم', tasksCompleted: 18, tasksInProgress: 3, performance: 88, efficiency: 91 },
    { id: 3, name: 'محمد علي', role: 'مطور خلفية', tasksCompleted: 31, tasksInProgress: 7, performance: 95, efficiency: 89 },
    { id: 4, name: 'فاطمة حسن', role: 'مديرة المشاريع', tasksCompleted: 15, tasksInProgress: 4, performance: 89, efficiency: 94 }
  ];
  
  const tasks = [
    { id: 1, title: 'تصميم واجهة تسجيل الدخول', project: 'تطوير تطبيق الجوال', assignee: 'سارة أحمد', status: 'مكتمل', priority: 'عالي', dueDate: '2025-06-15', progress: 100 },
    { id: 2, title: 'تطوير API للمستخدمين', project: 'تطوير تطبيق الجوال', assignee: 'محمد علي', status: 'قيد التنفيذ', priority: 'عالي', dueDate: '2025-06-18', progress: 70 },
    { id: 3, title: 'اختبار الأداء والجودة', project: 'موقع الشركة الجديد', assignee: 'أحمد محمد', status: 'مكتمل', priority: 'متوسط', dueDate: '2025-06-10', progress: 100 },
    { id: 4, title: 'تحسين قاعدة البيانات', project: 'نظام إدارة المخزون', assignee: 'محمد علي', status: 'قيد التنفيذ', priority: 'عالي', dueDate: '2025-06-20', progress: 45 }
  ];

  const Navigation = () => (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900">إدارة المشاريع</h1>
              <p className="text-xs text-slate-500">نظام إدارة متطور</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { key: 'dashboard', icon: BarChart3, label: 'لوحة التحكم' },
              { key: 'tasks', icon: CheckSquare, label: 'المهام' },
              { key: 'projects', icon: FolderOpen, label: 'المشاريع' },
              { key: 'employees', icon: Users, label: 'الفريق' }
            ].map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setActiveScreen(key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeScreen === key 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <button className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors">
                <Settings size={20} />
              </button>
            </div>
            
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-sm font-bold cursor-pointer">
              ت
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="grid grid-cols-2 gap-2">
              {[
                { key: 'dashboard', icon: BarChart3, label: 'لوحة التحكم' },
                { key: 'tasks', icon: CheckSquare, label: 'المهام' },
                { key: 'projects', icon: FolderOpen, label: 'المشاريع' },
                { key: 'employees', icon: Users, label: 'الفريق' }
              ].map(({ key, icon: Icon, label }) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveScreen(key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeScreen === key 
                      ? 'bg-slate-900 text-white' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const AnimatedCard = ({ children, className = "", delay = 0 }) => (
    <div 
      className={`transform transition-all duration-500 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  const StatCard = ({ title, value, icon: Icon, trend, trendValue, delay = 0 }) => (
    <AnimatedCard delay={delay}>
      <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
            <Icon className="w-6 h-6 text-slate-700" />
          </div>
          <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
            trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
          }`}>
            <TrendingUp size={12} />
            <span>{trendValue}</span>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">{value}</h3>
          <p className="text-sm text-slate-600">{title}</p>
        </div>
      </div>
    </AnimatedCard>
  );

  const Dashboard = () => (
    <div className="space-y-6 lg:space-y-8">
      {/* Welcome Section */}
      <AnimatedCard>
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 lg:p-8 rounded-xl text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">مرحباً بك في لوحة التحكم</h2>
              <p className="text-slate-300 text-sm lg:text-base">تتبع وإدارة جميع مشاريعك وفريقك بكفاءة عالية</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                تقرير شامل
              </button>
              <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                مشروع جديد
              </button>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard 
          title="إجمالي المشاريع" 
          value="12" 
          icon={FolderOpen} 
          trend="up" 
          trendValue="+15%" 
          delay={100}
        />
        <StatCard 
          title="المهام المكتملة" 
          value="87" 
          icon={CheckSquare} 
          trend="up" 
          trendValue="+8%" 
          delay={200}
        />
        <StatCard 
          title="أعضاء الفريق" 
          value="24" 
          icon={Users} 
          trend="up" 
          trendValue="+12%" 
          delay={300}
        />
        <StatCard 
          title="معدل الإنجاز" 
          value="89%" 
          icon={TrendingUp} 
          trend="up" 
          trendValue="+5%" 
          delay={400}
        />
      </div>

      {/* Projects Overview */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Active Projects */}
        <div className="xl:col-span-2">
          <AnimatedCard delay={500}>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">المشاريع النشطة</h3>
                  <button className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1">
                    عرض الكل
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {projects.slice(0, 3).map((project, index) => (
                  <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 mb-1">{project.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Users size={14} />
                            {project.team} أشخاص
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {project.deadline}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-slate-900">{project.progress}%</div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'مكتمل' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-slate-900 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${project.progress}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Quick Actions & Info */}
        <div className="space-y-6">
          <AnimatedCard delay={600}>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">إجراءات سريعة</h3>
              <div className="space-y-3">
                <button className="w-full bg-slate-900 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">
                  إنشاء مشروع جديد
                </button>
                <button className="w-full border border-gray-300 text-slate-700 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  إضافة عضو جديد
                </button>
                <button className="w-full border border-gray-300 text-slate-700 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                  تصدير التقارير
                </button>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={700}>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">إحصائيات سريعة</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">المهام هذا الأسبوع</span>
                  <span className="font-semibold text-slate-900">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">متوسط الإنجاز</span>
                  <span className="font-semibold text-slate-900">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">المشاريع المتأخرة</span>
                  <span className="font-semibold text-red-600">2</span>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );

  const TasksScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <AnimatedCard>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">إدارة المهام</h2>
            <p className="text-slate-600 text-sm">تنظيم وتتبع جميع مهام المشاريع</p>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors text-sm font-medium">
            <Plus size={18} />
            مهمة جديدة
          </button>
        </div>
      </AnimatedCard>

      {/* Filters */}
      <AnimatedCard delay={200}>
        <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="البحث في المهام..." 
                className="w-full pr-10 pl-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex gap-3">
              <select className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none min-w-[120px]">
                <option>كل المشاريع</option>
                <option>تطوير تطبيق الجوال</option>
                <option>موقع الشركة</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none min-w-[100px]">
                <option>كل الحالات</option>
                <option>قيد التنفيذ</option>
                <option>مكتمل</option>
              </select>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Tasks List */}
      <AnimatedCard delay={400}>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-slate-900">المهام النشطة ({tasks.length})</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {tasks.map((task, index) => (
              <div key={task.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${
                        task.status === 'مكتمل' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <h4 className="font-medium text-slate-900">{task.title}</h4>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 mb-3">
                      <span className="flex items-center gap-1">
                        <FolderOpen size={14} />
                        {task.project}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {task.assignee}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {task.dueDate}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-slate-900 h-2 rounded-full transition-all duration-500"
                        style={{width: `${task.progress}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.priority === 'عالي' ? 'bg-red-100 text-red-700' : 
                      task.priority === 'متوسط' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-green-100 text-green-700'
                    }`}>
                      {task.priority}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.status === 'مكتمل' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {task.status}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-900">{task.progress}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedCard>
    </div>
  );

  const ProjectsScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <AnimatedCard>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">إدارة المشاريع</h2>
            <p className="text-slate-600 text-sm">متابعة جميع المشاريع الحالية والمكتملة</p>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors text-sm font-medium">
            <Plus size={18} />
            مشروع جديد
          </button>
        </div>
      </AnimatedCard>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <AnimatedCard key={project.id} delay={index * 150}>
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <FolderOpen className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">{project.name}</h3>
                    <p className="text-xs text-slate-500">المشروع #{project.id}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'مكتمل' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">نسبة الإنجاز</span>
                  <span className="font-semibold text-slate-900">{project.progress}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-slate-900 h-2 rounded-full transition-all duration-1000"
                    style={{width: `${project.progress}%`}}
                  ></div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{project.team}</div>
                    <div className="text-xs text-slate-500">أعضاء الفريق</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{project.completed}</div>
                    <div className="text-xs text-slate-500">مهام مكتملة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">{project.tasks - project.completed}</div>
                    <div className="text-xs text-slate-500">مهام متبقية</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                  عرض التفاصيل
                </button>
                <button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Settings size={16} />
                </button>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );

  const EmployeesScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <AnimatedCard>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">إدارة الفريق</h2>
            <p className="text-slate-600 text-sm">متابعة أداء وإنتاجية أعضاء الفريق</p>
          </div>
          <div className="flex gap-3">
            <select className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none">
              <option>آخر 30 يوم</option>
              <option>آخر 3 أشهر</option>
              <option>آخر 6 أشهر</option>
            </select>
          </div>
        </div>
      </AnimatedCard>

      {/* Team Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard title="إجمالي الأعضاء" value="24" icon={Users} trend="up" trendValue="+2" delay={100} />
        <StatCard title="متوسط الأداء" value="91%" icon={TrendingUp} trend="up" trendValue="+3%" delay={200} />
        <StatCard title="مهام هذا الشهر" value="156" icon={CheckSquare} trend="up" trendValue="+12%" delay={300} />
        <StatCard title="معدل الكفاءة" value="88%" icon={Activity} trend="up" trendValue="+5%" delay={400} />
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employees.map((employee, index) => (
          <AnimatedCard key={employee.id} delay={index * 100 + 500}>
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl group-hover:bg-slate-800 transition-colors">
                  {employee.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{employee.name}</h3>
                <p className="text-sm text-slate-600">{employee.role}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-slate-600">المهام المكتملة</span>
                  <span className="font-bold text-green-600">{employee.tasksCompleted}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-slate-600">قيد التنفيذ</span>
                  <span className="font-bold text-blue-600">{employee.tasksInProgress}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm text-slate-600">معدل الأداء</span>
                  <span className="font-bold text-slate-900">{employee.performance}%</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                عرض التفاصيل
              </button>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Performance Overview */}
      <AnimatedCard delay={900}>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">نظرة عامة على الأداء</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 size={48} className="mx-auto mb-4 text-slate-400" />
              <h4 className="text-lg font-medium text-slate-700 mb-2">مخطط الأداء التفاعلي</h4>
              <p className="text-sm text-slate-500">عرض تفصيلي لإنتاجية الفريق خلال الفترة المحددة</p>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );

  const renderScreen = () => {
    switch(activeScreen) {
      case 'dashboard': return <Dashboard />;
      case 'tasks': return <TasksScreen />;
      case 'projects': return <ProjectsScreen />;
      case 'employees': return <EmployeesScreen />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {renderScreen()}
      </main>
    </div>
  );
};

export default ProjectManagementWireframes;