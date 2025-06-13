import React, { useState, useEffect } from 'react';
import { BarChart3, Users, CheckSquare, FolderOpen, Calendar, Plus, Filter, Search, Bell, Settings, Star, TrendingUp, Award, Zap, Globe, Target, Menu, X, ChevronRight, Clock, Activity, Edit, Trash2, Eye, Download, Upload, MessageSquare, FileText, PieChart, ArrowUp, ArrowDown, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const ProjectManagementSystem = () => {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    setIsLoaded(true);
    // محاكاة تحميل الإشعارات
    setNotifications(mockData.notifications);
  }, []);

  // بيانات وهمية شاملة
  const mockData = {
    projects: [
      {
        id: 1,
        name: 'تطوير تطبيق الجوال للتسوق الإلكتروني',
        description: 'تطبيق متكامل للتسوق الإلكتروني مع إدارة المخزون والدفع الآمن',
        status: 'قيد التنفيذ',
        progress: 75,
        team: 8,
        tasks: 45,
        completed: 34,
        priority: 'عالي',
        startDate: '2025-03-01',
        deadline: '2025-07-15',
        budget: 150000,
        spent: 112500,
        client: 'شركة المستقبل للتجارة',
        manager: 'فاطمة حسن',
        category: 'تطوير تطبيقات',
        tags: ['تطبيق جوال', 'تجارة إلكترونية', 'دفع آمن']
      },
      {
        id: 2,
        name: 'موقع الشركة الجديد مع نظام إدارة المحتوى',
        description: 'موقع متجاوب مع لوحة تحكم لإدارة المحتوى والأخبار',
        status: 'مكتمل',
        progress: 100,
        team: 5,
        tasks: 28,
        completed: 28,
        priority: 'متوسط',
        startDate: '2025-01-15',
        deadline: '2025-05-01',
        budget: 75000,
        spent: 73500,
        client: 'مؤسسة الابتكار التقني',
        manager: 'أحمد محمد',
        category: 'تطوير مواقع',
        tags: ['موقع إلكتروني', 'CMS', 'متجاوب']
      },
      {
        id: 3,
        name: 'نظام إدارة المخزون والمبيعات',
        description: 'نظام شامل لإدارة المخزون وتتبع المبيعات مع تقارير تحليلية',
        status: 'قيد التنفيذ',
        progress: 45,
        team: 6,
        tasks: 52,
        completed: 23,
        priority: 'عالي',
        startDate: '2025-04-01',
        deadline: '2025-09-20',
        budget: 200000,
        spent: 90000,
        client: 'مجموعة النجاح التجارية',
        manager: 'سارة أحمد',
        category: 'أنظمة إدارية',
        tags: ['إدارة مخزون', 'مبيعات', 'تقارير']
      },
      {
        id: 4,
        name: 'منصة التعليم الإلكتروني التفاعلية',
        description: 'منصة شاملة للتعليم عن بعد مع فصول افتراضية وامتحانات',
        status: 'قيد التنفيذ',
        progress: 62,
        team: 9,
        tasks: 38,
        completed: 24,
        priority: 'عالي',
        startDate: '2025-02-15',
        deadline: '2025-08-10',
        budget: 180000,
        spent: 126000,
        client: 'جامعة المعرفة',
        manager: 'محمد علي',
        category: 'منصات تعليمية',
        tags: ['تعليم إلكتروني', 'فصول افتراضية', 'امتحانات']
      },
      {
        id: 5,
        name: 'تطبيق إدارة المهام والمشاريع',
        description: 'تطبيق ويب لإدارة المهام والمشاريع مع إمكانيات التعاون',
        status: 'قيد التنفيذ',
        progress: 30,
        team: 4,
        tasks: 35,
        completed: 11,
        priority: 'متوسط',
        startDate: '2025-05-01',
        deadline: '2025-10-15',
        budget: 95000,
        spent: 28500,
        client: 'شركة الحلول المتقدمة',
        manager: 'نور الدين أحمد',
        category: 'أدوات إنتاجية',
        tags: ['إدارة مهام', 'تعاون', 'إنتاجية']
      }
    ],
    
    employees: [
      {
        id: 1,
        name: 'أحمد محمد العلي',
        role: 'مطور واجهات أمامية أول',
        email: 'ahmed.ali@company.com',
        phone: '+966501234567',
        avatar: 'أ',
        tasksCompleted: 147,
        tasksInProgress: 8,
        tasksOverdue: 2,
        performance: 92,
        efficiency: 88,
        rating: 4.8,
        joinDate: '2023-03-15',
        skills: ['React', 'Vue.js', 'TypeScript', 'CSS3', 'Figma'],
        projects: [1, 2, 5],
        department: 'التطوير',
        salary: 15000,
        hoursThisMonth: 168,
        productivity: 94
      },
      {
        id: 2,
        name: 'سارة أحمد حسن',
        role: 'مصممة تجربة المستخدم',
        email: 'sara.hassan@company.com',
        phone: '+966501234568',
        avatar: 'س',
        tasksCompleted: 89,
        tasksInProgress: 5,
        tasksOverdue: 1,
        performance: 88,
        efficiency: 91,
        rating: 4.6,
        joinDate: '2023-01-20',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping'],
        projects: [3, 4],
        department: 'التصميم',
        salary: 12000,
        hoursThisMonth: 172,
        productivity: 89
      },
      {
        id: 3,
        name: 'محمد علي خالد',
        role: 'مطور خلفية رئيسي',
        email: 'mohammed.khalid@company.com',
        phone: '+966501234569',
        avatar: 'م',
        tasksCompleted: 203,
        tasksInProgress: 12,
        tasksOverdue: 3,
        performance: 95,
        efficiency: 89,
        rating: 4.9,
        joinDate: '2022-08-10',
        skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'Docker'],
        projects: [1, 3, 4],
        department: 'التطوير',
        salary: 18000,
        hoursThisMonth: 185,
        productivity: 96
      },
      {
        id: 4,
        name: 'فاطمة حسن محمد',
        role: 'مديرة المشاريع',
        email: 'fatima.mohammed@company.com',
        phone: '+966501234570',
        avatar: 'ف',
        tasksCompleted: 124,
        tasksInProgress: 15,
        tasksOverdue: 1,
        performance: 89,
        efficiency: 94,
        rating: 4.7,
        joinDate: '2022-05-01',
        skills: ['Agile', 'Scrum', 'Project Management', 'Leadership', 'Communication'],
        projects: [1, 2],
        department: 'الإدارة',
        salary: 20000,
        hoursThisMonth: 160,
        productivity: 91
      },
      {
        id: 5,
        name: 'نور الدين أحمد',
        role: 'محلل أنظمة',
        email: 'noureddine.ahmed@company.com',
        phone: '+966501234571',
        avatar: 'ن',
        tasksCompleted: 67,
        tasksInProgress: 6,
        tasksOverdue: 0,
        performance: 86,
        efficiency: 92,
        rating: 4.5,
        joinDate: '2023-09-01',
        skills: ['System Analysis', 'Database Design', 'Requirements Analysis', 'UML', 'SQL'],
        projects: [3, 5],
        department: 'التحليل',
        salary: 14000,
        hoursThisMonth: 155,
        productivity: 87
      },
      {
        id: 6,
        name: 'ليلى عبدالرحمن',
        role: 'مطورة تطبيقات جوال',
        email: 'layla.abdulrahman@company.com',
        phone: '+966501234572',
        avatar: 'ل',
        tasksCompleted: 98,
        tasksInProgress: 7,
        tasksOverdue: 1,
        performance: 90,
        efficiency: 87,
        rating: 4.6,
        joinDate: '2023-06-15',
        skills: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
        projects: [1, 4],
        department: 'التطوير',
        salary: 16000,
        hoursThisMonth: 178,
        productivity: 92
      }
    ],
    
    tasks: [
      {
        id: 1,
        title: 'تصميم واجهة تسجيل الدخول والتسجيل',
        description: 'تصميم شاشات تسجيل الدخول والتسجيل مع التحقق من الهوية',
        project: 'تطوير تطبيق الجوال للتسوق الإلكتروني',
        projectId: 1,
        assignee: 'سارة أحمد حسن',
        assigneeId: 2,
        status: 'مكتمل',
        priority: 'عالي',
        dueDate: '2025-06-15',
        createdDate: '2025-05-20',
        completedDate: '2025-06-12',
        progress: 100,
        estimatedHours: 24,
        actualHours: 22,
        tags: ['UI/UX', 'Authentication', 'Mobile']
      },
      {
        id: 2,
        title: 'تطوير API للمصادقة والتحقق',
        description: 'بناء API للمصادقة مع JWT وإدارة الجلسات',
        project: 'تطوير تطبيق الجوال للتسوق الإلكتروني',
        projectId: 1,
        assignee: 'محمد علي خالد',
        assigneeId: 3,
        status: 'قيد التنفيذ',
        priority: 'عالي',
        dueDate: '2025-06-18',
        createdDate: '2025-05-25',
        completedDate: null,
        progress: 75,
        estimatedHours: 32,
        actualHours: 28,
        tags: ['Backend', 'API', 'Security']
      },
      {
        id: 3,
        title: 'اختبار الأداء والجودة للموقع',
        description: 'فحص شامل لأداء الموقع وسرعة التحميل',
        project: 'موقع الشركة الجديد مع نظام إدارة المحتوى',
        projectId: 2,
        assignee: 'أحمد محمد العلي',
        assigneeId: 1,
        status: 'مكتمل',
        priority: 'متوسط',
        dueDate: '2025-06-10',
        createdDate: '2025-06-01',
        completedDate: '2025-06-08',
        progress: 100,
        estimatedHours: 16,
        actualHours: 18,
        tags: ['Testing', 'Performance', 'Quality']
      },
      {
        id: 4,
        title: 'تطوير نظام إدارة المخزون',
        description: 'بناء نظام شامل لتتبع وإدارة المخزون',
        project: 'نظام إدارة المخزون والمبيعات',
        projectId: 3,
        assignee: 'محمد علي خالد',
        assigneeId: 3,
        status: 'قيد التنفيذ',
        priority: 'عالي',
        dueDate: '2025-06-25',
        createdDate: '2025-06-05',
        completedDate: null,
        progress: 45,
        estimatedHours: 48,
        actualHours: 22,
        tags: ['Backend', 'Database', 'Inventory']
      },
      {
        id: 5,
        title: 'تصميم لوحة تحكم المعلم',
        description: 'تصميم واجهة لوحة تحكم المعلم في منصة التعليم',
        project: 'منصة التعليم الإلكتروني التفاعلية',
        projectId: 4,
        assignee: 'سارة أحمد حسن',
        assigneeId: 2,
        status: 'قيد التنفيذ',
        priority: 'متوسط',
        dueDate: '2025-06-20',
        createdDate: '2025-06-10',
        completedDate: null,
        progress: 60,
        estimatedHours: 20,
        actualHours: 12,
        tags: ['UI/UX', 'Dashboard', 'Education']
      }
    ],
    
    notifications: [
      {
        id: 1,
        title: 'مهمة جديدة تم تعيينها لك',
        message: 'تم تعيين مهمة "تطوير API للدفع" في مشروع التطبيق الجوال',
        type: 'task',
        priority: 'high',
        date: '2025-06-13 09:30',
        read: false,
        action: 'view_task'
      },
      {
        id: 2,
        title: 'اقتراب موعد التسليم',
        message: 'مشروع "موقع الشركة الجديد" موعد التسليم خلال 3 أيام',
        type: 'deadline',
        priority: 'medium',
        date: '2025-06-13 08:15',
        read: false,
        action: 'view_project'
      },
      {
        id: 3,
        title: 'تم اكتمال مهمة',
        message: 'أحمد محمد أكمل مهمة "اختبار الأداء والجودة"',
        type: 'completion',
        priority: 'low',
        date: '2025-06-12 16:45',
        read: true,
        action: 'view_task'
      }
    ],
    
    reports: {
      productivity: {
        thisMonth: 89,
        lastMonth: 84,
        trend: 'up'
      },
      projects: {
        completed: 12,
        inProgress: 8,
        delayed: 2
      },
      budget: {
        allocated: 850000,
        spent: 634500,
        remaining: 215500
      }
    }
  };

  // دوال التفاعل
  const handleCreateProject = () => {
    setModalType('create-project');
    setShowModal(true);
  };

  const handleCreateTask = () => {
    setModalType('create-task');
    setShowModal(true);
  };

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setModalType('view-project');
    setShowModal(true);
  };

  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
    setModalType('view-employee');
    setShowModal(true);
  };

  const handleMarkNotificationRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const filteredTasks = mockData.tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

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
              <h1 className="text-xl font-bold text-slate-900">نظام إدارة المشاريع</h1>
              <p className="text-xs text-slate-500">الإصدار المتقدم 2.0</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { key: 'dashboard', icon: BarChart3, label: 'لوحة التحكم' },
              { key: 'tasks', icon: CheckSquare, label: 'المهام' },
              { key: 'projects', icon: FolderOpen, label: 'المشاريع' },
              { key: 'employees', icon: Users, label: 'الفريق' },
              { key: 'reports', icon: FileText, label: 'التقارير' }
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
              <div className="relative">
                <button 
                  className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors"
                  onClick={() => setModalType('notifications') || setShowModal(true)}
                >
                  <Bell size={20} />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </button>
              </div>
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

  const StatCard = ({ title, value, icon: Icon, trend, trendValue, delay = 0, onClick }) => (
    <AnimatedCard delay={delay}>
      <div 
        className={`bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
            <Icon className="w-6 h-6 text-slate-700" />
          </div>
          <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
            trend === 'up' ? 'bg-green-100 text-green-700' : 
            trend === 'down' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
          }`}>
            {trend === 'up' ? <ArrowUp size={12} /> : trend === 'down' ? <ArrowDown size={12} /> : <Activity size={12} />}
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

  const Modal = ({ isOpen, onClose, type, data }) => {
    if (!isOpen) return null;

    const renderModalContent = () => {
      switch (type) {
        case 'view-project':
          return (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">{data.name}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-600">الوصف</label>
                    <p className="text-slate-900">{data.description}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">العميل</label>
                    <p className="text-slate-900">{data.client}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">مدير المشروع</label>
                    <p className="text-slate-900">{data.manager}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">الفئة</label>
                    <p className="text-slate-900">{data.category}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-600">نسبة الإنجاز</label>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-slate-900 h-3 rounded-full transition-all duration-1000"
                          style={{width: `${data.progress}%`}}
                        ></div>
                      </div>
                      <span className="font-bold text-slate-900">{data.progress}%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-600">الميزانية</label>
                      <p className="text-slate-900">{data.budget.toLocaleString()} $</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-600">المنفق</label>
                      <p className="text-slate-900">{data.spent.toLocaleString()} $</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-600">تاريخ البداية</label>
                      <p className="text-slate-900">{data.startDate}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-600">موعد التسليم</label>
                      <p className="text-slate-900">{data.deadline}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-slate-600 mb-2 block">العلامات</label>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
          
        case 'view-employee':
          return (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {data.avatar}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{data.name}</h2>
                    <p className="text-slate-600">{data.role}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-600">البريد الإلكتروني</label>
                    <p className="text-slate-900">{data.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">رقم الهاتف</label>
                    <p className="text-slate-900">{data.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">القسم</label>
                    <p className="text-slate-900">{data.department}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">تاريخ الانضمام</label>
                    <p className="text-slate-900">{data.joinDate}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{data.tasksCompleted}</div>
                      <div className="text-sm text-slate-600">مهام مكتملة</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{data.tasksInProgress}</div>
                      <div className="text-sm text-slate-600">قيد التنفيذ</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{data.performance}%</div>
                      <div className="text-sm text-slate-600">معدل الأداء</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{data.rating}</div>
                      <div className="text-sm text-slate-600">التقييم</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-slate-600 mb-2 block">المهارات</label>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
          
        case 'notifications':
          return (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">الإشعارات</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      notification.read ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'
                    }`}
                    onClick={() => handleMarkNotificationRead(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        notification.type === 'task' ? 'bg-blue-100 text-blue-600' :
                        notification.type === 'deadline' ? 'bg-red-100 text-red-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {notification.type === 'task' ? <CheckSquare size={16} /> :
                         notification.type === 'deadline' ? <AlertCircle size={16} /> :
                         <CheckCircle size={16} />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900">{notification.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-slate-500 mt-2">{notification.date}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
          
        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {renderModalContent()}
          </div>
        </div>
      </div>
    );
  };

  const Dashboard = () => (
    <div className="space-y-6 lg:space-y-8">
      {/* Welcome Section */}
      <AnimatedCard>
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 lg:p-8 rounded-xl text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">مرحباً بك في لوحة التحكم</h2>
              <p className="text-slate-300 text-sm lg:text-base">إدارة شاملة لجميع مشاريعك وفريقك - آخر تحديث: اليوم 09:30 ص</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setActiveScreen('reports')}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors"
              >
                عرض التقارير
              </button>
              <button 
                onClick={handleCreateProject}
                className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                مشروع جديد
              </button>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard 
          title="إجمالي المشاريع" 
          value={mockData.projects.length} 
          icon={FolderOpen} 
          trend="up" 
          trendValue="+2" 
          delay={100}
          onClick={() => setActiveScreen('projects')}
        />
        <StatCard 
          title="المهام المكتملة" 
          value={mockData.tasks.filter(t => t.status === 'مكتمل').length} 
          icon={CheckSquare} 
          trend="up" 
          trendValue="+8%" 
          delay={200}
          onClick={() => setActiveScreen('tasks')}
        />
        <StatCard 
          title="أعضاء الفريق" 
          value={mockData.employees.length} 
          icon={Users} 
          trend="up" 
          trendValue="+1" 
          delay={300}
          onClick={() => setActiveScreen('employees')}
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
                  <button 
                    onClick={() => setActiveScreen('projects')}
                    className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1"
                  >
                    عرض الكل
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {mockData.projects.filter(p => p.status !== 'مكتمل').slice(0, 4).map((project, index) => (
                  <div 
                    key={project.id} 
                    className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleViewProject(project)}
                  >
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
                          <span className="flex items-center gap-1">
                            <Award size={14} />
                            {project.priority}
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
                <button 
                  onClick={handleCreateProject}
                  className="w-full bg-slate-900 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Plus size={18} />
                  إنشاء مشروع جديد
                </button>
                <button 
                  onClick={handleCreateTask}
                  className="w-full border border-gray-300 text-slate-700 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <CheckSquare size={18} />
                  إضافة مهمة جديدة
                </button>
                <button 
                  onClick={() => setActiveScreen('employees')}
                  className="w-full border border-gray-300 text-slate-700 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Users size={18} />
                  إدارة الفريق
                </button>
                <button 
                  onClick={() => setActiveScreen('reports')}
                  className="w-full border border-gray-300 text-slate-700 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  تصدير التقارير
                </button>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={700}>
            <div className="bg-slate-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">إحصائيات سريعة</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">المهام هذا الأسبوع</span>
                  <span className="font-semibold text-slate-900">
                    {mockData.tasks.filter(t => t.status === 'قيد التنفيذ').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">متوسط الإنجاز</span>
                  <span className="font-semibold text-slate-900">
                    {Math.round(mockData.projects.reduce((acc, p) => acc + p.progress, 0) / mockData.projects.length)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">المشاريع المتأخرة</span>
                  <span className="font-semibold text-red-600">
                    {mockData.projects.filter(p => {
                      const deadline = new Date(p.deadline);
                      const today = new Date();
                      return deadline < today && p.status !== 'مكتمل';
                    }).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">الميزانية المتبقية</span>
                  <span className="font-semibold text-green-600">
                    {((mockData.projects.reduce((acc, p) => acc + p.budget, 0) - mockData.projects.reduce((acc, p) => acc + p.spent, 0)) / 1000).toFixed(0)}ك $
                  </span>
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={800}>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">أعضاء الفريق المتميزون</h3>
              <div className="space-y-3">
                {mockData.employees
                  .sort((a, b) => b.performance - a.performance)
                  .slice(0, 3)
                  .map((employee, index) => (
                    <div 
                      key={employee.id} 
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleViewEmployee(employee)}
                    >
                      <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {employee.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-slate-900 text-sm">{employee.name}</div>
                        <div className="text-xs text-slate-600">{employee.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">{employee.performance}%</div>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-500 fill-current" />
                          <span className="text-xs text-slate-600">{employee.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );

  const TasksScreen = () => (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <AnimatedCard>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">إدارة المهام</h2>
            <p className="text-slate-600 text-sm">تنظيم وتتبع جميع مهام المشاريع ({mockData.tasks.length} مهمة إجمالي)</p>
          </div>
          <button 
            onClick={handleCreateTask}
            className="bg-slate-900 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            مهمة جديدة
          </button>
        </div>
      </AnimatedCard>

      {/* Enhanced Filters */}
      <AnimatedCard delay={200}>
        <div className="bg-white p-4 lg:p-6 rounded-xl border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="البحث في المهام..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex gap-3">
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none min-w-[120px]"
              >
                <option value="all">كل الحالات</option>
                <option value="قيد التنفيذ">قيد التنفيذ</option>
                <option value="مكتمل">مكتمل</option>
                <option value="معلق">معلق</option>
              </select>
              <select 
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none min-w-[100px]"
              >
                <option value="all">كل الأولويات</option>
                <option value="عالي">عالي</option>
                <option value="متوسط">متوسط</option>
                <option value="منخفض">منخفض</option>
              </select>
            </div>
          </div>
        </div>
      </AnimatedCard>

      {/* Tasks Statistics */}
      <AnimatedCard delay={300}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600">{mockData.tasks.filter(t => t.status === 'قيد التنفيذ').length}</div>
            <div className="text-sm text-slate-600">قيد التنفيذ</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">{mockData.tasks.filter(t => t.status === 'مكتمل').length}</div>
            <div className="text-sm text-slate-600">مكتملة</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-red-600">{mockData.tasks.filter(t => t.priority === 'عالي').length}</div>
            <div className="text-sm text-slate-600">أولوية عالية</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {mockData.tasks.filter(t => {
                const dueDate = new Date(t.dueDate);
                const today = new Date();
                return dueDate < today && t.status !== 'مكتمل';
              }).length}
            </div>
            <div className="text-sm text-slate-600">متأخرة</div>
          </div>
        </div>
      </AnimatedCard>

      {/* Enhanced Tasks List */}
      <AnimatedCard delay={400}>
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-slate-900">
              المهام ({filteredTasks.length})
            </h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {filteredTasks.map((task, index) => (
              <div key={task.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${
                        task.status === 'مكتمل' ? 'bg-green-500' : 
                        task.status === 'قيد التنفيذ' ? 'bg-blue-500' : 'bg-gray-400'
                      }`}></div>
                      <h4 className="font-medium text-slate-900">{task.title}</h4>
                    </div>
                    
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">{task.description}</p>
                    
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
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {task.actualHours || 0}/{task.estimatedHours} ساعة
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {task.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                          {tag}
                        </span>
                      ))}
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
                      task.status === 'مكتمل' ? 'bg-green-100 text-green-700' : 
                      task.status === 'قيد التنفيذ' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.status}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-900">{task.progress}%</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit size={16} />
                      </button>
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
      {/* Enhanced Header */}
      <AnimatedCard>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">إدارة المشاريع</h2>
            <p className="text-slate-600 text-sm">متابعة جميع المشاريع الحالية والمكتملة ({mockData.projects.length} مشروع)</p>
          </div>
          <div className="flex gap-3">
            <button className="border border-gray-300 text-slate-700 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center gap-2">
              <Download size={18} />
              تصدير
            </button>
            <button 
              onClick={handleCreateProject}
              className="bg-slate-900 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              <Plus size={18} />
              مشروع جديد
            </button>
          </div>
        </div>
      </AnimatedCard>

      {/* Project Statistics */}
      <AnimatedCard delay={200}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-green-600">{mockData.projects.filter(p => p.status === 'مكتمل').length}</div>
            <div className="text-sm text-slate-600">مشاريع مكتملة</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-blue-600">{mockData.projects.filter(p => p.status === 'قيد التنفيذ').length}</div>
            <div className="text-sm text-slate-600">قيد التنفيذ</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {(mockData.projects.reduce((acc, p) => acc + p.budget, 0) / 1000000).toFixed(1)}م
            </div>
            <div className="text-sm text-slate-600">إجمالي الميزانية</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {Math.round(mockData.projects.reduce((acc, p) => acc + p.progress, 0) / mockData.projects.length)}%
            </div>
            <div className="text-sm text-slate-600">متوسط الإنجاز</div>
          </div>
        </div>
      </AnimatedCard>

      {/* Enhanced Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockData.projects.map((project, index) => (
          <AnimatedCard key={project.id} delay={index * 150 + 300}>
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div 
                className="space-y-4"
                onClick={() => handleViewProject(project)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                      <FolderOpen className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-1">
                        {project.name}
                      </h3>
                      <p className="text-xs text-slate-500">المشروع #{project.id} • {project.category}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'مكتمل' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
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
                  
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="text-sm text-slate-600">
                      <span>العميل: </span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <span>المدير: </span>
                      <span className="font-medium">{project.manager}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-600">
                      <span>الميزانية: </span>
                      <span className="font-medium text-slate-900">{project.budget.toLocaleString()} $</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <span>المنفق: </span>
                      <span className="font-medium text-slate-900">{project.spent.toLocaleString()} $</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-gray-100 mt-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewProject(project);
                  }}
                  className="flex-1 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  عرض التفاصيل
                </button>
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Settings size={16} />
                </button>
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MessageSquare size={16} />
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
      {/* Enhanced Header */}
      <AnimatedCard>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-6 rounded-xl border border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">إدارة الفريق</h2>
            <p className="text-slate-600 text-sm">متابعة أداء وإنتاجية أعضاء الفريق ({mockData.employees.length} عضو)</p>
          </div>
          <div className="flex gap-3">
            <select className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none">
              <option>آخر 30 يوم</option>
              <option>آخر 3 أشهر</option>
              <option>آخر 6 أشهر</option>
              <option>السنة الحالية</option>
            </select>
            <button className="bg-slate-900 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors text-sm font-medium">
              <Plus size={18} />
              عضو جديد
            </button>
          </div>
        </div>
      </AnimatedCard>

      {/* Team Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        <StatCard 
          title="إجمالي الأعضاء" 
          value={mockData.employees.length} 
          icon={Users} 
          trend="up" 
          trendValue="+2" 
          delay={100} 
        />
        <StatCard 
          title="متوسط الأداء" 
          value={`${Math.round(mockData.employees.reduce((acc, e) => acc + e.performance, 0) / mockData.employees.length)}%`} 
          icon={TrendingUp} 
          trend="up" 
          trendValue="+3%" 
          delay={200} 
        />
        <StatCard 
          title="مهام هذا الشهر" 
          value={mockData.employees.reduce((acc, e) => acc + e.tasksCompleted, 0)} 
          icon={CheckSquare} 
          trend="up" 
          trendValue="+12%" 
          delay={300} 
        />
        <StatCard 
          title="معدل الكفاءة" 
          value={`${Math.round(mockData.employees.reduce((acc, e) => acc + e.efficiency, 0) / mockData.employees.length)}%`} 
          icon={Activity} 
          trend="up" 
          trendValue="+5%" 
          delay={400} 
        />
        <StatCard 
          title="متوسط التقييم" 
          value={(mockData.employees.reduce((acc, e) => acc + e.rating, 0) / mockData.employees.length).toFixed(1)} 
          icon={Star} 
          trend="up" 
          trendValue="+0.2" 
          delay={500} 
        />
      </div>

      {/* Enhanced Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.employees.map((employee, index) => (
          <AnimatedCard key={employee.id} delay={index * 100 + 600}>
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div 
                className="space-y-4"
                onClick={() => handleViewEmployee(employee)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-xl group-hover:bg-slate-800 transition-colors">
                    {employee.avatar}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{employee.name}</h3>
                  <p className="text-sm text-slate-600 mb-2">{employee.role}</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-slate-700">{employee.rating}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{employee.tasksCompleted}</div>
                    <div className="text-xs text-slate-600">مهام مكتملة</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{employee.tasksInProgress}</div>
                    <div className="text-xs text-slate-600">قيد التنفيذ</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-slate-600">معدل الأداء</span>
                    <span className="font-bold text-purple-600">{employee.performance}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-slate-600">الكفاءة</span>
                    <span className="font-bold text-orange-600">{employee.efficiency}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-slate-600">ساعات هذا الشهر</span>
                    <span className="font-bold text-slate-900">{employee.hoursThisMonth}</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm text-slate-600 mb-2">
                    <span>القسم: {employee.department}</span>
                    <span>الراتب: {employee.salary.toLocaleString()} $</span>
                  </div>
                  <div className="text-sm text-slate-600">
                    انضم في: {employee.joinDate}
                  </div>
                </div>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewEmployee(employee);
                }}
                className="w-full mt-4 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                عرض التفاصيل الكاملة
              </button>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Performance Overview */}
      <AnimatedCard delay={1200}>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900">نظرة عامة على الأداء</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                الأداء
              </button>
              <button className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                الإنتاجية
              </button>
              <button className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                التقييمات
              </button>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 size={48} className="mx-auto mb-4 text-slate-400" />
              <h4 className="text-lg font-medium text-slate-700 mb-2">مخطط الأداء التفصيلي</h4>
              <p className="text-sm text-slate-500 mb-4">
                عرض تفصيلي لإنتاجية الفريق والمقارنات الشهرية
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>أداء ممتاز (90%+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>أداء جيد (80-89%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>يحتاج تحسين (80%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );

  const ReportsScreen = () => (
    <div className="space-y-6">
      <AnimatedCard>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">التقارير والتحليلات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">تقرير المشاريع</h3>
              <p className="text-sm text-slate-600 mb-4">تقرير شامل عن حالة جميع المشاريع</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-يالblue-700 transition-colors">
                تحميل التقرير
              </button>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">تقرير الأداء</h3>
              <p className="text-sm text-slate-600 mb-4">تحليل أداء الفريق والإنتاجية</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                تحميل التقرير
              </button>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">التقرير المالي</h3>
              <p className="text-sm text-slate-600 mb-4">تقرير الميزانيات والنفقات</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                تحميل التقرير
              </button>
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
      case 'reports': return <ReportsScreen />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {renderScreen()}
      </main>
      
      {/* Modal */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        type={modalType}
        data={selectedProject || selectedEmployee}
      />
    </div>
  );
};

export default ProjectManagementSystem;