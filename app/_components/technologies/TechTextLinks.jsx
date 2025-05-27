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
export function MongooseLink({ children }) {
  return (
    <TextLink href='https://mongoosejs.com/' aria-label='Mongoose website'>
      {children || 'Mongoose'}
    </TextLink>
  );
}
export function NodejsLink({ children }) {
  return (
    <TextLink href='https://nodejs.org/' aria-label='Node.js website'>
      {children || 'Node.js'}
    </TextLink>
  );
}
export function PostmanLink({ children }) {
  return (
    <TextLink href='https://www.postman.com/' aria-label='Postman website'>
      {children || 'Postman'}
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
