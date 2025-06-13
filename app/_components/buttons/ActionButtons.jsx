import Link from 'next/link';
import ButtonCTA from '@/_components/buttons/ButtonCTA';
import Separator from '@/_components/dividers/Separator';
import ButtonConnect from './ButtonConnect';
import ButtonGithub from './ButtonGithub';

function ActionButtons({
  theme = 'base',
  buttonCTA = null,
  buttonGithub = null,
  className = '',
  ...props
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 sm:gap-6 w-fit h-fit ${className}`}
      role='group'
      {...props}
    >
      {buttonCTA && (
        <Link href={buttonCTA?.href || '/'} className='group'>
          <ButtonCTA
            ariaLabel={buttonCTA.ariaLabel || 'Go to live version'}
            className='tshadow-txt group-hover:text-pop hover:tshadow-pop group-hover:shadow-[0_0_4px_#f8fafc]'
          >
            {buttonCTA?.label || 'More'}
          </ButtonCTA>
        </Link>
      )}
      {buttonCTA && buttonGithub && <Separator />}

      {buttonGithub && theme === 'base' && (
        <ButtonGithub buttonGithub={buttonGithub} />
      )}
      {theme === 'hero' && <ButtonConnect />}
    </div>
  );
}

export default ActionButtons;
