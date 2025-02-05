import { Message, useChat } from 'ai/react';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ChatProps } from './chat';
import CodeDisplayBlock from '../code-display-block';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { INITIAL_QUESTIONS } from '@/utils/initial-questions';
import { Button } from '../ui/button';
import Logo from '../logo';


export default function ChatList({
  messages,
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  error,
  stop,
  loadingSubmit,
  formRef,
  isMobile,
}: ChatProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [name, setName] = React.useState<string>('');
  const [localStorageIsLoading, setLocalStorageIsLoading] =
    React.useState(true);
  const [initialQuestions, setInitialQuestions] = React.useState<Message[]>([]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const username = localStorage.getItem('emma_user');
    if (username) {
      setName(username);
      setLocalStorageIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch 4 initial questions
    if (messages.length === 0) {
      const questionCount = isMobile ? 2 : 4;

      setInitialQuestions(
        INITIAL_QUESTIONS.sort(() => Math.random() - 0.5)
          .slice(0, questionCount)
          .map((message) => {
            return {
              id: '1',
              role: 'user',
              content: message.content,
            };
          })
      );
    }
  }, [isMobile]);

  const onClickQuestion = (value: string, e: React.MouseEvent) => {
    e.preventDefault();

    handleInputChange({
      target: { value },
    } as React.ChangeEvent<HTMLTextAreaElement>);

    setTimeout(() => {
      formRef.current?.dispatchEvent(
        new Event('submit', {
          cancelable: true,
          bubbles: true,
        })
      );
    }, 1);
  };

  if (messages.length === 0) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className='relative flex h-full w-full flex-col items-center justify-center gap-4'>
          <div></div>
          <div className='flex flex-col items-center gap-4'>
            <Logo />
            <p className='text-center text-lg text-muted-foreground'>
              How can I help you today?
            </p>
          </div>

          <div className='absolute bottom-0 grid w-full gap-2 px-4 text-sm sm:max-w-3xl sm:grid-cols-2 sm:gap-4'>
            {/* Only display 4 random questions */}
            {initialQuestions.length > 0 &&
              initialQuestions.map((message) => {
                const delay = Math.random() * 0.25;

                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 1, y: 10, x: 0 }}
                    animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 1, y: 10, x: 0 }}
                    transition={{
                      opacity: { duration: 0.1, delay },
                      scale: { duration: 0.1, delay },
                      y: { type: 'spring', stiffness: 100, damping: 10, delay },
                    }}
                    key={message.content}
                  >
                    <Button
                      key={message.content}
                      type='button'
                      variant='outline'
                      className='flex w-full items-center justify-center whitespace-pre-wrap px-4 py-8 text-sm sm:justify-start sm:text-start'
                      onClick={(e) => onClickQuestion(message.content, e)}
                    >
                      {message.content}
                    </Button>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
  console.log(messages)
  return (
    <div
      id='scroller'
      className='h-full w-full justify-end overflow-x-hidden overflow-y-scroll'
    >
      <div className='flex min-h-full w-full flex-col justify-end overflow-x-hidden overflow-y-hidden'>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, scale: 1, y: 20, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 1, y: 20, x: 0 }}
            transition={{
              opacity: { duration: 0.1 },
              layout: {
                type: 'spring',
                bounce: 0.3,
                duration: messages.indexOf(message) * 0.05 + 0.2,
              },
            }}
            className={cn(
              'flex flex-col gap-2 whitespace-pre-wrap p-4',
              message.role === 'user' ? 'items-end' : 'items-start'
            )}
          >
            <div className='flex items-center gap-3'>
              {message.role === 'user' && (
                <div className='flex items-end gap-3'>
                  <div className='flex max-w-xs flex-col gap-2 overflow-x-auto rounded-md bg-accent p-3 sm:max-w-2xl'>
                    <div className='flex gap-2'>
                      {message.experimental_attachments
                        ?.filter((attachment) =>
                          attachment.contentType?.startsWith('image/')
                        )
                        .map((attachment, index) => (
                          <img
                            key={`${message.id}-${index}`}
                            src={attachment.url}
                            width={200}
                            height={200}
                            alt='attached image'
                            className='rounded-md object-contain'
                          />
                        ))}
                    </div>
                    <p className='text-end'>{message.content}</p>
                  </div>
                  <Avatar className='flex items-center justify-start overflow-hidden'>
                    <AvatarImage
                      src='/'
                      alt='user'
                      width={6}
                      height={6}
                      className='object-contain'
                    />
                    <AvatarFallback>
                      {name && name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              )}
              {message.role === 'assistant' && (
                <div className='flex items-end gap-2'>
                  <Avatar className='flex items-center justify-start'>
                    <AvatarImage
                      src='/logo.svg'
                      alt='AI'
                      width={6}
                      height={6}
                      className='object-contain'
                    />
                  </Avatar>
                  <span className='max-w-xs overflow-x-auto rounded-md bg-accent p-3 sm:max-w-2xl'>
                    {(message.content.length == 0) ? 
                      message?.toolInvocations[0].result
                    : message.content.split('```').map((part, index) => {
                      if (index % 2 === 0) {
                        return (
                          <Markdown key={index} remarkPlugins={[remarkGfm]}>
                            {part}
                          </Markdown>
                        );
                      } else {
                        return (
                          <pre className='whitespace-pre-wrap' key={index}>
                            <CodeDisplayBlock code={part} />
                          </pre>
                        );
                      }
                    })}
                    {isLoading &&
                      messages.indexOf(message) === messages.length - 1 && (
                        <span className='animate-pulse' aria-label='Typing'>
                          ...
                        </span>
                      )}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
        {loadingSubmit && (
          <div className='flex items-center gap-2 pb-4 pl-4'>
            <Avatar className='flex items-center justify-start'>
              <AvatarImage
                src='/logo.svg'
                alt='AI'
                width={6}
                height={6}
                className='object-contain'
              />
            </Avatar>
            <div className='max-w-xs overflow-x-auto rounded-md bg-accent p-3 sm:max-w-2xl'>
              <div className='flex gap-1'>
                <span className='size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_1s_ease-in-out_infinite] dark:bg-slate-300'></span>
                <span className='size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_0.5s_ease-in-out_infinite] dark:bg-slate-300'></span>
                <span className='size-1.5 rounded-full bg-slate-700 motion-safe:animate-[bounce_1s_ease-in-out_infinite] dark:bg-slate-300'></span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id='anchor' ref={bottomRef}></div>
    </div>
  );
}
