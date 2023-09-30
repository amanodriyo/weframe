import Image from "next/image";

export const sidebarItems = [
    { icon: <Image src="/dashboard.png" alt="dashboard" width={20} height={20}/>, label: 'Dashboard' },
    { icon: <Image src="/email.png" alt="email" width={20} height={20}/>, label: 'Email', 
    notification: '17', dropdown: true },
    { icon: <Image src="/comment.png" alt="comment" width={20} height={20}/>, label: 'Chat' },
    { icon: <Image src="/thumbnail.png" alt="thumbnail" width={20} height={20}/>, label: 'Kanban',
    dropdown: true },
    { icon: <Image src="/contact.png" alt="contact" width={20} height={20}/>, label: 'Contact',
    button: true },
    { icon: <Image src="/calendar.png" alt="calendar" width={20} height={20}/>, label: 'Calendar' },
    { icon: <Image src="/videoLesson.png" alt="video lesson" width={20} height={20}/>, label: 'Courses',
    dropdown: true },
    { icon: <Image src="/onlineShopping.png" alt="online shopping" width={20} height={20}/>, label: 'Shop' },
    { icon: <Image src="/invoice.png" alt="invoice" width={20} height={20}/>, label: 'Invoices',
    dropdown: true },
    { icon: <Image src="/setting.png" alt="setting" width={20} height={20}/>, label: 'Settings' },
  ];