import React, { useEffect } from 'react';
import { ChatProps } from './chat';
import { Button } from '../ui/button';
import TextareaAutosize from 'react-textarea-autosize';
import { AnimatePresence } from 'framer-motion';
import {
  Cross2Icon,
  StopIcon,
} from '@radix-ui/react-icons';
import { Mic, SendHorizonal } from 'lucide-react';
import useSpeechToText from '@/app/hooks/useSpeechRecognition';
import MultiImagePicker from '../image-embedder';
import useChatStore from '@/app/hooks/useChatStore';

export default function ChatBottombar({
  messages,
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  error,
  stop,
  formRef,
  setInput,
}: ChatProps) {
  const [message, setMessage] = React.useState(input);
  const [isMobile, setIsMobile] = React.useState(false);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const base64Images = useChatStore((state) => state.base64Images);
  const setBase64Images = useChatStore((state) => state.setBase64Images);
  const env = process.env.NODE_ENV;

  React.useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const { isListening, transcript, startListening, stopListening } =
    useSpeechToText({ continuous: true });

  const listen = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  const stopVoiceInput = () => {
    setInput && setInput(transcript.length ? transcript : '');
    stopListening();
  };

  const handleListenClick = () => {
    listen();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      stopVoiceInput();
    }
  }, [isLoading]);

  return (
    <div className='flex w-full items-center justify-between gap-2 p-4 pb-7'>
      <AnimatePresence initial={false}>
        <div className='relative flex w-full items-center gap-2'>
          <div className='relative flex w-full flex-col rounded-lg bg-accent dark:bg-card'>
            <div className='flex w-full'>
              <form
                onSubmit={handleSubmit}
                className='relative flex w-full items-center gap-2'
              >
                <div className='absolute left-3 z-10 flex'>
                  <MultiImagePicker
                    disabled={env === 'production'}
                    onImagesPick={setBase64Images}
                  />
                </div>
                <TextareaAutosize
                  autoComplete='off'
                  value={
                    isListening ? (transcript.length ? transcript : '') : input
                  }
                  ref={inputRef}
                  onKeyDown={handleKeyPress}
                  onChange={handleInputChange}
                  name='message'
                  placeholder={
                    !isListening ? 'Enter your prompt here' : 'Listening'
                  }
                  className='flex h-16 max-h-24 w-full resize-none items-center overflow-hidden rounded-lg bg-accent px-14 py-[22px] text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-card'
                />

                {!isLoading ? (
                  <div className='absolute right-3 flex items-center'>
                    {isListening ? (
                      <div className='flex'>
                        <Button
                          className='relative shrink-0 rounded-full bg-blue-500/30 hover:bg-blue-400/30'
                          variant='ghost'
                          size='icon'
                          type='button'
                          onClick={handleListenClick}
                          disabled={isLoading}
                        >
                          <Mic className='h-5 w-5' />
                          <span className='absolute h-[120%] w-[120%] animate-pulse rounded-full bg-blue-500/30' />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        className='shrink-0 rounded-full'
                        variant='ghost'
                        size='icon'
                        type='button'
                        onClick={handleListenClick}
                        disabled={isLoading}
                      >
                        <Mic className='h-5 w-5' />
                      </Button>
                    )}
                    <Button
                      className='shrink-0 rounded-full'
                      variant='ghost'
                      size='icon'
                      type='submit'
                      disabled={isLoading || !input.trim() || isListening}
                    >
                      <SendHorizonal className='h-5 w-5' />
                    </Button>
                  </div>
                ) : (
                  <div className='absolute right-3 flex items-center'>
                    <Button
                      className='shrink-0 rounded-full'
                      variant='ghost'
                      size='icon'
                      type='button'
                      disabled={true}
                    >
                      <Mic className='h-5 w-5' />
                    </Button>
                    <Button
                      className='shrink-0 rounded-full'
                      variant='ghost'
                      size='icon'
                      type='submit'
                      onClick={(e) => {
                        e.preventDefault();
                        stop();
                      }}
                    >
                      <StopIcon className='h-5 w-5' />
                    </Button>
                  </div>
                )}
              </form>
            </div>
            {base64Images && (
              <div className='flex gap-2 px-2 pb-2'>
                {base64Images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className='relative flex w-fit flex-col gap-2 rounded-md border-x border-t bg-muted-foreground/20 p-1'
                    >
                      <div className='flex text-sm'>
                        <img
                          src={image}
                          width={20}
                          height={20}
                          className='h-auto max-h-[100px] w-auto max-w-[100px] rounded-md'
                          alt={''}
                        />
                      </div>
                      <Button
                        onClick={() => {
                          const updatedImages = (prevImages: string[]) =>
                            prevImages.filter((_, i) => i !== index);
                          setBase64Images(updatedImages(base64Images));
                        }}
                        size='icon'
                        className='absolute -right-1.5 -top-1.5 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600'
                      >
                        <Cross2Icon className='h-3 w-3' />
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
