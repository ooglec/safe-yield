import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';
import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface ButtonCodeblockProps {
  code: string;
}

export default function CodeDisplayBlock({ code }: ButtonCodeblockProps) {
  const [isCopied, setisCopied] = React.useState(false);

  const filteredCode = code.split('\n').slice(1).join('\n') || code;
  const language = code.split('\n')[0] || 'tsx';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(filteredCode);
    setisCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => {
      setisCopied(false);
    }, 1500);
  };

  return (
    <div className='relative my-4 flex flex-col overflow-scroll overflow-x-scroll text-start'>
      <Button
        onClick={copyToClipboard}
        variant='ghost'
        size='icon'
        className='absolute right-2 top-2 h-5 w-5'
      >
        {isCopied ? (
          <CheckIcon className='h-4 w-4 scale-100 transition-all' />
        ) : (
          <CopyIcon className='h-4 w-4 scale-100 transition-all' />
        )}
      </Button>
      <CodeBlock
        customStyle={
    
            { background: '#303033' }
            
        }
        text={code}
        language={language}
        showLineNumbers={false}
        theme={dracula}
      />
    </div>
  );
}
