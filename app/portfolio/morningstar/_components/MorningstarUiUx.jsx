import { TailwindLink } from '@/_components/technologies/TechTextLinks';
import { Bold } from '@/_components/text/TextStyles';

function MorningstarUiUx() {
  return (
    <div className='space-y-4'>
      <p>
        Built with utility-first <TailwindLink /> classes for quick styling and
        consistency. The layout is fully responsive and scales smoothly from
        mobile to widescreen.
      </p>
      <p>
        I also focused on creating <Bold>seamless interaction design</Bold> —
        making sure users can access key content and actions within{' '}
        <Bold>one or two clicks</Bold>, wherever they are, for an experience
        that feels natural and effortless.
      </p>
    </div>
  );
}

export default MorningstarUiUx;
