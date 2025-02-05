import { ChatLayout } from '@/components/chat/chat-layout';
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from '@/components/ui/dialog';
import UsernameForm from '@/components/username-form';
import { getSelectedModel } from '@/lib/model-helper';
import { Attachment, ChatRequestOptions } from 'ai';
import { useChat } from 'ai/react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import useChatStore from '@/app/hooks/useChatStore';

const EmmaAI = () => {
    const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    stop,
    setMessages,
    setInput,
  } = useChat({
    async onToolCall({toolCall}) {
      if (toolCall.toolName == 'buildPortfolio') {
        window.open('https://app.uniswap.org/swap', '_blank')
      }
    },
    onResponse: (response) => {
      if (response) {
        setLoadingSubmit(false);
      }
    },
    onError: (error) => {
      setLoadingSubmit(false);
      toast.error('An error occurred. Please try again.');
    },
  });
  const [chatId, setChatId] = useState<string>('');
  const [selectedModel, setSelectedModel] =
    useState<string>(getSelectedModel());
  const [open, setOpen] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const base64Images = useChatStore((state) => state.base64Images);
  const setBase64Images = useChatStore((state) => state.setBase64Images);

  useEffect(() => {
    if (messages.length < 1) {
      // Generate a random id for the chat
      console.log('Generating chat id');
      const id = uuidv4();
      setChatId(id);
    }
  }, [messages]);

  useEffect(() => {
    if (!isLoading && !error && chatId && messages.length > 0) {
      // Save messages to local storage
      localStorage.setItem(`chat_${chatId}`, JSON.stringify(messages));
      // Trigger the storage event to update the sidebar component
      window.dispatchEvent(new Event('storage'));
    }
  }, [chatId, isLoading, error]);

  useEffect(() => {
    if (!localStorage.getItem('emma_user')) {
      setOpen(true);
    }
  }, [selectedModel]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingSubmit(true);

    setMessages([...messages]);

    const attachments: Attachment[] = base64Images
      ? base64Images.map((image) => ({
          contentType: 'image/base64', // Content type for base64 images
          url: image, // The base64 image data
        }))
      : [];

    // Prepare the options object with additional body data, to pass the model.
    const requestOptions: ChatRequestOptions = {
      options: {
        body: {
          selectedModel: selectedModel,
        },
      },
      ...(base64Images && {
        data: {
          images: base64Images,
        },
        experimental_attachments: attachments,
      }),
    };

    messages.slice(0, -1);

    handleSubmit(e, requestOptions);
    setBase64Images(null);
  };

  const onOpenChange = (isOpen: boolean) => {
    const username = localStorage.getItem('emma_user');
    if (username) return setOpen(isOpen);

    localStorage.setItem('emma_user', 'Anonymous');
    window.dispatchEvent(new Event('storage'));
    setOpen(isOpen);
  };

  return (
    <main className='flex flex-grow flex-col items-center'>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <ChatLayout
          chatId=''
          setSelectedModel={setSelectedModel}
          messages={messages}
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={onSubmit}
          isLoading={isLoading}
          loadingSubmit={loadingSubmit}
          error={error}
          stop={stop}
          navCollapsedSize={10}
          defaultLayout={[30, 160]}
          formRef={formRef}
          setMessages={setMessages}
          setInput={setInput}
        />
        <DialogContent className='flex flex-col space-y-4'>
          <DialogHeader className='space-y-2'>
            <DialogTitle>Welcome to Emma!</DialogTitle>
            <DialogDescription>
              Enter your name to get started. This is just to personalize your
              experience.
            </DialogDescription>
            <UsernameForm setOpen={setOpen} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}

export default EmmaAI
