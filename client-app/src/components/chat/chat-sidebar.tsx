import { useLocalStorageData } from '@/app/hooks/useLocalStorageData';
import Logo from '@/components/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { GearIcon } from '@radix-ui/react-icons';
import { Message } from 'ai/react';
import { MoreHorizontal, SquarePen, Trash2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { set, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
});

interface EditUsernameFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditUsernameForm({ setOpen }: EditUsernameFormProps) {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('emma_user') || 'Anonymous');
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    localStorage.setItem('emma_user', values.username);
    window.dispatchEvent(new Event('storage'));
    toast.success('Name updated successfully');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    form.setValue('username', e.currentTarget.value);
    setName(e.currentTarget.value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <div className='gap-4 md:flex'>
                  <Input
                    {...field}
                    type='text'
                    value={name}
                    onChange={(e) => handleChange(e)}
                  />
                  <Button type='submit'>Change name</Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

interface SidebarProps {
  isCollapsed: boolean;
  messages: Message[];
  onClick?: () => void;
  isMobile: boolean;
  chatId: string;
  setMessages: (messages: Message[]) => void;
  closeSidebar?: () => void;
}


export function Sidebar({
  messages,
  isCollapsed,
  isMobile,
  chatId,
  setMessages,
  closeSidebar,
}: SidebarProps) {
  const [localChats, setLocalChats] = useState<
    { chatId: string; messages: Message[] }[]
  >([]);
  const localChatss = useLocalStorageData('chat_', []);
  const [selectedChatId, setSselectedChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (chatId) {
      setSselectedChatId(chatId);
    }

    setLocalChats(getLocalstorageChats());
    const handleStorageChange = () => {
      setLocalChats(getLocalstorageChats());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const getLocalstorageChats = (): {
    chatId: string;
    messages: Message[];
  }[] => {
    const chats = Object.keys(localStorage).filter((key) =>
      key.startsWith('chat_')
    );

    if (chats.length === 0) {
      setIsLoading(false);
    }

    // Map through the chats and return an object with chatId and messages
    const chatObjects = chats.map((chat) => {
      const item = localStorage.getItem(chat);
      return item
        ? { chatId: chat, messages: JSON.parse(item) }
        : { chatId: '', messages: [] };
    });

    // Sort chats by the createdAt date of the first message of each chat
    chatObjects.sort((a, b) => {
      const aDate = new Date(a.messages[0].createdAt);
      const bDate = new Date(b.messages[0].createdAt);
      return bDate.getTime() - aDate.getTime();
    });

    setIsLoading(false);
    return chatObjects;
  };

  const handleDeleteChat = (chatId: string) => {
    localStorage.removeItem(chatId);
    setLocalChats(getLocalstorageChats());
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className='group relative flex h-full flex-col justify-between gap-4 p-2 data-[collapsed=true]:p-2'
    >
      <div className='flex max-h-fit flex-col justify-between overflow-y-auto p-2'>
        <Button
          onClick={() => {
            navigate('/');
            // Clear messages
            setMessages([]);
            if (closeSidebar) {
              closeSidebar();
            }
          }}
          variant='ghost'
          className='text-Sm XL:text-lg flex h-14 w-full items-center justify-between font-normal'
        >
          <div className='flex items-center gap-3'>
            {!isCollapsed && !isMobile && <Logo />}
            New chat
          </div>
          <SquarePen size={18} className='h-4 w-4 shrink-0' />
        </Button>

        <div className='flex flex-col gap-2 pt-10'>
          <p className='pl-4 text-xs text-muted-foreground'>Your chats</p>
          {localChats.length > 0 && (
            <div>
              {localChats.map(({ chatId, messages }, index) => (
                <Link
                  key={index}
                  href={`/${chatId.substr(5)}`}
                  className={cn(
                    {
                      [buttonVariants({ variant: 'secondaryLink' })]:
                        chatId.substring(5) === selectedChatId,
                      [buttonVariants({ variant: 'ghost' })]:
                        chatId.substring(5) !== selectedChatId,
                    },
                    'flex h-14 w-full items-center justify-between text-base font-normal'
                  )}
                >
                  <div className='flex items-center gap-3 truncate'>
                    <div className='flex flex-col'>
                      <span className='text-xs font-normal'>
                        {messages.length > 0 ? messages[0].content : ''}
                      </span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant='ghost'
                        className='flex items-center justify-end'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal size={15} className='shrink-0' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=' '>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant='ghost'
                            className='flex w-full items-center justify-start gap-2 text-red-500 hover:text-red-500'
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Trash2 className='h-4 w-4 shrink-0' />
                            Delete chat
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader className='space-y-4'>
                            <DialogTitle>Delete chat?</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete this chat? This
                              action cannot be undone.
                            </DialogDescription>
                            <div className='flex justify-end gap-2'>
                              <Button variant='outline'>Cancel</Button>
                              <Button
                                variant='destructive'
                                onClick={() => handleDeleteChat(chatId)}
                              >
                                Delete
                              </Button>
                            </div>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Link>
              ))}
            </div>
          )}
          {isLoading && <SidebarSkeleton />}
        </div>
      </div>

      <div className='w-full justify-end border-t px-2 py-2'>
        <UserSettings />
      </div>
    </div>
  );
}


function SidebarSkeleton() {
  return (
    <div className='flex w-full flex-col gap-2'>
      <div className='flex h-14 w-full items-center justify-between rounded-xl bg-primary/5 p-2'>
        <Skeleton className='h-6 w-2/3 rounded-sm' />
        <Skeleton className='h-6 w-6 rounded-full' />
      </div>

      <div className='flex h-14 w-full items-center justify-between rounded-xl bg-primary/5 p-2 opacity-80'>
        <Skeleton className='h-6 w-2/3 rounded-sm' />
        <Skeleton className='h-6 w-6 rounded-full' />
      </div>

      <div className='flex h-14 w-full items-center justify-between rounded-xl bg-primary/5 p-2 opacity-60'>
        <Skeleton className='h-6 w-2/3 rounded-sm' />
        <Skeleton className='h-6 w-6 rounded-full' />
      </div>

      <div className='flex h-14 w-full items-center justify-between rounded-xl bg-primary/5 p-2 opacity-40'>
        <Skeleton className='h-6 w-2/3 rounded-sm' />
        <Skeleton className='h-6 w-6 rounded-full' />
      </div>

      <div className='flex h-14 w-full items-center justify-between rounded-xl bg-primary/5 p-2 opacity-20'>
        <Skeleton className='h-6 w-2/3 rounded-sm' />
        <Skeleton className='h-6 w-6 rounded-full' />
      </div>
    </div>
  );
}

export default function UserSettings() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const username = localStorage.getItem('emma_user');
      if (username) {
        setName(username);
        setIsLoading(false);
      }
    };

    const fetchData = () => {
      const username = localStorage.getItem('emma_user');
      if (username) {
        setName(username);
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex h-14 w-full items-center justify-start gap-3 text-base font-normal'
        >
          <Avatar className='flex items-center justify-start overflow-hidden'>
            <AvatarImage
              src=''
              alt='AI'
              width={4}
              height={4}
              className='object-contain'
            />
            <AvatarFallback>
              {name && name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className='truncate text-xs'>
            {isLoading ? (
              <Skeleton className='h-4 w-20' />
            ) : (
              name || 'Anonymous'
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48 p-2'>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
        ></DropdownMenuItem>
        <Dialog>
          <DialogTrigger className='w-full'>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <div className='flex w-full cursor-pointer items-center gap-2 p-1'>
                <GearIcon className='h-4 w-4' />
                Settings
              </div>
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className='space-y-4'>
              <DialogTitle>Settings</DialogTitle>
              <EditUsernameForm setOpen={setOpen} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog></Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
