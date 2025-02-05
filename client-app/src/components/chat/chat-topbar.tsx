import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Sidebar } from '../ui/sidebar';
import { Message } from 'ai/react';
import { useState } from 'react';

interface ChatTopbarProps {
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  chatId?: string;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

export default function ChatTopbar({
  chatId,
  messages,
  setMessages,
}: ChatTopbarProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleCloseSidebar = () => {
    setSheetOpen(false);
  };

  return (
    <div className='flex w-full items-center justify-between px-4 py-6 lg:justify-center'>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>
          <HamburgerMenuIcon className='h-5 w-5 lg:hidden' />
        </SheetTrigger>
        <SheetContent side='left' className='bg-sidebar'>
          <Sidebar
            chatId={chatId || ''}
            isCollapsed={false}
            isMobile={false}
            messages={messages}
            setMessages={setMessages}
            closeSidebar={handleCloseSidebar}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
}
