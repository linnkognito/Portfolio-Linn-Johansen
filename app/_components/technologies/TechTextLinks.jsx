import TextLink from '@/_components/text/TextLink';

export function ExpressLink({ children }) {
  return (
    <TextLink href='https://expressjs.com/' aria-label='Express website'>
      {children || 'Express'}
    </TextLink>
  );
}
export function MongoDBLink({ children }) {
  return (
    <TextLink href='https://www.mongodb.com/' aria-label='MongoDB website'>
      {children || 'MongoDB'}
    </TextLink>
  );
}
export function ReactLink({ children }) {
  return (
    <TextLink href='https://react.dev/' aria-label='React website'>
      {children || 'React'}
    </TextLink>
  );
}
export function ReactRouterLink({ children }) {
  return (
    <TextLink href='https://reactrouter.com/' aria-label='React Router website'>
      {children || 'React Router'}
    </TextLink>
  );
}
export function ReduxToolkitLink({ children }) {
  return (
    <TextLink
      href='https://redux-toolkit.js.org/'
      aria-label='Redux Toolkit website'
    >
      {children || 'Redux Toolkit'}
    </TextLink>
  );
}
export function SanityLink({ children }) {
  return (
    <TextLink href='https://www.sanity.io/' aria-label='Sanity.io website'>
      {children || 'Sanity.io'}
    </TextLink>
  );
}
export function TailwindLink({ children }) {
  return (
    <TextLink href='https://tailwindcss.com/' aria-label='Tailwind CSS website'>
      {children || 'Tailwind'}
    </TextLink>
  );
}
export function ViteLink({ children }) {
  return (
    <TextLink href='https://vite.dev/' aria-label='Vite website'>
      {children || 'Vite'}
    </TextLink>
  );
}
